import React, { Component } from 'react';
import { FaPlus, FaMinus, FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Select from '@material-ui/core/Select';
import MaskedInput from "react-text-mask";
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import DatePicker from 'react-date-picker';

export default class RegisterPersonalData extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedOption: null,
            btnTel: 'block',
            tel1: 'block',
            tel2: 'none',
            tel3: 'none',
            valPhones: {
                valPhone1: '',
                valPhone2: '',
                valPhone3: '',
            },
            date: null,
            stateCivil: '',
            mask: ['(', /[0-9]/, /\d/, ')', ' ', /[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
        }
    }

    handleChangeCivilState = (event) => {
        this.setState({ stateCivil: event.target.value });
    };

    changeAddTels = ()=>{
        if(this.state.tel1 === 'block'){
            this.setState({tel1: 'none', tel2: 'block'})
        }else if(this.state.tel2 === 'block'){
            this.setState({tel3: 'block', tel2: 'none', btnTel: 'none'})
        }
    };

    onChange = date => this.setState({ date });

    changeRemoveTel(qnt){
        if(qnt === 3){
            this.setState({tel3: 'none', tel2: 'block', btnTel: 'block'})
        }else{
            this.setState({tel2: 'none', tel1: 'block'})
        }
    };

    correctCharsPhone(e){
        if(e.type === 'focus'){
            this.setState({mask: ['(', /[0-9]/, /\d/, ')', ' ', /[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]})
        }else{
            let numberPhone = e.target.value;
            numberPhone = numberPhone.replace(/[^0-9]/g,'');
            console.log(numberPhone);
            if(numberPhone.length > 10){
                this.setState({mask: ['(', /[0-9]/, /\d/, ')', ' ', /[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/, /\d/]})
            }else{
                this.setState({mask: ['(', /[0-9]/, /\d/, ')', ' ', /[0-9]/, /\d/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/, /\d/]})
            }
        }
    };

    render() {

        const { selectedOption } = this.state;

        const optionsCivil = [
            { value: 'solteiro', label: 'Solteiro(a)' },
            { value: 'casado', label: 'Casado(a)' },
            { value: 'separado', label: 'Separado(a)' },
            { value: 'divorciado', label: 'Divorciado(a)' },
            { value: 'viuvo', label: 'Viúvo(a)' }
        ];
//CAMPO SEXO
        return (
            <div>
                <fieldset>
                    <div className="row-mat">
                        <div className="input-field cole s12">
                            <input type="text" className="c-form-input"
                                   placeholder="Nome completo"/>
                        </div>
                    </div>
                    <div className="row-mat">
                        <div className="input-field cole s12">
                            <input  type="text" className="c-form-input"
                                    placeholder="E-mail"/>
                        </div>
                    </div>
                    <div className="row-mat">
                        <div className="input-field cole s12">
                            <input type="text"
                                   className="c-form-input" placeholder="Nacionalidade"/>
                        </div>
                    </div>
                    <div className="row-mat">
                        <div className="input-field cole s6" style={{margin: 0}}>
                            <DatePicker
                                calendarIcon={<FaCalendarAlt/>}
                                onChange={this.onChange}
                                required={true}
                                maxDate={new Date()}
                                value={this.state.date}
                                showLeadingZeros={false}
                                locale={'pt-br'}
                            />
                        </div>
                            <FormControl className={'input-field cole s6'}>
                                <Select
                                    value={this.state.stateCivil}
                                    onChange={this.handleChangeCivilState}
                                    name="age"
                                    displayEmpty
                                    style={{height: '55px', fontSize: '16px'}}
                                >
                                    <MenuItem value="" disabled>
                                        Estado civil
                                    </MenuItem>
                                    {
                                        optionsCivil.map((tool, index)=>{
                                            return (
                                                <MenuItem key={index} value={tool.value}>{tool.label}</MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>
                    </div>
                    <div className="row-mat">
                        <div className="input-field cole s12">
                            <input type="text"
                                   className="c-form-input" placeholder="Endereço completo"/>
                        </div>
                    </div>
                    <div className="row-mat">
                        <div className="input-field cole s6">
                            <input placeholder="Cidade" type="text" className="validate"/>
                        </div>
                        <FormControl className={'input-field cole s6'}>
                            <Select
                                value={this.state.stateCivil}
                                onChange={this.handleChangeCivilState}
                                displayEmpty
                                style={{height: '50px', fontSize: '16px'}}
                            >
                                <MenuItem value="" disabled>
                                    UF (colocar)
                                </MenuItem>
                                {
                                    optionsCivil.map((tool, index)=>{
                                        return (
                                            <MenuItem key={index} value={tool.value}>{tool.label}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <div className="row-mat">
                        <div className="input-field cole s12">
                            <input type="text"
                                   className="c-form-input" placeholder="CEP"/>
                        </div>
                    </div>
                    <div className="row-mat">
                        <div className={'input-field cole s10'} style={{display: this.state.tel1}}>
                            <MaskedInput
                                mask={this.state.mask}
                                className="form-control"
                                placeholder={"(XX) XXXXX-XXXX"}
                                required={true}
                                guide={true}
                                onBlur={this.correctCharsPhone.bind(this)}
                                onFocus={this.correctCharsPhone.bind(this)}
                            />
                            <label className={'active'}>Telefone ou celular</label>
                        </div>
                        <div style={{display: this.state.tel2}}>
                            <div className={'input-field cole s5'}>
                                <MaskedInput
                                    mask={this.state.mask}
                                    className="c-form-input"
                                    placeholder={"(XX) XXXXX-XXXX"}
                                    required={true}
                                    guide={true}
                                    onBlur={this.correctCharsPhone.bind(this)}
                                    onFocus={this.correctCharsPhone.bind(this)}
                                />
                                <label className={'active'}>Telefone ou celular</label>
                            </div>
                            <div className={'input-field cole s5'}>
                                <MaskedInput
                                    mask={this.state.mask}
                                    className="c-form-input"
                                    placeholder={"(XX) XXXXX-XXXX"}
                                    required={true}
                                    guide={true}
                                    onBlur={this.correctCharsPhone.bind(this)}
                                    onFocus={this.correctCharsPhone.bind(this)}
                                />
                                <label className={'active'} title={'Remover'}><FaMinus style={{cursor: 'pointer'}} onClick={this.changeRemoveTel.bind(this, 2)}/></label>
                            </div>
                        </div>
                        <div style={{display: this.state.tel3}}>
                            <div className={'input-field cole s'}>
                                <MaskedInput
                                    mask={this.state.mask}
                                    className="c-form-input"
                                    placeholder={"(XX) XXXXX-XXXX"}
                                    required={true}
                                    guide={true}
                                    onBlur={this.correctCharsPhone.bind(this)}
                                    onFocus={this.correctCharsPhone.bind(this)}
                                />
                                <label className={'active'}>Telefone ou celular</label>
                            </div>
                            <div className={'input-field cole s4'}>
                                <MaskedInput
                                    mask={this.state.mask}
                                    className="c-form-input"
                                    placeholder={"(XX) XXXXX-XXXX"}
                                    required={true}
                                    guide={true}
                                    onBlur={this.correctCharsPhone.bind(this)}
                                    onFocus={this.correctCharsPhone.bind(this)}
                                />
                                <label className={'active'} title={'Remover'}><FaMinus style={{cursor: 'pointer'}} onClick={this.changeRemoveTel.bind(this, 3)}/></label>
                            </div>
                            <div className={'input-field cole s4'}>
                                <MaskedInput
                                    mask={this.state.mask}
                                    className="c-form-input"
                                    placeholder={"(XX) XXXXX-XXXX"}
                                    required={true}
                                    guide={true}
                                    onBlur={this.correctCharsPhone.bind(this)}
                                    onFocus={this.correctCharsPhone.bind(this)}
                                />
                                <label className={'active'} title={'Remover'}><FaMinus style={{cursor: 'pointer'}} onClick={this.changeRemoveTel.bind(this, 3)}/></label>
                            </div>
                        </div>
                        <div className="input-field cole s2" style={{display: this.state.btnTel}}>
                            <button className={'btn btn-secondary text-uppercase btn-sm'} type={'button'} onClick={this.changeAddTels}>
                                <FaPlus/>
                            </button>
                        </div>
                    </div>
                </fieldset>
            </div>
        );
    }
}