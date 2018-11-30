import React, { Component } from 'react';
import SkillProgress from './SkillProgress';
import connect from "react-redux/es/connect/connect";

class Skill extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {

        if(this.props.curriculumData.skills.length > 0){
            return (
                <section id="skill-section" className="skill-section">
                    <div className="container-mat">
                        <div className="row-mat">
                            <div className="cole s12 section-title">
                                <h2>Habilidades</h2>
                            </div>
                            <div className="cole s12">
                                <div
                                    className="cole s12 section-content skill-wrapper w-block shadow-bg pdt-50 pdr-40 pdb-50 pdl-40">
                                    <div className="cole l6 s12 skill-data">
                                        {
                                            this.props.curriculumData.skills.map((tool, index)=> {
                                                if(index% 2 === 0){
                                                    return <SkillProgress key={index} skill={tool.text} howMuch={tool.percent} />
                                                }
                                            })
                                        }
                                    </div>
                                    <div className="cole l6 s12 skill-data skill-data-alt">
                                        {
                                            this.props.curriculumData.skills.map((tool, index)=> {
                                                if(index% 2 !== 0){
                                                    return <SkillProgress key={index} skill={tool.text} howMuch={tool.percent} />
                                                }
                                            })
                                        }
                                    </div>
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
    curriculumData: state.curriculumData
});

export default connect(mapStateToProps, null)(Skill);