import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

class ProjectCard extends Component {
    render() {
        return (
            <div class="projectCard">
                <FadeIn delay="500" transitionDuration="900">
                <a href={this.props.tolink} className="hvr-curl-bottom-right" target="_blank" rel="noopener noreferrer"><img className="imageBox" src={this.props.source} alt="Project"></img></a>
                </FadeIn>
                <FadeIn delay="1100" transitionDuration="900">
                <div className="imageTextBox" style={{ minWidth: '400px', paddingLeft: '2vw', paddingTop: '.3vh', maxWidth: '1000px' }}>
                    <h3 style={{  }}>{this.props.name} - <i>{this.props.tech}</i></h3>
                    <ul style={{ paddingLeft: '16px', paddingTop: '1vh', lineHeight: '25px' }}>
                        <li>{this.props.firstPoint}</li>
                        <li>{this.props.secondPoint}</li>
                        <li>{this.props.thirdPoint}</li>
                    </ul>
                </div>
                </FadeIn>
            </div>
        )
    }
}

export default ProjectCard;