import React, { Component } from 'react';
import { FaCircle } from 'react-icons/fa';
import connect from "react-redux/es/connect/connect";
import { OPTIONS_STATUS,OPTIONS_UNIFINISHED, OPTIONS_SELECT_SEMESTER_OR_YEAR } from '../../constant/curriculumOptions';

class EducationCard extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    formatDate = () => {
        const mouth = this.props.dateEnd.month.toString().length === 1 ? '0'+this.props.dateEnd.month : this.props.dateEnd.month;
        const year = this.props.dateEnd.year;
        return mouth + '/' + year;
    };

    render() {

        const { colorCv, locale, initials, status, course, semOrYear, duration, nameClass } = this.props;

        return (
            <li className={nameClass} style={{visibility:'visible'  ,  animationDuration: '2s',
                animationDelay: duration,
                animationName: 'fadeIn'}} data-wow-duration="2s" data-wow-delay={duration}
                data-wow-offset="0">
                <div className="timeline-badge">
                    <a href="" style={{color: colorCv}}>
                        <FaCircle/>
                    </a>
                </div>
                <div className="timeline-panel w-block shadow-bg pd-30">
                    <div className="timeline-tag">
                        { locale }
                        { initials !== '' && ' - ' + initials}
                    </div>
                    <div className="timeline-title timeline-title-alt">
                        { course }
                        <span className="timeline-title-after" style={{backgroundColor: colorCv}}/>
                    </div>
                    <div className="timeline-time" style={{backgroundColor: colorCv}}>
                        {
                            OPTIONS_STATUS.map((tool, index) => {
                                if(tool.value === status && index === 1){
                                    return tool.label
                                }else if(tool.value === status){
                                    return tool.label + ' - ' + this.formatDate()
                                }
                            })
                        }
                        {
                            OPTIONS_SELECT_SEMESTER_OR_YEAR.year.map((tool, index)=>{
                                if(tool.value === semOrYear){
                                    return ' - '+ tool.label
                                }
                            })
                        }
                        {
                            OPTIONS_SELECT_SEMESTER_OR_YEAR.semester.map((tool, index)=>{
                                if(tool.value === semOrYear){
                                    return ' - '+ tool.label
                                }
                            })
                        }
                    <span className="timeline-time-before" style={{borderLeftColor: colorCv}}/>
                    </div>
                </div>
            </li>
        );
    }
}

const mapStateToProps = state => ({
    colorCv: state.colorCv,
});

export default connect(mapStateToProps, null)(EducationCard);