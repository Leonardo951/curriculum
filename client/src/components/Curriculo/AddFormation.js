import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {FaPlus, FaTimes} from "react-icons/fa";
import scrollToComponent from "react-scroll-to-component";
import Picker from 'react-month-picker';
import 'react-month-picker/css/month-picker.css';
import MonthBox from '../../UI/MonthBox';

export default class AddFormation extends Component {

    constructor(props){
        super(props);
        this.state = {
            age: '',
            mtext: true,
            mvalue: {year: 2018, month: 0},
            statusSelected: 'invalid'
        };
        this.refPage = React.createRef();

        if(this.props.focus){
            setTimeout(()=>{
                scrollToComponent(this.refPage.current, {offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
            }, 100);
        }
        this.handleAMonthChange = this.handleAMonthChange.bind(this);
        this.handleClickMonthBox = this.handleClickMonthBox.bind(this);
        this.handleAMonthDissmis = this.handleAMonthDissmis.bind(this)
    }

    //Event fired to open datepicker
    handleAMonthChange(value, text) {
        //
    }

    // Open tbe datepicker
    handleClickMonthBox(e) {
        this.refs.pickAMonth.show()
    }

    handleAMonthDissmis(value) {
        this.setState( {mvalue: value, mtext: false} )
    }

    handleChangeSelect = (event) => {
        this.setState({ age: event.target.value });
    };

    handleChangeStatus = (event) => {
        this.setState({ statusSelected: event.target.value });
    };

    render() {

        const pickerLang = {
            months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        };
        const mvalue = this.state.mvalue;

        const makeText = m => {
            if (m && m.year && m.month) return (pickerLang.months[m.month-1] + '/' + m.year);
            return '?'
        };

        const status = [
            {value: 'incompleto', label: 'Incompleto'},
            {value: 'cursando', label: 'Cursando'},
            {value: 'completo', label: 'Concluído'}
        ];

        return (
            <fieldset className="fieldset-border" ref={this.refPage}>
                <legend className="legend-border">Formação {this.props.number}</legend>
                <div className="row-mat" style={{margin: '1px'}}>
                    {
                        this.props.number !== 1 ?
                            <button className={'btn btn-default text-uppercase btn-sm btnHover'} type={'button'}
                                    style={{padding: '1px', width: 'auto', float: 'right'}} title={'Remover formação'}
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
                               placeholder="Curso"/>
                    </div>
                </div>
                <div className={'row-mat'}>
                    <div className="input-field cole s8">
                        <input type="text" className="c-form-input"
                               placeholder="Local"/>
                    </div>
                    <div className="input-field cole s4">
                        <input type="text" className="c-form-input"
                               placeholder="Sigla" />
                    </div>
                </div>
                <div className={'row-mat'}>
                    <FormControl className={'input-field cole s6'}>
                        <Select
                            value={this.state.statusSelected}
                            onChange={this.handleChangeStatus}
                            name="age"
                            displayEmpty
                            style={{height: '50px', fontSize: '16px'}}
                        >
                            <MenuItem value="invalid" disabled>Status</MenuItem>
                            {
                                status.map((tool, index) => {
                                    return (
                                        <MenuItem key={index} value={tool.value}>{tool.label}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                    <div className="input-field cole s6" style={{margin: 0}} onClick={this.state.statusSelected === 'completo' && this.handleClickMonthBox}>
                        <Picker
                            className={"c-form-input"}
                            ref="pickAMonth"
                            years={{min: 1960}}
                            value={mvalue}
                            theme="dark"
                            lang={pickerLang.months}
                            onChange={this.handleAMonthChange}
                            onDismiss={this.handleAMonthDissmis}
                        >
                            <MonthBox value={this.state.mtext || this.state.statusSelected !== 'completo'? 'Selecione a data de conclusão do curso' : makeText(mvalue)} onClick={this.state.statusSelected === 'completo' && this.handleClickMonthBox} />
                        </Picker>
                    </div>
                </div>
                <div className="row-mat">
                    <FormControl className={'input-field cole s6'}>
                        <Select
                            value={this.state.age}
                            onChange={this.handleChangeSelect}
                            name="age"
                            disabled={this.state.statusSelected !== 'cursando' && true}
                            displayEmpty
                            style={{height: '50px', fontSize: '16px'}}
                        >
                            <MenuItem value="" disabled>
                                Semestre ou ano
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={'input-field cole s6'}>
                        <Select
                            value={this.state.age}
                            disabled={this.state.statusSelected !== 'cursando' && true}
                            onChange={this.handleChangeSelect}
                            name="age"
                            displayEmpty
                            style={{height: '50px', fontSize: '16px'}}
                        >
                            <MenuItem value="" disabled>
                                Período
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </fieldset>
        )}
}