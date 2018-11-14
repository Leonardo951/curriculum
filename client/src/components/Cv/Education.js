import React, { Component } from 'react';
import EducationCard from "./EducationCard";
import Waypoint from 'react-waypoint';
import connect from "react-redux/es/connect/connect";

class Education extends Component {
    constructor(props){
        super(props);
        this.state = {
            ready: false,
            duration: 2
        }
    }

    // When it passes over the title
    cardEnter(){
        this.setState({ready: true})
    }

    render() {

        if(this.props.curriculumData.formation.length > 0){
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
                                        <p style={{visibility: 'hidden'}}>Ignore it</p>
                                        {this.state.ready &&
                                        this.props.curriculumData.formation.map((tool, index) => {
                                            return (
                                                <EducationCard nameClass={index % 2 === 0 ? 'wow fadeIn animated' : 'timeline-inverted wow fadeIn animated'}
                                                               duration={index === 0 ? '0.'+this.state.duration+'s' : '0.'+(index+this.state.duration)+'s'}
                                                               period={tool.period} key={index}
                                                               course={tool.course} locale={tool.locale} initials={tool.initials}
                                                               status={tool.status} dateEnd={tool.dateEnd} semOrYear={tool.semOrYear}/>
                                            )
                                        })
                                        }
                                        <textarea style={{visibility: 'hidden'}}/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }else{
            return <div/>
        }
    }
}

const mapStateToProps = state => ({
    colorCv: state.colorCv,
    curriculumData: state.curriculumData
});

export default connect(mapStateToProps, null)(Education);