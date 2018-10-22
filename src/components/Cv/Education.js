import React, { Component } from 'react';
import EducationCard from "./EducationCard";

export default class Education extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <section id="education-section" className="education-section">
                <div className="container-mat">
                    <div className="row-mat">
                        <div className="cole s12 section-title">
                            <h2>Formação</h2>
                        </div>
                        <div className="cole s12">
                            <div className="cole s12 section-content pd-0">
                                <ul className="timeline">
                                    <p style={{visibility: 'hidden'}}>5454</p>
                                    <EducationCard class={'wow fadeIn animated'}/>
                                    <EducationCard class={'timeline-inverted wow fadeIn animated'}/>
                                    <EducationCard class={'wow fadeIn animated'}/>
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