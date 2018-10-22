import React, { Component } from 'react';
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";

export default class Experience extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <section id="experience-section" className="experience-section">
                <div className="container-mat">
                    <div className="row-mat">
                        <div className="cole s12 section-title">
                            <h2>Experiência profissional</h2>
                        </div>
                        <div className="cole s12">
                            <div className="cole s12 section-content pd-0">
                                <ul className="timeline">
                                    <p style={{visibility: 'hidden'}}>5454</p>
                                    <ExperienceCard class={'wow fadeIn animated'}/>
                                    <ExperienceCard class={'timeline-inverted wow fadeIn animated'}/>
                                    <ExperienceCard class={'wow fadeIn animated'}/>
                                    <ExperienceCard class={'timeline-inverted wow fadeIn animated'}/>
                                    <textarea style={{visibility: 'hidden'}}/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}