import React, { Component } from 'react';
import CardQualifications from "../../UI/CardQualifications";
import connect from "react-redux/es/connect/connect";

class AdditionalInformation extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    columnCount = ()=>{
        if(this.props.curriculumData.additionalInfo.length % 2 === 0){
            return 2
        }else if(this.props.curriculumData.additionalInfo.length === 1){
            return 1
        }else{
            return 3
        }
    };

    render() {

        if(this.props.curriculumData.additionalInfo.length > 0){
            return (
                <section id="contact-section" className="contact-section">
                    <div className="container-mat">
                        <div className="row-mat">
                            <div className="cole s12 section-title">
                                <h2>Informações adicionais</h2>
                            </div>
                            <div className="cole s12 masonry pd-0 mgt-20">
                                <div className="card-columns" style={{columnCount: this.columnCount()}}>
                                    {
                                        this.props.curriculumData.additionalInfo.map((tool, index)=>{
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

export default connect(mapStateToProps, null)(AdditionalInformation);