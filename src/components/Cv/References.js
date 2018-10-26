import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReferenceCard from "./ReferenceCard";
import Slider from 'react-slick';
import scrollToComponent from 'react-scroll-to-component';
import ReferencesAdd from "./ReferencesAdd";
import { FaPlus, FaTimes } from 'react-icons/fa';

export default class References extends Component {

    constructor(props){
        super(props);
        this.state = {
            imgColor: '#ffffff',
            addActive: false,
            tes: true
        }
    }

    addReference(){
        if(this.state.addActive) {
            this.setState({addActive: false, tes: true});

        }else {
            this.setState({addActive: true, tes: false})
        }
    };

    componentDidUpdate(){
        if(this.state.tes) {
            setTimeout(()=>{
                scrollToComponent(this.refs.refDiv, {offset: 0, align: 'top', duration: 500, ease: 'inCirc'});
            }, 800);
        }
    }

    hoverBoll(){
        if(this.state.imgColor !== '#ffffff'){
            this.setState({imgColor: '#ffffff'})
        }else{
            this.setState({imgColor: this.props.colorSelected})
        }
    };

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
            dotsColor: 'red'
        };

        return (
            <section id="reference-section" className="reference-section">
                <div className="container-mat">
                    <div className="row-mat text-center">
                        <div className="cole s12 section-title" ref="refDiv">
                            <h2>Referências</h2>
                        </div>
                        <div className="cole s12 text-center" style={{height: '100%'}}>
                            <div className="reference-wrapper cole s12 w-block shadow-bg" style={{width: '100%'}}>
                                <div className="reference-carousel owl-carousel owl-theme"
                                     style={{opacity: '1', display: 'block' }}>
                                    <div className="owl-wrapper-outer">
                                        <Slider {...settings}>
                                            <ReferenceCard colorSelected={this.props.colorSelected}/>
                                            <ReferenceCard colorSelected={this.props.colorSelected}/>
                                        </Slider>
                                    </div>
                                </div>
                                <ReferencesAdd colorSelected={this.props.colorSelected} addActive={this.state.addActive}/>
                            </div>
                        </div>
                        <br/>
                        <button className="add-all btn-circle waves-effect tooltipped" ref="myBtn" type="button" onClick={ ()=>{this.addReference();}}
                                style={{transform: 'translate3d(3.7375px, -8.05177px, 0px)', transformStyle: 'preserve-3d',
                                    backgroundColor: this.props.colorSelected}} >
                            {
                                this.state.addActive ?
                                    <FaTimes style={{fontSize: '20px', color: this.state.imgColor}}/>
                                    :
                                    <FaPlus style={{fontSize: '20px', color: this.state.imgColor}} />
                            }
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}