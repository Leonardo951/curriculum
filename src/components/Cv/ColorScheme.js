import React, { Component } from 'react';

export default class ColorScheme extends Component {
    render() {
        return (
            <div className="color-scheme-select">
                <div className="color-scheme-title">
                    20 Awesome Colors
                </div>
                <div id="color-1" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                     style={{background:'#0EB57D'}}/>
                <div id="color-2" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                     style={{background: '#2196F3'}}/>
                <div id="color-3" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                     style={{background: '#FF1902'}}/>
                <div id="color-4" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                     style={{background: '#FF9800'}}/>
                <div id="color-5" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                     style={{background: '#E91E63'}}/>
                <div id="color-6" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                     style={{background: "#009688"}}/>
                <div id="color-7" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: "#FF5722"}}/>
                <div id="color-8" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: "#9EC139"}}/>
                <div id="color-9" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: "#9C27B0"}}/>
                <div id="color-10" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: "#4CAF50"}}/>
                <div id="color-11" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: "#795548"}}/>
                <div id="color-12" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: "#FF007F"}}/>
                <div id="color-13" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: "#673AB7"}}/>
                <div id="color-14" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: "#8BC34A"}}/>
                <div id="color-15" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: "#3E2723"}}/>
                <div id="color-16" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: "#FF7711"}}/>
                <div id="color-17" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: "#BF9C4F"}}/>
                <div id="color-18" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: "#33691E"}}/>
                <div id="color-19" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: "#607D8B"}}/>
                <div id="color-20" className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                         style={{background: "#FF7077"}}/>
                <div className="color-scheme-select-btn waves-effect" style={{position: 'absolute'}}>
                    <span className="fa fa-cog"/>
                </div>
            </div>
        );
    }
}