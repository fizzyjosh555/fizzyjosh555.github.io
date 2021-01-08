import React, { Component } from 'react'

class Widecard extends Component {
    render() {
        return (
            <div class="widecard">
                <div style={{ lineHeight: '3vh' }} class="compdet">
                    <h2  style={{ lineHeight: '4.5vh' }} >{this.props.title}</h2>
                    <h4 style={{ paddingTop: '3px' }} class="secondtext">{this.props.where}</h4>
                    <h4 style={{ paddingTop: '3px' }} class="secondtext">{this.props.from} - {this.props.to}</h4>
                </div>
            </div>
        )
    }
}

export default Widecard