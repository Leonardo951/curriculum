import React, { Component } from 'react';
import {COLORS} from '../../constant/CvColors';
import { FaCog } from 'react-icons/fa';
import BallColor from '../../UI/BallColor';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ColorScheme extends Component {

    constructor(props){
        super(props);
        this.state = {
            right: '-262px'
        };
    }

    // Define if block of colors stay visible
    visibilityBlock = ()=>{
      this.state.right === '-15px' ?
        this.setState({right: '-262px'})
        :
        this.setState({right: '-15px'})
    };

    render() {

        return (
            <div className="color-scheme-select" style={{ right: this.state.right, borderColor: this.props.colorCv }}>
                <div className="color-scheme-title">
                    20 Awesome Colors
                </div>
                {
                    COLORS.map((tool, index)=>{
                        if(tool.color !== '#ffffff') {
                            return <BallColor key={index} color={tool.color}/>
                        }
                    })
                }
                <div className="color-scheme-select-btn waves-effect" onClick={this.visibilityBlock}
                     style={{position: 'absolute', color: this.props.colorCv, borderColor: this.props.colorCv}}>
                    <FaCog style={{WebkitAnimation: 'spinner-rotate 2.5s linear infinite',
                                    MozAnimation: 'spinner-rotate 2.5s linear infinite',
                                    OAnimation: 'spinner-rotate 2.5s linear infinite',
                                    animation: 'spinner-rotate 2.5s linear infinite'}}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    colorCv: state.colorCv
});

export default connect(mapStateToProps, null)(ColorScheme);