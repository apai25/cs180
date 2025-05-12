import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';

const Home = () => {
    return (
        <div className="main">
            <h1 className="main-header">CS 280 Website </h1>
            <div className="projects">
                <div className="project-entry">
                    <h2 className="project-header"><Link to="/cs280-final" className="link">CS 280 Final Project: Action-Conditioned Visual Prediction for Robotic Manipulation</Link></h2>
                    <p className="project-desc">
                        This project explores action-conditioned visual prediction techniques for robotic manipulation, focusing on enhancing prediction accuracy and efficiency.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;