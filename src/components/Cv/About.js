import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="site-header top-section top-section-home image-bg parallax-section"
                     data-image-bg="../../images/capa.jpg">
                    <div className="overlay-section"/>
                </div>
                <section id="about-section" className="about-section">
                    <div className="section-content">
                        <div className="container-mat c-curriculo">
                            <div className="row-mat r-curriculo">
                                <div className="cole s12 fadeInUp animated wow" data-wow-duration="1s" data-wow-delay="0.3s"
                                     data-wow-offset="0">
                                    <div className="cole s12 w-block shadow-bg pd-0">
                                        <div className="cole m5 s12 about-img parallax-layer al-center pd-50 aa">
                                            <div className="about-img-content image-bg shadow-bg layer" data-depth="0.1"
                                                 style={{position: 'relative', display: 'block', left: '0px', top: '0px', transform: 'translate3d(0.769725px, -4.30725px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', background: 'url(http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Yin-Yang-PNG-Transparent-Image-6-500x500.png) center top / cover no-repeat'}}>
                                                <a href=""
                                                   className="btn-circle tooltipped layer shadow-bg" data-position="top"
                                                   data-delay="50" data-tooltip="Download Resume" data-depth="0.25"
                                                   data-tooltip-id="1481b9c0-143c-a285-9cff-87745145e410"
                                                   style={{position: 'absolute', display: 'block', left: '0px', top: '0px', transform: 'translate3d(3.7375px, -8.05177px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden'}}>
                                                    <span className="fa fa-download"/></a>
                                            </div>
                                            <div className="about-name">John Doe</div>
                                            <div className="about-title">Software Engineer</div>
                                        </div>
                                        <div className="cole m7 s12 about-data-wrapper pd-50">
                                            <div className="about-desc pd-0">
                                                <div className="about-section-title">Sobre</div>
                                                <div className="about-data">
                                                    <p className="about-description">
                                                        Lorem Ipsum as their default model text, and a search for 'lorem
                                                        ipsum' will uncover
                                                        many web sites still in their infancy. Various versions have evolved
                                                        over the years,
                                                        sometimes by accident, sometimes on purpose injected humour and the
                                                        like.
                                                    </p>
                                                    <div><span>Age</span>25</div>
                                                    <div><span>Address</span>1234 Street, W3 Island</div>
                                                    <div><span>Email</span>contact@domain.com</div>
                                                    <div><span>Phone</span>+0123 456 789</div>
                                                    <div><span>Website</span>http://www.envato.com</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="about-social cole s12 pd-0">
                                            <a className="waves-effect waves-light" href="#0"><span
                                                className="fa fa-facebook"/></a>
                                            <a className="waves-effect waves-light" href="#0"><span
                                                className="fa fa-twitter"/></a>
                                            <a className="waves-effect waves-light" href="#0"><span
                                                className="fa fa-google-plus"/></a>
                                            <a className="waves-effect waves-light" href="#0"><span
                                                className="fa fa-github"/></a>
                                            <a className="waves-effect waves-light" href="#0"><span
                                                className="fa fa-linkedin"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}