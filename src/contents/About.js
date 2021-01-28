import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="aboutBlock" style={{ maxWidth: '1270px' }}>
                    <FadeIn transitionDuration="1000">
                    <h1 className="about">About Me</h1>
                    </FadeIn>
                    <br></br>
                    <FadeIn delay="500" transitionDuration="900">
                        <div >
                            <h1><strong>I'm a college senior studying computer science.</strong></h1>
                            <h2 style={{ paddingTop: '10px' }}>I'm currently looking for internships involving <u>software and/or full stack development.</u></h2>
                            <h4 style={{ paddingTop: '10px' }}>I'm always open to new opportunities, so feel free to still contact me for unrelated roles or anything else.</h4>
                            <br></br><br></br>
                            <p style={{ lineHeight: '1.7'}}>I started programming in high school, but I started taking it seriously during my second year of college. 
                            I've explored video game development with Unity, machine learning with Scikit, and web development with React/Express/Node. Aside from my 
                            professional interests, I enjoy watching and discussing soccer (Tottenham Hotspur), playing video games (Starcraft II, Dead by Daylight, 
                            Valorant, League of Legends), and swimming. 
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        );
    }
}

export default About;