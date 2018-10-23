import React, { Component } from 'react';

export default class EducationCard extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <li className={this.props.class} data-wow-duration="0.5s" data-wow-delay="0.3s"
                data-wow-offset="0"
                style={{visibility: 'visible', animationDuration: '0.5s', animationDelay: '0.3s', animationName: 'fadeIn'}}>
                <div className="timeline-badge">
                    <a style={{color: this.props.colorSelected}}><i className="fa fa-circle"/></a>
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