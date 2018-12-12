import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import * as DatePickerActions from "../../state/actions/DatePickerActions";
import connect from "react-redux/es/connect/connect";

class ListOfMonths extends Component {

    constructor(props){
        super(props);
        this.state = {
            colorSelect: false,
        };
    }

    monthSelect = month => {
        this.setState({ colorSelect: true });
        this.props.changeMonth(month);
        this.props.selectOptionDay();
        setTimeout(()=>{
            this.setState({ colorSelect: false });
        },300)
    };

    render() {

        return (
            <table>
                <thead>
                <tr>
                    <td className={'btn-picker-month-title'} colSpan={4}>{this.props.picker.year}</td>
                </tr>
                <tr>
                    {
                        this.props.months.map((tool, index)=>{
                            if(index < 4){
                                return <th className={'month-table-th text-uppercase'} key={index}>
                                    <button onClick={tool.number === (new Date().getMonth()+2) && this.props.picker.year === new Date().getFullYear() ? undefined :
                                                            this.monthSelect.bind(this, tool.number)}
                                            disabled={tool.number === (new Date().getMonth()+2) && this.props.picker.year === new Date().getFullYear() && true}
                                            style={{background: this.state.colorSelect && tool.number === this.props.picker.month ? '#e6e6e6' : '#fafafa',
                                                transition: !this.state.colorSelect && tool.number === this.props.picker.month && 'all 0.3s'}}
                                              className={this.props.picker.month === tool.number ? 'month-table-btn option-select text-uppercase' :
                                                  'text-uppercase month-table-btn option-not-select'}>
                                        {tool.month}
                                        </button></th>
                            }
                        })
                    }
                </tr>
                <tr>
                    {
                        this.props.months.map((tool, index)=>{
                            if(index > 3 && index < 8){
                                return <th className={'month-table-th text-uppercase'} key={index}>
                                    <button onClick={tool.number === (new Date().getMonth()+2) && this.props.picker.year === new Date().getFullYear() ? undefined :
                                                            this.monthSelect.bind(this, tool.number)}
                                            disabled={tool.number === (new Date().getMonth()+2) && this.props.picker.year === new Date().getFullYear() && true}
                                            style={{background: this.state.colorSelect && tool.number === this.props.picker.month ? '#e6e6e6' : '#fafafa',
                                                transition: !this.state.colorSelect && tool.number === this.props.picker.month && 'all 0.3s'}}
                                            className={this.props.picker.month === tool.number ? 'month-table-btn option-select text-uppercase' :
                                                'text-uppercase month-table-btn option-not-select'}>
                                        {tool.month}
                                    </button></th>
                            }
                        })
                    }
                </tr>
                <tr>
                    {
                        this.props.months.map((tool, index)=>{
                            if(index > 7){
                                return <th className={'month-table-th text-uppercase'} key={index}>
                                    <button onClick={tool.number === (new Date().getMonth()+2) && this.props.picker.year === new Date().getFullYear() ? undefined :
                                                            this.monthSelect.bind(this, tool.number)}
                                            disabled={tool.number === (new Date().getMonth()+2) && this.props.picker.year === new Date().getFullYear() && true}
                                            style={{background: this.state.colorSelect && tool.number === this.props.picker.month ? '#e6e6e6' : '#fafafa',
                                                transition: !this.state.colorSelect && tool.number === this.props.picker.month && 'all 0.3s'}}
                                            className={this.props.picker.month === tool.number ? 'month-table-btn option-select text-uppercase' :
                                                'text-uppercase month-table-btn option-not-select'}>
                                        {tool.month}
                                    </button></th>
                            }
                        })
                    }
                </tr>
                </thead>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    picker: state.picker
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(DatePickerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListOfMonths);