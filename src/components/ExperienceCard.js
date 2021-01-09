import React, { Component } from 'react'

class ExpCard extends Component {
    render() {
        return (
            <div class="expcard">
                <div style={{ lineHeight: '30px' }} class="compdet">
                    <h2 style={{ lineHeight: '30px' }} >{this.props.where}</h2>
                    <h3 style={{ paddingTop: '2px' }} class="secondtext"><i>{this.props.role}</i></h3>
                    <h4 style={{ }} class="secondtext"><i>{this.props.from}</i> - <i>{this.props.to}</i></h4>
                </div>
            </div>
        )
    }
}

export default ExpCard;