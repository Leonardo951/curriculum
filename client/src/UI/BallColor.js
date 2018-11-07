import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import * as colorActions from "../state/actions/colorCv";
import { connect } from "react-redux";

class BallColor extends Component {
    constructor(props){
        super(props);

        console.log(props.colorCv)
    }

    render() {

        const { colorCv } = this.props;

        return (
            <div className="color-scheme-content w-block shadow-bg waves-effect waves-light"
                 style={{background: this.props.color, border: colorCv === this.props.color && '2px solid black'}}
                 onClick={(e)=>{this.props.changeColor(this.props.color)}}/>
        );
    }
}

const mapStateToProps = state => ({
    colorCv: state.colorCv
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(colorActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BallColor);