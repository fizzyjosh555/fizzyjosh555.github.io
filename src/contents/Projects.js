import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

import ProjectCard from '../components/ProjectCard.js';

import flixImg from '../images/nclone.PNG';
import stockImg from '../images/spredictor.PNG';
import rammerImg from '../images/srammer.PNG';
import moreImg from '../images/more.png';

class Projects extends Component {
    render() {
        return (
            <div className="container">
                <FadeIn transitionDuration="1000"><h1>Projects</h1></FadeIn>
                <div className="projectContainer" style={{ paddingTop: "2vh", display: 'flex', minWidth: '700px', flexDirection: 'column' }}>
                    <ProjectCard 
                        tolink="https://github.com/fizzyjosh555/yourflix" source={flixImg} 
                        name="Netflix Clone (Currently Developing)" tech="JavaScript, HTML, CSS, React, Express, Node.js, AWS EC2, MongoDB"
                        firstPoint="Standard features (autoplay, viewing history, user authentication, dummy payment, etc.)"
                        secondPoint="Able to upload your own media content with file size restriction based on subscription tier"
                        thirdPoint="Hosted with AWS EC2"
                    ></ProjectCard>
                    <ProjectCard 
                        tolink="https://github.com/fizzyjosh555/Stock-Analysis-Tool" source={stockImg} 
                        name="Custom Stock Predictor" tech="Python, PyQt5, Scikit-Learn"
                        firstPoint="Import a .csv file with historical stock quotes and enter n days for quote predictions"
                        secondPoint="Predictions are made with Scikit’s Linear Regression/Support Vector Regression class"
                        thirdPoint="Custom GUI designed with PyQt5"
                    ></ProjectCard>
                    <ProjectCard 
                        tolink="https://github.com/fizzyjosh555/Shooting-Rammer" source={rammerImg} 
                        name="3D Shooter-Ramming Game" tech="C#, Unity"
                        firstPoint="Collect coins while dodging/shooting/ramming patrolling enemies with a controllable car"
                        secondPoint="Utilizes Unity AI’s NavMesh class for accurate pathfinding from enemies"
                        thirdPoint="Implemented a finite-state machine (10 different states) for various enemy behaviors"
                    ></ProjectCard>
                    <div style={{ margin: '0 auto' }}>
                    <FadeIn delay="1700" transitionDuration="900"><a className="hvr-icon-shrink" href="https://github.com/fizzyjosh555" rel="noopener noreferrer" target="_blank"><img style={{ paddingTop: '40px', paddingBottom: '50px', minWidth: '50px', width: '5vw' }} src={moreImg} alt="More"></img></a></FadeIn>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;