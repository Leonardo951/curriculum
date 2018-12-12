import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { FaAngleLeft, FaAngleRight, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import TableDays from "./ListDays";
import ListOfMonths from "./ListOfMonths";
import ListYears from "./ListYears";
import {bindActionCreators} from "redux";
import * as DatePickerActions from "../../state/actions/DatePickerActions";
import connect from "react-redux/es/connect/connect";
import {functionsDatePicker} from './FunctionsDatePicker';

class DatePicker extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false,
            inputValue: false,
            colorReturn: false,
            colorAdvance: false,
            colorClose: false,
            colorBtnMain: false,
            yearMin: 0,
            yearMax: 0
        };
    }

    saveDate = ()=>{
        this.setState({ inputValue: true });
        this.onCloseModal()
    };

    onOpenModal = () => {
        if(this.props.picker.dateBirth !== null){
            if(this.props.picker.dateBirth.month !== this.props.picker.month){
                this.props.changeMonth(this.props.picker.dateBirth.month)
            }
        }
        this.setState({ open: true });
        this.props.selectOptionDay();
        this.ordeneYears();
    };

    ordeneYears = () => {
        let res = {};
        if(this.props.picker.dateBirth !== null){
            if(this.props.picker.dateBirth.year < this.props.picker.yearMin || this.props.picker.dateBirth.year > this.props.picker.yearMax){
                res = functionsDatePicker(this.props.picker.dateBirth.year, this.props.picker.yearMin, this.props.picker.yearMax);
                this.props.changeListYears({
                    objYears: res.arr, yearMax: res.max, yearMin:  res.min
                });
            }
        }else{
            if(this.props.picker.year < this.props.picker.yearMin || this.props.picker.year > this.props.picker.yearMax){
                res = functionsDatePicker(this.props.picker.year, this.props.picker.yearMin, this.props.picker.yearMax);
                this.props.changeListYears({
                    objYears: res.arr, yearMax: res.max, yearMin:  res.min
                });
            }
        }
    };

    onCloseModal = () => {
        this.setState({ open: false, colorClose: true });
        setTimeout(()=>{
            this.setState({ colorClose: false });
        },300)
    };

    lessYears = () =>{
        const y = this.props.picker.yearMin;
        const arr = [y-1,y-2,y-3,y-4,y-5,y-6,y-7,y-8,y-9,y-10,y-11,y-12,y-13,y-14,y-15,y-16,y-17,y-18,y-19,y-20,y-21,y-22,y-23,y-24].reverse();
        this.props.changeListYears({
            objYears: arr, yearMax: arr[23], yearMin:  arr[0]
        });
    };

    moreYears = () =>{
        const y = this.props.picker.yearMax;
        const arr = [y+1,y+2,y+3,y+4,y+5,y+6,y+7,y+8,y+9,y+10,y+11,y+12,y+13,y+14,y+15,y+16,y+17,y+18,y+19,y+20,y+21,y+22,y+23,y+24];
        this.props.changeListYears({
            objYears: arr, yearMax: arr[23], yearMin:  arr[0]
        });
    };

    advanceMonth = ()=>{
        this.setState({ colorAdvance: true });
        if(this.props.picker.daySelect){
            if(this.props.picker.month === 12){
                    this.props.changeYear(this.props.picker.year+1);
                    this.props.changeMonth(1)
            }else{
                this.props.changeMonth(this.props.picker.month+1)
            }
        }else if(this.props.picker.yearSelect){
            this.moreYears()
        }else{
            this.props.changeYear(this.props.picker.year+1)
        }
        setTimeout(()=>{
            this.setState({ colorAdvance: false });
        },300)
    };

    returnMonth = ()=> {
        this.setState({ colorReturn: true });
        if(this.props.picker.daySelect){
            if(this.props.picker.month === 1){
                this.props.changeYear(this.props.picker.year-1);
                this.props.changeMonth(12)
            }else{
                this.props.changeMonth(this.props.picker.month-1)
            }
        }else if(this.props.picker.yearSelect){
            this.lessYears()
        }else{
            this.props.changeYear(this.props.picker.year-1)
        }
        setTimeout(()=>{
            this.setState({ colorReturn: false });
        },300)
    };

    selectYearAndMonth = () => {
        this.setState({ colorBtnMain: true });
        if(this.props.picker.daySelect){
            this.props.selectOptionYear()
        }else{
            this.props.selectOptionDay()
        }
        setTimeout(()=>{
            this.setState({ colorBtnMain: false });
        },350)
    };

    render() {

        const months = [
            {month: 'Jan', number: 1, complete: 'Janeiro'},
            {month: 'Fev', number: 2, complete: 'Fevereiro'},
            {month: 'Mar', number: 3, complete: 'Março'},
            {month: 'Abr', number: 4, complete: 'Abril'},
            {month: 'Mai', number: 5, complete: 'Maio'},
            {month: 'Jun', number: 6, complete: 'Junho'},
            {month: 'Jul', number: 7, complete: 'Julho'},
            {month: 'Ago', number: 8, complete: 'Agosto'},
            {month: 'Set', number: 9, complete: 'Setembro'},
            {month: 'Out', number: 10, complete: 'Outubro'},
            {month: 'Nov', number: 11, complete: 'Novembro'},
            {month: 'Dez', number: 12, complete: 'Dezembro'},
        ];

        const formatDateForInput = () => {
            if(this.props.picker.dateBirth.month < 10){
                return this.props.picker.dateBirth.day + '/0' + this.props.picker.dateBirth.month + '/' + this.props.picker.dateBirth.year
            }else{
                return this.props.picker.dateBirth.day + '/' + this.props.picker.dateBirth.month + '/' + this.props.picker.dateBirth.year
            }
        };

        const btnCaseDays = months.filter((tool, index)=>{
                if(this.props.picker.month === (tool.number)){
                    return true
                }
            });

        const titleReturn = ()=>{
            if(this.props.picker.daySelect){
                return 'Mês anterior'
            }else if(this.props.picker.monthSelect){
                return 'Ano anterior'
            }else{
                const yearmin = this.props.picker.yearMin-24;
                const yearmax = this.props.picker.yearMin-1;
                return yearmin+' - '+yearmax
            }
        };

        const titleAdvance = ()=>{
            if(this.props.picker.daySelect){
                return 'Próximo mês'
            }else if(this.props.picker.monthSelect){
                return 'Próximo ano'
            }else{
                const yearmin = this.props.picker.yearMax+1;
                const yearmax = this.props.picker.yearMax+24;
                return yearmin+' - '+yearmax
            }
        };

        const disabledAdvance = ()=>{
            if(this.props.picker.month !== (new Date().getMonth()+1)){
                if((new Date().getFullYear()) === this.props.picker.yearMax && this.props.picker.yearSelect){
                    return true
                }else if((new Date().getFullYear()) === this.props.picker.year && this.props.picker.month === 12 && this.props.picker.daySelect) {
                    return true
                }else if((new Date().getFullYear()) === this.props.picker.year && this.props.picker.monthSelect){
                    return true
                }else{
                    return false
                }
            }else{
                if(this.props.picker.year !== new Date().getFullYear()){
                    if((new Date().getFullYear()) === this.props.picker.yearMax && this.props.picker.yearSelect){
                        return true
                    }else if((new Date().getFullYear()) === this.props.picker.year && this.props.picker.month === 12 && this.props.picker.daySelect) {
                        return true
                    }else if((new Date().getFullYear()) === this.props.picker.year && this.props.picker.monthSelect){
                        return true
                    }else{
                        return false
                    }
                }else{
                    return true
                }
            }
        };

        return (
            <div>
                {
                    this.state.inputValue ?
                        <input type={"text"} className={"form-control"} value={formatDateForInput()} placeholder={'dd/mm/aaaa'}
                               onClick={e =>{this.onOpenModal()}}/>
                        :
                        <input type={"text"} className={"form-control"} value={''} placeholder={'dd/mm/aaaa'}
                               onClick={e =>{this.onOpenModal()}}/>
                }
                <Modal open={this.state.open} onClose={this.onCloseModal} center showCloseIcon={false} classNames={{ modal: 'modal-picker'}}>
                    <div className={'title-picker'}>
                        <button className={'month-year text-uppercase'} onClick={this.selectYearAndMonth.bind(this)}
                                title={btnCaseDays[0].month + " de " + this.props.picker.year +"\n Clique para modificar"}
                                style={{background: this.state.colorBtnMain ? '#e6e6e6' : '#fafafa', transition: !this.state.colorBtnMain &&'all 0.3s'}}>
                            { this.props.picker.daySelect && btnCaseDays[0].month + " - " + this.props.picker.year }
                            { this.props.picker.monthSelect && this.props.picker.year }
                            { this.props.picker.yearSelect && this.props.picker.yearMin + " - " + this.props.picker.yearMax }
                            {
                                this.props.picker.daySelect ?
                                    <FaAngleDown className={'icon-month-year'}/>
                                    :
                                    <FaAngleUp className={'icon-month-year'}/>
                            }
                        </button>
                        <button className={'btn-icons'} onClick={this.returnMonth.bind(this)}
                                title={titleReturn()}
                                style={{background: this.state.colorReturn ? '#e6e6e6' : '#fafafa', transition: !this.state.colorReturn &&'all 0.3s'}}>
                            <FaAngleLeft className={'icon-return'}/>
                        </button>
                        <button className={'btn-icons'} onClick={!disabledAdvance() ? this.advanceMonth.bind(this) : undefined}
                                title={titleAdvance()} disabled={disabledAdvance()}
                                    style={{background: this.state.colorAdvance ? '#e6e6e6' : '#fafafa', transition: !this.state.colorAdvance &&'all 0.3s'}}>
                            <FaAngleRight className={'icon-advance'}/>
                        </button>
                    </div>
                    <div className={'picker-options'}>
                        { this.props.picker.daySelect && <TableDays months={months} save={this.saveDate.bind(this)} /> }
                        { this.props.picker.monthSelect && <ListOfMonths months={months}/> }
                        { this.props.picker.yearSelect && <ListYears/> }
                    </div>
                    <br/><br/>
                    <button className={'btn-cancel text-uppercase'} onClick={this.onCloseModal.bind(this)}
                            style={{background: this.state.colorClose ? '#e6e6e6' : '#fafafa', transition: !this.state.colorClose &&'all 0.3s'}}>
                        Fechar</button>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    picker: state.picker
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(DatePickerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
