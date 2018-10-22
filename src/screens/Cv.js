import React, { Component } from 'react';
import About from "../components/Cv/About";
import ColorScheme from "../components/Cv/ColorScheme";
import Education from "../components/Cv/Education";
import Experience from "../components/Cv/Experience";
import Skill from "../components/Cv/Skill";
import Portfolio from "../components/Cv/Portfolio";
import References from "../components/Cv/References";
import Contact from "../components/Cv/Contact";

import '../styles/css/animate.css';
import '../styles/css/magnific-popup.css';
import '../styles/css/owl.transitions.css';
import '../styles/css/style.css';
import '../styles/css/color-1.css';
import '../styles/css/responsive.css';
import '../styles/css/owl.carousel.min.css';
import '../styles/css/owl.theme.default.min.css';
import '../styles/css/materialize.css';

export default class Cv extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <About/>
                <Education/>
                <Experience/>
                <ColorScheme/>
                <Skill/>
                <Portfolio/>
                <References/>
                <Contact/>
            </div>
        );
    }
}