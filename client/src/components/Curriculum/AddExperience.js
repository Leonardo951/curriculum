import React, { Component } from 'react';
import {FaEdit, FaTimes, FaTrash} from "react-icons/fa";
import scrollToComponent from "react-scroll-to-component";
import Picker from 'react-month-picker';
import 'react-month-picker/css/month-picker.css';
import MonthBox from '../../UI/MonthBox';
import {bindActionCreators} from "redux";
import * as curriculumActions from "../../state/actions/curriculumAction";
import connect from "react-redux/es/connect/connect";
import { PICKERLANG } from '../../constant/curriculumOptions';

class AddExperience extends Component {

    constructor(props){
        super(props);
        this.state = {
            viewMore: false,
        };

        this.refPage = React.createRef();

        if(this.props.index !== 0){
            setTimeout(()=>{
                scrollToComponent(this.refPage.current, {offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
            }, 100);
        }

        this.handleRangeChange = this.handleRangeChange.bind(this);
        this._handleClickRangeBox = this._handleClickRangeBox.bind(this);
    }

    removeLine = line => {
        let updateActivities = this.props.curriculumData.experience[this.props.index].mainAct;
        updateActivities = updateActivities.filter((tool, index)=>{
            if(index !== line){
                return true;
            }
        });
        this.props.changeMainAct(updateActivities, this.props.index);
    };

    editLine = line => {
          this.inputAtv.value = this.props.curriculumData.experience[this.props.index].mainAct[line];
          this.inputAtv.focus();
          this.removeLine(line);
    };

    addLine = e => {
        if(e.key === 'Enter' && this.inputAtv.value !== '' || e.type === 'click' && this.inputAtv.value !== ''){
            let newActivities = this.props.curriculumData.experience[this.props.index].mainAct;
            newActivities = newActivities.concat(this.inputAtv.value).reverse();
            this.inputAtv.value = "";
            this.props.changeMainAct(newActivities, this.props.index);
        }
    };

    viewMore = () => {
        if(!this.state.viewMore){
            setTimeout(()=>{
                scrollToComponent(this.refs.bodyTable, {offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
            }, 100);
        }else{
            setTimeout(()=>{
                scrollToComponent(this.refPage.current, {offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
            }, 100);
        }
        this.setState({viewMore: !this.state.viewMore});
    };

    //Event fired to open datepicker
    handleRangeChange(year, month, listIndex) {
        // ver se é possível fechar quando o index for 1
    }

    // Open tbe datepicker
    _handleClickRangeBox = e => {
        this.refs.pickRange.show()
    };

    hadleCurrent(e){
        const val = !this.props.curriculumData.experience[this.props.index].current;
        const periodWork = this.props.curriculumData.experience[this.props.index].periodWork;
        this.props.changeCurrentJob(val, this.props.index);
        this.makeText(periodWork.from);
        this.makeTextp2(periodWork.to);
        console.log(val)
    }

    makeTextp2 = m => {
        const current = this.props.curriculumData.experience[this.props.index].current;
        if (m && m.year && m.month) return (current ? 'Atual' : PICKERLANG.months[m.month-1] + '/' + m.year);
        return current ? 'Atual' : '?'
    };

    makeText = m => {
        if (m && m.year && m.month) return (PICKERLANG.months[m.month-1] + '/' + m.year);
        return '?'
    };

    render() {

        const indexExp = this.props.index;

        const { job, company, initials, periodWork, current, mainAct } = this.props.curriculumData.experience[indexExp];;

        return (
            <fieldset className="fieldset-border" ref={this.refPage}>
                <legend className="legend-border">{indexExp+1}° Experiência</legend>
                <div className="row-mat" style={{margin: '1px'}}>
                    {
                        indexExp !== 0 &&
                            <button className={'btn btn-default text-uppercase btn-sm btnHover'} type={'button'}
                                    style={{padding: '1px', width: 'auto', float: 'right'}} title={'Remover experiência'}
                                    onClick={this.props.remove}>
                                 <FaTimes style={{color: '#fff'}}/>
                             </button>
                    }
                </div>
                <div className="form-group">
                    <label>Cargo</label>
                    <input type={"text"} id={'course'} className={"form-control"} onChange={e => this.props.changeJob(e.target.value, indexExp)}
                           value={job} placeholder={'Cargo'}/>
                </div>
                <div className={'row'}>
                    <div className="form-group col-md-10">
                        <label>Empresa</label>
                        <input type={"text"} className={"form-control"} onChange={e => this.props.changeCompany(e.target.value, indexExp)}
                               value={company} placeholder={'Empresa'}/>
                    </div>
                    <div className="form-group col-md-2">
                        <label>Sigla, se houver</label>
                        <input type={"text"} className={"form-control"} onChange={e => this.props.changeInitialsforExp(e.target.value, indexExp)}
                               value={initials} placeholder={'Sigla, se houver'}  maxLength={6} />
                    </div>
                </div>
                <div className={'row'}>
                    <div className="form-group col-md-6" onClick={this._handleClickRangeBox}>
                        <label>Selecione o período em que esteve na empresa</label>
                        <Picker
                            className={"form-control"}
                            ref="pickRange"
                            years={{min: 1960}}
                            range={periodWork}
                            lang={PICKERLANG}
                            theme="light"  //"dark" for black
                            onChange={this.handleRangeChange}
                            onDismiss={val => this.props.changePeriodWork(val, indexExp)}
                        >
                            <MonthBox value={periodWork.from.month === 0 && periodWork.to.month === 0 ? 'Início - FIm' :
                                this.makeText(periodWork.from) + ' ~ ' + this.makeTextp2(periodWork.to)}
                                      onClick={this._handleClickRangeBox} />
                        </Picker>
                    </div>
                    <div className="form-group col-md-6">
                        <br/><br/>
                        <label>
                            <input type="checkbox" className="filled-in" checked={current ? 'checked' : false}
                                    onChange={this.hadleCurrent.bind(this)}/>
                            <span>Ainda estou neste emprego</span>
                        </label>
                    </div>
                </div>
                <div className="row">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>
                                <div className="form-group" style={{margin: '1px', top: '15px'}}>
                                    <input type="text" className="form-control" onKeyPress={this.addLine.bind(this)}
                                           placeholder="Digite a atividade e aperte o enter para adicionar" ref={el => this.inputAtv = el}/>
                                </div>
                            </th>
                            <th className={'text-center'}>
                                <button className={'btn btn-success text-uppercase btn-sm'} type={'button'} onClick={this.addLine.bind(this)}>Adicionar</button>
                            </th>
                        </tr>
                        </thead>
                        <tbody ref={'bodyTable'}>
                        {
                            this.props.curriculumData.experience[this.props.index].mainAct.map((tool, index)=> {
                                if (index < 3) {
                                    return (
                                        <tr key={index}>
                                            <td>{tool}</td>
                                            <td className={'text-center'}>
                                                <FaEdit style={{cursor: 'pointer', marginRight: '10px', fontSize: '19px', color: 'mediumblue'}}
                                                         title={'Editar linha'} onClick={this.editLine.bind(this, index)}/>
                                                <FaTrash style={{cursor: 'pointer', marginLeft: '10px', fontSize: '17px', color: '#962b2b'}}
                                                         title={'Remover linha'} onClick={this.removeLine.bind(this, index)}/>
                                            </td>
                                        </tr>
                                    )
                                } else if (this.state.viewMore) {
                                    return (
                                        <tr key={index}>
                                            <td>{tool}</td>
                                            <td className={'text-center'}>
                                                <FaEdit style={{cursor: 'pointer', marginRight: '10px', fontSize: '19px', color: 'mediumblue'}}
                                                        title={'Editar linha'} onClick={this.editLine.bind(this, index)}/>
                                                <FaTrash style={{cursor: 'pointer', marginLeft: '10px', fontSize: '17px', color: '#962b2b'}}
                                                         title={'Remover linha'} onClick={this.removeLine.bind(this, index)}/>
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }
                        {
                            this.props.curriculumData.experience[this.props.index].mainAct.length > 3 && !this.state.viewMore &&
                                <tr style={{borderRadius: '5px'}}>
                                    <td className={'text-center'} style={{backgroundColor: '#efefef', fontWeight: 'bold', borderRadius: '3px'}} colSpan={2}>
                                        <a href="" onClick={(e)=>{e.preventDefault(); this.viewMore();}}>Ver todas as atividades</a>
                                    </td>
                                </tr>
                        }
                        {
                            this.state.viewMore &&
                                <tr style={{borderRadius: '5px'}}>
                                    <td className={'text-center'} style={{backgroundColor: '#efefef', fontWeight: 'bold'}} colSpan={2}>
                                        <a href="" onClick={(e)=>{e.preventDefault(); this.viewMore();}}>Ver menos</a>
                                    </td>
                                </tr>
                        }
                        {
                            mainAct.length === 0 &&
                                <tr style={{borderRadius: '5px'}}>
                                    <td className={'text-center'} colSpan={2} style={{backgroundColor: '#efefef', fontWeight: 'bold'}}>Por favor insira pelo menos uma atividade no campo acima</td>
                                </tr>
                        }
                        </tbody>
                    </table>
                </div>
            </fieldset>
        )}
}

const mapStateToProps = state => ({
    curriculumData: state.curriculumData
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(curriculumActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddExperience);