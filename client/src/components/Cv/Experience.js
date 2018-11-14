import React, { Component } from 'react';
import ExperienceCard from "./ExperienceCard";
import Waypoint from 'react-waypoint';
import connect from "react-redux/es/connect/connect";
import EducationCard from "./EducationCard";

class Experience extends Component {
    constructor(props){
        super(props);
        this.state = {
            ready: false
        }
    }

    cardEnter(){
        this.setState({ready: true})
    }

    render() {

        if(this.props.curriculumData.experience.length > 0){
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
                                        <p style={{visibility: 'hidden'}}>Ignore it</p>
                                        {this.state.ready &&
                                        this.props.curriculumData.experience.map((tool, index) => {
                                            return (
                                                <ExperienceCard nameClass={index % 2 === 0 ? 'wow fadeIn animated' : 'timeline-inverted wow fadeIn animated'}
                                                                duration={index === 0 ? '0.'+this.state.duration+'s' : '0.'+(index+this.state.duration)+'s'}
                                                                job={tool.job} company={tool.company} initials={tool.initials}
                                                                periodWork={tool.periodWork} current={tool.current} mainAct={tool.mainAct} />
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

export default connect(mapStateToProps, null)(Experience);