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
            ball: false,
            imgColor: '#ffffff',
            addActive: false
        }
    }

    addReference(){
        if(this.state.addActive) {
            scrollToComponent(this.refs.refDiv, {offset: 0, align: 'middle', duration: 500, ease: 'inCirc'});
            this.setState({addActive: false});
        }else {
            this.setState({addActive: true})
        }
    };

    hoverBoll(info){
        if(this.state.ball){
            if(info !== 'img') {
                this.setState({ball: false, imgColor: '#ffffff'})
            }
        }else{
            this.setState({ball: true, imgColor: this.props.colorSelected})
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
                        <div className="cole s12 section-title">
                            <h2>Referências</h2>
                        </div>
                        <div className="cole s12 text-center" style={{height: '100%'}}>
                            <div  ref="refDiv" className="reference-wrapper cole s12 w-block shadow-bg" style={{width: '100%'}}>
                                <div className="reference-carousel owl-carousel owl-theme"
                                     style={{opacity: '1', display: 'block' }}>
                                    <div className="owl-wrapper-outer">
                                        <Slider {...settings}>
                                            <ReferenceCard colorSelected={this.props.colorSelected}/>
                                            <ReferenceCard colorSelected={this.props.colorSelected}/>
                                        </Slider>
                                    </div>
                                </div>
                                {/*{*/}
                                    {/*this.state.addActive ?*/}
                                        <ReferencesAdd colorSelected={this.props.colorSelected} addActive={this.state.addActive}/>
                                        {/*:*/}
                                        {/*<div/>*/}
                                {/*}*/}
                            </div>
                        </div>
                        <br/>
                        <button className="add-all btn-circle waves-effect tooltipped" onClick={ ()=>{this.addReference();}}
                           style={{backgroundColor: this.props.colorSelected}} onMouseOut={this.hoverBoll.bind(this, 'ball')}  onMouseOver={this.hoverBoll.bind(this, 'ball')}>
                            {
                                this.state.addActive ?
                                    <FaTimes ref="teste" style={{fontSize: '20px', color: !this.state.ball ? 'red' : this.props.colorSelected}} onMouseOver={this.hoverBoll.bind(this, 'img')}
                                             onClick={ ()=>{this.addReference();}}/>
                                    :
                                    <FaPlus style={{fontSize: '20px', color: !this.state.ball ? 'red' : this.props.colorSelected}} onMouseOver={this.hoverBoll.bind(this, 'img')}
                                            onClick={ ()=>{this.addReference();}}/>
                            }
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}