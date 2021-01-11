import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navitems extends Component {
    render() {
        return (
            <li id={this.props.item}>
                <Link className="hvr-underline-from-center" to={this.props.tolink} style={{ textDecoration: 'none',   color:'rgb(53, 50, 50)'}}
                    /* onClick={this.props.activec.bind(this,this.props.item)} */>
                    {this.props.item}
                </Link>
            </li>
        )
    }
}

export default Navitems;