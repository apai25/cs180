import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';

const Home = () => {
    return (
        <div className="main">
            <h1 className="main-header">Welcome to Anirudh Pai's CS180 Website</h1>
            <div className="projects">
                <h1 className="projects-header"></h1>
                <div className="project-entry">
                    <h2 className="project-header"><Link to="/cs180/proj01"className="link">Project #1: Single-Channel to Multi-Channel Image Alignment</Link></h2>
                    <p className="project-desc">
                        In this project, we focus on using different image error metrics to align three different color channel images
                        to produce a single colored image. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;