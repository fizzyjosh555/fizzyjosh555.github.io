import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import ExpCard from '../components/ExperienceCard'

class Experience extends Component {
    render() {
        return (
            <div className="container">
                <FadeIn transitionDuration="1000"><h1>Experience</h1></FadeIn>
                <FadeIn delay="500" transitionDuration="900">
                    <div>
                        <ExpCard where="Phillips Brooks House Association" role="Intern" from="August 2018" to="December 2018"></ExpCard>
                        <FadeIn delay="1100" transitionDuration="900">
                        <ul style={{ fontWeight: 'bold', paddingLeft: '16px', lineHeight: '1.7' }}>
                            <li>Implemented data entry functionalities with duplicate constraints using Apex/SOQL</li>
                            <li>Generated SOQL queries and scrubbed over 30,000 entries to reduce storage usage by ~10%</li>
                            <li>Revamping JavaScript applications to transition to Salesforce Lightning</li>
                            <li>Propagated changes through sObject records and field with Metadata/SOAP/REST/BULK API</li>
                        </ul>
                        </FadeIn>
                        <ExpCard where="Becker College" role="Tutor" from="January 2019" to="May 2020"></ExpCard>
                        <FadeIn delay="1100" transitionDuration="900">
                        <ul style={{ fontWeight: 'bold', paddingLeft: '16px', lineHeight: '1.7' }}>
                            <li>
                                Tutored: Algorithms & Theory of Computing, Data Structures, Computer Programming I/II, Networking, 
                                Statistics, Discrete Mathematics, English Composition, English Literature
                            </li>
                        </ul>
                        </FadeIn>
                    </div>
                </FadeIn>
            </div>
        )
    }
}

export default Experience;