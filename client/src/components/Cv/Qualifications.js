import React, { Component } from 'react';
import CardQualifications from "../../UI/CardQualifications";
import connect from "react-redux/es/connect/connect";

class Qualifications extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {

        if(this.props.curriculumData.qualifications.length > 0){
            return (
                <section id="contact-section" className="contact-section">
                    <div className="container-mat">
                        <div className="row-mat">
                            <div className="cole s12 section-title">
                                <h2>QUALIFICAÇÕES E DIFERENCIAIS</h2>
                            </div>
                            <div className="cole s12 masonry pd-0 mgt-20">
                                <div className="card-columns">
                                    {
                                        this.props.curriculumData.qualifications.map((tool, index)=>{
                                            return <CardQualifications key={index} qualification={tool} />
                                        })
                                    }
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

export default connect(mapStateToProps, null)(Qualifications);