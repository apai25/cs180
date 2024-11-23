import React from 'react';
import './Proj05.css';

import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

import hat_5 from '../../../static/proj05/a/0/hat_5.png';
import hat_100 from '../../../static/proj05/a/0/hat_100.png';
import rocket_5 from '../../../static/proj05/a/0/rocket_5.png';
import rocket_100 from '../../../static/proj05/a/0/rocket_100.png';
import village_5 from '../../../static/proj05/a/0/village_5.png';
import village_100 from '../../../static/proj05/a/0/village_100.png';

import campanille from '../../../static/proj05/a/1_1/campanille.png';
import t250 from '../../../static/proj05/a/1_1/250.png';
import t500 from '../../../static/proj05/a/1_1/500.png';
import t750 from '../../../static/proj05/a/1_1/750.png';

import t250_1_2 from '../../../static/proj05/a/1_2/250.png';
import t500_1_2 from '../../../static/proj05/a/1_2/500.png';
import t750_1_2 from '../../../static/proj05/a/1_2/750.png';

import t250_1_3 from '../../../static/proj05/a/1_3/250.png';
import t500_1_3 from '../../../static/proj05/a/1_3/500.png';
import t750_1_3 from '../../../static/proj05/a/1_3/750.png';

import noisy from '../../../static/proj05/a/1_4/noisy.png';
import t690 from '../../../static/proj05/a/1_4/690.png';
import t540 from '../../../static/proj05/a/1_4/540.png';
import t390 from '../../../static/proj05/a/1_4/390.png';
import t240 from '../../../static/proj05/a/1_4/240.png';
import t90 from '../../../static/proj05/a/1_4/90.png';
import iter from '../../../static/proj05/a/1_4/iter.png';
import onestep from '../../../static/proj05/a/1_4/onestep.png';
import gb from '../../../static/proj05/a/1_4/gb.png';

import no_cfg from '../../../static/proj05/a/1_5/download.png';
import no_cfg_1 from '../../../static/proj05/a/1_5/download-1.png';
import no_cfg_2 from '../../../static/proj05/a/1_5/download-2.png';
import no_cfg_3 from '../../../static/proj05/a/1_5/download-3.png';
import no_cfg_4 from '../../../static/proj05/a/1_5/download-4.png';


import cfg from '../../../static/proj05/a/1_6/download.png';
import cfg_1 from '../../../static/proj05/a/1_6/download-1.png';
import cfg_2 from '../../../static/proj05/a/1_6/download-2.png';
import cfg_3 from '../../../static/proj05/a/1_6/download-3.png';
import cfg_4 from '../../../static/proj05/a/1_6/download-4.png';

import camp_i1 from '../../../static/proj05/a/1_7_0/camp/download.png';
import camp_i3 from '../../../static/proj05/a/1_7_0/camp/download-1.png';
import camp_i5 from '../../../static/proj05/a/1_7_0/camp/download-2.png';
import camp_i7 from '../../../static/proj05/a/1_7_0/camp/download-3.png';
import camp_i10 from '../../../static/proj05/a/1_7_0/camp/download-4.png';
import camp_i20 from '../../../static/proj05/a/1_7_0/camp/download-5.png';

import mount from '../../../static/proj05/a/1_7_0/mount/download.png';
import mount_i1 from '../../../static/proj05/a/1_7_0/mount/download-1.png';
import mount_i3 from '../../../static/proj05/a/1_7_0/mount/download-2.png';
import mount_i5 from '../../../static/proj05/a/1_7_0/mount/download-3.png';
import mount_i7 from '../../../static/proj05/a/1_7_0/mount/download-4.png';
import mount_i10 from '../../../static/proj05/a/1_7_0/mount/download-5.png';
import mount_i20 from '../../../static/proj05/a/1_7_0/mount/download-6.png';

import volcano from '../../../static/proj05/a/1_7_0/volcano/download-6.png';
import volcano_i1 from '../../../static/proj05/a/1_7_0/volcano/download-1.png';
import volcano_i3 from '../../../static/proj05/a/1_7_0/volcano/download-1.png';
import volcano_i5 from '../../../static/proj05/a/1_7_0/volcano/download-2.png';
import volcano_i7 from '../../../static/proj05/a/1_7_0/volcano/download-3.png';
import volcano_i10 from '../../../static/proj05/a/1_7_0/volcano/download-4.png';
import volcano_i20 from '../../../static/proj05/a/1_7_0/volcano/download-5.png';

import drawn_balloon from '../../../static/proj05/a/1_7_1/balloon/download.png';
import drawn_balloon_i1 from '../../../static/proj05/a/1_7_1/balloon/download-1.png';
import drawn_balloon_i3 from '../../../static/proj05/a/1_7_1/balloon/download-2.png';
import drawn_balloon_i5 from '../../../static/proj05/a/1_7_1/balloon/download-3.png';
import drawn_balloon_i7 from '../../../static/proj05/a/1_7_1/balloon/download-4.png';
import drawn_balloon_i10 from '../../../static/proj05/a/1_7_1/balloon/download-5.png';
import drawn_balloon_i20 from '../../../static/proj05/a/1_7_1/balloon/download-6.png';

import drawn_goldengate from '../../../static/proj05/a/1_7_1/goldengate/download.png';
import drawn_goldengate_i1 from '../../../static/proj05/a/1_7_1/goldengate/download-1.png';
import drawn_goldengate_i3 from '../../../static/proj05/a/1_7_1/goldengate/download-2.png';
import drawn_goldengate_i5 from '../../../static/proj05/a/1_7_1/goldengate/download-3.png';
import drawn_goldengate_i7 from '../../../static/proj05/a/1_7_1/goldengate/download-4.png';
import drawn_goldengate_i10 from '../../../static/proj05/a/1_7_1/goldengate/download-5.png';
import drawn_goldengate_i20 from '../../../static/proj05/a/1_7_1/goldengate/download-6.png';

import drawn_mountain from '../../../static/proj05/a/1_7_1/mountain/download.png';
import drawn_mountain_i1 from '../../../static/proj05/a/1_7_1/mountain/download-1.png';
import drawn_mountain_i3 from '../../../static/proj05/a/1_7_1/mountain/download-2.png';
import drawn_mountain_i5 from '../../../static/proj05/a/1_7_1/mountain/download-3.png';
import drawn_mountain_i7 from '../../../static/proj05/a/1_7_1/mountain/download-4.png';
import drawn_mountain_i10 from '../../../static/proj05/a/1_7_1/mountain/download-5.png';
import drawn_mountain_i20 from '../../../static/proj05/a/1_7_1/mountain/download-6.png';

import drawn_rocket from '../../../static/proj05/a/1_7_1/rocket/download.png';
import drawn_rocket_i1 from '../../../static/proj05/a/1_7_1/rocket/download-1.png';
import drawn_rocket_i3 from '../../../static/proj05/a/1_7_1/rocket/download-2.png';
import drawn_rocket_i5 from '../../../static/proj05/a/1_7_1/rocket/download-3.png';
import drawn_rocket_i7 from '../../../static/proj05/a/1_7_1/rocket/download-4.png';
import drawn_rocket_i10 from '../../../static/proj05/a/1_7_1/rocket/download-5.png';
import drawn_rocket_i20 from '../../../static/proj05/a/1_7_1/rocket/download-6.png';

import original_campanille from '../../../static/proj05/a/1_7_2/campanille/download.png';
import campanille_mask from '../../../static/proj05/a/1_7_2/campanille/download-1.png';
import campanille_masked_area from '../../../static/proj05/a/1_7_2/campanille/download-2.png';
import campanille_inpainted from '../../../static/proj05/a/1_7_2/campanille/download-3.png';
import campainlle_inpainted_upsample from '../../../static/proj05/a/1_7_2/campanille/download-4.png';

import original_lion from '../../../static/proj05/a/1_7_2/lion/download.png';
import lion_mask from '../../../static/proj05/a/1_7_2/lion/download-1.png';
import lion_masked_area from '../../../static/proj05/a/1_7_2/lion/download-2.png';
import lion_inpainted from '../../../static/proj05/a/1_7_2/lion/download-3.png';
import lion_inpainted_upsample from '../../../static/proj05/a/1_7_2/lion/download-4.png';

import original_f1 from '../../../static/proj05/a/1_7_2/f1/download.png';
import f1_mask from '../../../static/proj05/a/1_7_2/f1/download-1.png';
import f1_masked_area from '../../../static/proj05/a/1_7_2/f1/download-2.png';
import f1_inpainted from '../../../static/proj05/a/1_7_2/f1/download-3.png';
import f1_inpainted_upsample from '../../../static/proj05/a/1_7_2/f1/download-4.png';

import baby_old from '../../../static/proj05/a/1_7_3/baby_old/download.png';
import baby_old_i1 from '../../../static/proj05/a/1_7_3/baby_old/download-1.png';
import baby_old_i3 from '../../../static/proj05/a/1_7_3/baby_old/download-2.png';
import baby_old_i5 from '../../../static/proj05/a/1_7_3/baby_old/download-3.png';
import baby_old_i7 from '../../../static/proj05/a/1_7_3/baby_old/download-4.png';
import baby_old_i10 from '../../../static/proj05/a/1_7_3/baby_old/download-5.png';
import baby_old_i20 from '../../../static/proj05/a/1_7_3/baby_old/download-6.png';


import camp_rock from '../../../static/proj05/a/1_7_3/camp_rock/download.png';
import camp_rock_i1 from '../../../static/proj05/a/1_7_3/camp_rock/download-1.png';
import camp_rock_i3 from '../../../static/proj05/a/1_7_3/camp_rock/download-2.png';
import camp_rock_i5 from '../../../static/proj05/a/1_7_3/camp_rock/download-3.png';
import camp_rock_i7 from '../../../static/proj05/a/1_7_3/camp_rock/download-4.png';
import camp_rock_i10 from '../../../static/proj05/a/1_7_3/camp_rock/download-5.png';
import camp_rock_i20 from '../../../static/proj05/a/1_7_3/camp_rock/download-6.png';

import dog_lion from '../../../static/proj05/a/1_7_3/dog_lion/download.png';
import dog_lion_i1 from '../../../static/proj05/a/1_7_3/dog_lion/download-1.png';
import dog_lion_i3 from '../../../static/proj05/a/1_7_3/dog_lion/download-2.png';
import dog_lion_i5 from '../../../static/proj05/a/1_7_3/dog_lion/download-3.png';
import dog_lion_i7 from '../../../static/proj05/a/1_7_3/dog_lion/download-4.png';
import dog_lion_i10 from '../../../static/proj05/a/1_7_3/dog_lion/download-5.png';
import dog_lion_i20 from '../../../static/proj05/a/1_7_3/dog_lion/download-6.png';

import amalfi from '../../../static/proj05/a/1_8/amalfi_hat/download.png';
import hat from '../../../static/proj05/a/1_8/amalfi_hat/download-1.png';

import camp from '../../../static/proj05/a/1_8/camp_man/download.png';
import man from '../../../static/proj05/a/1_8/camp_man/download-1.png';

import village from '../../../static/proj05/a/1_8/village_rocket/download.png';
import rocket from '../../../static/proj05/a/1_8/village_rocket/download-1.png';

import skull_waterfall from '../../../static/proj05/a/1_9/skull_waterfall.png';
import santa_house from '../../../static/proj05/a/1_9/santa_house.png';
import hulk_forest_scene from '../../../static/proj05/a/1_9/hulk_forest_scene.png';

const Proj04 = () => {
    return (
        <div className="main">
            <h1 className="main-header">Project #5: Fun With Diffusion Models</h1>
            <div className="content">
                <h1 className="lvl2-header">Overview</h1>
                <p className="text">
                    In this model, we explore both the practical applications of diffusion models, as well as some of their inner workings by implementing them on our own.
                    In part A, we use the pre-trained DeepFloyd diffusion model to generate a variety of images on our own. In part B, we actually implement our very own
                    diffusion model from scratch, and include both time-conditioning and class-conditioning to see how image generation improves.
                </p>
                <h1 className="lvl2-header">Part A: Using DeepFloyd</h1>
                <h1 className="lvl3-header">Part 0: Setting up DeepFloyd</h1>
                <p className="text">
                    First, we set up the DeepFloyd model by retrieving it from HuggingFace. Then, we use the sample text prompts given to us to generate some images. We can modify 
                    the number of inference steps taking by DeepFloyd in order to generate more detailed images (at the cost of more time).
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 2fr)', gap: '15px', marginTop: '40px' }}>
                    {[
                        {image: hat_5, caption: "An man wearing a hat (5 inference steps)"},
                        {image: rocket_5, caption: "A rocket ship (5 inference steps)"},
                        {image: village_5, caption: "An oil painting of a snowy mountain village (5 inference steps)"},
                        {image: hat_100, caption: "An man wearing a hat (100 inference steps)"},
                        {image: rocket_100, caption: "A rocket ship (100 inference steps)"},
                        {image: village_100, caption: "An oil painting of a snowy mountain village (100 inference steps)"}
                    ].map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <h1 className="lvl3-header">Part 1.1: Implementing the Forward Process</h1>
                <p className="text">
                    First, we implement the forward process, which is used to add noise to a clean image. We use the following formula: <InlineMath math="x_t=\sqrt{\bar{\alpha_t}x_0} + \sqrt{1-\bar{\alpha_t}}\epsilon"></InlineMath>, where <InlineMath math="\epsilon \sim N(0,I)"></InlineMath>
                    is a random noise vector. We apply this forward process on the test campanille image for <InlineMath math="t=250,500,750"/>.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '40px' }}>
                    {[
                        {image: campanille, caption: "The original campanille image"},
                        {image: t250, caption: "t=250"},
                        {image: t500, caption: "t=500"},
                        {image: t750, caption: "t=750"}
                    ].map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '150px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <h1 className="lvl3-header">Part 1.2: Classical Denoising</h1>
                <p className="text">
                    We also implement a classical denoising algorithm, which is used to remove noise from an image. To do this, we apply gaussian kernel filtering.
                    I.e, we use convolve the image with a gaussian kernel, and subtract the convolved image from the original to get the de-noised version of the input image.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 4fr)', marginTop: '40px' }}>
                    {[
                        {image: t250, caption: "t=250 (noisy)"},
                        {image: t250_1_2, caption: "t=250 (classically denoised)"},
                        {image: t500, caption: "t=500 (noisy)"},
                        {image: t500_1_2, caption: "t=500 (classically denoised)"},
                        {image: t750, caption: "t=750 (noisy)"},
                        {image: t750_1_2, caption: "t=750"}
                    ].map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '150px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br /><br/>
                <p className="text"> 
                    As we can see, there are still various artifacts from the input noise present in the classifcally denoised version of the images.
                </p>
                <h1 className="lvl2-header">Part 1.3: One-Step Denoising</h1>
                <p className="text">
                    We also implement a one-step denoising algorithm, which is used to remove noise from an image. We can simply reverse the forward process to get the denoised image. To do this, 
                    we can simply solve for <InlineMath math="x_0"></InlineMath> in the forward process equation shown in part 1.1. We get the noise from DeepFloyd, which will predict teh noise added to the image.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 4fr)', marginTop: '40px' }}>
                    {[
                        {image: t250, caption: "t=250 (noisy)"},
                        {image: t250_1_3, caption: "t=250 (one-step denoised)"},
                        {image: t500, caption: "t=500 (noisy)"},
                        {image: t500_1_3, caption: "t=500 (one-step denoised)"},
                        {image: t750, caption: "t=750 (noisy)"},
                        {image: t750_1_3, caption: "t=750 (one-step denoised)"}
                    ].map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '150px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br /><br/>
                <p className="text"> 
                    As we can see, the one-step denoising algorithm does a much better job at removing the noise from the input images, and produces a much cleaner output. However, there 
                    is still clear blurring (although there are no longer any blatant noise artifacts). 
                </p>
                <h1 className="lvl2-header">Part 1.4: Implementing Iterative Denoising</h1>
                <p className="text">
                    To combat this, we will now explore how iterative denoising may lend an even greater advantage when trying to detect and remove the noise held by an image. This is the core idea
                    of a diffusion model; by learning how to denoise iteratively, it is more powerful than one-step denoising, and can generate more detailed images from pure noise (which we will) see 
                    more later in part B. We create a schedule of strided timesteps (from t = 990 to t = 0 with a stride of 30). At each timestep, we take one step of denoising (moving toward the clean image), and iteratively
                    update our current estimate of the clean image. I omit the equation here for brevity since it is on the project spec, but I display the images at different stages of denoising below. We noise the image using i_start = 10
                    (so we noise up until index 9 of the timesteps, at which point we begin denoising). Here are the denoised images at different timesteps. We compare them to the denoised image with gaussian filtering 
                    and one-step method.
                </p>
            </div>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', marginTop: '40px' }}>
                {[
                    {image: noisy, caption: "The noisy image"},
                    {image: t690, caption: "t=690"},
                    {image: t540, caption: "t=540"},
                    {image: t390, caption: "t=390"},
                    {image: t240, caption: "t=240"},
                    {image: t90, caption: "t=90"},
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '150px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br/><br/>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '40px' }}>
                {[
                    {image: campanille, caption: "Original image"},
                    {image: iter, caption: "Iterative denoised"},
                    {image: onestep, caption: "One-step denoised"},
                    {image: gb, caption: "Gaussian filtering denoised"}
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br/><br/>
            <p className="text"> 
                As we can see, the iterative denoising algorithm does the best job at removing the noise from the input images, and produces a much cleaner output. It is also the most detailed, and 
                retains the most information from the original image. The one-step denoising algorithm is the second best, and the gaussian filtering denoising algorithm is the worst. The iterative denoising
                algorithm does seem to be hallucinating some details; this is expected, since it's impossible for the model to know what the original image looked like (information lost to to noising process). 
                Note: The reason why the iterative denoising output is still a little blurry is because I present the image at a larger size for visibility without upsampling. In future sections, we will 
                show most images (after 1.7) after upsampling for better quality. The reason I don't upsample here is because the upsampling super-resolution objective tends to sharpen both methods of denoising anyway, 
                which makes it less clear why iterative denoising is better.
            </p>
            <h1 className="lvl3-header">Part 1.5: Diffusion Model Sampling</h1>
            <p className="text">
                We can use this iterative_denoise functionality to actually generate novel images from scratch; we simply pass in a completely noisy image (using torch.randn_like), and then denoise it using 
                the algorithm detailed in the previous section. Here are some samples (not upsampled).
            </p>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 2fr)', marginTop: '40px' }}>
                {[
                    {image: no_cfg, caption: ""},
                    {image: no_cfg_1, caption: ""},
                    {image: no_cfg_2, caption: ""},
                    {image: no_cfg_3, caption: ""},
                    {image: no_cfg_4, caption: ""}
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '150px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <h1 className="lvl3-header">Part 1.6: Classifier-Free Guidance (CFG)</h1>
            <p className="text">
                Clearly, these images are good, but not great. They seem quite dull, and in general, nothing like the images we'd expect to generate from a state-of-the-art diffusion model like DeepFloyd. Can we do better?
                One way to improve the quality of the generated images is to a technique called classifier-free guidance, which is a method in which we provide the diffusion model with a prompt to generate images that 
                accordingly conform to it. Obviously, this will reduce the diversity of the image it generates, but it will also make the images more coherent and realistic. We can do this by including 
                a conditioned noise estimate in the iterative denoising algorithm. More specifically, we have <InlineMath math="\epsilon = \epsilon_u+\gamma(\epsilon_c-\epsilon_u)"></InlineMath> as our final noise estimate. 
                We can use this noise estimate to compute the cleaned version of the image much like we did before. Here are some samples using the prompt "a high quality photo" (not upsampled again just so you can see the difference in quality).
            </p>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 2fr)', marginTop: '40px' }}>
                {[
                    {image: cfg, caption: ""},
                    {image: cfg_1, caption: ""},
                    {image: cfg_2, caption: ""},
                    {image: cfg_3, caption: ""},
                    {image: cfg_4, caption: ""}
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '150px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <h1 className="lvl3-header">Part 1.7.0: Image-to-Image Translation</h1>
            <p className="text">
                We can also use the diffusion model to perform image-to-image translation. The main idea here is that we can take some target image, and add noise to produce a noisy version of it. Then, we can use the denoiser
                to try to "clean" this image to reproduce the original. Because of hallucionations, however, the denoiser will oftentimes create new images based on the level of noise we pass in. This is called the 
                SDEdit algorithm, and we can easily apply it using DeepFloyd. Here some results of image-to-image translation using our test image, the campanille. i_start represents the timestamp index
                at which we begin denoising (i.e, the higher i_start is, the less noise we add to the image before denoising). These are upsampled images (+ CFG), so they may look less blurry than results from previous section.
            </p>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 2fr)', marginTop: '40px' }}>
                {[
                    {image: camp_i1, caption: "i_start=1"},
                    {image: camp_i3, caption: "i_start=3"},
                    {image: camp_i5, caption: "i_start=5"},
                    {image: camp_i7, caption: "i_start=7"},
                    {image: camp_i10, caption: "i_start=10"},
                    {image: camp_i20, caption: "i_start=20"},
                    {image: campanille, caption: "Original image (not upsampled)"}
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br/><br/>
            <p className="text"> 
                As expected, as we increase i_start, the resulting denoised image looks a lot more like the original image (also shown above). I left the original image without upsampling so you can see just how high-quality these 
                generated images really are; they're capable of generating novel features that aren't present in the original image, yet at a higher quality, which is pretty fascinating. Let's see this with a few other images.
            </p>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 2fr)', marginTop: '40px' }}>
                {[
                    {image: mount_i1, caption: "i_start=1"},
                    {image: mount_i3, caption: "i_start=3"},
                    {image: mount_i5, caption: "i_start=5"},
                    {image: mount_i7, caption: "i_start=7"},
                    {image: mount_i10, caption: "i_start=10"},
                    {image: mount_i20, caption: "i_start=20"},
                    {image: mount, caption: "Original image (not upsampled)"}
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br/><br/>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 2fr)', marginTop: '40px' }}>
                {[
                    {image: volcano_i1, caption: "i_start=1"},
                    {image: volcano_i3, caption: "i_start=3"},
                    {image: volcano_i5, caption: "i_start=5"},
                    {image: volcano_i7, caption: "i_start=7"},
                    {image: volcano_i10, caption: "i_start=10"},
                    {image: volcano_i20, caption: "i_start=20"},
                    {image: volcano, caption: "Original image (not upsampled)"}
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br/><br/> 
            <h1 className="lvl3-header">Part 1.7.1: Editing Hand-Drawn and Web Images</h1>
            <p className="text">
                We can also use the SDEdit algorithm to perform image-to-image translation on hand-drawn and web images. I have three unrealistic images; three of which I drew myself, and one that I found online of the golden gate (with more detail). Let's see how 
                SDEdit performs on these images.
            </p>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 2fr)', marginTop: '40px' }}>
                {[
                    {image: drawn_balloon_i1, caption: "i_start=1"},
                    {image: drawn_balloon_i3, caption: "i_start=3"},
                    {image: drawn_balloon_i5, caption: "i_start=5"},
                    {image: drawn_balloon_i7, caption: "i_start=7"},
                    {image: drawn_balloon_i10, caption: "i_start=10"},
                    {image: drawn_balloon_i20, caption: "i_start=20"},
                    {image: drawn_balloon, caption: "Hand-drawn balloon (not upsampled)"},
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br/><br/>

            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 2fr)', marginTop: '40px' }}>
                {[
                    {image: drawn_mountain_i1, caption: "i_start=1"},
                    {image: drawn_mountain_i3, caption: "i_start=3"},
                    {image: drawn_mountain_i5, caption: "i_start=5"},
                    {image: drawn_mountain_i7, caption: "i_start=7"},
                    {image: drawn_mountain_i10, caption: "i_start=10"},
                    {image: drawn_mountain_i20, caption: "i_start=20"},
                    {image: drawn_mountain, caption: "Hand-drawn mountain (not upsampled)"},
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br/><br/>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 2fr)', marginTop: '40px' }}>
                {[
                    {image: drawn_rocket_i1, caption: "i_start=1"},
                    {image: drawn_rocket_i3, caption: "i_start=3"},
                    {image: drawn_rocket_i5, caption: "i_start=5"},
                    {image: drawn_rocket_i7, caption: "i_start=7"},
                    {image: drawn_rocket_i10, caption: "i_start=10"},
                    {image: drawn_rocket_i20, caption: "i_start=20"},
                    {image: drawn_rocket, caption: "Hand-drawn rocket (not upsampled)"},
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br/><br/>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 2fr)', marginTop: '40px' }}>
                {[
                    {image: drawn_goldengate_i1, caption: "i_start=1"},
                    {image: drawn_goldengate_i3, caption: "i_start=3"},
                    {image: drawn_goldengate_i5, caption: "i_start=5"},
                    {image: drawn_goldengate_i7, caption: "i_start=7"},
                    {image: drawn_goldengate_i10, caption: "i_start=10"},
                    {image: drawn_goldengate_i20, caption: "i_start=20"},
                    {image: drawn_goldengate, caption: "Unrealistic golden gate color drawing from the web (not upsampled)"},
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <h1 className="lvl3-header">Part 1.7.2: Inpainting</h1>
            <p className="text">
                Another application of diffusion is inpainting. The idea of inpainting is to mask out a certain section of the image, and use the denoiser to "fill it in" by providing it with the context
                around the masked area. We keep the unmasked area constant, and only inpaint the masked area (by adding noise to it). Here's how we can represent this mathematically.
                <BlockMath math="x_t \leftarrow mx_t + (1-m)\text{forward}(x_\text{orig}, t)"></BlockMath>
                Here are a couple of representative examples that show how powerful masking can be. You'll notice that hte diffusion model doesn't always perfectly fill in the gap; this is what makes this technique
                so useful. We can easily edit portions of an image with diffusion hallucinations, while keeping the rest of the image constant. This allows the filled hole to be reasonable in context, but 
                creative at the same time. 
            </p>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', marginTop: '40px' }}>
                {[
                    {image: original_campanille, caption: "Original campanille"},
                    {image: campanille_mask, caption: "Masked campanille"},
                    {image: campanille_masked_area, caption: "Masked area"},
                    {image: campanille_inpainted, caption: "Inpainted campanille"},
                    {image: campainlle_inpainted_upsample, caption: "Inpainted campanille (upsampled)"}
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br/><br/>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', marginTop: '40px' }}>
                {[
                    {image: original_lion, caption: "Original lion"},
                    {image: lion_mask, caption: "Masked lion"},
                    {image: lion_masked_area, caption: "Masked area"},
                    {image: lion_inpainted, caption: "Inpainted lion"},
                    {image: lion_inpainted_upsample, caption: "Inpainted lion (upsampled)"}
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br/><br/>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', marginTop: '40px' }}>
                {[
                    {image: original_f1, caption: "Original F1 car"},
                    {image: f1_mask, caption: "Masked F1 car"},
                    {image: f1_masked_area, caption: "Masked area"},
                    {image: f1_inpainted, caption: "Inpainted F1 car"},
                    {image: f1_inpainted_upsample, caption: "Inpainted F1 car (upsampled)"}
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br/><br/>
            <p className="text">
                I was actually very surprised by the inpainting results with the F1 car. I thought it was pretty cool that the diffusion model was able to get the right color scheme
                of the masked wing of the car, since there is nothing outside of the masked area to suggest that the wing would have a white color on it. It's possible that the model 
                had seen a similar color scheme in the training data, since this F1 car is particularly famous. There is a slight difference in the shape of the front nose cone, though. 
            </p>
            <h1 className="lvl3-header">Part 1.7.3: Text-Conditional Image-to-Image Translation</h1>
            <p className="text">
                In this section, we do something very similar to the last couple. Instead of using a mask or noising the image in order to come up with new derivatives, however, we use a text prompt in this 
                section in combination with input image noise. This will not only cause the diffusion model to hallucinate new features of the input image, but it'll nudge it in the direction of the prompt.
                We can do this quite simply; we just change the CFG text prompt from "a high quality photo" to whatever hallucinations we would like the model to have. Here are some examples of this.
            </p>
            <br/><br/>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', marginTop: '40px' }}>
                {[
                    {image: camp_rock_i1, caption: "Rocketship with i_start=1"},
                    {image: camp_rock_i3, caption: "Rocketship with i_start=3"},
                    {image: camp_rock_i5, caption: "Rocketship with i_start=5"},
                    {image: camp_rock_i7, caption: "Rocketship with i_start=7"},
                    {image: camp_rock_i10, caption: "Rocketship with i_start=10"},
                    {image: camp_rock_i20, caption: "Rocketship with i_start=20"},
                    {image: camp_rock, caption: "Original campanille (not upsampled)"}
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '100px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br/><br/>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', marginTop: '40px' }}>
                {[
                    {image: dog_lion_i1, caption: "Dog with i_start=1"},
                    {image: dog_lion_i3, caption: "Dog with i_start=3"},
                    {image: dog_lion_i5, caption: "Dog with i_start=5"},
                    {image: dog_lion_i7, caption: "Dog with i_start=7"},
                    {image: dog_lion_i10, caption: "Dog with i_start=10"},
                    {image: dog_lion_i20, caption: "Dog with i_start=20"},
                    {image: dog_lion, caption: "Original lion (not upsampled)"},
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '100px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br/><br/>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', marginTop: '40px' }}>
                {[
                    {image: baby_old_i1, caption: "Old man with i_start=1"},
                    {image: baby_old_i3, caption: "Old man with i_start=3"},
                    {image: baby_old_i5, caption: "Old man with i_start=5"},
                    {image: baby_old_i7, caption: "Old man with i_start=7"},
                    {image: baby_old_i10, caption: "Old man with i_start=10"},
                    {image: baby_old_i20, caption: "Old man with i_start=20"},
                    {image: baby_old, caption: "Original baby (not upsampled)"}
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '100px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br/><br/>
            <h1 className="lvl3-header">Part 1.8: Visual Anagrams</h1>
            <p className="text">
                We can also use the diffusion model to generate visual anagrams. The idea is to generate some image that looks like another object when upside down. We can do this using our iterative denoising algorithm, albeit 
                with some minor tweaks. We calculate a noise estimate for both the original image and the flipped version of the image at each timestep. Then, our final noise estimate is simply the average of the two individual estimates. 
                p_1 and p_2 are simply our prompts for each flipped version of the image. Here's the math:
                <BlockMath math="\epsilon_1 =\text{UNet}(x_t,t,p_1)"></BlockMath>
                <BlockMath math="\epsilon_2 = \text{flip}(\text{UNet}(\text{flip}(x_t),t,p_2))"></BlockMath>
                <BlockMath math="\epsilon = \frac{1}{2}(\epsilon_1+\epsilon_2)"></BlockMath>
                With these noise estimates, we can generate some visual anagrams using our standard iterative denoising approach. 
            </p>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 3fr)', marginTop: '40px' }}>
                {[
                    {image: camp, caption: "an oil painting of people around a campfire"},
                    {image: man, caption: "an oil painting of an old man"},
                    {image: village, caption: "an oil painting of a snowy mountain village"},
                    {image: rocket, caption: "a rocket ship"},
                    {image: amalfi, caption: "a photo of the amalfi cost"},
                    {image: hat, caption: "a man wearing a hat"}
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '150px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <h1 className="lvl3-header">Part 1.9: Hybrid Images</h1>
            <p className="text">
                Finally, we can also do something very similar to what we did in project #2, but with diffusion models. Using a clever trick with the iterative denoising algorithm, we can generate hybrid images. The main idea is similar to 
                that in the previous part. At each timestep, we calculate a noise estimate for both the prompts. Then, we simply take the low and high-pass filtered versions of the two noise estimates, and add them together to get the final noise estimate.
                Here's the math:
                <BlockMath math="\epsilon_1 = \text{UNet}(x_t,t,p_1)"></BlockMath>
                <BlockMath math="\epsilon_2 = \text{UNet}(x_t,t,p_2)"></BlockMath>
                <BlockMath math="\epsilon = \text{lowpass}(\epsilon_1)+\text{highpass}(\epsilon_2)"></BlockMath>
                With these noise estimates, we can generate some hybrid images using our standard iterative denoising approach.
            </p>            
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 3fr)', marginTop: '50px' }}>
                {[
                    {image: <img src={skull_waterfall} style={{maxWidth: '100px'}}></img>, caption: "a lithograph of a skull"},
                    {image: <img src={skull_waterfall} style={{maxWidth: '250px'}}></img>, caption: "a lithograph of waterfalls"},
                    {image: <img src={santa_house} style={{maxWidth: '100px'}}></img>, caption: "a lithograph of santa's face"},
                    {image: <img src={santa_house} style={{maxWidth: '250px'}}></img>, caption: "a lithograph of a house in snowy hills with red roofs"},
                    {image: <img src={hulk_forest_scene} style={{maxWidth: '100px'}}></img>, caption: "a lithograph of hulk's face"},
                    {image: <img src={hulk_forest_scene} style={{maxWidth: '250px'}}></img>, caption: "a lithograph of a forest scene"}
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    {item.image}
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br/><br/>
            <p className="text">
                Try looking at the smaller image and squinting to see the low frequency components of the hybrid image,
                and the larger image without squinting to see the high frequency components
            </p>
        </div>
    );
}

export default Proj04;