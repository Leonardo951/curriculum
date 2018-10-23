import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

export default class SkillProgress extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: 0
        }
    }

    componentDidMount() {

    }

    initProgressBar(){
        setTimeout(()=> {
            if(this.props.howMuch !== this.state.width) {
                this.setState({width: this.props.howMuch});
            }
        }, 500);
    }

    render() {
        return (
            <div className="progress-bar-wrapper">
                <p className="progress-text">
                    C
                    <span>{this.props.howMuch}%</span>
                </p>
                <div className="progress-bar">
                    <Waypoint onEnter={this.initProgressBar.bind(this)}>
                        <span data-percent={this.props.howMuch} style={{transition: 'width 1.5s',  background: this.props.colorSelected, width: this.state.width+'%'}}/>
                    </Waypoint>
                </div>
            </div>
        );
    }
}