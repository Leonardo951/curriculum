import React, { Component } from 'react';

export default class SkillProgress extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="progress-bar-wrapper">
                <p className="progress-text">
                    C
                    <span>{this.props.howMuch}%</span>
                </p>
                <div className="progress-bar">
                    <span data-percent={this.props.howMuch} style={{transition: 'width 1.5s -ease 0s',  background: this.props.colorSelected, width: this.props.howMuch+'%'}}/>
                </div>
            </div>
        );
    }
}