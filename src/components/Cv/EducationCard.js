import React, { Component } from 'react';
import { FaCircle } from 'react-icons/fa';

export default class EducationCard extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <li className={this.props.class} style={{visibility:'visible'  ,  animationDuration: '2s',
                animationDelay: this.props.duration,
                animationName: 'fadeIn'}} data-wow-duration="2s" data-wow-delay={this.props.duration}
                data-wow-offset="0">
                <div className="timeline-badge">
                    <a style={{color: this.props.colorSelected}}><FaCircle/></a>
                </div>
                <div className="timeline-panel w-block shadow-bg pd-30">
                    <div className="timeline-tag">
                        Stackford University
                    </div>
                    <div className="timeline-title timeline-title-alt">
                        BS in Computer Science
                        <span className="timeline-title-after" style={{backgroundColor: this.props.colorSelected}}/>
                    </div>
                    <div className="timeline-time" style={{backgroundColor: this.props.colorSelected}}>2006-2010
                    <span className="timeline-time-before" style={{borderLeftColor: this.props.colorSelected}}/>
                    </div>
                </div>
            </li>
        );
    }
}