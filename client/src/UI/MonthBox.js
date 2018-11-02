import React, { Component } from 'react';
import { FaCalendarAlt } from "react-icons/fa";

export default class MonthBox extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: this.props.value || 'N/A',
        };

        this._handleClick = this._handleClick.bind(this)
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            value: nextProps.value || 'N/A',
        })
    }

    render() {

        return (
            <div className="box" onClick={this._handleClick}>
                <FaCalendarAlt style={{fontSize: '20px'}}/>
                <label style={{ fontSize: '16px', margin: '10px 0px 0px 10px',
                    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;'}}>
                    {this.state.value}
                </label>
            </div>
        )
    }

    _handleClick(e) {
        this.props.onClick && this.props.onClick(e)
    }
}