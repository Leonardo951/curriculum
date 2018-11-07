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
                                    <SkillProgress howMuch={80} />
                                    <SkillProgress howMuch={98} />
                                    <SkillProgress howMuch={45} />
                                    <SkillProgress howMuch={51} />
                                </div>
                                <div className="cole l6 s12 skill-data skill-data-alt">
                                    <SkillProgress howMuch={14} />
                                    <SkillProgress howMuch={79} />
                                    <SkillProgress howMuch={59} />
                                    <SkillProgress howMuch={47} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}