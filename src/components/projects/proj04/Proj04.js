import React from 'react';
import './Proj04.css';

import wallet from '../../../static/proj04/wallet.jpg'
import wallet_rectified from '../../../static/proj04/wallet_rectified.jpg'
import outlet from '../../../static/proj04/outlet.jpg'
import outlet_rectified from '../../../static/proj04/outlet_rectified.jpg'
import laptop from '../../../static/proj04/laptop.jpg'
import laptop_rectified_cropped from '../../../static/proj04/laptop_rectified_cropped.png'

import living_room0 from '../../../static/proj04/living_room/0.png'
import living_room1 from '../../../static/proj04/living_room/1.png'
import living_room2 from '../../../static/proj04/living_room/2.png'
import dist_transform0 from '../../../static/proj04/living_room/dist_transform0.png'
import dist_transform1 from '../../../static/proj04/living_room/dist_transform1.png'
import dist_transform2 from '../../../static/proj04/living_room/dist_transform2.png'
import living_room_manual_ols_mosaic from '../../../static/proj04/living_room/living_room_manual_ols_mosaic.jpg'
import living_room_auto_ransac_mosaic from '../../../static/proj04/living_room/living_room_auto_ransac_mosaic.jpg'

import crescent_lawn0 from '../../../static/proj04/crescent_lawn/0.png'
import crescent_lawn1 from '../../../static/proj04/crescent_lawn/1.png'
import crescent_lawn2 from '../../../static/proj04/crescent_lawn/2.png'
import crescent_lawn3 from '../../../static/proj04/crescent_lawn/3.png'
import crescent_lawn_manual_ols_mosaic from '../../../static/proj04/crescent_lawn/crescent_lawn_manual_ols_mosaic.jpg'
import crescent_lawn_auto_ransac_mosaic from '../../../static/proj04/crescent_lawn/crescent_lawn_auto_ransac_mosaic.jpg'

import berkeley_city0 from '../../../static/proj04/berkeley_city/0.png'
import berkeley_city1 from '../../../static/proj04/berkeley_city/1.png'
import berkeley_city2 from '../../../static/proj04/berkeley_city/2.png'
import berkeley_city3 from '../../../static/proj04/berkeley_city/3.png'
import berkeley_city_pts0_01 from '../../../static/proj04/berkeley_city/pts0_01.png'
import berkeley_city_pts1_01 from '../../../static/proj04/berkeley_city/pts1_01.png'
import berkeley_city_pts1_12 from '../../../static/proj04/berkeley_city/pts1_12.png'
import berkeley_city_pts2_12 from '../../../static/proj04/berkeley_city/pts2_12.png'
import berkeley_city_pts2_23 from '../../../static/proj04/berkeley_city/pts2_23.png'
import berkeley_city_pts3_23 from '../../../static/proj04/berkeley_city/pts3_23.png'
import berkeley_city_manual_ols_mosaic from '../../../static/proj04/berkeley_city/berkeley_city_manual_ols_mosaic.jpg'
import berkeley_city_auto_ransac_mosaic from '../../../static/proj04/berkeley_city/berkeley_city_auto_ransac_mosaic.jpg'


// part b 

import living_room0_harris from '../../../static/proj04/living_room/harris0.png'
import living_room1_harris from '../../../static/proj04/living_room/harris1.png'
import living_room2_harris from '../../../static/proj04/living_room/harris2.png'
import living_room0_anms from '../../../static/proj04/living_room/anms0.png'
import living_room1_anms from '../../../static/proj04/living_room/anms1.png'
import living_room2_anms from '../../../static/proj04/living_room/anms2.png'
import living_room0_descriptors from '../../../static/proj04/living_room/descriptors0.png'
import living_room_01_matches from '../../../static/proj04/living_room/01_matches.png'
import living_room_01_ransac from '../../../static/proj04/living_room/01_ransac.png'

import berkeley_city0_harris from '../../../static/proj04/berkeley_city/harris0.png'
import berkeley_city1_harris from '../../../static/proj04/berkeley_city/harris1.png'
import berkeley_city2_harris from '../../../static/proj04/berkeley_city/harris2.png'
import berkeley_city3_harris from '../../../static/proj04/berkeley_city/harris3.png'

import crescent_lawn0_harris from '../../../static/proj04/crescent_lawn/harris0.png'
import crescent_lawn1_harris from '../../../static/proj04/crescent_lawn/harris1.png'
import crescent_lawn2_harris from '../../../static/proj04/crescent_lawn/harris2.png'
import crescent_lawn3_harris from '../../../static/proj04/crescent_lawn/harris3.png'
import crescent_lawn0_patches from '../../../static/proj04/crescent_lawn/patches0.png'
import crescent_lawn0_invariant_patches from '../../../static/proj04/crescent_lawn/rot_invariant_patches0.png'
import crescent_lawn_auto_ransac_rot_invariant_mosaic from '../../../static/proj04/crescent_lawn/crescent_lawn_auto_ransac_rot_invariant_mosaic.jpg'



import latex from '../../../static/proj04/latex.png'


const Proj04 = () => {
    return (
        <div className="main">
            <h1 className="main-header">Project #4: (Auto)stitching and Photo Mosaics</h1>
            <div className="content">
                <h1 className="lvl2-header">Overview</h1>
                <p className="text">
                    This project consists of two parts. 
                    <br/><br/>
                    In Part A, we use our learning on image blending and homography calculation to create photo mosaics. We start by rectifying irregular 
                    quadrilaterals in our images to make them rectangular. This allows us to explore how homographies can be used to create perspective shifts
                    in images. We extend this utility to then create photo mosaics, in which we compose a larger image from overlapping smaller images. We smoothen
                    the transition between images by using clever blending techniques. 
                    <br/><br/>
                    In Part B, we explore how we can automate the process of finding correspondence points between images, allowing us to compute homographies in an entirely
                    automated fashion! 
                </p>
                <h1 className="lvl2-header">Part A</h1>
                <h1 className="lvl3-header">Shooting and Digitizing Pictures</h1>
                <p className="text">
                    We need images for both mosaic stitching and rectangular image rectification. I used my phone camera to take pictures of a few rectangular objects around my home, 
                    albeit at an angle. This allows us to use perspective shifts to "rectify" the object in the image to make it look rectangular. 
                    I also took a few pictures of places around campus, as well as a few pictures in own home. I kept the camera position still (to the best of my ability), 
                    and rotated the camera, creating a series of photos that can be stitched together. Here are the pictures I took:
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '40px' }}>
                    {[
                        {image: wallet, caption: "Wallet (for rectangular rectification"},
                        {image: outlet, caption: "Outlet (for rectangular rectification)"},
                        {image: laptop, caption: "Laptop (for rectangular rectification)"},
                    ].map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/><br/><br/><br/>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '30x' }}>
                    {[
                        {image: living_room0, caption: "Living Room 0"},
                        {image: living_room1, caption: "Living Room 1"},
                        {image: living_room2, caption: "Living Room 2"},
                    ].map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/><br/><br/><br/>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '30px' }}>
                    {[
                        {image: crescent_lawn0, caption: "Crescent Lawn 0"},
                        {image: crescent_lawn1, caption: "Crescent Lawn 1"},
                        {image: crescent_lawn2, caption: "Crescent Lawn 2"},
                        {image: crescent_lawn3, caption: "Crescent Lawn 3"},
                    ].map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/><br/><br/><br/>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '30px' }}>
                    {[
                        {image: berkeley_city0, caption: "Berkeley City 0"},
                        {image: berkeley_city1, caption: "Berkeley City 1"},
                        {image: berkeley_city2, caption: "Berkeley City 2"},
                        {image: berkeley_city3, caption: "Berkeley City 3"},
                    ].map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <h1 className="lvl3-header">Recovering Homographies</h1>
                <p className="text">
                    Homographies are transformations with 8 degrees of freedom that can be used to "warp" points from one space to another. In our case, we use homographies to 
                    both rectify images and stitch them together. To compute our homographies, however, we first need to define correspondence points on our images. I wrote my own 
                    ginput function in matplotlib to do this. Here are some sample correspondence points I defined between some of the adjacent mosaic images. 
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginTop: '30px' }}>
                    {[
                        {image: berkeley_city_pts0_01, caption: "Img 0, pts between 0 and 1"},
                        {image: berkeley_city_pts1_01, caption: "Img 1, pts between 0 and 1"},
                        {image: berkeley_city_pts1_12, caption: "Img 1, pts between 1 and 2"},
                        {image: berkeley_city_pts2_12, caption: "Img 2, pts between 1 and 2"},
                        {image: berkeley_city_pts2_23, caption: "Img 2, pts between 2 and 3"},
                        {image: berkeley_city_pts3_23, caption: "Img 3, pts between 2 and 3"},
                    ].map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br></br><br></br>
                <p className="text">
                    With these points, we can compute the homographies between the images. A homography matrix <code>H</code> can be recovered by solving the equation <code>Hp = p'</code>, 
                    where <code>H</code> is a 3x3 matrix that we are trying to find. We can solve this equation by stacking the equations for each point pair, and solving the resulting
                    system of equations. We can then use this homography to warp the images.
                </p>
                <img src={latex} alt="latex" style={{ width: '100%', height: 'auto', maxWidth: '600px', marginTop: '30px', marginLeft: '20%'}} />
                
            </div>
            <h1 className="lvl3-header">Warping the Images</h1>
            <p className="text">
                Once we have our homographies, we can warp our images to make them align. However, there are some nuances we must consider. 
            </p>
            <h1 className="lvl4-header">Interpolation</h1>
            <p className="text">
                Because our warped points may not align perfectly with the grid points (pixels) of our image, we must interpolate their values from the surrounding pixels. 
                To avoid any holes in our image, I chose to implement inverse warping. For each pixel in our resulting canvas, we find the corresponding point in the original image
                using the inverse of the homography matrix calculated. We then interpolate the pixel value from the surrounding pixels in the original image.
            </p>
            <h1 className="lvl4-header">Multi-Image Warping</h1>
            <p className="text">
                When creating our mosaics, it might be difficult to manually fit correspondence points between all images and our base image. This is because there many not be enough 
                overlap between our base image and another image, depending on how many images come in between the two. To resolve this issue, I chose to only plot correspondence points
                between adjacent pairs of images. But how would we find the final homography matrix between the base image and those that are not directly next to it? The answer is simple—
                we can chain our homography matrices by multiplying them together. Consider matrices <code>M1</code>, <code>M2</code>, and <code>M3</code>. If we want to find the homography
                between <code>M1</code> and <code>M3</code>, we can multiply the homography matrix between <code>M1</code> and <code>M2</code> with the homography matrix between <code>M2</code> and <code>M3</code>.
                This procedure allows us to find the homography between any two images, even if they are not directly adjacent to each other. For simplicity, I choose the base image as the one with 
                the middle index (n // 2).
            </p>
            <h1 className="lvl4-header">Results of Warping for Image Rectification</h1>
            <p className="text">
                Here are the results of using homographies to rectify the images of the wallet, outlet, and the laptop. The images are warped to make the surface look rectangular.
            </p>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '30px' }}>
                {[
                    {image: laptop, caption: "Original Laptop"},
                    {image: wallet, caption: "Original Wallet"},
                    {image: outlet, caption: "Original Outlet"},
                    {image: laptop_rectified_cropped, caption: "Rectified Laptop (Cropped)"},
                    {image: wallet_rectified, caption: "Rectified Wallet"},
                    {image: outlet_rectified, caption: "Rectified Outlet"},

                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br></br><br></br>
            <h1 className="lvl3-header">Stitching Mosaics</h1>
            <p className="text">
                With our homographies calculated, we can now stitch our images together to create a photo mosaic. I warp each image to the base image (the one with the middle index),
                and then overlay them on top of each other in a canvas that is large enough to contain all the warped images. However, this is not enough. We must also blend the images
                to ensure that any overlapping regions are smoothly transitioned. 
            </p>
            <h1 className="lvl4-header">Blending</h1>
            <p className="text">
                To blend my images, I create a distance transform mask for each image on top of the full-sized canvas. I can then weight each warped image with its corresponding mask, and sum them
                together to get the final blended image. Of course, we then have to normalize the image weights to ensure that the pixel values are between 0 and 255. I did this for all of the mosaics
                I created, but for the sake of brevity, I only show the distance transform masks for the living_room mosaic below. 
            </p>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '30px' }}>
                {[
                    {image: dist_transform0, caption: "Living Room 0 Dist. Transform Mask"},
                    {image: dist_transform1, caption: "Living Room 1 Dist. Transform Mask"},
                    {image: dist_transform2, caption: "Living Room 2 Dist. Transform Mask"},
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <h1 className="lvl4-header">Results of Mosaic Stitching</h1>
            <p className="text">
                Here are the three mosaics I generated using the images I took (shown in the first section). Living room mosaic consists of three images, while the berkeley city and crescent lawn mosaics
                contain four images each. 
            </p>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '15px', marginTop: '30px' }}>
                {[
                    {image: living_room_manual_ols_mosaic, caption: "Living Room Mosaic"},
                    {image: crescent_lawn_manual_ols_mosaic, caption: "Crescent Lawn Mosaic"},
                    {image: berkeley_city_manual_ols_mosaic, caption: "Berkeley City Mosaic (my personal favorite!)"},
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '500px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <h1 className="lvl2-header">Part B</h1>
            <p className="text">
                Okay, so we've managed to create some pretty cool mosaics, but is there a way to avoid the tedious process of manually finding correspondence points between images? In this part of the project, 
                we'll be exploring a correspondence point detection pipeline involve Harris corner detection, Adaptive Non-Maximal Suppression, feature descriptor extraction/matching, and RANSAC. 
            </p>
            <h1 className="lvl3-header">Detecting Corner Features in an Image: Harris Corner Detection</h1>
            <p className="text">
                The first step in our pipeline is to detect corner features in our images using Harris Corner Detection. On a high level, this algorithm works by calculating the second moment matrix
                of the image gradient (i.e, the outer product of the gradient vector with itself). The eigenvalues of this matrix can then be used to determine if a pixel is a corner. Let <code>M</code> be the second moment matrix,
                then the Harris Corner Response is given by the formula: <code>h = det(M) - k * tr(M)^2</code>. If <code>h is greater than 0</code>, then the pixel is likely a corner. In this project, we do not have 
                to implement this algorithm ourselves. Instead, we just use the sample code provided to us. I also added some relative thresholding to trim the amount of points. This ensures that 
                the ANMS can be run in feasible time (see next section). Here are the results of Harris Corner Detection on the images I took:
            </p>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '30px' }}>
                {[
                    {image: living_room0_harris, caption: "Living Room 0 Harris Corners (5137)"},
                    {image: living_room1_harris, caption: "Living Room 1 Harris Corners (5171)"},
                    {image: living_room2_harris, caption: "Living Room 2 Harris Corners (4409)"},
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '30px' }}>
                {[
                    {image: crescent_lawn0_harris, caption: "Crescent Lawn 0 Harris Corners (10253)"},
                    {image: crescent_lawn1_harris, caption: "Crescent Lawn 1 Harris Corners (9804)"},
                    {image: crescent_lawn2_harris, caption: "Crescent Lawn 2 Harris Corners (13873)"},
                    {image: crescent_lawn3_harris, caption: "Crescent Lawn 3 Harris Corners (8786)"},
                    {image: berkeley_city0_harris, caption: "Berkeley City 0 Harris Corners (3982)"},
                    {image: berkeley_city1_harris, caption: "Berkeley City 1 Harris Corners (5661)"},
                    {image: berkeley_city2_harris, caption: "Berkeley City 2 Harris Corners (6334)"},
                    {image: berkeley_city3_harris, caption: "Berkeley City 3 Harris Corners (7195)"},
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>  
            <h1 className="lvl3-header">Adaptive Non-Maximal Suppression</h1>
            <p className="text">
                The next step in our pipeline is to perform Adaptive Non-Maximal Suppression (ANMS) on the corner features we detected. ANMS is a technique used to reduce the number of corner features in an image
                by selecting only the most "salient" corners. The idea is to find the <code>k</code> most "isolated" corners in the image. To do this, we first calculate the minimum distance to a stronger corner for each corner. 
                We then sort the corners by this distance in descending order, and select the first <code>k</code> corners. To make this quicker, we can use the implementation of k-select (quickselect) algorithm in Numpy. The fn 
                for this is called np.argpartition.
                <br></br><br></br>
                One small nuance; how do we define "stronger" corners? We could just naively say that a stronger corner is one with a higher Harris response, but this might not be the best approach given that our Harris corners
                are so close together. Instead we can define a stronger conrer more robustly by introducing c_robust. Instead of finding the minimum distance to a stronger corner, we find the minimum distance from x_i to a corner x_j s.t.
                <code> h(x_i)</code> is less than <code>c_robust * h(x_j)</code>. This ensures that we are only selecting the most salient corners.
                <br></br><br></br>
                For brevity, I only show the results of ANMS on the living room images below. For all mosaics, however, I use a c_robust threshold of 0.9 and choose only the top 500 Harris corners. 
            </p>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '30px' }}>
                {[
                    {image: living_room0_anms, caption: "Living Room 0 ANMS-Filtered Points (500)"},
                    {image: living_room1_anms, caption: "Living Room 1 ANMS-Filtered Points (500)"},
                    {image: living_room2_anms, caption: "Living Room 2 ANMS-Filtered Points (500)"},
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '400px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <h1 className="lvl3-header">Feature Descriptor Extraction</h1>
            <p className="text">
                So now we have a more robust set of corner features for each of the images in our mosic. But, we still don't have correspondence points. In order to obtain these, we need to somehow find a way to match 
                the ANMS-filtered Harris corners in each image. To do this, we can use feature descriptors. Feature descriptors are "patches" around each of our corners that we can use to compare our points. More similar
                feature descriptors are more likely to be corresponding points. To form our feature descriptors, we first extract a WxW grayscale window around each corner. Then, we downsample the WxW window
                to patch size PxP. To avoid artifacts, we also blur the window before downsampling. This helps us attain more robust descriptors. 
                <br></br><br></br>
                Here are the feature descriptors (normalized with std 0) extracted from the first living room image (living room 0). 
            </p>
            <img src={living_room0_descriptors} style={{ width: '100%', height: 'auto', maxWidth: '400px', marginLeft: '30%'}}></img>
            <h1 className="lvl3-header">Feature Descriptor Matching</h1>
            <p className="text">
                With these feature descriptors, we have a pretty straightforward way of finding correspondence points. For every descriptor in img1, we find the most similar descriptor in img2. We can use the L2 norm
                to find the distance between two descriptors. If the ratio of the distance between the two most similar descriptors is less than a certain threshold, we can say that the two points are corresponding.
                This method is called Lowe's thresholding. The reason we do this instead of just finding the error with the most similar descriptor is because it helps us avoid false positives. There should only be one match 
                for each descriptor, and Lowe's thresholding helps make this more certain.
            </p>
            <br></br><br></br>
            <img src={living_room_01_matches} style={{ width: '100%', height: 'auto', maxWidth: '1000px', marginLeft: '10%'}}></img>
            <br></br><br></br>
            <p>
                As we can see, there are still some outliers produced from this matching algorithm. The lamp in the first image, for example, is matched to a section of the fireplace in the second image 
                (the same lamp isn't even present in the second image as it is cut out). This is because the feature descriptors only look at local information, which may be misleading. However, this is not an issue. 
                As we'll see in the next section, we cna use RANSAC to compute outlier-robust homographies.
            </p>
            <h1 className="lvl3-header">RANSAC</h1>
            <p className="text">
                Because of our automatic feature descriptor matching, we have a set of (potentially faulty) correspondence points. Recall that OLS is heavily outlier-sensitive (since it uses L2 norm). To mitigate
                this issue, we use the 4-point RANSAC algorithm for homography computation. The 4-point RANSAC algorithm works by randomly selecting 4 points from our correspondence points, and computing the homography
                between them. We then use this homography to warp all points from the src image to the dest img, and calculate the error (by L2 norm) between the warped points and the actual points. We count the number 
                of points whose error is less than a certain threshold (call these inliers). We repeat this process for N iterations, and then choose the largest set of inliers. We then re-compute a homography 
                using only these inliers, and return this as our final homography matrix. For visualization, below we show the final set of inliers used to compute our homography matrix. 
            </p>
            <br></br><br></br>
            <img src={living_room_01_ransac} style={{ width: '100%', height: 'auto', maxWidth: '1000px', marginLeft: '10%'}}></img>
            <br></br><br></br>
            <p className="text">
                Clearly, we see that a number of outliers from the previous step are removed with RANSAC. Thus, we can be more confident in the homography matrix we compute.
            </p>
            <h1 className="lvl3-header">Results w/ Automated Correspondence Points Finding</h1>
            <p className="text">
                Here are the mosaics generated using the automated correspondence points finding pipeline. I place them side-by-side with the results from part A (manual correspondence points)
            </p>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginTop: '30px' }}>
                {[
                    {image: living_room_auto_ransac_mosaic, caption: "Living Room Mosaic (Auto)"},
                    {image: living_room_manual_ols_mosaic, caption: "Living Room Mosaic (Manual)"},
                    {image: crescent_lawn_auto_ransac_mosaic, caption: "Crescent Lawn Mosaic (Auto)"},
                    {image: crescent_lawn_manual_ols_mosaic, caption: "Crescent Lawn Mosaic (Manual)"},
                    {image: berkeley_city_auto_ransac_mosaic, caption: "Berkeley City Mosaic (Auto)"},
                    {image: berkeley_city_manual_ols_mosaic, caption: "Berkeley City Mosaic (Manual)"},
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '500px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br></br><br></br>
            <p className="text">
                As we can see, the mosaics generated using the automated correspondence points finding pipeline are quite similar to those generated using manual correspondence points. This is a good sign, as it means that our 
                automated pipeline is working as intended! There are slight differences between the two (if we zoom in carefully), but I'm happy with these results overall. While manually finding correspondence points
                ensures that we have the most accurate homographies, the automated pipeline is far more efficient and can be used for new images without much hassle (aside from hyper-parameter tuning.)
            </p>
            <h1 className="lvl2-header">Bells & Whistles</h1>
            <h1 className="lvl3-header">Rotation-Invariant Feature Descriptors</h1>
            <p className="text">
                One of the bells and whistles I implemented was rotation-invariant feature descriptors from SIFT. I calculate the gradient of the feature window in both the x and y directions, and then the magnitude of the gradient. 
                I do this for each pixel in the window, and then find the orientation of the gradient with arctan(grad_y, grad_x). After ensuring all angles are positive, I then create a histogram of the gradient orientations.
                I choose the peak of the histogram as the final orientation for the window, and then rotate the window by this angle about its center. I then extract the feature descriptor as normal. Below I show the results
                of this rotation-invariant feature descriptor extraction on the Berkeley City image.
            </p>
            <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginTop: '30px' }}>
                {[
                    {image: crescent_lawn0_patches, caption: "Regular Feature Descriptors"},
                    {image: crescent_lawn0_invariant_patches, caption: "Rotation-Invariant Feature Descriptors"},
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                    <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '500px' }} />
                    <p>{item.caption}</p>
                    </div>
                ))}
            </div>
            <br></br><br></br>
            <p className="text">
                Some of the rotation-invariant feature descriptors may not exactly look like the rotated version of their regular counterparts, but this is becasue rotation of the patches can lead to clipping of the image. When normalizing, 
                this leads to different-looking feature descriptors. However, I found that, for the most part, this did not affect the mosaic negatively in any way. In fact, I think that the crescent law rotation-invariant feature descriptor based
                mosaic looks better than the regular feature descriptor based mosaic.
            </p>
            <br></br><br></br>
            <img src={crescent_lawn_auto_ransac_rot_invariant_mosaic} style={{ width: '100%', height: 'auto', maxWidth: '500px', marginLeft: '25%'}} /> 
            <h1 className="lvl2-header">Conclusion</h1>
            <p className="text">
                All in all, I found this project to be very interesting! I learned a lot about how homographies can be used to create perspective shifts in images, and how they can be used to stitch images together. 
                I thought that the RANSAC algorithm to compute homographies was really interesting, and I'm glad I got to implement it. I also liked how this project drives us to read a research apper on our own, understand it, and then 
                implement parts of it. Coolest part was definitely seeing the mosaics come together at the end using the automated pipeline. 
            </p>
            <br></br><br></br><br></br><br></br>
            

        </div>
    );
}

export default Proj04;