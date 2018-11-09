import React, { Component } from 'react';
import { FaTimes } from "react-icons/fa";
import scrollToComponent from "react-scroll-to-component";
import Picker from 'react-month-picker';
import 'react-month-picker/css/month-picker.css';
import MonthBox from '../../UI/MonthBox';
import { OPTIONS_SELECT_SEMESTER_OR_YEAR, PICKERLANG, OPTIONS_PERIOD, OPTIONS_STATUS, OPTIONS_UNIFINISHED } from '../../constant/curriculum';
import {bindActionCreators} from "redux";
import * as curriculumActions from "../../state/actions/curriculum";
import connect from "react-redux/es/connect/connect";

class AddFormation extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
        this.refPage = React.createRef();

        this.props.index !== 0 &&
        setTimeout(()=>{
            scrollToComponent(this.refPage.current, {offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
        }, 100);

        this.handleAMonthChange = this.handleAMonthChange.bind(this);
        this.handleClickMonthBox = this.handleClickMonthBox.bind(this);
    }

    //Event fired to open datepicker
    handleAMonthChange(value, text) {
        //
    }

    // Open tbe datepicker
    handleClickMonthBox(e) {
        this.refs.pickAMonth.show()
    }

    render() {

        const indexCard = this.props.index;

        const { course, locale, initials, status, dateEnd, semOrYear, period } = this.props.curriculumData.formation[indexCard];

        const makeText = m => {
            if (m && m.year && m.month) return (PICKERLANG.months[m.month-1] + '/' + m.year);
            return '?'
        };

        return (
            <fieldset className="fieldset-border" ref={this.refPage}>
                <legend className="legend-border">Formação {indexCard+1}</legend>
                <div className="row-mat" style={{margin: '1px'}}>
                    {
                        indexCard !== 0 &&
                        <button className={'btn btn-default text-uppercase btn-sm btnHover'} type={'button'}
                                style={{padding: '1px', width: 'auto', float: 'right'}} title={'Remover formação'}
                                onClick={this.props.remove}>
                            <FaTimes style={{color: '#fff'}}/>
                        </button>
                    }
                </div>
                <div className="form-group">
                    <label>Curso</label>
                    <input type={"text"} id={'course'} className={"form-control"} onChange={e => this.props.changeCourse(e.target.value, indexCard)}
                           value={course} placeholder={'Curso'}/>
                </div>
                <div className={'row'}>
                    <div className="form-group col-md-10">
                        <label>Local</label>
                        <input type={"text"} className={"form-control"} onChange={e => this.props.changeLocale(e.target.value, indexCard)}
                               value={locale} placeholder={'Local'}/>
                    </div>
                    <div className="form-group col-md-2">
                        <label>Sigla, se houver</label>
                        <input type={"text"} className={"form-control"} onChange={e => this.props.changeInitials(e.target.value, indexCard)}
                               value={initials} placeholder={'Sigla'}/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label>Status</label>
                        <select className={"form-control"} defaultValue={status} onChange={e => this.props.changeStatus(e.target.value, indexCard)}>
                            <option value={''} disabled>Selecione...</option>
                            {
                                OPTIONS_STATUS.map((tool, index)=>{
                                    return (
                                        <option key={index} value={tool.value}>{tool.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    {
                        status === 'completo' &&
                        <div className="form-group col-md-6" style={{margin: 0}}
                             onClick={this.handleClickMonthBox}>
                            <label>Finalizado em:</label>
                            <Picker
                                className={"form-control"}
                                ref="pickAMonth"
                                years={{min: 1960}}
                                value={dateEnd}
                                theme="dark"
                                lang={PICKERLANG.months}
                                onChange={this.handleAMonthChange}
                                onDismiss={val => this.props.changeDateEnd(val, indexCard)}
                            >
                                <MonthBox value={dateEnd.month === 0 ? 'Selecione...' : makeText(dateEnd)}
                                          onClick={this.handleClickMonthBox}/>
                            </Picker>
                        </div>
                    }
                    {
                        status === 'incompleto' &&
                        <div className="form-group col-md-6">
                            <label>Motivo</label>
                            <select className={"form-control"} defaultValue={period} onChange={e => this.props.changePeriod(e.target.value, indexCard)}>
                                <option value={''} disabled>Selecione...</option>
                                {
                                    OPTIONS_UNIFINISHED.map((tool, index)=>{
                                        return (
                                            <option key={index} value={tool.value}>{tool.label}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    }
                </div>
                {
                    status === 'cursando' && status !== '' &&
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Semestre ou ano</label>
                            <select className={"form-control"} defaultValue={semOrYear} onChange={e => this.props.changeSemOrYear(e.target.value, indexCard)}>
                                <option value={''} disabled={true}>Selecione...</option>
                                <option disabled>Ano</option>
                                {
                                    OPTIONS_SELECT_SEMESTER_OR_YEAR.year.map((tool, index)=>{
                                        return (
                                            <option key={index} value={tool.value}>{tool.label}</option>
                                        )
                                    })
                                }
                                <option disabled={true}>Semestre</option>
                                {
                                    OPTIONS_SELECT_SEMESTER_OR_YEAR.semester.map((tool, index)=>{
                                        return (
                                            <option key={index} value={tool.value}>{tool.label}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Período</label>
                            <select className={"form-control"} defaultValue={period} onChange={e => this.props.changePeriod(e.target.value, indexCard)}>
                                <option value={''} disabled>Selecione...</option>
                                {
                                    OPTIONS_PERIOD.map((tool, index)=>{
                                        return (
                                            <option key={index} value={tool.value}>{tool.label}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                }
            </fieldset>
        )}
}

const mapStateToProps = state => ({
    curriculumData: state.curriculumData
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(curriculumActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddFormation);