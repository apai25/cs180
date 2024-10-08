import React from 'react';
import './Proj03.css';

import jayz from '../../../static/proj03/1/jayz.png'
import kanye from '../../../static/proj03/1/kanye.png'
import selected_points from '../../../static/proj03/1/selected_points.png'
import jayz_kanye_triangulation from '../../../static/proj03/1/triangulation.png'
import kanye_jayz_midway from '../../../static/proj03/2/midway_img.png'
import kanye_jayz_morph from '../../../static/proj03/3/morph.gif'
import fei_mean_neutral from '../../../static/proj03/4/neutral_avg.png'
import fei_mean_smile from '../../../static/proj03/4/smiling_avg.png'
import original_sample1 from '../../../static/proj03/4/original_faces/7b.jpg'
import original_sample2 from '../../../static/proj03/4/original_faces/11a.jpg'
import original_sample3 from '../../../static/proj03/4/original_faces/57b.jpg'
import original_sample4 from '../../../static/proj03/4/original_faces/160b.jpg'
import averaged_sample1 from '../../../static/proj03/4/averaged_faces/7b.png'
import averaged_sample2 from '../../../static/proj03/4/averaged_faces/11a.png'
import averaged_sample3 from '../../../static/proj03/4/averaged_faces/57b.png'
import averaged_sample4 from '../../../static/proj03/4/averaged_faces/160b.png'
import ani from '../../../static/proj03/4/ani.png'
import morphed_ani_to_avg from '../../../static/proj03/4/morphed_ani_to_avg.png'
import morphed_avg_to_ani from '../../../static/proj03/4/morphed_avg_to_ani.png'
import ani_caricature_0_25 from '../../../static/proj03/5/caricature[-0.25].png'
import ani_caricature_0_5 from '../../../static/proj03/5/caricature[-0.5].png'
import ani_caricature_0_75 from '../../../static/proj03/5/caricature[-0.75].png'
import ani_caricature_1_0 from '../../../static/proj03/5/caricature[-1.0].png'
import indian_woman from '../../../static/proj03/bw-female-ani/indian_woman.png'
import female_ani_ap from '../../../static/proj03/bw-female-ani/female_ani_ap.png'
import female_ani_shape from '../../../static/proj03/bw-female-ani/female_ani_shape.png'
import female_ani_full from '../../../static/proj03/bw-female-ani/female_ani_full.png'
import ironman from '../../../static/proj03/bw-avengers-movie/avengers_headshots/ironman.png'
import thor from '../../../static/proj03/bw-avengers-movie/avengers_headshots/thor.png'
import hulk from '../../../static/proj03/bw-avengers-movie/avengers_headshots/hulk.png'
import cap from '../../../static/proj03/bw-avengers-movie/avengers_headshots/cap.png'
import widow from '../../../static/proj03/bw-avengers-movie/avengers_headshots/widow.png'
import hawkeye from '../../../static/proj03/bw-avengers-movie/avengers_headshots/hawkeye.png'
import avengers_morph from '../../../static/proj03/bw-avengers-movie/morph.gif'

const data_1_jayz_kanye = [
    {image: kanye, caption: 'Kanye West'},
    {image: jayz, caption: 'Jay-Z'},
]
const data_1_selected_points = [
    {image: selected_points, caption: 'Selected Correspondences'}
]
const data_1_triangulation = [
    {image: jayz_kanye_triangulation, caption: 'Triangulation of Correspondences'},
]

const data_2_midway = [
    {image: kanye_jayz_midway, caption: 'Ye-Z'}
]

const data_3_morph = [
    {image: kanye_jayz_morph, caption: 'Ye to Z'}
]

const data_4_mean_faces = [
    {image: fei_mean_neutral, caption: 'Neutral Average'},
    {image: fei_mean_smile, caption: 'Smiling Average'}
]
const data_4_samples = [
    {image: original_sample1, caption: 'Sample 1 (Original)'},
    {image: averaged_sample1, caption: 'Sample 1 (Warped)'},
    {image: original_sample2, caption: 'Sample 2 (Original)'},
    {image: averaged_sample2, caption: 'Sample 2 (Warped)'},
    {image: original_sample3, caption: 'Sample 3 (Original)'},
    {image: averaged_sample3, caption: 'Sample 3 (Warped)'},
    {image: original_sample4, caption: 'Sample 4 (Original)'},
    {image: averaged_sample4, caption: 'Sample 4 (Warped)'},
]
const data_4_ani_to_avg = [
    {image: ani, caption: 'Me'},
    {image: morphed_ani_to_avg, caption: 'Morphing My Face to Neutral Average'}
]
const data_4_avg_to_ani = [
    {image: fei_mean_neutral, caption: 'Neutral Average'},
    {image: morphed_avg_to_ani, caption: 'Morphing Neutral Average to My Face'}
]
const data_5_caricature = [
    {image: ani, caption: 'Me'},
    {image: ani_caricature_0_25, caption: 'Caricature [alpha = -0.25]'},
    {image: ani_caricature_0_5, caption: 'Caricature [alpha = -0.5]'},
    {image: ani_caricature_0_75, caption: 'Caricature [alpha = -0.75]'},
    {image: ani_caricature_1_0, caption: 'Caricature [alpha = -1.0]'}
]

const bw_female_ani_indian_woman = [
    {image: indian_woman, caption: "Mean Indian Woman Face"},
    {image: female_ani_ap, caption: "Appearance Morph"},
    {image: female_ani_shape, caption: "Shape Morph"},
    {image: female_ani_full, caption: "Full Morph (Warp + Appearance)"}
]

const bw_avengers = [
    {image: ironman, caption: "Iron Man"},
    {image: cap, caption: "Captain America"},
    {image: thor, caption: "Thor"},
    {image: hulk, caption: "Hulk"},
    {image: widow, caption: "Black Widow"},
    {image: hawkeye, caption: "Hawkeye"},
]

const bw_avengers_morph = [
    {image: avengers_morph, caption: "Avengers Morph-Movie"}
]

const Proj03 = () => {
    return (
        <div className="main">
            <h1 className="main-header">Project #3: Face Morphing</h1>
            <div className="content">
                <h1 className="lvl2-header">Overview</h1>
                <p className="text">
                    In this project, we use our learning on image morphing and image averaging to create various face morphing + cross-disolving effects. We 
                    start by exploring how correspondence points can be used to morph two images into a "midpoint" in between the two, and then extend this to
                    morphing between a single image and the average of an entire population. We see how this can be used to create "average faces" as well as 
                    a variety of other effects.
                </p>
                <h1 className="lvl2-header">Part #1: Defining Correspondences</h1>
                <p className="text">
                    We introduce ourselves to the notion of correspondences by seeing how we can define keypoints on two images, and use these to create a triangulation
                    on each image. I chose the below images of Kanye West and Jay-Z, and defined correspondences on their faces. I selected the correspondences
                    by creating my own function using matplotlib's ginput, which allowed me to manually click on the images and select keypoints.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 2fr)', gap: '20px', marginTop: '40px' }}>
                    {data_1_jayz_kanye.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', marginTop: '0' }}>
                    {data_1_selected_points.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '900px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/><br/><br/><br/><br/>
                <p className="text">
                    How do we triangulate these points? We want to ensure that the triangulation is consistent between the images along our morph (see next sections). This
                    means that we should find a "middle" set of points that can be used to create a Delaunay triangulation on both images. We can do this by finding the average
                    of each pair of corresponding keypoints/correspondences in the image: (p1 + p2) / 2. The Delaunay triangulation returns indexes that represent the vertices
                    of the triangles. So, we can use these same indexes to triangulate each individual image.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', marginTop: '0' }}>
                    {data_1_triangulation.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '900px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/><br/><br/><br/><br/>
                <h1 className="lvl2-header">Part #2: Computing the "Mid-Way" Face</h1>
                <p className="text">
                    We can now use the triangulation to morph between the two images. Before creating an entire sequence of morphs, however, we can start by simply generating
                    the "midpoint" morph between these two images. This involves a few steps: first, we must warp both images to the averages of the keypoints. Then, we can
                    cross-dissolve with equal weights to create the final image. 
                    <br/><br/>
                    Before showing the results, let's discuss this in more detail. Using the average correspondences calculated in the previous part, we obtain a set of triangles
                    using Delaunay's triangulation algorithm. We then calculate two affine transformation matrices for each triangle: one maps Kanye's triangle to the average, and one maps 
                    Jay-Z's triangle to the average. We then use inverse warping to map each pixel in the average image to the corresponding pixel in the two images. To find the set of pixels
                    within each triangle, we use the <code>polygon</code>, as mentioned in the project spec.We interpolate in the case that the pixel coords in the source image are not integers. 
                    Finally, we cross-dissolve the result to get the final pixel value.  
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {data_2_midway.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '400px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <h1 className="lvl2-header">Part #3: The Morph Sequence</h1>
                <p className="text">
                    Now, the fun part! We can create an entire sequence of morphs by changing our warp and cross-dissolve weights over time. Let our warp weight and cross-dissolve weights
                    be represented by <code>alpha</code>. Then, we can create a sequence of images by varying <code>alpha</code> from 0 to 1. Our average keypoint would be defined by: 
                    <code> p_avg = p1 * alpha + p2 * (1 - alpha)</code>. We adopt a similar approach for cross-dissolving, with the same parameter. We linearly change <code>alpha</code> over time
                    to create a smooth morphing effect. This is essentially following the same pattern of logic as part #2, except we vary the parameter <code>alpha</code> over time. We have a morph
                    of 50 frames, where each frame has a duration of 30ms.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {data_3_morph.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '400px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <h1 className="lvl2-header">Part #4: The "Mean Face" of a Population</h1>
                <p className="text">
                    So far, we have been morphing between two single images. But what if we wanted to capture larger trends in an entire population? Are there ways of trying to morph one image into 
                    capturing characteristics that are more generic over a group of faces? The answer to solving these problems comes with the concept of image averaging (as it relates to faces, at least).                 
                </p>
                <h1 className="lvl3-header">FEI Dataset</h1>
                <p className="text">
                    Before jumping into facial image averaging, let's first explore our dataset. For this task, I chose to use the FEI dataset, which contains images of 200 individuals with both neutral
                    and smiling facial expressions. The images are already quite well-aligned, which makes this data easy to work with for our purposes. To try to get the most precise results, 
                    I chose to average the neutral and smiling images of each individual separately. This way, we can capture the mean "smiling" and the mean "neutral" face. The annotations are provided
                    in .pts files, which contain the correspondences of each face. Each face has 46 correspondences, but I added four extra keypoints to represent the corners of the image. This results in 50 total
                    correspondences.
                </p>
                <h1 className="lvl3-header">Mean Faces of the Population</h1>
                <p className="text">
                    We can now create the mean face of the population by averaging the faces of each individual. Note that this does not mean simply averaging the pixel values of eaceh image. Rather, we 
                    average the correspondences of all the faces in our subset, and then morph each individual face to this average. We then average the morphed faces to get the final result, which we show below.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 2fr)', gap: '20px', marginTop: '40px' }}>
                    {data_4_mean_faces.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/><br/>
                <h1 className="lvl3-header">Warping FEI Faces to the Average</h1>
                <p className="text">
                    In the last step, we mentioned that to create the mean face of the population, we must warp each individual face to the average. Let's examine some examples of this below.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 2fr)', gap: '20px', marginTop: '40px' }}>
                    {data_4_samples.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '150px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/><br/>
                <p className="text">
                    As we can see, morphing each face to the average neutral/smiling (depending on expression in original image) shape seems to have a "smoothing" effect on the facial features. I.e, similar to how smoothing signals removes noise, "smoothing" faces in this case
                    removes more unique characteristics of each individual's features. In sample 1, for example, we see that the individual had a more pronounced chin, which is less visible in the warped, averaged result.
                    We see a similar effect in sample 2 as well. Sample 3, on the other hand, seems to have less pronounced differences between the original and warped faces, suggesting that the individual has
                    a more "mean" face to begin with. 
                </p>
                
                <h1 className="lvl3-header">Warping My (Ani's) Face to the Average Neutral Shape in FEI</h1>
                <p className="text">
                    There seem to be clearly visible effects of warping faces in the population to the average shape. What if we tried this on my face? Once again, note that we are warping to the average shape, not just taking
                    a naive average between my face and that of the mean face in the dataset.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {data_4_ani_to_avg.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/><br/>
                <p className="text">A little creepy to say the least. Will morphing the average face in FEI to my face's shape look any better?</p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {data_4_avg_to_ani.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/><br/>
                <p className="text">Apparently not. It seems as though my face has increased lip width from that of the average face in the FEI dataset, as well as some other more minor details. Interesting stuff!</p>
                <h1 className="lvl2-header">Part #5: Creating Caricatures by Extrapolating From the Mean</h1>
                <p className="text">
                    A caricature is an image that amplifies and/or exaggerates certain features of a person's face. Can we do this using what we've explored in this project? Well, since we know how to create the 
                    "mean" face of a population and morph faces to this mean, we can simply EXTRAPOLATE from the mean to create caricatures. In other words, we remove the "mean" features from our face, which will leave
                    us with the features our our face that stands our more. This results in a caricature. It's a little like image sharpening, where we remove low-frequency ("mean") components to leave the more unique, high-frequency
                    components. We can create a caricature of my face by morphing my face to a skewed set of correspondences. We define these correspondences by: <code>p_caricature = p_avg * alpha + p_me * (1 - alpha)</code>, where <code>alpha</code>
                    is less than 0. Intuitively, this means that we are subtracting the "mean" features from my face, and augmenting the non-mean unique features. This is exactly what we want!
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {data_5_caricature.map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '150px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/><br/>
                <p className="text">
                    As we can see, as we increase the magnitude of alpha (i.e, make it more negative), the caricature becomes more pronounced. It seems as though as we increase the magnitude of alpha, the caricature seems to be 
                    exaggering some asymmetry on the right side of my face (when looking at the image). In the original image, I believe my head is turned slightly to my right, which might be why we are seeing this effect
                    be so pronounced. The caricature also seems to be exaggerating the contours of my face and lips. 
                </p>
                <h1 className="lvl2-header">Bells & Whistles: Making My Face More Feminine</h1>
                <p className="text">
                    As an extension, I decided to see if I could make my face more feminine. To do this, I found the mean face of Indian women online. I then morphed my face to this average. To experiment with 
                    the results, I morphed using only cross-dissolve, only warp, and a combination of both (like we did earlier). The results are shown below.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {bw_female_ani_indian_woman.map((item, index) => (
                            <div key={index} style={{ textAlign: 'center' }}>
                            <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                            <p>{item.caption}</p>
                            </div>
                    ))}
                </div>
                <br/><br/>
                <p className="text">
                    We can see above that the full morph (shape + appearance) seems to have the most pronounced effect. The appearance-only morph seems to be the least effective. This is because the facial proportions
                    of my face is quite different than that of the average Indian woman. As a result, a lot of the interior features will not exactly line up, even if the exterior features are manually aligned. 
                </p>
                <h1 className="lvl2-header">Bells & Whistles: Avengers</h1>
                <p className="text">
                    For fun, I decided to make a little morph-movie of the original Avengers cast! I created a GIF (and an mp4 with music) of the morphing sequence. I approached this very similarly to how I morphed together
                    Kanye and Jay-Z. I defined correspondences on each face, and then morphed between each pair of faces, resulting in a final smooth chain. The GIF is shown below, and the link to the full video with music is provided.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {bw_avengers.map((item, index) => (
                            <div key={index} style={{ textAlign: 'center' }}>
                            <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '200px' }} />
                            <p>{item.caption}</p>
                            </div>
                    ))}
                </div>
                <br/><br/>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', marginTop: '40px' }}>
                    {bw_avengers_morph.map((item, index) => (
                            <div key={index} style={{ textAlign: 'center' }}>
                            <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '500px' }} />
                            <p>{item.caption}</p>
                            </div>
                    ))}
                </div>
                <br/><br/>
                <p className="text">
                    Here's the link to the full video with music: <a href="https://drive.google.com/file/d/132k3PZVsma27oDDt07z_POlSy9vcpP90/view?usp=sharing">Avengers Morph-Movie</a>
                </p>
                <h1 className="lvl2-header">Conclusion</h1>
                <p className="text">
                    This project was a lot of fun! We learned how to morph between two images using correspondences, and how to create a sequence of morphs by varying warp and cross-dissolve weights. We also explored how to create the mean face of a population, and how to morph faces to this mean to create caricatures. 
                    What I found most interesting/fun about this project was learning about triangulation, and how it can be used to create smooth morphing effects by facilitating local warping. I enjoyed implementing this portion
                    of the project as well.
                </p>
            <br/><br/><br/><br/>
            </div>
        </div>
    );
}

export default Proj03;