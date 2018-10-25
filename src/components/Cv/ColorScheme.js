import React, { Component } from 'react';
import {COLORS} from '../../constant/CvColors';
import { FaCog } from 'react-icons/fa';

export default class ColorScheme extends Component {

    constructor(props){
        super(props);
        this.state = {
            right: '-262px'
        }
    }

    // Define if block of colors stay visible
    visibilityBlock = ()=>{
      this.state.right === '-15px' ?
        this.setState({right: '-262px'})
        :
        this.setState({right: '-15px'})
    };

    render() {

        const borderSelected = '2px solid black';

        return (
            <div className="color-scheme-select" style={{ right: this.state.right, borderColor: this.props.colorSelected }}>
                <div className="color-scheme-title">
                    20 Awesome Colors
                </div>
                <div id="color-1" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                     style={{background:COLORS.GREEN, border: this.props.colorSelected !== COLORS.GREEN ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.GREEN)}/>
                <div id="color-2" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                     style={{background: COLORS.BLUE, border: this.props.colorSelected !== COLORS.BLUE ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.BLUE)}/>
                <div id="color-3" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                     style={{background: COLORS.RED, border: this.props.colorSelected !== COLORS.RED ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.RED)}/>
                <div id="color-4" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                     style={{background: COLORS.MUSTARD, border: this.props.colorSelected !== COLORS.MUSTARD ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.MUSTARD)}/>
                <div id="color-5" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                     style={{background: COLORS.BRIGHT_PINK, border: this.props.colorSelected !== COLORS.BRIGHT_PINK ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.BRIGHT_PINK)}/>
                <div id="color-6" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                     style={{background: COLORS.TURQUOISE, border: this.props.colorSelected !== COLORS.TURQUOISE ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.TURQUOISE)}/>
                <div id="color-7" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: COLORS.ORANGE, border: this.props.colorSelected !== COLORS.ORANGE ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.ORANGE)}/>
                <div id="color-8" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: COLORS.LIMON, border: this.props.colorSelected !== COLORS.LIMON ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.LIMON)}/>
                <div id="color-9" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: COLORS.LILAC, border: this.props.colorSelected !== COLORS.LILAC ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.LILAC)}/>
                <div id="color-10" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: COLORS.ACQUA_MARINE, border: this.props.colorSelected !== COLORS.ACQUA_MARINE ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.ACQUA_MARINE)}/>
                <div id="color-11" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: COLORS.BROWN, border: this.props.colorSelected !== COLORS.BROWN ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.BROWN)}/>
                <div id="color-12" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: COLORS.PINK, border: this.props.colorSelected !== COLORS.PINK ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.PINK)}/>
                <div id="color-13" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: COLORS.NAVY_BLUE, border: this.props.colorSelected !== COLORS.NAVY_BLUE ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.NAVY_BLUE)}/>
                <div id="color-14" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: COLORS.YELLOW, border: this.props.colorSelected !== COLORS.YELLOW ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.YELLOW)}/>
                <div id="color-15" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: COLORS.BLACK, border: this.props.colorSelected !== COLORS.BLACK ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.BLACK)}/>
                <div id="color-16" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: COLORS.ORANGE_FORT, border: this.props.colorSelected !== COLORS.ORANGE_FORT ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.ORANGE_FORT)}/>
                <div id="color-17" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: COLORS.BEIGE, border: this.props.colorSelected !== COLORS.BEIGE ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.BEIGE)}/>
                <div id="color-18" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: COLORS.GREEN_FORT, border: this.props.colorSelected !== COLORS.GREEN_FORT ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.GREEN_FORT)}/>
                <div id="color-19" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: COLORS.BABY_BLUE, border: this.props.colorSelected !== COLORS.BABY_BLUE ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.BABY_BLUE)}/>
                <div id="color-20" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: COLORS.BABY_PINK, border: this.props.colorSelected !== COLORS.BABY_PINK ? '' : borderSelected}} onClick={this.props.changeColor.bind(this, COLORS.BABY_PINK)}/>

                <div className="color-scheme-select-btn waves-effect" style={{position: 'absolute', color: this.props.colorSelected, borderColor: this.props.colorSelected}} onClick={this.visibilityBlock}>
                    <FaCog style={{WebkitAnimation: 'spinner-rotate 2.5s linear infinite',
                                    MozAnimation: 'spinner-rotate 2.5s linear infinite',
                                    OAnimation: 'spinner-rotate 2.5s linear infinite',
                                    animation: 'spinner-rotate 2.5s linear infinite'}}/>
                </div>
            </div>
        );
    }
}