import React, { Component } from 'react';
import ExperienceCard from "./ExperienceCard";
import Waypoint from 'react-waypoint';

export default class Experience extends Component {
    constructor(props){
        super(props);
        this.state = {
            array: [
                {classe: 'wow fadeIn animated',
                duration: '0.2s'},
                {classe: 'timeline-inverted wow fadeIn animated',
                    duration: '0.4s'},
                {classe: 'wow fadeIn animated',
                    duration: '0.6s'},
                {classe: 'timeline-inverted wow fadeIn animated',
                    duration: '0.8s'},
            ],
            ready: false
        }
    }

    cardEnter(){
        this.setState({ready: true})
    }

    render() {
        return (
            <section id="experience-section" className="experience-section">
                <div className="container-mat">
                    <div className="row-mat">
                        <div className="cole s12 section-title">
                            <Waypoint onEnter={this.cardEnter.bind(this)}>
                                <h2>Experiência profissional</h2>
                            </Waypoint>
                        </div>
                        <div className="cole s12">
                            <div className="cole s12 section-content pd-0">
                                <ul className="timeline">
                                    <p style={{visibility: 'hidden'}}>5454</p>
                                    {this.state.ready ?
                                        this.state.array.map((tool, index) => {
                                            return (
                                                <ExperienceCard class={tool.classe} duration={tool.duration} colorSelected={this.props.colorSelected}/>
                                            )
                                        })
                                        : <div/>
                                    }
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