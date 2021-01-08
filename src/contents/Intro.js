import introimg from '../images/introduction.jpg';
import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import ImageFadeIn from 'react-image-fade-in';

class Intro extends Component {
     render() {
        return (
            <div className="container">
                <ImageFadeIn className="introimg" opacityTransition={1.2} src={introimg}></ImageFadeIn>
                <div style={{ textAlign: 'center', paddingTop: '50px' }}className="textContainer">
                    <FadeIn delay="800" transitionDuration="1200">
                    <div className="introText">
                        <p>Hi!</p>
                    </div>
                    </FadeIn>
                    <FadeIn delay="1700" transitionDuration="1200">
                    <div className="introText">
                        <p>I'm Josh.</p>
                    </div>
                    </FadeIn>
                </div>
            </div>
        )
    }
}

export default Intro;