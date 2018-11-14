import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import connect from "react-redux/es/connect/connect";

class SkillProgress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0
        }
    }

    initProgressBar(){
        setTimeout(()=> {
            if(this.props.howMuch !== this.state.width) {
                this.setState({width: this.props.howMuch});
            }
        }, 350);
    }

    render() {

        const { skill, howMuch, colorCv } = this.props;

        return (
            <div className="progress-bar-wrapper">
                <p className="progress-text">
                    { skill }
                    <span>{ howMuch }%</span>
                </p>
                <div className="progress-bar">
                    <Waypoint onEnter={this.initProgressBar.bind(this)}>
                        <span data-percent={howMuch} style={{transition: 'width 1.5s',  background: colorCv, width: this.state.width+'%'}}/>
                    </Waypoint>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    colorCv: state.colorCv
});

export default connect(mapStateToProps, null)(SkillProgress);