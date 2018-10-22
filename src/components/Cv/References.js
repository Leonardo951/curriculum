import React, { Component } from 'react';
import ReferenceCard from "./ReferenceCard";
import Slider from 'react-slick';

export default class References extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
        };

        return (
            <section id="reference-section" className="reference-section">
                <div className="container-mat">
                    <div className="row-mat">
                        <div className="cole s12 section-title">
                            <h2>Referências</h2>
                        </div>
                        <div className="cole s12">
                            <div className="reference-wrapper cole s12 w-block shadow-bg">
                                <div className="reference-carousel owl-carousel owl-theme"
                                     style={{opacity: '1', display: 'block'}}>
                                    <div className="owl-wrapper-outer">
                                        {/*<div className="owl-wrapper"*/}
                                             {/*style={{width: '4794px', left: '0px', display: 'block', transition: 'all 1000ms ease 0s', transform: 'translate3d(-799px, 0px, 0px)'}}>*/}
                                        <Slider {...settings}>
                                            <ReferenceCard/>
                                            <ReferenceCard/>
                                        </Slider>
                                        {/*</div>*/}
                                    </div>
                                    <div className="owl-controls clickable">
                                        <div className="owl-pagination">
                                            <div className="owl-page active"><span className=""/></div>
                                            <div className="owl-page"><span className=""/></div>
                                            <div className="owl-page"><span className=""/></div>
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