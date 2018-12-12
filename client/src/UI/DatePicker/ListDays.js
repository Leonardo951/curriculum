import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import * as DatePickerActions from "../../state/actions/DatePickerActions";
import connect from "react-redux/es/connect/connect";
import {daysOfTheMonth} from "./FunctionsDatePicker";

class ListDays extends Component {

    constructor(props){
        super(props);
        this.state = {
           colorSelect: false,
        };
    }

    daySelect = (day) =>{
        this.setState({ colorSelect: true });
        this.props.changeDay(day);
        this.props.saveDateBirth({
            year: this.props.picker.year,
            month: this.props.picker.month,
            day: day
        });
        setTimeout(()=>{
            this.setState({ colorSelect: false });
        },300);
        this.props.save(day)
    };

    render() {

        const primaryDay = new Date(this.props.picker.year, (this.props.picker.month-1), 1).toString().slice(0,3);

        const days = daysOfTheMonth(primaryDay, this.props.picker.month, this.props.picker.year);

        const classBtn = ()=>{
            if(this.props.picker.dateBirth !== null){
                if(this.props.picker.dateBirth.month === this.props.picker.month){
                    return true
                }else{
                    return false
                }
            }else{
                return true
            }

        };

        return (
            <table>
                <thead>
                <tr className={'days-th'}>
                    <th>Dom</th>
                    <th>Seg</th>
                    <th>Ter</th>
                    <th>Qua</th>
                    <th>Qui</th>
                    <th>Sex</th>
                    <th>Sab</th>
                </tr>
                </thead>
                <tbody>
                {
                    days.week1[0] === 7 && <tr><td className={'btn-picker-day-title text-uppercase'} colSpan={7}>
                        {
                            this.props.months.map((tool, index)=>{
                                if(this.props.picker.month === (tool.number)){
                                    return tool.month
                                }
                            })
                        }
                    </td></tr>
                }
                <tr>
                    {
                        days.week1.map((tool,index)=>{
                            if(index !== 0 && tool !== 0){
                                return <td key={index} className={'td-picker'}>
                                    <button className={this.props.picker.day === tool && classBtn() ? 'btn-picker-day option-select' : 'btn-picker-day option-not-select'}
                                            style={{background: this.state.colorSelect && tool === this.props.picker.day ? '#e6e6e6' : '#fafafa',
                                                transition: !this.state.colorSelect && tool === this.props.picker.day && 'all 0.3s'}}
                                            disabled={tool > new Date().getDate() &&
                                                        this.props.picker.year === new Date().getFullYear() &&
                                                            this.props.picker.month === (new Date().getMonth()+1) && true}
                                                onClick={tool > new Date().getDate() &&
                                                this.props.picker.year === new Date().getFullYear() &&
                                                this.props.picker.month === (new Date().getMonth()+1) ? undefined :
                                                    this.daySelect.bind(this, tool)}>{tool}</button></td>
                            }else if(index === 0 && days.week1[0] !== 7){
                                return <td key={index} className={'btn-picker-day-title text-uppercase'} colSpan={tool}>
                                        {
                                            this.props.months.map((tool, index)=>{
                                                if(this.props.picker.month === (tool.number)){
                                                    return tool.month
                                                }
                                            })
                                        }
                                </td>
                            }else if(tool === 0){
                                return <td key={index} className={'btn-picker-day-title text-uppercase'} colSpan={1}/>
                            }
                        })
                    }
                </tr>
                <tr>
                    {
                        days.week2.map((tool,index)=>{
                            return <td key={index} className={'td-picker'}>
                                <button className={this.props.picker.day === tool && classBtn() ? 'btn-picker-day option-select' : 'btn-picker-day option-not-select'}
                                        style={{background: this.state.colorSelect && tool === this.props.picker.day ? '#e6e6e6' : '#fafafa',
                                            transition: !this.state.colorSelect && tool === this.props.picker.day && 'all 0.3s'}}
                                        disabled={tool > new Date().getDate() &&
                                                        this.props.picker.year === new Date().getFullYear() &&
                                                            this.props.picker.month === (new Date().getMonth()+1) && true}
                                                onClick={tool > new Date().getDate() &&
                                                this.props.picker.year === new Date().getFullYear() &&
                                                this.props.picker.month === (new Date().getMonth()+1) ? undefined :
                                                    this.daySelect.bind(this, tool)}>{tool}</button></td>
                        })
                    }
                </tr>
                <tr>
                    {
                        days.week3.map((tool,index)=>{
                            return <td key={index} className={'td-picker'}>
                                <button className={this.props.picker.day === tool && classBtn() ? 'btn-picker-day option-select' : 'btn-picker-day option-not-select'}
                                        style={{background: this.state.colorSelect && tool === this.props.picker.day ? '#e6e6e6' : '#fafafa',
                                            transition: !this.state.colorSelect && tool === this.props.picker.day && 'all 0.3s'}}
                                        disabled={tool > new Date().getDate() &&
                                                        this.props.picker.year === new Date().getFullYear() &&
                                                            this.props.picker.month === (new Date().getMonth()+1) && true}
                                                onClick={tool > new Date().getDate() &&
                                                this.props.picker.year === new Date().getFullYear() &&
                                                this.props.picker.month === (new Date().getMonth()+1) ? undefined :
                                                    this.daySelect.bind(this, tool)}>{tool}</button></td>
                        })
                    }
                </tr>
                <tr>
                    {
                        days.week4.map((tool,index)=>{
                            return <td key={index} className={'td-picker'}>
                                         <button className={this.props.picker.day === tool && classBtn() ? 'btn-picker-day option-select' : 'btn-picker-day option-not-select'}
                                        style={{background: this.state.colorSelect && tool === this.props.picker.day ? '#e6e6e6' : '#fafafa',
                                            transition: !this.state.colorSelect && tool === this.props.picker.day && 'all 0.3s'}}
                                                 disabled={tool > new Date().getDate() &&
                                                        this.props.picker.year === new Date().getFullYear() &&
                                                            this.props.picker.month === (new Date().getMonth()+1) && true}
                                                onClick={tool > new Date().getDate() &&
                                                this.props.picker.year === new Date().getFullYear() &&
                                                this.props.picker.month === (new Date().getMonth()+1) ? undefined :
                                                    this.daySelect.bind(this, tool)}>{tool}</button></td>
                        })
                    }
                </tr>
                <tr>
                    {
                        days.week5.map((tool,index)=>{
                            return <td key={index} className={'td-picker'}>
                                         <button className={this.props.picker.day === tool && classBtn() ? 'btn-picker-day option-select' : 'btn-picker-day option-not-select'}
                                        style={{background: this.state.colorSelect && tool === this.props.picker.day ? '#e6e6e6' : '#fafafa',
                                            transition: !this.state.colorSelect && tool === this.props.picker.day && 'all 0.3s'}}
                                                 disabled={tool > new Date().getDate() &&
                                                        this.props.picker.year === new Date().getFullYear() &&
                                                            this.props.picker.month === (new Date().getMonth()+1) && true}
                                                onClick={tool > new Date().getDate() &&
                                                this.props.picker.year === new Date().getFullYear() &&
                                                this.props.picker.month === (new Date().getMonth()+1) ? undefined :
                                                    this.daySelect.bind(this, tool)}>{tool}</button></td>
                        })
                    }
                </tr>
                <tr>
                    {
                        days.week6.map((tool,index)=>{
                            return <td key={index} className={'td-picker'}>
                                         <button className={this.props.picker.day === tool && classBtn() ? 'btn-picker-day option-select' : 'btn-picker-day option-not-select'}
                            style={{background: this.state.colorSelect && tool === this.props.picker.day ? '#e6e6e6' : '#fafafa',
                                transition: !this.state.colorSelect && tool === this.props.picker.day && 'all 0.3s'}}
                                                 disabled={tool > new Date().getDate() &&
                                                        this.props.picker.year === new Date().getFullYear() &&
                                                            this.props.picker.month === (new Date().getMonth()+1) && true}
                                                onClick={tool > new Date().getDate() &&
                                                this.props.picker.year === new Date().getFullYear() &&
                                                this.props.picker.month === (new Date().getMonth()+1) ? undefined :
                                                    this.daySelect.bind(this, tool)}>{tool}</button></td>
                        })
                    }
                </tr>
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    picker: state.picker
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(DatePickerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListDays);