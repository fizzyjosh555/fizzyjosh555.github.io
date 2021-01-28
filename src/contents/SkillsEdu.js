import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import Widecard from '../components/Widecard.js';

class SkillsEdu extends Component {
    render() {
        return (
            <div className="container">
                <FadeIn transitionDuration="1000"><h1>Education</h1></FadeIn>
                <FadeIn delay="500" transitionDuration="900">
                    <div className="edusection">
                        <Widecard title="B.S. Applied Computer Science (Currently Attending)" where="Becker College" from="August 2017" to="December 2021"></Widecard>
                        <Widecard title="High School Diploma" where="Seoul American High School" from="August 2013" to="June 2017"></Widecard>
                    </div>
                </FadeIn>
                <FadeIn transitionDuration="900"><h1>Languages</h1></FadeIn><br></br>
                <FadeIn delay="500" transitionDuration="900">
                <div className="langContainer" style={{ display: 'flex', width: '3.5vw', height: '5vh', minWidth: '50px', minHeight: '50px' }}>
                    <img className="iconSVG" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus"/>
                    <img className="iconSVG" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp"/>
                    <img className="iconSVG" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript"/>
                    <img className="iconSVG" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python"/>
                    <img className="iconSVG" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3"/>
                    <img className="iconSVG" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5"/>
                </div>
                </FadeIn>
                <br></br>
                <FadeIn transitionDuration="900"><h1>Frameworks/Libraries</h1></FadeIn><br></br>
                <FadeIn delay="500" transitionDuration="900">
                <div className="frameContainer" style={{ display: 'flex', width: '3.5vw', height: '5vh', minWidth: '50px', minHeight: '50px' }}>
                    <img className="iconSVG" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react"/>
                    <img className="iconSVG" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express"/>
                    <img className="iconSVG" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit_learn"/>
                </div>
                </FadeIn>
                <br></br>
                <FadeIn transitionDuration="900"><h1>Databases</h1></FadeIn><br></br>
                <FadeIn delay="500" transitionDuration="900">
                <div className="dbContainer" style={{ display: 'flex', width: '3.5vw', height: '5vh', minWidth: '50px', minHeight: '50px' }}>
                    <img className="iconSVG" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql"/>
                    <img className="iconSVG" src="https://cdn.worldvectorlogo.com/logos/microsoft-sql-server.svg" alt="mssql"/>
                    <img className="iconSVG" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb"/>
                </div>
                </FadeIn>
                <br></br>
                <FadeIn transitionDuration="900"><h1>Other</h1></FadeIn><br></br>
                <FadeIn delay="500" transitionDuration="900">
                <div className="otherContainer" style={{ display: 'flex', width: '3.5vw', height: '5vh', minWidth: '50px', minHeight: '50px' }}>
                    <img className="iconSVG" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs"/>
                    <img className="iconSVG" src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" alt="unity"/>
                    <img className="iconSVG" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws"/>
                    <img className="iconSVG" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git"/>
                </div>
                </FadeIn>
            </div>
        )
    }
}

export default SkillsEdu;