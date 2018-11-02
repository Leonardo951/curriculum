import React, { Component } from 'react';
import CardQualifications from "../../UI/CardQualifications";

export default class Qualifications extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <section id="contact-section" className="contact-section">
                <div className="container-mat">
                    <div className="row-mat">
                        <div className="cole s12 section-title">
                            <h2>QUALIFICAÇÕES E DIFERENCIAIS</h2>
                        </div>
                        <div className="cole s12 masonry pd-0 mgt-20">
                            <div className="card-columns">
                            <CardQualifications/>
                            <CardQualifications/>
                            <CardQualifications/>
                            <CardQualifications/>
                            <CardQualifications/>
                            <CardQualifications/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}