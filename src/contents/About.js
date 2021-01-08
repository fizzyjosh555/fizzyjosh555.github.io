import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="aboutBlock" >
                    <FadeIn transitionDuration="1000">
                    <h1 className="about">About Me</h1>
                    <br></br><br></br>
                    <h4>First off, thanks for visiting my page! (I'm currently still in the process of making this website more mobile-friendly)</h4>
                    <br></br><br></br>
                    </FadeIn>
                    <br></br>
                    <FadeIn delay="800" transitionDuration="1200">
                        <div >
                            <h1><strong>I'm a college senior majoring in computer science.</strong></h1>
                            <h2 style={{ paddingTop: '10px' }}>I'm currently looking for internships involving <u>software and/or full stack development.</u></h2>
                            <h4 style={{ paddingTop: '10px' }}>I'm always open to new opportunities, so feel free to still contact me for unrelated roles (or if you also just want to chat).</h4>
                            <br></br><br></br>
                            <p style={{ lineHeight: '1.7'}}>I started programming in high school, but I started taking it seriously during my second year of college. 
                            I've explored video game development with Unity, machine learning with Scikit, and web development with React/Express/Node. Aside from my 
                            professional interests, I enjoy watching and discussing soccer (Tottenham Hotspur), playing video games (Starcraft II, Dead by Daylight, 
                            Valorant, League of Legends), and swimming (though, admittedly, it's been a while since I last swam). 
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        );
    }
}

export default About;