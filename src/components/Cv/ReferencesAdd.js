import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {FaCircleNotch} from "react-icons/fa";
import scrollToComponent from "react-scroll-to-component";

export default class ReferencesAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            ball: false,
            imgColor: '#ffffff',
            activeTop: '-234px',
            visible: 'hidden'
        }
    }

    componentWillReceiveProps(){
        if(this.props.addActive){
            this.altTop(true);
            // this.focusDiv();
            setTimeout(()=>{
                scrollToComponent(this.refs.theDiv, {offset: 0, align: 'top', duration: 500, ease:'inCirc'});
            }, 700);
        }else{
            this.altTop(false);
        }

    }

    hoverBoll(){
        this.state.ball ?
            this.setState({ball: false, imgColor: '#ffffff'})
            :
            this.setState({ball: true, imgColor: this.props.colorSelected})
    };

    // componentDidUpdate() {
    //     if(this.props.addActive)
    //         this.focusDiv();
    // };

    focusDiv() {
        ReactDOM.findDOMNode(this.refs.theDiv).focus();
    }

    altTop(active){
        active ?
            this.setState({activeTop: '40px', visible: 'visible'})
            :
            this.setState({activeTop: '-234px', visible: 'hidden'})
    }

    render() {
        return (
            <form id="c-form" ref="theDiv" className="c-form" action="#0" method="post" style={{marginTop: this.state.activeTop, transition: 'margin-top 0.8s', borderTop: this.state.activeTop === '40px' ? '1px solid '+this.props.colorSelected : '0'}}>
                <fieldset>
                    <input ref="theDiv" id="subject" type="text" name="subject"
                           className="c-form-input" placeholder="Subject" style={{visibility: this.state.visible, transition: this.props.addActive ? 'visibility 0.8s' : ''}}/>
                    <textarea id="message" name="message" className=""
                              placeholder="Message" style={{height: '104px', marginTop: '10px', visibility: this.state.visible, transition: this.props.addActive ? 'visibility 0.8s' : ''}}/>
                    <button className="btn-custom waves-effect" type="submit"
                            onMouseOut={this.hoverBoll.bind(this)}  onMouseOver={this.hoverBoll.bind(this)}
                            name="button" style={{backgroundColor: this.props.colorSelected, color: this.state.imgColor, visibility: this.state.visible, transition: this.props.addActive ? 'visibility 0.8s' : ''}}>
                        Send Message
                    </button>
                    <FaCircleNotch id="c-form-spinner"/>
                </fieldset>
            </form>
        );
    }
}
