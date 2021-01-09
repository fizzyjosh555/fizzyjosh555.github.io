import React, { Component } from 'react'

class Widecard extends Component {
    render() {
        return (
            <div class="widecard">
                <div style={{ lineHeight: '30px' }} class="compdet">
                    <h2 style={{ lineHeight: '30px' }} >{this.props.title}</h2>
                    <h4 style={{ paddingTop: '2px' }} class="secondtext">{this.props.where}</h4>
                    <h4 style={{ paddingTop: '2px' }} class="secondtext">{this.props.from} - {this.props.to}</h4>
                </div>
            </div>
        )
    }
}

export default Widecard;