import introimg from '../images/introduction.jpg';
import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

class Intro extends Component {
    render() {
        return (
            <div>
                <FadeIn>
                    <img className="introbg" src={introimg} alt="Profile"></img>
                    <div className="intro1">Hi,</div>
                    <div className="intro2">I'm Josh</div>
                </FadeIn>
            </div>
        )
    }
}

export default Intro;