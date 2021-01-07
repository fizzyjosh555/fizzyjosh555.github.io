import React, { Component } from 'react';
import gh from '../images/github.png';
import fb from '../images/facebook.png';
import linkedin from '../images/linkedin.png';

class Social extends Component {
    render() {
        return (
            <div className="socialLinks">
                <div><a href="https://www.linkedin.com/in/joshua-yun-9709b0170/" rel="noopener noreferrer" target="_blank"><img className="liLogo" src={linkedin} alt="https://www.linkedin.com/in/joshua-yun-9709b0170/"></img></a></div>
                <div><a href="https://www.facebook.com/joshposh555/" rel="noopener noreferrer" target="_blank"><img className="fbLogo" src={fb} alt="https://www.facebook.com/joshposh555/"></img></a></div>
                <div><a href="https://github.com/fizzyjosh555" rel="noopener noreferrer" target="_blank"><img className="ghLogo" src={gh} alt="https://github.com/fizzyjosh555"></img></a></div>
            </div>
        )
    }
}

export default Social;