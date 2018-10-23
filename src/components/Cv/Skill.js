import React, { Component } from 'react';
import SkillProgress from './SkillProgress';

export default class Skill extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <section id="skill-section" className="skill-section">
                <div className="container-mat">
                    <div className="row-mat">
                        <div className="cole s12 section-title">
                            <h2>Habilidades</h2>
                        </div>
                        <div className="cole s12">
                            <div
                                className="cole s12 section-content skill-wrapper w-block shadow-bg pdt-50 pdr-40 pdb-50 pdl-40">
                                <div className="cole l6 s12 skill-data">
                                    <SkillProgress howMuch={'80'} colorSelected={this.props.colorSelected}/>
                                    <SkillProgress howMuch={'98'} colorSelected={this.props.colorSelected}/>
                                    <SkillProgress howMuch={'45'} colorSelected={this.props.colorSelected}/>
                                    <SkillProgress howMuch={'51'} colorSelected={this.props.colorSelected}/>
                                </div>
                                <div className="cole l6 s12 skill-data skill-data-alt">
                                    <SkillProgress howMuch={'14'} colorSelected={this.props.colorSelected}/>
                                    <SkillProgress howMuch={'79'} colorSelected={this.props.colorSelected}/>
                                    <SkillProgress howMuch={'59'} colorSelected={this.props.colorSelected}/>
                                    <SkillProgress howMuch={'47'} colorSelected={this.props.colorSelected}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}