import profpic from '../images/circlepic.jpg';
import React, { Component } from 'react';
import Navitems from './Navitems.js';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={
            'NavItemActive':''
        }
    }

    activeitem=(x)=> {
        if(this.state.NavItemActive.length>0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
            this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };

    render() {
        return (
            <nav>
                <ul>
                    <img className="profilepic" src={profpic} alt="Avatar"></img>
                    <Navitems item="Introduction" tolink="/" activec={this.activeitem}></Navitems>
                    <Navitems item="About" tolink="/about" activec={this.activeitem}></Navitems>
                    <Navitems item="Skills & Education" tolink="/skillsEdu" activec={this.activeitem}></Navitems>
                    <Navitems item="Experience" tolink="/experience" activec={this.activeitem}></Navitems>
                    <Navitems item="Projects" tolink="/projects" activec={this.activeitem}></Navitems>
                    <Navitems item="Contact" tolink="/contact" activec={this.activeitem}></Navitems>
                    <p className="icons">icons</p>
                </ul>
            </nav>
        )
    }
}

export default Navbar;