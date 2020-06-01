import React, {Component} from 'react';
import Navitem from './Navitem';
import Logo from './Logo';
import Social from './Social';


// We'll code Navitem.js later for now let's focus on Navbar.js
// “Navitem” is the sub-component.

class Navbar extends Component{
    constructor(props){
        super(props);

        this.state = {
            'NavItemActive' : ''
        }
    }

    activeitem = (x) =>
    {
        //The “activeitem()” function or method takes an input parameter “x” which is the clicked Navitem’s ID. It will then check if there’s already anything(any element’s ID) stored in the “NavItemActive” state object if TRUE then it’ll remove the CSS “.active” class from that element, else it’ll set the state object to the Navitem’s ID which’s clicked by the user
        if (this.state.NavItemActive.length > 0) { 
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }

        //And then a callback function will run which will add the CSS “.active” class to the Navitem which is clicked.
        this.setState({ 'NavItemId': x }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    

    render(){
        return(
            <aside id="aside" role="complementary" class="border js-fullheight">
                <Logo />
                <nav id="main-menu" role="navigation" class="navbar">
                    <div id="navbar" class="collapse">   
                        <ul>
                            <Navitem class="nav-item" item="home" tolink="" activec={this.activeitem}></Navitem>
                            <Navitem class="nav-item" item="about" tolink="" activec={this.activeitem}></Navitem>
                            <Navitem class="nav-item" item="skills" tolink="" activec={this.activeitem}></Navitem>
                            <Navitem class="nav-item" item="experience" tolink="" activec={this.activeitem}></Navitem>
                            <Navitem class="nav-item" item="work" tolink="" activec={this.activeitem}></Navitem>
                            <Navitem class="nav-item" item="blog" tolink="" activec={this.activeitem}></Navitem>
                            <Navitem class="nav-item" item="contact" tolink="" activec={this.activeitem}></Navitem>
                        </ul>
                    </div> 
                </nav>
                <Social />
            </aside>
        )
    }
}

export default Navbar