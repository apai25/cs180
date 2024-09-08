import React from 'react';

import './Proj01.css';

import ncc_church from '../../../static/proj01/ncc_aligned_church.jpg';
import sad_church from '../../../static/proj01/sad_aligned_church.jpg';
import ssd_church from '../../../static/proj01/ssd_aligned_church.jpg';

import ncc_harvesters from '../../../static/proj01/ncc_aligned_harvesters.jpg';
import sad_harvesters from '../../../static/proj01/sad_aligned_harvesters.jpg';
import ssd_harvesters from '../../../static/proj01/ssd_aligned_harvesters.jpg';
import ncc_eq_harvesters from '../../../static/proj01/ncc_eq_aligned_harvesters.jpg';

import ncc_icon from '../../../static/proj01/ncc_aligned_icon.jpg';
import sad_icon from '../../../static/proj01/sad_aligned_icon.jpg';
import ssd_icon from '../../../static/proj01/ssd_aligned_icon.jpg';
import ncc_eq_icon from '../../../static/proj01/ncc_eq_aligned_icon.jpg';

import ncc_tobolsk from '../../../static/proj01/ncc_aligned_tobolsk.jpg';
import sad_tobolsk from '../../../static/proj01/sad_aligned_tobolsk.jpg';
import ssd_tobolsk from '../../../static/proj01/ssd_aligned_tobolsk.jpg';

import ncc_emir from '../../../static/proj01/ncc_aligned_emir.jpg';
import ssim_emir from '../../../static/proj01/ssim_aligned_emir.jpg';
import ssim_eq_emir from '../../../static/proj01/ssim_eq_aligned_emir.jpg';


const Proj01 = () => {

    const imageData = [
        {image: ncc_church, caption: 'img: church.tif, metric: NCC, runtime: 3.68s, green shift: (4, 25), red shift: (-4, 58)'},
        {image: sad_church, caption: 'img: church.tif, metric: SAD, runtime: 0.44s, green shift: (3, 25), red shift: (-4, 60)'},
        {image: ssd_church, caption: 'img: church.tif, metric: SSD, runtime: 0.39s, green shift: (-66, -130), red shift: (46, -347)'},

        {image: ncc_harvesters, caption: 'img: harvesters.tif, metric: NCC, runtime: 3.26s, green shift: (16, 59), red shift: (13, 123)'},
        {image: sad_harvesters, caption: 'img: harvesters.tif, metric: SAD, runtime: 0.41s, green shift: (190, -368), red shift: (-292, -329)'},
        {image: ssd_harvesters, caption: 'img: harvesters.tif, metric: SSD, runtime: 0.40s, green shift: (15, 2), red shift: (14, 35)'},

        {image: ncc_icon, caption: 'img: icon.tif, metric: NCC, runtime: 3.72s, green shift: (17, 41), red shift: (23, 89)'},
        {image: sad_icon, caption: 'img: icon.tif, metric: SAD, runtime: 0.42s, green shift: (364, -256), red shift: (-254, -264)'},
        {image: ssd_icon, caption: 'img: icon.tif, metric: SSD, runtime: 0.43s, green shift: (-66, 60), red shift: (274, -73)'},

        {image: ncc_tobolsk, caption: 'img: tobolsk.jpg, metric: NCC, runtime: 0.25s, green shift: (3, 3), red shift: (3, 6)'},
        {image: sad_tobolsk, caption: 'img: tobolsk.jpg, metric: SAD, runtime: 0.03s, green shift: (12, 2), red shift: (3, 7)'},
        {image: ssd_tobolsk, caption: 'img: tobolsk.jpg, metric: SSD, runtime: 0.03s, green shift: (3, 3), red shift: (-21, 15)'},
    ]

    const contrastData = [
        {image: ncc_icon, caption: 'img: icon.tif, metric: NCC, no histogram equalization'},
        {image: ncc_eq_icon, caption: 'img: icon.tif, metric: NCC, with histogram equalization'},
        {image: ssim_emir, caption: 'img: emir.tif, metric: SSIM, no histogram equalization'},
        {image: ssim_eq_emir, caption: 'img: emir.tif, metric: SSIM, with histogram equalization'},
        {image: ncc_harvesters, caption: 'img: harvesters.tif, metric: NCC, no histogram equalization'},
        {image: ncc_eq_harvesters, caption: 'img: harvesters.tif, metric: NCC, with histogram equalization'},
    ]

    return (
        <div className="main">
            <h1 className="main-header">Project #1: Images of the Russian Empire: Colorizing the Prokudin-Gorskii photo collection</h1>
            <div className="content">
                <h1 className="lvl2-header">Overview</h1>
                <p className="text">
                    This project focuses on producing colored images given three images taken with different color filters. 
                    The main idea is that we can treat each of the gray-scale input images as a channel, and overlay them 
                    to produce the final, colored image.
                    <br /><br />
                    However, there are a few caveats. When examining the raw images, we will notice that they are not perfectly aligned. 
                    A combination of translational, rotational, and other variances prevents us from naively overlaying the images to produce our result.
                    Because of this, we must try to find the best translational alignment to align the images. In this project, we will align the red and green
                    filter images to the blue image. 
                </p>
                <h1 className="lvl2-header">Alignment Procedure</h1>
                <p className="text">
                    We adopt a brute-forcish approach to finding best image alignment. We search over a range of XY displacements, and calculate the error between the
                    target image (red/green color channel) and the source image (blue color channel). We choose the displacement that minimize the error (with our metric 
                    of choice). Since we do not have any size guarantees on our input image, we search over a range of displacement proportionate to the image size itself. 
                    After trial-and-error, we found that it is most efficient (and effective) to search displacements over a range of +/- 5% of image size. Furthermore, we 
                    crop out 10% of the image border to avoid having our metric skewed by the black borders present in our raw data (which do not offer any useful information).
                    <br /><br />
                    Searching over a displacement window proportionate to the image dimensions is advantageous for obvious reasons, but it has a large drawback in terms of efficiency.
                    The number of displacements we must search grows linearly with the number of pixels in the image (and quadratically with the dimensions). While this may not seem too
                    inefficient, it becomes difficult to align the larger TIF images provided in the dataset in reasonable time. Because of this, we implement a pyramid search strategy, which 
                    we will now describe. 
                    <br /><br />
                    We recursively downsample both the source and target by a factor of 2, until at least one of the image dimensions is 32 pixels. The displacement window 
                    of search will also be decreased by a factor of 2 each time we downsample. After obtaining the optimal XY alignment at the lowest level of the pyramid,
                    we can then convert this alignment to the equivalent displacement for the downsampled image corresponding to the next upper level of the pyramid. We 
                    can then search over narrower displacement window around this tentative optimal alignment. Since we downsampled by a factor of 2, we only have to 
                    search over a 2x2 displacement window around the optimal alignment found at the lower level. This is amazingly efficient. The number of levels in 
                    our pyramid logarithmically scale with the original image size, and we only search over a 2x2 window at each level (except the lowest). 
                    <br /><br />
                    When we combine this optimization with multithreading (by evaluating many displacements in parallel on different threads), we end with a highly-optimized pipeline
                    for image alignment. We can align the smaller images in milliseconds using base metrics, and the larger TIF images in less than 5 seconds (see results below).
                </p>
                <h1 className="lvl2-header">Base Error Metrics</h1>
                <p className="text">
                    As per the project spec, we must experiment with different image error metrics to determine the best alignment. For initial consideration, 
                    we used three different base metrics: Sum of Squared Differences (SSD), Sum of Absolute Differences (SAD), and Normalized Cross-Correlation (NCC).
                    Each of these metrics come with intricate advantages/disadvantages, so it is easiest to find the best metric empirically. Below, we show the 
                    some results of our alignment procedure using each of the base metrics.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {imageData.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br /><br />
                <p className="text">
                    From the above samples, we can clearly see that the NCC metric seems to be the most consistent out of the three. Since we normalize the image matrices
                    before cross-correlating, outliers have a smaller effect on the final error. This is in contrast especially to the SSD metric, which squares the difference 
                    in each pixel. This mean that outliers will have a large effect on the final error (since their difference from the source image will be squared). SAD seems
                    to avoid this issue in some samples, like church.tif, but it sometimes fails to find the best alignment while SSD performs better (like in harvesters.tif). 
                    Thus, we come to the conclusion that NCC is the best metric to use for our alignment procedure. However, one slight drawback is that it performs significantly slower, 
                    something that is visible in runtime for the larger TIF images. However, by using our pyramid scheme and multithreading, we still keep the runtime under 5 seconds consistently.
                </p>
                <h1 className="lvl2-header">Emir</h1>
                <p className="text">
                    Even with NCC, there is one image that proves to be a challenge. Emir.tif is a large image where the brightness of the different input channel images is far from consistent. This means that
                    aligning red and green to blue is not as straightforward as it was in the previous samples. The image below shows the result of aligning the three channels using NCC. We can see a clear 
                    mis-alignment, which we will aim to resolve using more clever metrics. 
                </p>
                <div className="image-div">
                    <img className="single-image" src={ncc_emir} style={{ width: '100%', height: 'auto', maxWidth: '500px' }}></img>
                    <p className="text">Emir.tif with clear mis-alignment</p>
                </div>
                <h1 className="lvl2-header">Bells & Whistles</h1>
                <h1 className="lvl3-header">Structural Similarity Index Measurement (SSIM)</h1>
                <p className="text">
                    Instead of pure pixelwise error metrics, we try to use a more advanced metric in order to mitigate the effects of brightness discrepancy on our error calculation. 
                    More specifically, we will use the Structural Similarity Index Measurement (SSIM). SSIM is a metric that evaluates the similarity of two images based on their brightness,
                    contrast, and structure. The values of SSIM range between 0.0 - 1.0, where a score of 1.0 indicates identical images. On all the samples from the previous section, we found that SSIM performs
                    as well as NCC, oftentimes getting the same exact pixelwise alignment translation. On Emir.tif, SSIM ends up outperforming NCC. The image below shows the result of aligning 
                    the three channels using SSIM.
                </p>
                <div className="image-div">
                    <img className="single-image" src={ssim_emir} style={{ width: '100%', height: 'auto', maxWidth: '500px' }}></img>
                    <p className="text">img: emir.tif, metric: SSIM, runtime: 78.19s, green shift: (23, 50), red shift: (40, 105)</p>
                </div>
                <br /><br />
                <p className="text">
                    Clearly, we see a drastic increase in alignment quality using SSIM, showing that our use of this more advanced metric has clear advantages over more naive metrics like NCC. However,
                    we must also notice that the runtime of SSIM is significantly higher than NCC (since it is computationally more expensive as well). Instead of taking ~3 seconds (NCC), SSIM takes over a minute
                    to run on most of the large TIF images. Nonetheless, its performance in this case seems to be worth the increased runtime.
                </p>
                <h1 className="lvl3-header">Histogram Equalization for Contrast</h1>
                <p className="text">
                    Another form of image preprocessing we can test is histogram equalization for increased contrast. By using this, we should be able to see more defined features, and more contrasted colors, in the resulting 
                    three-channel image. Here are some samples that show clearly the effects of histogram equalization on the alignment process.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {contrastData.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '500px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br /><br />
                <p className="text">
                    In all three samples, we see that using this contrast-enhancing technique leads to a more diverse color range in the resulting image. In the case of Emir, specifically, this contrast serves to highlight
                    a far greater level of detail, allowing the final image to be closer in granularity to the grayscale input images. 
                </p>
                <h1 className="lvl2-header">Conclusion</h1>
                <p className="text">
                    In this project, we successfully colorize grayscale images taken with different color filters by experimenting with different image alignment techniques. We found that the SSIM metric for calculating error between
                    two images is more effective than the three base pixelwise metrics we tested. While this comes with added computational expense, our use of pyramid search and multithreading keeps the runtime reasonable. Finally, 
                    we explore how using histogrma equalization to increase input image contrast leads to more colorful final images. 
                </p>
                <br></br><br></br>
            </div>
        </div>
    );
}

export default Proj01;