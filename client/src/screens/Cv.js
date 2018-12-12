import React, { Component } from 'react';
import '../styles/cv/animate.css';
import '../styles/cv/magnific-popup.css';
import '../styles/cv/owl.transitions.css';
import '../styles/cv/style.css';
import '../styles/cv/responsive.css';
import '../styles/cv/materialize.css';
import About from "../components/Cv/About";
import ColorScheme from "../components/Cv/ColorScheme";
import Education from "../components/Cv/Education";
import Experience from "../components/Cv/Experience";
import Skill from "../components/Cv/Skill";
import References from "../components/Cv/References";
import Contact from "../components/Cv/Contact";
import Footer from "../components/Cv/Footer";
import Qualifications from "../components/Cv/AdditionalInformation";
import AdditionalInformation from "../components/Cv/Qualifications";
import connect from "react-redux/es/connect/connect";
import { FaShareSquare, FaCaretLeft } from "react-icons/fa";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import queryString from 'query-string';
import {bindActionCreators} from "redux";
import * as curriculumActions from "../state/actions/curriculumAction";

class Cv extends Component {
    constructor(props){
        super(props);
        this.state = {
            copied: false
        };
    }

    componentDidMount() {
        if(!this.props.curriculumData.isNew){
            const values = queryString.parse(this.props.location.search);
            this.props.getCurriculum(values.id)
        }else{
            this.props.notNew()
        }
    }

    copytext = ()=> {
        this.setState({ copied: true });
        setTimeout(()=>{
            this.setState({ copied: false });
        }, 2000)
    };

    render() {

        const style ={
            position: 'static',
            // left: '62%',
            // top: '12%',
            // width: '10%',
            background: 'black',
            padding: '4px',
            borderRadius: '30px',
            color: '#fff',
            display: this.state.copied ? 'block' : 'none'
        };

        if(!this.props.app.loading) {
            return (
                <div>
                    <div className="site-header top-section top-section-home image-bg parallax-section"
                         data-image-bg="../../images/capa.jpg">
                        {
                            this.props.curriculumData.keyCurriculum === this.props.auth.key &&
                            <h6>
                                <div style={{fontWeight: 'bold', marginRight: '15px'}}>Compartilhe seu currículo:</div>
                                http://cvcloud/cv/{" " + this.props.curriculumData.keyCurriculum}
                                <CopyToClipboard text={this.state.text} onCopy={this.copytext.bind(this)}>
                                    <FaShareSquare style={{marginLeft: '15px', fontSize: '20px', cursor: 'pointer'}}
                                                   title={'Copiar'}/>
                                </CopyToClipboard>
                                <div className={'text-center'} style={{position: 'static'}}>
                                    <div style={style}><FaCaretLeft/>copiado</div>
                                </div>
                            </h6>
                        }
                        <div className="overlay-section"/>
                    </div>
                    <About/>
                    <Education/>
                    <Experience/>
                    <Skill/>
                    <AdditionalInformation/>
                    <Qualifications/>
                    <References/>
                    <Contact/>
                    <ColorScheme/>
                    <Footer/>
                </div>
            )
        }else {
            return <div/>
        }
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    curriculumData: state.curriculumData,
    app: state.app
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(curriculumActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cv);
