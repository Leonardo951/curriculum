import React, { Component } from 'react';
import { FaPlus, FaMinus, FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MaskedInput from "react-text-mask";
import DatePicker from 'react-date-picker';
import { bindActionCreators } from "redux";
import * as curriculumActions from '../../state/actions/curriculum';
import connect from "react-redux/es/connect/connect";
import Datetime from 'react-datetime';
import '../../styles/cv/datetime.css';
import { OPTIONS_CIVIL_STATUS, OPTIONS_STATES_OF_BRAZIL } from "../../constant/curriculum";

class RegisterPersonalData extends Component {

    constructor(props){
        super(props);
        this.state = {
            btnTel: 'block',
            tel1: 'block',
            tel2: 'none',
            tel3: 'none',
            mask: ['(', /[0-9]/, /\d/, ')', ' ', /[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
            otherMail: props.curriculumData.otherMail && true,
            btnMail: true
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

    otherMail = () => {
        const _new = !this.state.otherMail;
        this.setState({ otherMail:  _new })
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
    };

    submitMail = e => {
        if(e.target.value.length > 0){
            this.setState({ btnMail:  false })
        }else{
            this.setState({ btnMail:  true })
        }
        this.props.changeMail(e.target.value)
    };

    render() {

        const { name, otherMail, nationality, dateBirth, civilStatus, address, zipCode, city, uf, phone } = this.props.curriculumData;

//CAMPO SEXO
        return (
            <div>
                <fieldset>
                    <div className="form-group">
                        <label>Nome completo</label>
                        <input type={"text"} className={"form-control"} onChange={(e)=>{this.props.changeName(e.target.value)}}
                               value={name} placeholder={'Nome completo'}/>
                    </div>
                    <div className={'row'}>
                        <div className="form-group col-md-11">
                            <label>E-mail</label>
                            <input type={"email"} disabled={!this.state.otherMail} className={"form-control"}
                                   value={this.state.otherMail ? otherMail : this.props.auth.mail}
                                   placeholder={'example@mail.com'} onChange={this.state.otherMail && this.submitMail.bind(this)}/>
                        </div>
                        <div className="form-group col-md-1" style={{display: this.state.btnMail ? 'block' : 'none'}}>
                            <label style={{visibility: 'hidden'}}>idmscksdmcsd</label>
                            <button className={'btn btn-default text-uppercase btn-sm form-control'}
                                    type={'button'} onClick={this.otherMail} style={{background: '#e0dbdb'}}>
                                {
                                    this.state.otherMail ?
                                        <FaMinus/>
                                        :
                                        <FaPlus/>
                                }
                            </button>
                        </div>
                    </div>
                    {
                        this.state.otherMail &&
                        <div className="form-group col-md-12">
                            {/*<label>E-mail</label>*/}
                            <input type={"email"} className={"form-control"}
                                   disabled={true} placeholder={'example@mail.com'}
                                   value={this.props.auth.mail} />
                        </div>
                    }
                    <div className="form-group">
                        <label>Nacionalidade</label>
                        <input type={"email"} className={"form-control"} onChange={(e)=>{this.props.changeNationality(e.target.value)}}
                               value={nationality} placeholder={'Nacionalidade'}/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Data de nascimento</label>
                            <Datetime timeFormat={false} value={dateBirth} onChange={this.handleChangeDate} input={true}
                                      required={true} locale="pt-br" disableCloseOnClickOutside={false}/>
                            {/*<DatePicker*/}
                                {/*calendarIcon={<FaCalendarAlt/>}*/}
                                {/*onChange={this.handleChangeDate}*/}
                                {/*required={true}*/}
                                {/*maxDate={new Date()}*/}
                                {/*value={dateBirth}*/}
                                {/*showLeadingZeros={false}*/}
                                {/*locale={'pt-br'}*/}
                            {/*/>*/}
                        </div>
                        <div className="col">
                            <label>Estado civil</label>
                            <select className={"form-control"} defaultValue={civilStatus} onChange={(e)=>{this.props.changeCivilStatus(e.target.value)}}>
                                <option selected>Selecione...</option>
                                {
                                    OPTIONS_CIVIL_STATUS.map((tool, index)=>{
                                        return (
                                            <option key={index} value={tool.value}>{tool.label}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Endereço completo</label>
                        <input type={"text"} className={"form-control"} onChange={(e)=>{this.props.changeAddress(e.target.value)}}
                               value={address} placeholder={'Endereço'}/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Cidade</label>
                            <input type={"text"} className={"form-control"} onChange={(e)=>{this.props.changeCity(e.target.value)}}
                                   value={city} placeholder={'Cidade'}/>
                        </div>
                        <div className="col">
                            <label>UF</label>
                            <select className={"form-control"} defaultValue={uf} onChange={(e)=>{this.props.changeUF(e.target.value)}}>
                                <option selected>Selecione...</option>
                                {
                                    OPTIONS_STATES_OF_BRAZIL.map((tool, index)=>{
                                        return (
                                            <option key={index} value={tool.estado}>{tool.uf}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>CEP</label>
                        <input type={"text"} className={"form-control"} onChange={(e)=>{this.props.changeZipCode(e.target.value)}}
                               value={zipCode} placeholder={'XXXXX-XXX'}/>
                    </div>
                    <div className="form-row">
                        <div className={'form-group col-md-11'} style={{display: this.state.tel1}}>
                            <div className={'form-group'}>
                                <label>Telefone ou celular</label>
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
                            </div>
                        </div>
                        <div className={'form-group col-md-1 text-center'} style={{display: this.state.tel1}}>
                            <label style={{visibility: 'hidden'}}>idmscksdmcsd</label>
                            <button className={'btn btn-default text-uppercase btn-sm form-control'} style={{background: '#e0dbdb'}}
                                    type={'button'} onClick={this.changeAddTels}>
                                <FaPlus/>
                            </button>
                        </div>
                        <div className="form-group col-md-6" style={{display: this.state.tel2}}>
                            <label htmlFor="phone1">Telefone ou celular</label>
                            <MaskedInput
                                mask={this.state.mask}
                                className="form-control"
                                placeholder={"(XX) XXXXX-XXXX"}
                                required={true}
                                id={'phone1'}
                                value={phone.phoneOne}
                                guide={true}
                                onChange={this.submitPhone.bind(this)}
                                onBlur={this.correctCharsPhone.bind(this)}
                                onFocus={this.correctCharsPhone.bind(this)}
                            />
                        </div>
                        <div className="form-group col-md-5" style={{display: this.state.tel2}}>
                            <label htmlFor="phone2"><FaMinus style={{cursor: 'pointer'}} onClick={this.changeRemoveTel.bind(this, 2)}/></label>
                            <MaskedInput
                                mask={this.state.mask}
                                className="form-control"
                                placeholder={"(XX) XXXXX-XXXX"}
                                required={true}
                                guide={true}
                                id={'phone2'}
                                value={phone.phoneTwo}
                                onChange={this.submitPhone.bind(this)}
                                onBlur={this.correctCharsPhone.bind(this)}
                                onFocus={this.correctCharsPhone.bind(this)}
                            />
                        </div>
                        <div className="form-group col-md-1" style={{display: this.state.tel2}}>
                            <label style={{visibility: 'hidden'}}>idmscksdmcsd</label>
                            <button className={'btn btn-default text-uppercase btn-sm form-control'} style={{background: '#e0dbdb'}}
                                    type={'button'} onClick={this.changeAddTels}>
                                <FaPlus/>
                            </button>
                        </div>
                        <div className="form-group col-md-4" style={{display: this.state.tel3}}>
                            <label>Telefone ou celular</label>
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
                        </div>
                        <div className="form-group col-md-4" style={{display: this.state.tel3}}>
                            <label title={'Remover'}><FaMinus style={{cursor: 'pointer'}} onClick={this.changeRemoveTel.bind(this, 3)}/></label>
                            <MaskedInput
                                mask={this.state.mask}
                                className="form-control"
                                placeholder={"(XX) XXXXX-XXXX"}
                                required={true}
                                id={'phone2'}
                                value={phone.phoneTwo}
                                guide={true}
                                onChange={this.submitPhone.bind(this)}
                                onBlur={this.correctCharsPhone.bind(this)}
                                onFocus={this.correctCharsPhone.bind(this)}
                            />
                        </div>
                        <div className="form-group col-md-4" style={{display: this.state.tel3}}>
                            <label title={'Remover'}><FaMinus style={{cursor: 'pointer'}} onClick={this.changeRemoveTel.bind(this, 3)}/></label>
                            <MaskedInput
                                mask={this.state.mask}
                                className="form-control"
                                placeholder={"(XX) XXXXX-XXXX"}
                                required={true}
                                guide={true}
                                id={'phone3'}
                                value={phone.phoneThree}
                                onChange={this.submitPhone.bind(this)}
                                onBlur={this.correctCharsPhone.bind(this)}
                                onFocus={this.correctCharsPhone.bind(this)}
                            />
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