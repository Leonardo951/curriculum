import React, { Component } from 'react';
import { FaPlus, FaMinus, FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Select from '@material-ui/core/Select';
import MaskedInput from "react-text-mask";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import DatePicker from 'react-date-picker';
import { bindActionCreators } from "redux";
import * as curriculumActions from '../../state/actions/curriculum';
import connect from "react-redux/es/connect/connect";
import { Row, Input } from 'react-materialize';

class RegisterPersonalData extends Component {

    constructor(props){
        super(props);
        this.state = {
            btnTel: 'block',
            tel1: 'block',
            tel2: 'none',
            tel3: 'none',
            mask: ['(', /[0-9]/, /\d/, ')', ' ', /[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
        }
    }

    handleChangeDate = date => this.props.changeDateBirth(date);

    changeAddTels = () => {
        if(this.state.tel1 === 'block'){
            this.setState({tel1: 'none', tel2: 'block'})
        }else if(this.state.tel2 === 'block'){
            this.setState({tel3: 'block', tel2: 'none', btnTel: 'none'})
        }
    };

    changeRemoveTel(qnt){
        if(qnt === 3){
            this.setState({tel3: 'none', tel2: 'block', btnTel: 'block'})
        }else{
            this.setState({tel2: 'none', tel1: 'block'})
        }
    };

    submitPhone(e){
        let numberPhone = e.target.value.replace(/[^0-9]/g,'');
        let obj = this.props.curriculumData.phone;
        if(e.target.id === 'phone1'){
            obj.phoneOne = numberPhone;
        }else if(e.target.id === 'phone2'){
            obj.phoneTwo = numberPhone;
        }else{
            obj.phoneTwo = numberPhone;
        }

        this.props.changePhone(obj)
    }

    correctCharsPhone(e){
        if(e.type === 'focus'){
            this.setState({mask: ['(', /[0-9]/, /\d/, ')', ' ', /[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]})
        }else{
            let numberPhone = e.target.value;
            numberPhone = numberPhone.replace(/[^0-9]/g,'');
            if(numberPhone.length > 10){
                this.setState({mask: ['(', /[0-9]/, /\d/, ')', ' ', /[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/, /\d/]})
            }else{
                this.setState({mask: ['(', /[0-9]/, /\d/, ')', ' ', /[0-9]/, /\d/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/, /\d/]})
            }
        }
    }

    render() {

        const optionsCivil = [
            { value: 'solteiro', label: 'Solteiro(a)' },
            { value: 'casado', label: 'Casado(a)' },
            { value: 'separado', label: 'Separado(a)' },
            { value: 'divorciado', label: 'Divorciado(a)' },
            { value: 'viuvo', label: 'Viúvo(a)' }
        ];

        const { name, otherMail, nationality, dateBirth, civilStatus, address, zipCode, city, uf, phone } = this.props.curriculumData;

//CAMPO SEXO
        return (
            <div>
                <fieldset>
                    <div className="row-mat">
                        <div className="input-field cole s12">
                            <Row>
                                <Input label='Nome completo' onChange={(e)=>{this.props.changeName(e.target.value)}}
                                            value={name}/>
                            </Row>
                            {/*<input type="text" className="c-form-input" onChange={(e)=>{this.props.changeName(e.target.value)}}*/}
                                   {/*placeholder="Nome completo" value={name}/>*/}
                        </div>
                    </div>
                    <div className="row-mat">
                        <div className="input-field cole s12">
                            <input  type="text" className="c-form-input"  onChange={(e)=>{this.props.changeMail(e.target.value)}}
                                    placeholder="E-mail" value={otherMail}/>
                        </div>
                    </div>
                    <div className="row-mat">
                        <div className="input-field cole s12">
                            <input type="text"  onChange={(e)=>{this.props.changeNationality(e.target.value)}}
                                   className="c-form-input" placeholder="Nacionalidade" value={nationality}/>
                        </div>
                    </div>
                    <div className="row-mat">
                        <div className="input-field cole s6" style={{margin: 0}}>
                            <DatePicker
                                calendarIcon={<FaCalendarAlt/>}
                                onChange={this.handleChangeDate}
                                required={true}
                                maxDate={new Date()}
                                value={dateBirth}
                                showLeadingZeros={false}
                                locale={'pt-br'}
                            />
                        </div>
                            <FormControl className={'input-field cole s6'}>
                                <Select
                                    value={civilStatus}
                                    onChange={(e)=>{this.props.changeCivilStatus(e.target.value)}}
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
                            <input type="text" onChange={(e)=>{this.props.changeAddress(e.target.value)}}
                                   className="c-form-input" placeholder="Endereço completo" value={address}/>
                        </div>
                    </div>
                    <div className="row-mat">
                        <div className="input-field cole s6">
                            <input placeholder="Cidade" type="text"  onChange={(e)=>{this.props.changeCity(e.target.value)}}
                                   className="validate" value={city}/>
                        </div>
                        <FormControl className={'input-field cole s6'}>
                            <Select
                                value={uf}
                                onChange={(e)=>{this.props.changeUF(e.target.value)}}
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
                            <input type="text" value={zipCode} onChange={(e)=>{this.props.changeZipCode(e.target.value)}}
                                   className="c-form-input" placeholder="CEP" />
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
                                id={'phone1'}
                                value={phone.phoneOne}
                                onChange={this.submitPhone.bind(this)}
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
                                    id={'phone1'}
                                    value={phone.phoneOne}
                                    guide={true}
                                    onChange={this.submitPhone.bind(this)}
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
                                    id={'phone2'}
                                    value={phone.phoneTwo}
                                    onChange={this.submitPhone.bind(this)}
                                    onBlur={this.correctCharsPhone.bind(this)}
                                    onFocus={this.correctCharsPhone.bind(this)}
                                />
                                <label className={'active'} title={'Remover'}><FaMinus style={{cursor: 'pointer'}} onClick={this.changeRemoveTel.bind(this, 2)}/></label>
                            </div>
                        </div>
                        <div style={{display: this.state.tel3}}>
                            <div className={'input-field cole s4'}>
                                <MaskedInput
                                    mask={this.state.mask}
                                    className="c-form-input"
                                    placeholder={"(XX) XXXXX-XXXX"}
                                    required={true}
                                    guide={true}
                                    id={'phone1'}
                                    value={phone.phoneOne}
                                    onChange={this.submitPhone.bind(this)}
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
                                    id={'phone2'}
                                    value={phone.phoneTwo}
                                    guide={true}
                                    onChange={this.submitPhone.bind(this)}
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
                                    id={'phone3'}
                                    value={phone.phoneThree}
                                    onChange={this.submitPhone.bind(this)}
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


const mapStateToProps = state => ({
    auth: state.auth,
    curriculumData: state.curriculumData
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(curriculumActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPersonalData);