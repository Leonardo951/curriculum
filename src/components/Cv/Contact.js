import React, { Component } from 'react';

export default class Contact extends Component {
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
                            <h2>Entre em contato</h2>
                        </div>
                        <div className="cole s12 pd-0 mgt-20">
                            <div className="cole l5 s12 contact-map" style={{height: '447px'}}>
                                <div style={{width: '100%'}}>
                                    <iframe width="100%" height="450"
                                            src="https://maps.google.com/maps?width=100%&amp;height=450&amp;hl=en&amp;q=Bras%C3%ADlia+(leonardo)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"><a
                                        href="https://www.maps.ie/create-google-map/">Create Google Map</a></iframe>
                                </div>
                                <br/>
                            </div>
                            <div className="cole l7 s12 contact-form">
                                <div className="cole s12 w-block shadow-bg pd-40">
                                    <form id="c-form" className="c-form" action="#0" method="post"
                                          data-email-address="mjunaidhira@gmail.com" autoComplete="off">
                                        <fieldset>
                                            <input id="name" type="text" name="name" className="c-form-input"
                                                   placeholder="Name"/>
                                            <input id="email" type="text" name="email" className="c-form-input"
                                                   placeholder="Email"/>
                                            <input id="subject" type="text" name="subject"
                                                   className="c-form-input" placeholder="Subject"/>
                                            <textarea id="message" name="message" className="c-form-input"
                                                      placeholder="Message"/>
                                            <button className="btn-custom waves-effect" type="submit"
                                                    name="button">Send Message
                                            </button>
                                            <span id="c-form-spinner"
                                                  className="fa fa-circle-o-notch "/>
                                        </fieldset>
                                    </form>

                                    <div className="c-form-alert hero-height" style={{height: '378px'}}>
                                        <div className="alert-content alert-attention w-block">
                                            <div className="alert-icon"><span className="fa fa-info-circle"/>
                                            </div>
                                            <div className="alert-title">Attention</div>
                                            <div className="alert-desc"><p>The name, subject and the message field must
                                                be at least 3 characters long. Make sure your email is valid too!</p>
                                            </div>
                                            <div className="alert-close"><a className="btn-custom waves-effect"
                                                                            href="#0">Close Me</a>
                                            </div>
                                            <div className="alert-content alert-success w-block">
                                                <div className="alert-icon alert-icon-success"><span
                                                    className="fa fa-check-circle"/>
                                                    <div className="alert-title">Success</div>
                                                    <div className="alert-desc"><p>Your message has been received! Thank you for
                                                        writing.</p>
                                                        <div className="alert-close"><a className="btn-custom waves-effect"
                                                                                        href="#0">Close Me</a>
                                                        </div>
                                                        <div className="alert-content alert-error w-block">
                                                            <div className="alert-icon"><span className="fa fa-times-circle"/>
                                                            </div>
                                                            <div className="alert-title">Error</div>
                                                            <div className="alert-desc"><p>Message couldn't be sent due to server
                                                                problem.</p>
                                                                <div className="alert-close"><a className="btn-custom waves-effect"
                                                                                                href="#0">Close Me</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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