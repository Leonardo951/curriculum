import React, { Component } from 'react';

export default class ExperienceCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayFront: 'block',
            displayBack: 'none',
            back: false,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tyhrgfwegd rhtjutgfw egtrujjtged dqretryujtgf easrjutk  rtgrfedetyjurkjtyhrge nurjtyhngbdfvz rstdjnjeyrbgdgzn rbtht4seiusmod tempor incididunt ut labore et dolore magna aliqua.',
            textModify: ''
        }
    }

    componentDidMount() {
        this.textMainActivities()
    }

    mudeDisplay = ()=>{
        this.state.back ?
            this.setState({displayFront: 'block', displayBack: 'none', back: false})
            :
            this.setState({displayFront: 'none', displayBack: 'block', back: true})
    };

    textMainActivities = ()=> {
        let wordLimit = 15;
        let text = this.state.text;
        let re = /[\s]+/gm, results = null, count = 0;
        while ((results = re.exec(text)) !== null && ++count < wordLimit) {}
        if (results !== null && count >= wordLimit) {
            let summary = text.substring(0, re.lastIndex - results[0].length);
            text = summary + '... ';
            this.setState({textModify: text})
        }
    };

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
                        Gogole
                    </div>
                    <div className="timeline-title timeline-title-alt">
                        Software Engineer Intern
                        <span className="timeline-title-after" style={{background: this.props.colorSelected}}/>
                    </div>
                    <div className="timeline-desc text-center" style={{display: this.state.displayFront}}>
                        {this.state.textModify}
                        <strong style={{cursor: 'pointer', color: 'blue'}} onClick={this.mudeDisplay.bind(this)}>Ver mais</strong>
                    </div>
                    <div className="timeline-desc text-center" style={{display: this.state.displayBack}}>
                        {this.state.text}
                        <p style={{cursor: 'pointer', color: 'blue'}} onClick={this.mudeDisplay.bind(this)}>Ver menos</p>
                    </div>
                    <div className="timeline-time" style={{backgroundColor: this.props.colorSelected, display: this.state.back ? 'none' : ''}}>2009-2010
                        <span className="timeline-time-before" style={{borderLeftColor: this.props.colorSelected}}/>
                    </div>
                </div>
            </li>
        );
    }
}