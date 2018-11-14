import React, { Component } from 'react';
import { FaInfoCircle, FaCircleNotch, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import connect from "react-redux/es/connect/connect";

class AdditionalInformation extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {

        if(this.props.curriculumData.additionalInfo.length > 0){
            return (
                <section id="contact-section" className="contact-section">
                    <div className="container-mat">
                        <div className="row-mat">
                            <div className="cole s12 section-title">
                                <h2>Informações adicionais</h2>
                            </div>
                            <div className="cole s12 pd-0 mgt-20">
                                <ul className="list-group">
                                    {
                                        this.props.curriculumData.additionalInfo.map((tool, index)=>{
                                            return <li className="list-group-item" key={index}>{ tool }</li>
                                        })
                                    }
                                </ul>
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

export default connect(mapStateToProps, null)(AdditionalInformation);