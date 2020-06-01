import React, {Component} from 'react';
import profilepic from '../img/Omkar_profile.jpg';

class Logo extends Component{
    render(){
        return(
            <div class="text-center">
                <div className ="author-img"><img src={profilepic} className="profilepic"></img></div>
                <h1 id="logo"><a href="#">Omkar Pawaskar</a></h1>
                <span class="position"><a href="#">Python Developer</a> in India</span>
            </div>
        );
    }
}

export default Logo