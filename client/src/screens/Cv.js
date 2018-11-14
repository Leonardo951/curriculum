import React, { Component } from 'react';
import '../styles/cv/animate.css';
import '../styles/cv/magnific-popup.css';
import '../styles/cv/owl.transitions.css';
import '../styles/cv/style.css';
import '../styles/cv/responsive.css';
import '../styles/cv/materialize.css';

import About from "../components/Cv/About";
import ColorScheme from "../components/Cv/ColorScheme";
import Education from "../components/Cv/Education";
import Experience from "../components/Cv/Experience";
import Skill from "../components/Cv/Skill";
import Portfolio from "../components/Cv/Portfolio";
import References from "../components/Cv/References";
import Contact from "../components/Cv/Contact";
import Footer from "../components/Cv/Footer";
import Qualifications from "../components/Cv/Qualifications";
import AdditionalInformation from "../components/Cv/AdditionalInformation";

export default class Cv extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <About />
                <Education />
                <Experience />
                <Skill />
                <Qualifications />
                <AdditionalInformation />
                <References />
                <Contact />
                <ColorScheme />
                <Footer />
            </div>
        );
    }
}