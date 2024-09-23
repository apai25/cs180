import os
from dataclasses import dataclass

import cv2
import numpy as np
from align_image_code import align_images
from scipy.signal import convolve2d
from skimage import color


@dataclass
class Config:
    low_freq_sigma: float = 5
    high_freq_sigma: float = 10
    alpha: int = 3

    use_low_freq_grayscale: bool = True
    use_high_freq_grayscale: bool = False

    display_images: bool = True


def blur_image(image, sigma):
    kernel_size = int(2 * np.ceil(3 * sigma) + 1)
    gaussian_kernel = cv2.getGaussianKernel(kernel_size, sigma)
    gaussian2d_kernel = np.outer(gaussian_kernel, gaussian_kernel)

    r, g, b = image[:, :, 0], image[:, :, 1], image[:, :, 2]
    r_blurred = convolve2d(r, gaussian2d_kernel, mode='same')
    g_blurred = convolve2d(g, gaussian2d_kernel, mode='same')
    b_blurred = convolve2d(b, gaussian2d_kernel, mode='same')
    img_blurred = np.stack([r_blurred, g_blurred, b_blurred], axis=-1)
    return img_blurred


def normalize(img):
    return cv2.normalize(img, None, 0, 255, cv2.NORM_MINMAX).astype(np.uint8)


def main(low_freq_image_path, high_freq_image_path, output_dir):
    img1 = cv2.imread(low_freq_image_path)
    img2 = cv2.imread(high_freq_image_path)

    img2_aligned, img1_aligned = align_images(img2, img1)
    if img1_aligned.dtype != np.uint8:
        img1_aligned = (img1_aligned * 255).astype(np.uint8)
    if img2_aligned.dtype != np.uint8:
        img2_aligned = (img2_aligned * 255).astype(np.uint8)

    if Config.use_low_freq_grayscale:
        img1_aligned = color.rgb2gray(img1_aligned) * 255
        img1_aligned = np.stack([img1_aligned] * 3, axis=-1)
    if Config.use_high_freq_grayscale:
        img2_aligned = color.rgb2gray(img2_aligned) * 255
        img2_aligned = np.stack([img2_aligned] * 3, axis=-1)

    low_frequency_img1 = blur_image(img1_aligned, Config.low_freq_sigma)

    blur_img2 = blur_image(img2_aligned, Config.high_freq_sigma)
    high_frequency_img2 = np.clip((img2_aligned - blur_img2), 0, 255)
    hybrid = np.clip((low_frequency_img1 + high_frequency_img2 * Config.alpha) // 2, 0, 255)

    img1_fft = normalize(np.log(np.abs(np.fft.fftshift(np.fft.fft2(color.rgb2gray(img1_aligned))))))
    img2_fft = normalize(np.log(np.abs(np.fft.fftshift(np.fft.fft2(color.rgb2gray(img2_aligned))))))
    low_frequency_img1_fft = normalize(
        np.log(np.abs(np.fft.fftshift(np.fft.fft2(color.rgb2gray(low_frequency_img1)))))
    )
    high_frequency_img2_fft = normalize(
        np.log(np.abs(np.fft.fftshift(np.fft.fft2(color.rgb2gray(high_frequency_img2)))))
    )
    hybrid_fft = normalize(np.log(np.abs(np.fft.fftshift(np.fft.fft2(color.rgb2gray(hybrid))))))

    img1_name = low_freq_image_path.split('/')[-1]
    img2_name = high_freq_image_path.split('/')[-1]

    cv2.imwrite(os.path.join(output_dir, "fft_" + img1_name), img1_fft.astype(np.uint8))
    cv2.imwrite(os.path.join(output_dir, "fft_" + img2_name), img2_fft.astype(np.uint8))
    cv2.imwrite(
        os.path.join(output_dir, "fft_hybrid_" + img1_name + "_" + img2_name),
        hybrid_fft.astype(np.uint8),
    )
    cv2.imwrite(
        os.path.join(output_dir, "fft_low_frequency_" + img1_name),
        low_frequency_img1_fft.astype(np.uint8),
    )
    cv2.imwrite(
        os.path.join(output_dir, "fft_high_frequency_" + img2_name),
        high_frequency_img2_fft.astype(np.uint8),
    )
    cv2.imwrite(
        os.path.join(output_dir, "hybrid_" + img1_name + "_" + img2_name), hybrid.astype(np.uint8)
    )

    if Config.display_images:
        cv2.imshow(f"Original {img1_name}", img1.astype(np.uint8))
        cv2.imshow(f"Original {img2_name}", img2.astype(np.uint8))
        cv2.imshow(f"{img1_name} FFT", img1_fft.astype(np.uint8))
        cv2.imshow(f"{img2_name} FFT", img2_fft.astype(np.uint8))
        cv2.imshow(f"{img1_name} Low Frequency FFT", low_frequency_img1_fft.astype(np.uint8))
        cv2.imshow(f"{img2_name} High Frequency FFT", high_frequency_img2_fft.astype(np.uint8))
        cv2.imshow("Hybrid FFT", hybrid_fft.astype(np.uint8))
        cv2.imshow("Hybrid Image", hybrid.astype(np.uint8))
        cv2.waitKey(0)
        cv2.destroyAllWindows()


if __name__ == '__main__':
    input_dir = os.path.join(os.path.abspath(os.path.dirname(__file__)), "input")
    output_dir = os.path.join(os.path.abspath(os.path.dirname(__file__)), "output")

    # choose the two images to hybridize below (from the input directory).
    # change config class to optimize the look of hybrid image
    # keeping grayscale off for both images tends to work the best.

    # for nutmeg (high freq) + derek (low freq): low_freq_sigma = 5, high_freq_sigma = 10, alpha = 3
    # for dog (high freq) + cat (low freq): low_freq_sigma = 5, high_freq_sigma = 9, alpha = 3.5
    # for lion (high freq) + tiger (low freq): low_freq_sigma = 5, high_freq_sigma = 10, alpha = 5
    #   this is because the lion's mane has a lot of high frequency detail that must be preserved
    # for newtoronto (high freq) + oldtoronto (low freq): low_freq_sigma = 5, high_freq_sigma = 8,
    #   alpha = 2

    LOW_FREQ_IMAGE_NAME = "derek.jpg"
    low_freq_image_path = os.path.join(input_dir, LOW_FREQ_IMAGE_NAME)

    HIGH_FREQ_IMAGE_NAME = "nutmeg.jpg"
    high_freq_image_path = os.path.join(input_dir, HIGH_FREQ_IMAGE_NAME)

    main(low_freq_image_path, high_freq_image_path, output_dir)
