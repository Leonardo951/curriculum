import React, { Component } from 'react';
import EducationCard from "./EducationCard";
import Waypoint from 'react-waypoint';
import ExperienceCard from "./ExperienceCard";

export default class Education extends Component {
    constructor(props){
        super(props);
        this.state = {
            array: [
                {classe: 'wow fadeIn animated',
                    duration: '0.3s'},
                {classe: 'timeline-inverted wow fadeIn animated',
                    duration: '0.6s'},
                {classe: 'wow fadeIn animated',
                    duration: '0.8s'},
                {classe: 'timeline-inverted wow fadeIn animated',
                    duration: '1.2s'},
            ],
            ready: false
        }
    }

    cardEnter(){
        this.setState({ready: true})
    }

    render() {
        return (
            <section id="education-section" className="education-section">
                <div className="container-mat">
                    <div className="row-mat">
                        <div className="cole s12 section-title">
                            <Waypoint onEnter={this.cardEnter.bind(this)}>
                                <h2>Formação</h2>
                            </Waypoint>
                        </div>
                        <div className="cole s12">
                            <div className="cole s12 section-content pd-0">
                                <ul className="timeline">
                                    <p style={{visibility: 'hidden'}}>5454</p>
                                    {this.state.ready ?
                                        this.state.array.map((tool, index) => {
                                            return (
                                                <EducationCard class={tool.classe} duration={tool.duration} colorSelected={this.props.colorSelected}/>
                                            )
                                        })
                                        : <div/>
                                    }
                                    <textarea style={{visibility: 'hidden'}} colorSelected={this.props.colorSelected}/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}