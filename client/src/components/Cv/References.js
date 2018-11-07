import React, { Component } from 'react';
import ReferenceCard from "./ReferenceCard";
import Slider from 'react-slick';
import scrollToComponent from 'react-scroll-to-component';
import ReferencesAdd from "./ReferencesAdd";
import { FaPlus, FaTimes } from 'react-icons/fa';
import connect from "react-redux/es/connect/connect";

class References extends Component {

    constructor(props){
        super(props);
        this.state = {
            imgColor: '#ffffff',
            addActive: false,
            activeTop: '-234px',
            visible: 'hidden'
        }
    }

    addReference = ()=> {
        if(this.state.addActive) {
            this.setState({addActive: false, activeTop: '-234px', visible: 'hidden'});
            setTimeout(()=>{
                scrollToComponent(this.refs.refDiv, {offset: 0, align: 'top', duration: 500, ease: 'inCirc'});
            }, 800);
        }else{
            this.setState({addActive: true, activeTop: '40px', visible: 'visible'})}
    };

    // Hover ball not working
    // hoverBoll(){
    //     if(this.state.imgColor !== '#ffffff'){
    //         this.setState({imgColor: '#ffffff'})
    //     }else{
    //         this.setState({imgColor: this.props.colorCv})
    //     }
    // };

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
                                            <ReferenceCard/>
                                        </Slider>
                                    </div>
                                </div>
                                <ReferencesAdd addActive={this.state.addActive}
                                        activeTop={this.state.activeTop} visible={this.state.visible} />
                            </div>
                        </div>
                        <br/>
                        <button className="add-all btn-circle waves-effect tooltipped" ref="myBtn" type="button" onClick={this.addReference}
                                style={{transform: 'translate3d(3.7375px, -8.05177px, 0px)', transformStyle: 'preserve-3d',
                                    backgroundColor: this.props.colorCv}} >
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

const mapStateToProps = state => ({
    colorCv: state.colorCv
});

export default connect(mapStateToProps, null)(References);