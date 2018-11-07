import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import connect from "react-redux/es/connect/connect";

class SkillProgress extends Component {
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
                        <span data-percent={this.props.howMuch} style={{transition: 'width 1.5s',  background: this.props.colorCv, width: this.state.width+'%'}}/>
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