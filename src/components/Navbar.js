import profpic from '../images/circlepic.jpg';
import React, { Component } from 'react';
import Navitems from './Navitems.js';
import Social from './Social.js';

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
                    <Social></Social>
                    <img className="profilepic" src={profpic} alt="Avatar"></img>
                    <h2 className="profilename">JOSHUA YUN</h2>
                    <Navitems item="Introduction" tolink="/" activec={this.activeitem}></Navitems>
                    <Navitems item="About" tolink="/about" activec={this.activeitem}></Navitems>
                    <Navitems item="Education & Skills" tolink="/skillsEdu" activec={this.activeitem}></Navitems>
                    <Navitems item="Experience" tolink="/experience" activec={this.activeitem}></Navitems>
                    <Navitems item="Projects" tolink="/projects" activec={this.activeitem}></Navitems>
                </ul>
            </nav>
        )
    }
}

export default Navbar;