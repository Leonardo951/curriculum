import React, { Component } from 'react';
import { FaInfoCircle, FaCircleNotch, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default class AdditionalInformation extends Component {
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
                            <h2>Informações adicionais</h2>
                        </div>
                        <div className="cole s12 pd-0 mgt-20">
                            <ul className="list-group">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Morbi leo risus</li>
                                <li className="list-group-item">Porta ac consectetur ac</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}