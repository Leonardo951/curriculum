import React, { Component } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import ReactTooltip from "react-tooltip";
import connect from "react-redux/es/connect/connect";

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            ball: false,
            imgColor: '#ffffff',
            intervalId: 0
        }
    }

    // Control color icon for back to top
    hoverBoll(info){
        if(this.state.ball){
            if(info !== 'img') {
                this.setState({ball: false, imgColor: '#ffffff'})
            }
        }else{
            this.setState({ball: true, imgColor: this.props.colorCv})
        }
    };

    // Start functions for back to top with speed: 70 and Delay: 16.66
    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - "70");
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), "16.66");
        this.setState({ intervalId: intervalId });
    }
    // End back to top

    render() {
        return (
            <footer className="footer" style={{backgroundColor: this.props.colorCv}}>
                <div className="container-mat">
                    <div className="row-mat">
                        <div className="cole s12 back-to-top-wrapper">
                            <span className="btn-circle waves-effect back-to-top tooltipped animatescroll-link wow zoomIn animated" onMouseOver={this.hoverBoll.bind(this, 'ball')}
                               onMouseOut={this.hoverBoll.bind(this, 'ball')} onClick={ () => { this.scrollToTop(); }}
                               style={{visibility: 'visible', animationDuration: '0.7s', animationDelay: '0.3s', animationName: 'zoomIn',
                                   backgroundColor: this.props.colorCv}}>
                                <FaAngleUp style={{color: this.state.imgColor}} onMouseOver={this.hoverBoll.bind(this, 'img')}/>
                            </span>
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

const mapStateToProps = state => ({
    colorCv: state.colorCv
});

export default connect(mapStateToProps, null)(Footer);