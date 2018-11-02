import React, { Component } from 'react';
import {FaPlus, FaTimes, FaTrash} from "react-icons/fa";
import scrollToComponent from "react-scroll-to-component";
import Picker from 'react-month-picker';
import 'react-month-picker/css/month-picker.css';
import MonthBox from '../../UI/MonthBox';

export default class AddExperience extends Component {

    constructor(props){
        super(props);
        this.state = {
            mainActivities: [
                {atv: 'Trabalhar com controle de horas'},
                {atv: 'oordenar os indicadores organizacionais'},
                {atv: 'Gerenciar controle de documentos e registros internos e externos'},
                {atv: 'Apoiar o gerenciamentos de projetos de TI'},
                {atv: 'Auxilio à área  da Qualidade'},
                {atv: 'Apoiar RH em atividades de treinamento e desenvolvimento de equipes e liderança'},
                {atv: 'Correção de bugs e desenvolvimento de novas funcionalidades em JavaScript'},
                {atv: 'Supervisionar o controle das ações corretivas, preventivas e de melhorias em curso'},
            ],
            viewMore: false,
            actualJob: '',
            mrange: {from: {year: 2018, month: 0}, to: {year: 2018, month: 0}},
            mtext: true,
        };

        this.refPage = React.createRef();

        if(this.props.focus){
            setTimeout(()=>{
                scrollToComponent(this.refPage.current, {offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
            }, 100);
        }

        this.handleRangeChange = this.handleRangeChange.bind(this);
        this._handleClickRangeBox = this._handleClickRangeBox.bind(this);
        this.handleRangeDissmis = this.handleRangeDissmis.bind(this)
    }

    removeLine(key){
        let newActivities = this.state.mainActivities.filter((tool, index)=>{
            if(index !== key){
                return true
            }
        });
        this.setState({mainActivities: newActivities})
    };

    addLine(e){
        if(e.key === 'Enter' && this.inputAtv.value !== '' || e.type === 'click' && this.inputAtv.value !== ''){
            let newActivities = this.state.mainActivities;
            let newValue = this.inputAtv.value;
            newActivities.unshift({atv: newValue});
            this.inputAtv.value = "";
            this.setState({mainActivities: newActivities});
        }
    };

    viewMore = ()=>{
        const more = this.state.viewMore ? false : true;
        if(more){
            setTimeout(()=>{
                scrollToComponent(this.refs.bodyTable, {offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
            }, 100);
        }
        this.setState({viewMore: more});
    };

    // Event fired to close datepicker
    handleRangeDissmis(value) {
        if(this.state.actualJob === 'checked'){
            value.to = {year: 2018, month: 10};
        }
        this.setState( {mrange: value, mtext: false} )
    }

    //Event fired to open datepicker
    handleRangeChange(year, month, listIndex) {
        // ver se é possível fechar quando o index for 1
    }

    // Open tbe datepicker
    _handleClickRangeBox(e) {
        this.refs.pickRange.show()
    }

    handleActualJob = ()=>{
        let newMrange = this.state.mrange;
        newMrange.to = {year: 2018, month: 10};
        this.state.actualJob === 'checked' ? this.setState({actualJob: ''}) : this.setState({actualJob: 'checked', mrange: newMrange})
    };

    render() {

        const pickerLang = {
            months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            from: 'Início:', to: 'Fim:',
        };

        const mrange = this.state.mrange;

        const makeText = m => {
            if (m && m.year && m.month) return (pickerLang.months[m.month-1] + '/' + m.year);
            return '?'
        };

        const makeTextp2 = m => {
            if (m && m.year && m.month) return (this.state.actualJob === '' ? pickerLang.months[m.month-1] + '/' + m.year : 'Atual');
            return this.state.actualJob === '' ? '?' : 'Atual'
        };

        return (
            <fieldset className="fieldset-border" ref={this.refPage}>
                <legend className="legend-border">{this.props.number}° Experiência</legend>
                <div className="row-mat" style={{margin: '1px'}}>
                    {
                        this.props.number !== 1 ?
                            <button className={'btn btn-default text-uppercase btn-sm btnHover'} type={'button'}
                                    style={{padding: '1px', width: 'auto', float: 'right'}} title={'Remover experiência'}
                                    onClick={this.props.remove}>
                                <FaTimes style={{color: '#fff'}}/>
                            </button>
                            :
                            <div/>
                    }
                </div>
                <div className="row-mat">
                    <div className="input-field cole s12">
                        <input type="text" className="c-form-input"
                               placeholder="Cargo"/>
                    </div>
                </div>
                <div className={'row-mat'} style={{margin: 0}}>
                    <div className="input-field cole s8">
                        <input type="text" className="c-form-input"
                               placeholder="Empresa"/>
                    </div>
                    <div className="input-field cole s4">
                        <input type="text" className="c-form-input"
                               placeholder="Sigla, se houver" maxLength={6} />
                    </div>
                </div>
                <div className={'row-mat'}>
                    <div className="input-field cole s6" onClick={this._handleClickRangeBox}>
                        <Picker
                            className={"c-form-input"}
                            ref="pickRange"
                            years={{min: 1960}}
                            range={mrange}
                            lang={pickerLang}
                            theme="dark"  //"light" for white
                            onChange={this.handleRangeChange}
                            onDismiss={this.handleRangeDissmis}
                        >
                            <MonthBox value={this.state.mtext ? 'Selecione a data de início e fim' : makeText(mrange.from) + ' ~ ' + makeTextp2(mrange.to)} onClick={this._handleClickRangeBox} />
                        </Picker>
                    </div>
                    <div className="input-field cole s6">
                        <label>
                            <input type="checkbox" className="filled-in" checked={this.state.actualJob} onClick={this.handleActualJob}/>
                            <span>Ainda estou neste emprego</span>
                        </label>
                    </div>
                </div>
                <div className="row-mat">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>
                                <div className="input-field cole s12" style={{margin: '1px', top: '15px'}}>
                                    <input type="text" className="c-form-input" onKeyPress={this.addLine.bind(this)}
                                           placeholder="Digite a atividade e aperte o enter para adicionar" ref={el => this.inputAtv = el}/>
                                </div>
                            </th>
                            <th className={'text-center'}>
                                <button className={'btn btn-primary text-uppercase btn-sm'} type={'button'} onClick={this.addLine.bind(this)}>Adicionar</button>
                            </th>
                        </tr>
                        </thead>
                        <tbody ref={'bodyTable'}>
                        {
                            this.state.mainActivities.map((tool, index)=>{
                                if(index < 3){
                                    return(
                                        <tr>
                                            <td>{tool.atv}</td>
                                            <td className={'text-center'} key={index}>
                                                <FaTrash style={{cursor: 'pointer'}}  title={'Remover linha'}
                                                         onClick={this.removeLine.bind(this, index)}/>
                                            </td>
                                        </tr>
                                    )
                                }else if(this.state.viewMore){
                                    return(
                                        <tr>
                                            <td>{tool.atv}</td>
                                            <td className={'text-center'} key={index}>
                                                <FaTrash style={{cursor: 'pointer'}}  title={'Remover linha'}
                                                            onClick={this.removeLine.bind(this, index)}/>
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }
                        {
                            this.state.mainActivities.length > 3 && !this.state.viewMore ?
                                <tr style={{borderRadius: '5px'}}>
                                    <td className={'text-center'} style={{backgroundColor: '#efefef', fontWeight: 'bold', borderRadius: '3px'}} colSpan={2}>
                                        <a href="" onClick={(e)=>{e.preventDefault(); this.viewMore();}}>Ver todas as atividades</a>
                                    </td>
                                </tr>
                                :
                                <div/>
                        }
                        {
                            this.state.viewMore ?
                                <tr style={{borderRadius: '5px'}}>
                                    <td className={'text-center'} style={{backgroundColor: '#efefef', fontWeight: 'bold'}} colSpan={2}>
                                        <a href="" onClick={(e)=>{e.preventDefault(); this.viewMore();}}>Ver menos</a>
                                    </td>
                                </tr>
                                :
                                <div/>
                        }
                        {
                            this.state.mainActivities.length === 0 ?
                                <tr style={{borderRadius: '5px'}}>
                                    <td className={'text-center'} colSpan={2} style={{backgroundColor: '#efefef', fontWeight: 'bold'}}>Por favor insira pelo menos uma atividade no campo acima</td>
                                </tr>
                                :
                                <div/>
                        }
                        </tbody>
                    </table>
                </div>
            </fieldset>
        )}
}