import React, { Component } from 'react';
import { FaCircle } from 'react-icons/fa';
import connect from "react-redux/es/connect/connect";

class ExperienceCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayFront: 'block',
            displayBack: 'none',
            back: false,
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
        let text = '';
        this.props.mainAct.map((tool, index)=>{
            text = text+'; '+ tool;
        });
        let re = /[\s]+/gm, results = null, count = 0;
        while ((results = re.exec(text)) !== null && ++count < wordLimit) {}
        if (results !== null && count >= wordLimit) {
            let summary = text.substring(0, re.lastIndex - results[0].length);
            text = summary + '... ';
            this.setState({ textModify: text })
        }
    };

    dateFormat = ()=> {
        const { current, periodWork } = this.props;
        for(let index = 0; index === periodWork.length; index++){
            const fromMonth = periodWork.from.month;
            const fromYear = periodWork.from.year;
            const toMonth = periodWork.to.month;
            const toYear = periodWork.to.year;
            if(current){
                return fromMonth+"/"+fromYear+" - Atual";
            }else{
                return fromMonth+"/"+fromYear+" - "+toMonth+"/"+toYear;
            }
        }
    };

    render() {

        const { duration, colorCv, company, job, initials, nameClass, mainAct } = this.props;

        return (
            <li className={nameClass}
                style={{visibility:'visible'  ,  animationDuration: '2s',
                    animationDelay: duration,
                    animationName: 'fadeIn'}} data-wow-duration="2s" data-wow-delay={duration}
                data-wow-offset="0">
                <div className="timeline-badge">
                    <a style={{color: colorCv}}><FaCircle/></a>
                </div>
                <div className="timeline-panel w-block shadow-bg pd-30">
                    <div className="timeline-tag">
                        { company }
                        { initials !== '' && ' - '+ initials }
                    </div>
                    <div className="timeline-title timeline-title-alt">
                        { job }
                        <span className="timeline-title-after" style={{background: colorCv}}/>
                    </div>
                    <div className="timeline-desc text-center" style={{display: this.state.displayFront}}>
                        { this.state.textModify }
                        <strong style={{cursor: 'pointer', color: 'blue'}} onClick={this.mudeDisplay.bind(this)}>Ver mais</strong>
                    </div>
                    <div className="timeline-desc text-center" style={{display: this.state.displayBack}}>
                        {
                            mainAct.map((tool, index)=> {
                                return <ol key={index}>{ tool }</ol>
                            })
                        }
                        <p style={{cursor: 'pointer', color: 'blue'}} onClick={this.mudeDisplay.bind(this)}>Ver menos</p>
                    </div>
                    <div className="timeline-time" style={{backgroundColor: colorCv, display: this.state.back ? 'none' : ''}}>
                        { this.dateFormat() }
                        <span className="timeline-time-before" style={{borderLeftColor: colorCv}}/>
                    </div>
                </div>
            </li>
        );
    }
}

const mapStateToProps = state => ({
    colorCv: state.colorCv
});

export default connect(mapStateToProps, null)(ExperienceCard);