import React, { Component } from 'react';
import { FaAngleUp } from 'react-icons/fa';

export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            ball: false,
            imgColor: '#ffffff'
        }
    }

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
        return (
            <footer className="footer" style={{backgroundColor: this.props.colorSelected}}>
                <div className="container-mat">
                    <div className="row-mat">
                        <div className="cole s12 back-to-top-wrapper">
                            <a className="btn-circle waves-effect back-to-top tooltipped animatescroll-link wow zoomIn animated"
                               href="" onMouseOver={this.hoverBoll.bind(this, 'ball')}
                               onMouseOut={this.hoverBoll.bind(this, 'ball')}
                               style={{visibility: 'visible', animationDuration: '0.7s', animationDelay: '0.3s', animationName: 'zoomIn',
                                   backgroundColor: this.props.colorSelected}}>
                                <FaAngleUp style={{color: this.state.imgColor}} onMouseOver={this.hoverBoll.bind(this, 'img')}/>
                            </a>
                            <div className="copyright-text">
                                © All rights Reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}