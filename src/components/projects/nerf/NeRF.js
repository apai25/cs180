import React from 'react';
import './NeRF.css';

import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

import dog_test_default_param_100 from '../../../static/nerf/1/dog-test/default_param/100.png';
import dog_test_default_param_500 from '../../../static/nerf/1/dog-test/default_param/500.png';
import dog_test_default_param_1500 from '../../../static/nerf/1/dog-test/default_param/1500.png';
import dog_test_default_param_3000 from '../../../static/nerf/1/dog-test/default_param/3000.png';
import dog_test_default_param_psnr_curve from '../../../static/nerf/1/dog-test/default_param/psnr_curve.png';

import dog_test_high_dim_100 from '../../../static/nerf/1/dog-test/high_dim/100.png';
import dog_test_high_dim_500 from '../../../static/nerf/1/dog-test/high_dim/500.png';
import dog_test_high_dim_1500 from '../../../static/nerf/1/dog-test/high_dim/1500.png';
import dog_test_high_dim_3000 from '../../../static/nerf/1/dog-test/high_dim/3000.png';
import dog_test_high_dim_psnr_curve from '../../../static/nerf/1/dog-test/high_dim/psnr_curve.png';

import dog_test_l2_100 from '../../../static/nerf/1/dog-test/l=2/100.png';
import dog_test_l2_500 from '../../../static/nerf/1/dog-test/l=2/500.png';
import dog_test_l2_1500 from '../../../static/nerf/1/dog-test/l=2/1500.png';
import dog_test_l2_3000 from '../../../static/nerf/1/dog-test/l=2/3000.png';
import dog_test_l2_psnr_curve from '../../../static/nerf/1/dog-test/l=2/psnr_curve.png';

import dog_test_low_dim_100 from '../../../static/nerf/1/dog-test/low_dim/100.png';
import dog_test_low_dim_500 from '../../../static/nerf/1/dog-test/low_dim/500.png';
import dog_test_low_dim_1500 from '../../../static/nerf/1/dog-test/low_dim/1500.png';
import dog_test_low_dim_3000 from '../../../static/nerf/1/dog-test/low_dim/3000.png';
import dog_test_low_dim_psnr_curve from '../../../static/nerf/1/dog-test/low_dim/psnr_curve.png';

import lbj_default_param_100 from '../../../static/nerf/1/lbj/default_param/100.png';
import lbj_default_param_500 from '../../../static/nerf/1/lbj/default_param/500.png';
import lbj_default_param_1500 from '../../../static/nerf/1/lbj/default_param/1500.png';
import lbj_default_param_3000 from '../../../static/nerf/1/lbj/default_param/3000.png';
import lbj_default_param_psnr_curve from '../../../static/nerf/1/lbj/default_param/psnr_curve.png';

import dog_test from '../../../static/nerf/1/dog-test/dog-test.jpg';
import lbj from '../../../static/nerf/1/lbj/lbj.jpg';

import all_cams from '../../../static/nerf/2/data_visualization/all_cams.png';
import single_cam_full from '../../../static/nerf/2/data_visualization/single_cam_full.png';
import single_cam_straight_on from '../../../static/nerf/2/data_visualization/single_cam_straight_on.png';
import single_cam_angle from '../../../static/nerf/2/data_visualization/single_cam_angle.png';

import net_arch from '../../../static/nerf/2/net_arch.png';

import nerf_100_0 from '../../../static/nerf/2/training/100/sampled_0.png';
import nerf_100_1 from '../../../static/nerf/2/training/100/sampled_1.png';
import nerf_100_2 from '../../../static/nerf/2/training/100/sampled_2.png';
import nerf_100_3 from '../../../static/nerf/2/training/100/sampled_3.png';
import nerf_100_4 from '../../../static/nerf/2/training/100/sampled_4.png';
import nerf_100_5 from '../../../static/nerf/2/training/100/sampled_5.png';
import nerf_100_6 from '../../../static/nerf/2/training/100/sampled_6.png';
import nerf_100_7 from '../../../static/nerf/2/training/100/sampled_7.png';
import nerf_100_8 from '../../../static/nerf/2/training/100/sampled_8.png';
import nerf_100_9 from '../../../static/nerf/2/training/100/sampled_9.png';

import nerf_500_0 from '../../../static/nerf/2/training/500/sampled_0.png';
import nerf_500_1 from '../../../static/nerf/2/training/500/sampled_1.png';
import nerf_500_2 from '../../../static/nerf/2/training/500/sampled_2.png';
import nerf_500_3 from '../../../static/nerf/2/training/500/sampled_3.png';
import nerf_500_4 from '../../../static/nerf/2/training/500/sampled_4.png';
import nerf_500_5 from '../../../static/nerf/2/training/500/sampled_5.png';
import nerf_500_6 from '../../../static/nerf/2/training/500/sampled_6.png';
import nerf_500_7 from '../../../static/nerf/2/training/500/sampled_7.png';
import nerf_500_8 from '../../../static/nerf/2/training/500/sampled_8.png';
import nerf_500_9 from '../../../static/nerf/2/training/500/sampled_9.png';

import nerf_1500_0 from '../../../static/nerf/2/training/1500/sampled_0.png';
import nerf_1500_1 from '../../../static/nerf/2/training/1500/sampled_1.png';
import nerf_1500_2 from '../../../static/nerf/2/training/1500/sampled_2.png';
import nerf_1500_3 from '../../../static/nerf/2/training/1500/sampled_3.png';
import nerf_1500_4 from '../../../static/nerf/2/training/1500/sampled_4.png';
import nerf_1500_5 from '../../../static/nerf/2/training/1500/sampled_5.png';
import nerf_1500_6 from '../../../static/nerf/2/training/1500/sampled_6.png';
import nerf_1500_7 from '../../../static/nerf/2/training/1500/sampled_7.png';
import nerf_1500_8 from '../../../static/nerf/2/training/1500/sampled_8.png';
import nerf_1500_9 from '../../../static/nerf/2/training/1500/sampled_9.png';

import nerf_3000_0 from '../../../static/nerf/2/training/3000/sampled_0.png';
import nerf_3000_1 from '../../../static/nerf/2/training/3000/sampled_1.png';
import nerf_3000_2 from '../../../static/nerf/2/training/3000/sampled_2.png';
import nerf_3000_3 from '../../../static/nerf/2/training/3000/sampled_3.png';
import nerf_3000_4 from '../../../static/nerf/2/training/3000/sampled_4.png';
import nerf_3000_5 from '../../../static/nerf/2/training/3000/sampled_5.png';
import nerf_3000_6 from '../../../static/nerf/2/training/3000/sampled_6.png';
import nerf_3000_7 from '../../../static/nerf/2/training/3000/sampled_7.png';
import nerf_3000_8 from '../../../static/nerf/2/training/3000/sampled_8.png';
import nerf_3000_9 from '../../../static/nerf/2/training/3000/sampled_9.png';

import nerf_psnr_curve from '../../../static/nerf/2/training/psnr_curve.png';

import nerf_video_black from '../../../static/nerf/2/nerf_video_black.gif';
import nerf_video_purple from '../../../static/nerf/2/nerf_video_purple.gif';


const NeRF = () => {
    return (
        <div className="main">
            <h1 className="main-header">Final Project: Neural Radiance Fields</h1>
            <div className="content">
                <h1 className="lvl2-header">Overview</h1>
                <p className="text">
                    In this project, we explore a more contemporary method for 3D scene reconstruction: neural radiance fields. We start by applying these models to 
                    2D image reconstruction (neural fields), and then extend them to the reconstruction of a small simplistic lego scene in 3D. We implement the model 
                    from scratch in PyTorch, and train it on a pre-existing dataset. 
                </p>
                <h1 className="lvl2-header">Part #1: Fit a Neural Field to 2D Image</h1>
                <p className="text">
                    We can introduce ourselves to NeRF by starting with a simpler problem: fitting a neural field to a 2D image. This is a relatively simple problem that 
                    can be solved with a simple feed-forward neural network. The network takes in a 2D coordinate (pixel location) and outputs a three-dimensional vector
                    representing the color of the pixel at that location. 
                </p>
                <h1 className="lvl3-header">Implementing the Network</h1>
                <p className="text">
                    However, this is an over-simplification. Simply inputting the pixel location into the network will not provide it with enough contextual information 
                    to accurately infer pixel color. To combat this, we use a sinusoidal position encoding of the pixel location. We can represent this as follows. 
                    <BlockMath math="\text{PE}(x)=\{x,\text{sin}(2^0\pi x), \text{cos}(2^0\pi x), \cdots, \text{sin}(2^{L-1}\pi x), \text{cos}(2^{L-1}\pi x)\}"></BlockMath>
                    L is represents the number of frequency levels we want for our encoding. As we increase L, we can capture more complex patterns in the input coordinate. I use the 
                    network architecture from the project spec, so I will omit the diagram here for brevity. However, I do try varying the number of frequency levels and hidden layers
                    in the network to see the effect it has on the model's performance (discussed further in results section).
                </p>
                <h1 className="lvl3-header">Implementing the Dataloader</h1>
                <p className="text">
                    The dataloader for this network is also relatively simple. For a certain batch size N, at each training iteration, we can sample N random pixel 
                    locations from the image. We can then use these pixel lcoations, along with their ground-truth RGB color values, to train the network. I use a batch size of 10k 
                    and train for 3000 iterations. 
                    <br/><br/>
                    More concretely, I create a PyTorch dataset class that allows you to index into an image and retrieve the corresponding pixel color. I use the in-build PyTorch dataloader
                    implementation to handle the rest of the training process. 
                </p>
                <h1 className="lvl3-header">Implementing the Loss Function, Optimizer, Metrics</h1>
                <p className="text">
                    As mentioned previously, the network minimizes an L2 loss between predicted color and ground-truth color. I use the Adam optimizer with a learning rate of 0.01, 
                    as recommended by the spec. However, it's worth noting that it might be a little easier to visualize the network's progress using PSNR instead. PSNR is a metric 
                    that measures the quality of image reconstruction in a more human-readable way. The higher the PSNR, the better the image reconstruction. 
                    We define PSNR as follows:
                    <BlockMath math="\text{PSNR} = 10\log_{10}\left(\frac{1}{\text{MSE}}\right)"></BlockMath>
                    Where MSE is the mean squared error between the predicted and ground-truth image (L2 loss).
                </p>
                <h1 className="lvl3-header">Results</h1>
                <p className="text">
                    Let's take a look at the results of the network. We'll try a variety of hyperparameters and network architectures to see how they affect the model's performance.
                    We'll try changing the number of frequency levels in the position encoding, as well as the number of hidden layers in the network. To evaluate the models' performance, we can 
                    plot the PSNR over the course of training (on the validation set), as well as visualize the reconstruction of the source img. After identifying the most optimal 
                    set of hyperparameters, we can then try training the model on a different image to ensure that the hyperparameters are generalizable. Let's first try training the model 
                    on the test dog image. 
                </p>
                <br/><br/>
                <h1 className="lvl4-header">L = 10, Hidden Dims = [256, 256, 256]</h1>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '40px' }}>
                    {[
                        {image: dog_test_default_param_100, caption: "Iter 100"},
                        {image: dog_test_default_param_500, caption: "Iter 500"},
                        {image: dog_test_default_param_1500, caption: "Iter 1500"},
                        {image: dog_test_default_param_3000, caption: "Iter 3000"},
                        {image: dog_test, caption: "Original"}
                    ].map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '500px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <img src={dog_test_default_param_psnr_curve} alt="psnr-curve" style={{ marginLeft: '30%', width: '100%', height: 'auto', maxWidth: '500px', marginTop: '40px' }} />
                <br/><br/><br/>
                <h1 className="lvl4-header">L = 15, Hidden Dims = [64, 64, 64, 64, 64, 64]</h1>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '40px' }}>
                    {[
                        {image: dog_test_high_dim_100, caption: "Iter 100"},
                        {image: dog_test_high_dim_500, caption: "Iter 500"},
                        {image: dog_test_high_dim_1500, caption: "Iter 1500"},
                        {image: dog_test_high_dim_3000, caption: "Iter 3000"},
                        {image: dog_test, caption: "Original"}
                    ].map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '500px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <img src={dog_test_high_dim_psnr_curve} alt="psnr-curve" style={{ marginLeft: '30%', width: '100%', height: 'auto', maxWidth: '500px', marginTop: '40px' }} />
                <br/><br/><br/>
                <h1 className="lvl4-header">L = 2, Hidden Dims = [256, 256, 256]</h1>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '40px' }}>
                    {[
                        {image: dog_test_l2_100, caption: "Iter 100"},
                        {image: dog_test_l2_500, caption: "Iter 500"},
                        {image: dog_test_l2_1500, caption: "Iter 1500"},
                        {image: dog_test_l2_3000, caption: "Iter 3000"},
                        {image: dog_test, caption: "Original"}
                    ].map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '500px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <img src={dog_test_l2_psnr_curve} alt="psnr-curve" style={{ marginLeft: '30%', width: '100%', height: 'auto', maxWidth: '500px', marginTop: '40px' }} />
                <br/><br/><br/>
                <h1 className="lvl4-header">L = 10, Hidden Dims = [64]</h1>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '40px' }}>
                    {[
                        {image: dog_test_low_dim_100, caption: "Iter 100"},
                        {image: dog_test_low_dim_500, caption: "Iter 500"},
                        {image: dog_test_low_dim_1500, caption: "Iter 1500"},
                        {image: dog_test_low_dim_3000, caption: "Iter 3000"},
                        {image: dog_test, caption: "Original"}
                    ].map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '500px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <img src={dog_test_low_dim_psnr_curve} alt="psnr-curve" style={{ marginLeft: '30%', width: '100%', height: 'auto', maxWidth: '500px', marginTop: '40px' }} />
                <h1 className="lvl4-header">Hyperparameter Tuning Discussion</h1>
                <p className="text">
                    As we can see, decreasing L seems to have quite an interesting effect on the model's performance. When we use L = 2 while keeping the model capacity the same as default, 
                    we can see that the model appears to be struggling to capture more precise relationships between coordinate input and pixel color output. At the same time, decreasing the 
                    model capacity by using a single hidden layer with 64 units also seems to have a negative effect on the model's performance. This suggests that the model needs a certain
                    level of complexity to capture the relationships between pixel coordinates and pixel color.
                    <br/><br/>
                    What did surprise me, however, is that increasing L = 15 and the hidden dims to [64, 64, 64, 64, 64] (over 1B parameters) did not seem to have a significant benefit over the 
                    default set of params. In fact, the PSNR was lower. I believe this is because the model is too deep, and may be forgetting certain information from the input (some fine details
                    are missing from output reconstruction). This may be resolvable by introducing skip connections, but the default parameters seem to work well enough. Let's try training this version 
                    of the model on a different image to ensure the architecture is generalizable.
                </p>
                <h1 className="lvl4-header">Training on LBJ Image</h1>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '40px' }}>
                    {[
                        {image: lbj_default_param_100, caption: "Iter 100"},
                        {image: lbj_default_param_500, caption: "Iter 500"},
                        {image: lbj_default_param_1500, caption: "Iter 1500"},
                        {image: lbj_default_param_3000, caption: "Iter 3000"},
                        {image: lbj, caption: "Original"}
                    ].map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '500px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <img src={lbj_default_param_psnr_curve} alt="psnr-curve" style={{ marginLeft: '30%', width: '100%', height: 'auto', maxWidth: '500px', marginTop: '40px' }} />
                <br/><br/><br/>
                <p className="text">
                    This is a far higher-resolution image than the dog image, so the output reconstruction may look slightly pixelated. I believe this could be resolved by training for a longer 
                    duration of time, or by increasing model capacity (more units per layer). However, the current model architecture does seem to be generalizable, as we achieve a PSNR of 29.75
                    on this lebron image. 
                </p>
                <h1 className="lvl2-header">Part #2: Fit a Neural Radiance Field to 3D Scene</h1>
                <p className="text">
                    Finally, we can begin to scale this idea toward 3D scene reconstruction. To convert pixels from different camera viewpoints into a cohesive 3D scene rendering, we must 
                    make use of our camera intrinsic and extrinsic matrices. 
                </p>
                <h1 className="lvl3-header">Creating Rays from Cameras</h1>
                <p className="text">
                    Our main goal is to take a pixel sampled from one of our training cameras (of the Lego scene), and convert it to a ray in 3D space. We can then sample 3d world coordinates from 
                    locations along that ray (which we will discuss in more depth later). First, we want to implement a function that takes a camera's extrinsics and intrinsics, along with a pixel coordinate, 
                    to output a ray in 3D space. 
                    <br/><br/>
                    First, we must convert a camera coordinate to a world coordinate. We can do this by using the data provided in the Lego 3D dataset. The w2c is a world-to-camera matrix that represents
                    the extrinsics of each camera. It contains of a rotation matrix R and a translation vector t. To convert a camera coordinate to a world coordinate, therefore, we can just 
                    use the inverse of this matrix (c2w). The lego dataset provides the c2w matrix directly. I use PyTorch to implement this function, as it allows us to use GPU for faster computation. 
                    I do not batch the computation of the rays, as it is not necessary given how I set up my dataloader and dataset (discussed in more depth later). 
                    <br/><br/>
                    To obtain the camera coordinate in the first place, we must transform the pixel coordinate. This can be done using the camera's intrinsic matrix. The intrinsic matrix is a 3x3 matrix 
                    that contains the camera's focal length and principal points. The principal point is just the image center, while the focal length is provided by the Lego 3D dataset. To obtain the 
                    camera coordiante from the pixel coordinate, we can multiply <InlineMath math="sK^{-1}p"></InlineMath>, where K is the intrinsic matrix, p is the pixel coordinate, and s is the depth of the point
                    along this optical axis. The pixel coordinate is a homogeneous coordinate (u, v, 1).
                    <br/><br/>
                    Finally, we can put this all together to obtain the pixel_to_ray function. A ray is defined by an origin and a direction. The origin can be easily obtained using the camera's extrinsics. 
                    <InlineMath math="r_\text{o} = -R_\text{3x3}^{-1}t"></InlineMath>. From this, we can obtain the direction of the ray with <InlineMath math="r_\text{d} = \frac{X_w-r_o}{||X_w-r_o||_2}"></InlineMath>, where 
                    X_w is the world coordinate of the pixel. We obtain X_w using the two functions created above. 
                </p>
                <h1 className="lvl3-header">Sampling 3D World Coordinates</h1>
                <p className="text">
                    But, we must remember that our model must be able to find the effective color of any 3D world coordinate, which means that we must sample 3D world points from the rays that we draw from the data distribution.
                    The way we can do this is by choosing certain points along our ray: <InlineMath math="x=R_o+R_d * t"></InlineMath>, for some t within fixed interval [2.0, 6.0]. However, this will result in 
                    the model seeing the same world coordinates for each ray sampled. To combat this, we can jitter the t value slightly by introducing a perturbation. I use t_width = 0.02 and perturb t by 
                    some <InlineMath math="\delta=\text{torch.randLike(t)} * t_\text{width}"></InlineMath>. This will allow the model to see different world coordinates for each ray sampled, each time it sees that ray. 
                    <br/><br/>
                    As for how I sample the rays themselves, I define a simple batch sampler that globally samples an index of a pixel from the flattened images in the dataset. I then recover the intrinsics/extrinsics belonging 
                    to the camera that the pixel belongs to, and use the pixel_to_ray function to obtain the ray itself. From this ray, I sample the 3D world coordinates as described in the previous paragraph. 
                </p>
                <h1 className="lvl3-header">Putting the DataLoader Together + Results</h1>
                <p className="text">
                    In this section, I will describe on a high-level how I implemented and put together the detail from the previous sections in a dataloader. I will also show the results of the data loader's sampling process at any given 
                    training step. 
                    <br/><br/>
                    I define a PyTorch dataset class that takes in the Lego 3D dataset path (and partition), and loads the necessary intrinsics/extrinsics/image data into PyTorch tensors. This dataset allows one to index into any pixel 
                    (from any camera) and retrieve the corresponding ray and ground-truth color. 
                    <br/><br/> 
                    To carry out the sampling, I use a PyTorch dataloader, which allows for quick data loading (with GPU support and fine-tuned number of workers). I define a custom batch sampler that samples 10k pixels (and thus, 10k rays)
                    from the dataset at each training iteration. The batch sampler returns the indexes of the sampled pixels, which can be used by the PyTorch dataloader to retrieve the corresponding rays and groudn-truth colors from the 
                    dataset. 
                    <br/><br/>
                    I also define a function sample_along_ray that takes in a ray origin and direction (along with other hyperparameters like NEAR, FAR, and t_WIDTH), and returns 64 world coordinates along that ray. This function essentially 
                    returns the main input to the model. 
                    <br/><br/>
                    Adapting the sample code on the spec, we can use viser to visualize a 3D reconstruction of the rays sampled by the dataloader. To make it easier to see, I only visualize up to 100 rays. However, it's important to keep in mind that the 
                    batch sampler used during training has a batch size of 10k. Here are the visualizations.
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', marginTop: '40px' }}>
                    {[
                        {image: all_cams, caption: "Rays sampled from all cameras (at a single training step, 100 rays)"},
                        {image: single_cam_full, caption: "Visualization of 100 rays sampled from single camera"},
                        {image: single_cam_straight_on, caption: "100 rays sampled from single camera, PoV of frustum"},
                        {image: single_cam_angle, caption: "100 rays sampled from single camera, PoV at an angle"}
                    ].map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '400px' }} />
                        <p>{item.caption}</p>
                        </div>
                    ))}
                </div>
                <br/><br/>
                <h1 className="lvl3-header">Implementing the NeRF Network</h1>
                <p className="text">
                    Now that we have the dataloader set up, we can begin implementing the NeRF network in PyTorch. The network is a little bit more complex than the neural field network, as it must have the capacity to represent complex relationships between 
                    3D world coordinate and pixel color outputs. The network will take in a 3D world coordinate, along with ray direction, and output an RGB color and density. We'll see why the density is important in the next section. 
                    The architecture I used is very similar than the one provided in the project spec, albeit with one small tweak. I provide a diagram below for reference. 
                </p>
                <img src={net_arch} alt="net-arch" style={{ width: '100%', height: 'auto', maxWidth: '800px', marginLeft: '10%', marginTop: '40px' }} />
                <p className="text">
                    One important part of this architecture is how we re-inject the world coordinate input halfway through the main MLP of the model. This prevents the model from forgetting the input, 
                    allowing it to better capture the relationships between the input coordinate and the output. 
                </p>
                <h1 className="lvl3-header">Volume Rendering</h1>
                <p className="text">
                    Finally, we can discuss how to train the model, and actually reconstruct the original color output from the camera viewpoint. To do this, we must use the volume rendering equation (as provided on the spec). We use the discretized 
                    form of the equation for training, as it is numerically tractable, whereas the integral is not. The idea is to consolidate the colors and densities of the 3D world coordinates sampled along a single ray into a single color output. 
                    We want to take into account the probabilty that the color from a certain point on the ray is occluded by another point on the ray, which would affect the color seen by the viewer. This is an important part of the model; since we
                    do not assume that color is constant along a ray, we are able to capture more dynamic 3D relationships between the input and output. Here is the equation (discretized):
                    <BlockMath math="C(r) = \sum_{i=1}^{N} T_i \left(1-\exp(-\sigma_i \delta_i)\right)c_i"></BlockMath>
                    where <InlineMath math="C(r)"></InlineMath> is the color output, <InlineMath math="T_i"></InlineMath> is the transmittance of the ray at point i, <InlineMath math="\sigma_i"></InlineMath> is the density of the ray at point i
                    , <InlineMath math="\delta_i"></InlineMath> is the distance between point i and point i+1, and <InlineMath math="c_i"></InlineMath> is the color at point i. 
                    We can define the transmittance as <InlineMath math="T_i = \exp(-\sum_{j=1}^{i-1}\sigma_j  \delta_j)"></InlineMath>. In essence, the transmittance describes the probabilty of a ray not terminating before the sample location i.
                    <br/><br/>
                    Once we have our model's color output for every sample along a ray, we can consolidate the densities by feeding them into this equation. We use step size <InlineMath math="\delta_i = \frac{\text{far} - \text{near}}{\text{nSamples}}"></InlineMath> for all rays.
                    I define far = 6.0, near = 2.0, and n_samples = 64 (as recommended by the spec). The final NeRF is the output of this volume rendering equation. 
                </p>
                <h1 className="lvl3-header">Training</h1>
                <p className="text">
                    To train the model, we can use the Adam optimizer with a learning rate of 5e-4. We can use the same L2 loss as before to train the model (between volume-rendered output and ground-truth color). We can also use the PSNR metric to evaluate the model's performance. 
                    We can train the model for 3k iterations, and evaluate the model's performance on the validation set every 100 iterations. Below, I show the results of the model's reconstruction of validation data at several training iterations, as well as the PSNR curve 
                    along the course of training. We achieve a final validation PSNR of approximately ~29.7, which is quite good. 
                </p>
                <div className="image-table" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '30px' }}>
                    {[
                        {image: nerf_100_0, caption: "Val Sample 0, Iter 100"},
                        {image: nerf_500_0, caption: "Val Sample 0, Iter 500"},
                        {image: nerf_1500_0, caption: "Val Sample 0, Iter 1500"},
                        {image: nerf_3000_0, caption: "Val Sample 0, Iter 3000"},
                        {image: nerf_100_1, caption: "Val Sample 1, Iter 100"},
                        {image: nerf_500_1, caption: "Val Sample 1, Iter 500"},
                        {image: nerf_1500_1, caption: "Val Sample 1, Iter 1500"},
                        {image: nerf_3000_1, caption: "Val Sample 1, Iter 3000"},
                        {image: nerf_100_2, caption: "Val Sample 2, Iter 100"},
                        {image: nerf_500_2, caption: "Val Sample 2, Iter 500"},
                        {image: nerf_1500_2, caption: "Val Sample 2, Iter 1500"},
                        {image: nerf_3000_2, caption: "Val Sample 2, Iter 3000"},
                        {image: nerf_100_3, caption: "Val Sample 3, Iter 100"},
                        {image: nerf_500_3, caption: "Val Sample 3, Iter 500"},
                        {image: nerf_1500_3, caption: "Val Sample 3, Iter 1500"},
                        {image: nerf_3000_3, caption: "Val Sample 3, Iter 3000"},
                        {image: nerf_100_4, caption: "Val Sample 4, Iter 100"},
                        {image: nerf_500_4, caption: "Val Sample 4, Iter 500"},
                        {image: nerf_1500_4, caption: "Val Sample 4, Iter 1500"},
                        {image: nerf_3000_4, caption: "Val Sample 4, Iter 3000"},
                        {image: nerf_100_5, caption: "Val Sample 5, Iter 100"},
                        {image: nerf_500_5, caption: "Val Sample 5, Iter 500"},
                        {image: nerf_1500_5, caption: "Val Sample 5, Iter 1500"},
                        {image: nerf_3000_5, caption: "Val Sample 5, Iter 3000"},
                        {image: nerf_100_6, caption: "Val Sample 6, Iter 100"},
                        {image: nerf_500_6, caption: "Val Sample 6, Iter 500"},
                        {image: nerf_1500_6, caption: "Val Sample 6, Iter 1500"},
                        {image: nerf_3000_6, caption: "Val Sample 6, Iter 3000"},
                        {image: nerf_100_7, caption: "Val Sample 7, Iter 100"},
                        {image: nerf_500_7, caption: "Val Sample 7, Iter 500"},
                        {image: nerf_1500_7, caption: "Val Sample 7, Iter 1500"},
                        {image: nerf_3000_7, caption: "Val Sample 7, Iter 3000"},
                        {image: nerf_100_8, caption: "Val Sample 8, Iter 100"},
                        {image: nerf_500_8, caption: "Val Sample 8, Iter 500"},
                        {image: nerf_1500_8, caption: "Val Sample 8, Iter 1500"},
                        {image: nerf_3000_8, caption: "Val Sample 8, Iter 3000"},
                        {image: nerf_100_9, caption: "Val Sample 9, Iter 100"},
                        {image: nerf_500_9, caption: "Val Sample 9, Iter 500"},
                        {image: nerf_1500_9, caption: "Val Sample 9, Iter 1500"},
                        {image: nerf_3000_9, caption: "Val Sample 9, Iter 3000"},
                    ].map((item, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                        <img src={item.image} alt={`image-${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px', marginTop: '15px'}} />
                        <p>{item.caption}</p>
                        </div>
                    ))}

                </div>
                <br/><br/>
                <p className="text">
                    Finally, here is the PSNR curve on the validation set over the course of training.
                </p>
                <img src={nerf_psnr_curve} alt="psnr-curve" style={{ marginLeft: '30%', width: '100%', height: 'auto', maxWidth: '500px', marginTop: '10px' }} />
                <h1 className="lvl3-header">NeRF Video</h1>
                <p className="text">
                    Now that we have our trained NeRF model, we can actually use it to reconstruct a spherical 3D rendering of the scene. I use the provided test camera intrinsics (for which we don't have ground-truth image data), and the model's inference code to generate the below 
                    GIF. Essentially all I am doing is concatenating the reconstructed viewpoints together to form a video.
                </p>
                <img src={nerf_video_black} alt="nerf-video" style={{ width: '100%', height: 'auto', maxWidth: '200px', marginTop: '40px', marginLeft: '45%'}} />
                <h1 className="lvl2-header">Bells & Whistles</h1>
                <h1 className="lvl3-header">NeRF Video with Colored Background</h1>
                <p className="text">
                    We can make a simple change to our volume rendering implementation to allow for colored backgrounds; this does not require re-training our model. We can simply inject color using the accumulated transmittance along a ray. The idea is that 
                    we inject background color where the model believes there is no object (the ray doesn't hit any object in the scene). Thus, the ingestion of the background color should directly scale with the transmittance at a certain point in the ray. 
                    After obtaining the color output from the model, we can update the color adding the product of the RGB color with the <strong>accumulated</strong> transmittance, the fraction of light that has not been absorbed up to that point in the ray. This will allow us to see a colored background in the final video. 
                    Here is the same video as above, albeit with a purple background.
                </p>
                <img src={nerf_video_purple} alt="nerf-video" style={{ width: '100%', height: 'auto', maxWidth: '200px', marginTop: '40px', marginLeft: '45%'}} />
                <h1 className="lvl2-header">Conclusion</h1>
                <p className="text">
                    This was definitely my favorite project this semester. I thought it was really cool how everything we learned about 3D, transformations, and camera extrinsics/intrinsics accumulated can accumulate itself into cutting-edge technology that is 
                    at the forefront of modern-day 3D computer vision. My favorite part of this project was creating the NeRF video at the end; it was cool to see how well the model performed on viewpoints that it hadn't seen before. 
                </p>
                <br/><br/><br/><br/><br/><br/>
            </div>
        </div>
    )
}


export default NeRF