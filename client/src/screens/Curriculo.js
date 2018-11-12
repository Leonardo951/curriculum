import React, { Component } from 'react';
import RegisterPersonalData from "../components/Curriculo/RegisterPersonalData";
import RegisterEducation from "../components/Curriculo/RegisterEducation";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import scrollToComponent from "react-scroll-to-component";
import RegisterExperiences from "../components/Curriculo/RegisterExperiences";
import RegisterOthersData from "../components/Curriculo/RegisterOthersData";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as colorActions from "../state/actions/cv/colorCv";
import connect from "react-redux/es/connect/connect";
import * as curriculumActions from "../state/actions/curriculum";

class Curriculo extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentActive: 'activeAbout',
            actives: [
                {btn: 'activeAbout', class: 'btn btn-success text-uppercase btn-sm', title: 'Dados pessoais'},
                {btn: 'activeEducation', class: 'btn btn-secondary text-uppercase btn-sm', title: 'Formação profissional'},
                {btn: 'activeExperience', class: 'btn btn-secondary text-uppercase btn-sm', title: 'Experiências profissionais'},
                // {btn: 'activeSkills', class: 'btn btn-secondary text-uppercase btn-sm', title: 'Interesses'},
                {btn: 'activeOthers', class: 'btn btn-secondary text-uppercase btn-sm', title: 'Informações complementares'},
                // {btn: 'activeAdditionalInformation', class: 'btn btn-secondary text-uppercase btn-sm', title: 'Informações adicionais'},
            ]
        };
        this.refMain = React.createRef();
        this.goFocustTop()
    }

    goFocustTop = () => {
        this.state.currentActive === 'activeAbout' &&
        setTimeout(()=>{
            scrollToComponent(this.refMain.current, {offset: 0, align: 'top', duration: 500, ease:'inCirc'});
        }, 100);
    };

    selectActive(tab){
        if(this.state.currentActive !== tab){
            let actives = [
                {btn: 'activeAbout', class: 'btn btn-secondary text-uppercase btn-sm', title: 'Dados pessoais'},
                {btn: 'activeEducation', class: 'btn btn-secondary text-uppercase btn-sm', title: 'Formação profissional'},
                {btn: 'activeExperience', class: 'btn btn-secondary text-uppercase btn-sm', title: 'Experiências profissionais'},
                {btn: 'activeOthers', class: 'btn btn-secondary text-uppercase btn-sm', title: 'Informações complementares'},
            ];
            actives =  actives.filter((tool, index)=> {
                if(tool.btn === tab){
                    tool.class = 'btn btn-success text-uppercase btn-sm';
                }
                return true
            });
            this.setState({currentActive: tab, actives: actives});
            setTimeout(()=>{
                scrollToComponent(this.refs.divMain, {offset: 0, align: 'top', duration: 500, ease:'inCirc'});
            }, 100);
        }
        this.goFocustTop()
    };

    advanceForm = ()=>{
        let i = null;
        let advanceFor = '';
        this.state.actives.filter((tool, index)=> {
            if(tool.btn === this.state.currentActive){
                i = index;
                console.log('i: '+ i)
            }else if(i !== null && i+1 === index){
                advanceFor = tool.btn;
                console.log('advancefor: '+ advanceFor)
            }
        });
        this.selectActive(advanceFor)
    };

    returnForm = ()=>{
        let getIn = true;
        let returnFor = '';
        this.state.actives.filter((tool, index)=> {
            if(tool.btn !== this.state.currentActive && getIn){
                returnFor = tool.btn;
            }else{
                getIn = false
            }
        });
        this.selectActive(returnFor)
    };

    render() {

        return (
            <div className="container">
                {/*<div className="row">*/}
                    <div className="cole s12 section-title" ref={this.refMain}>
                        <h2 style={{margin: '40px 0 20px 0'}}>Precisamos de alguns dados</h2>
                    </div>
                    <div className="cole s12 text-center">
                        <div className="span3 well text-center">
                            <div className="well text-center">
                                {
                                    this.state.actives.map((tool, index)=>{
                                        return(
                                            <button key={index} type={"button"} className={tool.class}
                                                    onClick={this.selectActive.bind(this, tool.btn)}>
                                                {tool.title}
                                            </button>
                                        )})
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
                                this.state.currentActive !== 'activeAbout' &&
                                <div className="input-field cole s6">
                                    <button className="btn btn-info text-uppercase btn-sm" type="button" onClick={this.returnForm}>
                                        <FaChevronLeft/> Retornar
                                    </button>
                                </div>
                            }
                            {
                                this.state.currentActive !== 'activeOthers' &&
                                <div className="input-field cole s6" style={{width: 'auto', float: 'right'}}>
                                    <button className="btn btn-info text-uppercase btn-sm" type="button" onClick={this.advanceForm}>
                                        Continuar <FaChevronRight/>
                                    </button>
                                </div>
                            }
                            <div className="input-field cole s12" style={{margin: '1px'}}>
                                <button className="btn btn-success text-center text-uppercase" type="button" style={{width: '100%'}}
                                            onClick={e => this.props.registerCurriculum(this.props.curriculumData)}>
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
                {/*</div>*/}
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