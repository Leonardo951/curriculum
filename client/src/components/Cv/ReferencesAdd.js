import React, {Component} from "react";
import {FaCircleNotch} from "react-icons/fa";
import scrollToComponent from "react-scroll-to-component";
import connect from "react-redux/es/connect/connect";

class ReferencesAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            ball: false,
            imgColor: '#ffffff',
        };
    }

    componentDidUpdate(){
        this.props.addActive && this.altActiveForScroll()
    }

    altActiveForScroll = ()=>{
        setTimeout(() => {
            scrollToComponent(this.refs.theDiv, {offset: 0, align: 'middle', duration: 500, ease: 'inCirc'});
        }, 700);
    };

    hoverBoll(){
        this.state.ball ?
            this.setState({ball: false, imgColor: '#ffffff'})
            :
            this.setState({ball: true, imgColor: this.props.colorCv})
    };

    render() {
        return (
            <form id="c-form" ref="theDiv" className="c-form" action="#0" method="post" style={{marginTop: this.props.activeTop,
                            transition: 'margin-top 0.8s', borderTop: this.props.activeTop === '40px' ? '1px solid '+this.props.colorCv : '0'}}>
                <fieldset>
                    <input id="subject" type="text" name="subject"
                           className="c-form-input" placeholder="Subject" style={{visibility: this.props.visible,
                                                    transition: this.props.addActive && 'visibility 0.8s'}}/>
                    <textarea id="message" name="message" className=""
                              placeholder="Message" style={{height: '104px', marginTop: '10px', visibility: this.props.visible,
                                                            transition: this.props.addActive && 'visibility 0.8s'}}/>
                    <button className="btn-custom waves-effect" type="submit"
                            onMouseOut={this.hoverBoll.bind(this)}  onMouseOver={this.hoverBoll.bind(this)}
                            name="button" style={{backgroundColor: this.props.colorCv, color: this.state.imgColor, visibility: this.props.visible,
                                                    transition: this.props.addActive && 'visibility 0.8s'}}>
                        Send Message
                    </button>
                    <FaCircleNotch id="c-form-spinner"/>
                </fieldset>
            </form>
        );
    }
}


const mapStateToProps = state => ({
    colorCv: state.colorCv
});

export default connect(mapStateToProps, null)(ReferencesAdd);