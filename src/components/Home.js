import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';

const Home = () => {
    return (
        <div className="main">
            <h1 className="main-header">CS180 Website (Anirudh Pai)</h1>
            <div className="projects">
                <h1 className="projects-header"></h1>
                <div className="project-entry">
                    <h2 className="project-header"><Link to="/proj01"className="link">Project #1: Images of the Russian Empire: Colorizing the Prokudin-Gorskii photo collection</Link></h2>
                    <p className="project-desc">
                        In this project, we focus on using different image error metrics to align three different color channel images
                        to produce a single colored image. 
                    </p>
                </div>
                <div className="project-entry">
                    <h2 className="project-header"><Link to="/proj02"className="link">Project #2: Fun With Filters and Frequencies</Link></h2>
                    <p className="project-desc">
                        In this project, we use our learning on filters and frequencies for image sharpening, hybridization, and blending.
                    </p>
                </div>
                <div className="project-entry">
                    <h2 className="project-header"><Link to="/proj03"className="link">Project #3: Face Morphing</Link></h2>
                    <p className="project-desc">
                        In this project, we use our learning on image morphing and image averaging to create various face morphing + cross-disolving effects.
                    </p>
                </div>
                <div className="project-entry">
                    <h2 className="project-header"><Link to="/proj04"className="link">Project #4: (Auto)stitching and Photo Mosaics</Link></h2>
                    <p className="project-desc">
                        In this project, we use a combination of homography calculation and image blending to both rectify images and create photo mosaics. In part B, we come up with ways to 
                        automatically find correspondence points between images, enabling us to automate this process. 
                    </p>
                </div>
                <div className="project-entry">
                    <h2 className="project-header"><Link to="/proj05"className="link">Project #5: Fun With Diffusion Models</Link></h2>
                    <p className="project-desc">
                        In this project, we thoroughly explore the versatility of modern-day diffusion models by using DeepFloyd, and then review their inner workings by 
                        implementing our very own time-conditioned and class-conditioned UNet-based diffusion models. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;