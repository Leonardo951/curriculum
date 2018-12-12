import React, { Component } from 'react';
import RegisterPersonalData from "../components/Curriculum/RegisterPersonalData";
import RegisterEducation from "../components/Curriculum/RegisterEducation";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import scrollToComponent from "react-scroll-to-component";
import RegisterExperiences from "../components/Curriculum/RegisterExperiences";
import RegisterOthersData from "../components/Curriculum/RegisterOthersData";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import * as curriculumActions from "../state/actions/curriculumAction";
import {BTNS_FOR_DATA} from "../constant/curriculumConfig";

class Curriculo extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentActive: BTNS_FOR_DATA[0].value,
        };
        this.refMain = React.createRef();
        this.goFocusTop()
    }

    goFocusTop = () => {
        this.state.currentActive === BTNS_FOR_DATA[0].value &&
        setTimeout(()=>{
            scrollToComponent(this.refMain.current, {offset: 0, align: 'top', duration: 500, ease:'inCirc'});
        }, 100);
    };

    selectActive = tab => {
        if(this.state.currentActive !== tab){
            this.setState({ currentActive: tab });
            setTimeout(()=>{
                scrollToComponent(this.refs.divMain, {offset: 0, align: 'top', duration: 500, ease:'inCirc'});
            }, 100);
        }
        this.goFocusTop()
    };

    advanceForm = ()=>{
        let i = null;
        let advanceFor = '';
        BTNS_FOR_DATA.map((tool, index)=> {
            if(tool.value === this.state.currentActive){
                i = index;
            }else if(i !== null && i+1 === index){
                advanceFor = tool.value;
            }
        });
        this.selectActive(advanceFor)
    };

    returnForm = ()=>{
        let getIn = true;
        let returnFor = '';
        BTNS_FOR_DATA.map((tool, index)=> {
            if(tool.value !== this.state.currentActive && getIn){
                returnFor = tool.value;
            }else{
                getIn = false
            }
        });
        this.selectActive(returnFor)
    };

    submitCurriculum = e => {
        this.props.registerCurriculum(this.props.curriculumData)
    };

    render() {

        return (
            <div className="container">
                <div className="cole s12 section-title" ref={this.refMain}>
                    <h2 style={{margin: '40px 0 20px 0'}}>Precisamos de alguns dados</h2>
                </div>
                <div className="cole s12 text-center">
                    <div className="span3 well text-center">
                        <div className="well text-center">
                            {
                                BTNS_FOR_DATA.map((tool, index)=>{
                                    return (
                                        <button key={index} type={"button"} onClick={this.selectActive.bind(this, tool.value)}
                                                className={this.state.currentActive === tool.value ?
                                                    'btn btn-success text-uppercase btn-sm' : 'btn btn-secondary text-uppercase btn-sm'}>
                                            {tool.label}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <form className="c-form cole s12"
                      style={{backgroundColor: '#fff', padding: '20px'}}>
                    { this.state.currentActive === 'activeAbout' && <RegisterPersonalData /> }
                    { this.state.currentActive === 'activeEducation' && <RegisterEducation /> }
                    { this.state.currentActive === 'activeExperience' && <RegisterExperiences /> }
                    { this.state.currentActive === 'activeOthers' && <RegisterOthersData/> }
                    <div className={'row-mat'}>
                        {
                            this.state.currentActive !== BTNS_FOR_DATA[0].value &&
                            <div className="input-field cole s6">
                                <button className="btn btn-info text-uppercase btn-sm" type="button" onClick={this.returnForm}>
                                    <FaChevronLeft/> Retornar
                                </button>
                            </div>
                        }
                        {
                            this.state.currentActive !== BTNS_FOR_DATA[BTNS_FOR_DATA.length-1].value &&
                            <div className="input-field cole s6" style={{width: 'auto', float: 'right'}}>
                                <button className="btn btn-info text-uppercase btn-sm" type="button" onClick={this.advanceForm}>
                                    Continuar <FaChevronRight/>
                                </button>
                            </div>
                        }
                        <div className="input-field cole s12" style={{margin: '1px'}}>
                            <button className="btn btn-success text-center text-uppercase" type="button" style={{width: '100%'}}
                                    onClick={this.submitCurriculum.bind(this)}>
                                Cadastrar
                            </button>
                        </div>
                        <div className="input-field cole s12" style={{margin: '1px'}}>
                            <button className="btn btn-danger text-center text-uppercase" type="button" style={{width: '100%'}}
                                    onClick={this.props.cancelRegister()}>
                                Cancelar cadastro
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    curriculumData: state.curriculumData
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(curriculumActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Curriculo);