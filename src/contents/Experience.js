import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import ExpCard from '../components/ExperienceCard'

class Experience extends Component {
    render() {
        return (
            <div className="container">
                <FadeIn transitionDuration="1000"><h1>Experience</h1></FadeIn>
                <FadeIn>
                    <div>
                        <ExpCard title="" where="" from=""></ExpCard>
                    </div>
                </FadeIn>
            </div>
        )
    }
}

export default Experience;