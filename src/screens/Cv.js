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

export default class Cv extends Component {
    constructor(props){
        super(props);
        this.state = {
            colorSelected: '#0EB57D',
        }
    }

    mudeColor(color){
        this.setState({colorSelected: color})
    };

    render() {
        return (
            <div>
                <About colorSelected={this.state.colorSelected}/>
                <Education colorSelected={this.state.colorSelected}/>
                <Experience colorSelected={this.state.colorSelected}/>
                <Skill colorSelected={this.state.colorSelected}/>
                {/*<Portfolio colorSelected={this.state.colorSelected}/>*/}
                <References colorSelected={this.state.colorSelected}/>
                <Contact colorSelected={this.state.colorSelected}/>
                <ColorScheme mudeColor={this.mudeColor.bind(this)} colorSelected={this.state.colorSelected}/>
                <Footer colorSelected={this.state.colorSelected}/>
            </div>
        );
    }
}