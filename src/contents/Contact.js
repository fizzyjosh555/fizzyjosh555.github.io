import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <FadeIn transitionDuration="1000"><h1>Contact</h1></FadeIn>
                <div class="contactForm">
                    <form id="serverlessForm" action="#">
                        <div class="firstField" style={{ lineHeight: '5vh' }}>
                            <div class="firstNameDiv">
                                <label for="firstname">First Name</label>
                                <input type="text" class="formField" id="firstname" name="firstname" placeholder=" Enter first name..." required></input>
                            </div>
                            <div class="lastNameDiv">
                                <label for="lastname">Last Name</label>
                                <input type="text" class="formField" id="lastname" name="lastname" placeholder=" Enter last name..." required></input>
                            </div>
                            <div class="emailDiv">
                                <label for="exampleInputEmail">Email Address</label>
                                <input type="email" class="formField" id="emailInput" name="email" placeholder=" Enter email..." required></input>
                            </div>	
                        </div>
                        <div class="secondField">
                            <div class="messageDiv">
                                <label for="description">Message</label>
                                <textarea class="formField" id="message" name="message" placeholder=" Enter message..." required></textarea>
                            </div>
                            <div>
                                <button type="submit" id="submit" class="btn btn-default submit"><i id="loader" class="fa fa-paper-plane" aria-hidden="true"></i>Send Message</button>
                            </div>
                        </div>
                    </form>
			    </div>
                <script>
                    var URL = "https://xxxxxxx.execute-api.xxxxxx.amazonaws.com/development/sendMail";
                </script>
                <script src="js/script.js"></script>
            </div>
        )
    }
}

export default Contact;