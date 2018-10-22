import React, { Component } from 'react';

export default class Skill extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
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
                                    <div className="progress-bar-wrapper">
                                        <p className="progress-text">
                                            C
                                            <span>80%</span>
                                        </p>
                                        <div className="progress-bar">
                                            <span data-percent="80"
                                                  style={{transition: 'width 1.5s ease 0s', width: '80%'}}/>
                                        </div>
                                    </div>
                                    <div className="progress-bar-wrapper">
                                        <p className="progress-text">
                                            C++
                                            <span>45%</span>
                                        </p>
                                        <div className="progress-bar">
                                            <span data-percent="45"
                                                  style={{transition: 'width 1.5s ease 0s', width: '45%'}}/>
                                        </div>
                                    </div>
                                    <div className="progress-bar-wrapper">
                                        <p className="progress-text">
                                            Python
                                            <span>85%</span>
                                        </p>
                                        <div className="progress-bar">
                                            <span data-percent="85"
                                                  style={{transition: 'width 1.5s ease 0s', width: '85%'}}/>
                                        </div>
                                    </div>
                                    <div className="progress-bar-wrapper">
                                        <p className="progress-text">
                                            Javascript
                                            <span>90%</span>
                                        </p>
                                        <div className="progress-bar">
                                            <span data-percent="90"
                                                  style={{transition: 'width 1.5s ease 0s', width: '90%'}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="cole l6 s12 skill-data skill-data-alt">
                                    <div className="progress-bar-wrapper">
                                        <p className="progress-text">
                                            Go
                                            <span>70%</span>
                                        </p>
                                        <div className="progress-bar">
                                            <span data-percent="70"
                                                  style={{transition: 'width 1.5s ease 0s', width: '70%'}}/>
                                        </div>
                                    </div>
                                    <div className="progress-bar-wrapper">
                                        <p className="progress-text">
                                            React
                                            <span>85%</span>
                                        </p>
                                        <div className="progress-bar">
                                            <span data-percent="85"
                                                  style={{transition: 'width 1.5s ease 0s', width: '85%'}}/>
                                        </div>
                                    </div>
                                    <div className="progress-bar-wrapper">
                                        <p className="progress-text">
                                            Angular
                                            <span>90%</span>
                                        </p>
                                        <div className="progress-bar">
                                            <span data-percent="90"
                                                  style={{transition: 'width 1.5s ease 0s', width: '90%'}}/>
                                        </div>
                                    </div>
                                    <div className="progress-bar-wrapper">
                                        <p className="progress-text">
                                            Node
                                            <span>85%</span>
                                        </p>
                                        <div className="progress-bar">
                                            <span data-percent="85"
                                                  style={{transition: 'width 1.5s ease 0s', width: '85%'}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}