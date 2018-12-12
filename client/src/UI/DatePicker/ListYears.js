import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import * as DatePickerActions from "../../state/actions/DatePickerActions";
import connect from "react-redux/es/connect/connect";

class ListYears extends Component {

    constructor(props){
        super(props);
        this.state = {
            colorSelect: false,
        };
    }

    yearSelect = year => {
        this.setState({ colorSelect: true });
        this.props.changeYear(year);
        this.props.selectOptionMonth();
        setTimeout(()=>{
            this.setState({ colorSelect: false });
        },300)
    };

    render() {

        return (
            <table>
                <thead>
                <tr>
                    {
                        this.props.picker.objYears.map((tool, index)=>{
                            if(index < 4){
                                return <th className={'month-table'} key={index}>
                                    <button onClick={this.yearSelect.bind(this, tool)}
                                            style={{background: this.state.colorSelect && tool === this.props.picker.year ? '#e6e6e6' : '#fafafa',
                                                transition: !this.state.colorSelect && tool === this.props.picker.year && 'all 0.3s'}}
                                            className={this.props.picker.year === tool ? 'option-select btn-month-table' : 'btn-month-table option-not-select'}>
                                        {tool}
                                    </button>
                                </th>
                            }
                        })
                    }
                </tr>
                <tr>
                    {
                        this.props.picker.objYears.map((tool, index)=>{
                            if(index > 3 && index < 8){
                                return <th className={'month-table'} key={index}>
                                    <button onClick={this.yearSelect.bind(this, tool)}
                                            style={{background: this.state.colorSelect && tool === this.props.picker.year ? '#e6e6e6' : '#fafafa',
                                                transition: !this.state.colorSelect && tool === this.props.picker.year && 'all 0.3s'}}
                                            className={this.props.picker.year === tool ? 'option-select btn-month-table' : 'btn-month-table option-not-select'}>
                                        {tool}
                                    </button>
                                </th>
                            }
                        })
                    }
                </tr>
                <tr>
                    {
                        this.props.picker.objYears.map((tool, index)=>{
                            if(index > 7 && index < 12){
                                return <th className={'month-table'} key={index}>
                                    <button onClick={this.yearSelect.bind(this, tool)}
                                            style={{background: this.state.colorSelect && tool === this.props.picker.year ? '#e6e6e6' : '#fafafa',
                                                transition: !this.state.colorSelect && tool === this.props.picker.year && 'all 0.3s'}}
                                            className={this.props.picker.year === tool ? 'option-select btn-month-table' : 'btn-month-table option-not-select'}>
                                        {tool}
                                    </button>
                                </th>
                            }
                        })
                    }
                </tr>
                <tr>
                    {
                        this.props.picker.objYears.map((tool, index)=>{
                            if(index > 11 && index < 16){
                                return <th className={'month-table'} key={index}>
                                    <button onClick={this.yearSelect.bind(this, tool)}
                                            style={{background: this.state.colorSelect && tool === this.props.picker.year ? '#e6e6e6' : '#fafafa',
                                                transition: !this.state.colorSelect && tool === this.props.picker.year && 'all 0.3s'}}
                                            className={this.props.picker.year === tool ? 'option-select btn-month-table' : 'btn-month-table option-not-select'}>
                                        {tool}
                                    </button>
                                </th>
                            }
                        })
                    }
                </tr>
                <tr>
                    {
                        this.props.picker.objYears.map((tool, index)=>{
                            if(index > 15 && index < 20){
                                return <th className={'month-table'} key={index}>
                                    <button onClick={this.yearSelect.bind(this, tool)}
                                            style={{background: this.state.colorSelect && tool === this.props.picker.year ? '#e6e6e6' : '#fafafa',
                                                transition: !this.state.colorSelect && tool === this.props.picker.year && 'all 0.3s'}}
                                            className={this.props.picker.year === tool ? 'option-select btn-month-table' : 'btn-month-table option-not-select'}>
                                        {tool}
                                    </button>
                                </th>
                            }
                        })
                    }
                </tr>
                <tr>
                    {
                        this.props.picker.objYears.map((tool, index)=>{
                            if(index > 19){
                                return <th className={'month-table'} key={index}>
                                    <button onClick={this.yearSelect.bind(this, tool)}
                                            style={{background: this.state.colorSelect && tool === this.props.picker.year ? '#e6e6e6' : '#fafafa',
                                                transition: !this.state.colorSelect && tool === this.props.picker.year && 'all 0.3s'}}
                                            className={this.props.picker.year === tool ? 'option-select btn-month-table' : 'btn-month-table option-not-select'}>
                                        {tool}
                                    </button>
                                </th>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListYears);