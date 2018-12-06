import React, { Component } from 'react';
import { FaPlus, FaMinus, FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MaskedInput from "react-text-mask";
import DatePicker from 'react-date-picker';
import { bindActionCreators } from "redux";
import * as curriculumActions from '../../state/actions/curriculumAction';
import connect from "react-redux/es/connect/connect";
import Datetime from 'react-datetime';
import '../../styles/cv/datetime.css';
import { OPTIONS_CIVIL_STATUS, OPTIONS_STATES_OF_BRAZIL, OPTIONS_SEX } from "../../constant/curriculum";
import scrollToComponent from "react-scroll-to-component";

class RegisterPersonalData extends Component {

    constructor(props){
        super(props);
        this.state = {
            btnTel: 'block',
            tel1: 'block',
            tel2: 'none',
            tel3: 'none',
            phone1: "",
            phone2: "",
            phone3: "",
            otherMail: props.curriculumData.otherMail && true,
            btnMail: true,
            mailValid: true
        };
        this.refOtherMail = React.createRef();
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
        this.refOtherMail.focus();
        this.setState({ otherMail:  _new });
    };

    changeRemoveTel(qnt){
        if(qnt === 3){
            this.setState({tel3: 'none', tel2: 'block', btnTel: 'block'})
        }else{
            this.setState({tel2: 'none', tel1: 'block'})
        }
    };

    validEmail(strMail){
        let usuario = strMail.substring(0, strMail.indexOf("@"));
        let dominio = strMail.substring(strMail.indexOf("@")+ 1, strMail.length);
        if((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")===-1) &&
            (dominio.search("@")===-1) &&
            (usuario.search(" ")===-1) &&
            (dominio.search(" ")===-1) &&
            (dominio.search(".")!==-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1) || strMail === '') {
            return true;
        }else{
            return false;
        }
    };

    validMail = e =>{
        if(this.validEmail(e.target.value)){
            this.setState({ mailValid:  true })
        }else{
            this.setState({ mailValid:  false })
        }
    };

    submitMail = e => {
        if(e.target.value.length > 0){
            this.setState({ btnMail:  false })
        }else{
            this.setState({ btnMail:  true });
        }
        this.props.changeMail(e.target.value);
        if(!this.state.mailValid){
            this.validMail(e)
        }
    };

    isNumber = n => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    formatPhone = (phone, how) => {
        let phoneFormated = "(";
        let nineNumbers = false;
        if(this.isNumber(phone.replace(/[^0-9]/g,''))){
            if(phone.replace(/[^0-9]/g,'').split("").length > 10){
                nineNumbers = true;
            }
            phone.replace(/[^0-9]/g,'').split("").map((val, index)=>{
                if(index === 0){
                    phoneFormated = phoneFormated + val;
                }else if(index === 1){
                    phoneFormated = phoneFormated + val + ") ";
                }else if(index === 2 && nineNumbers){
                    phoneFormated = phoneFormated + val + " ";
                }else if(index === 6 && nineNumbers){
                    phoneFormated = phoneFormated + val + "-";
                }else if(index === 5 && !nineNumbers){
                    phoneFormated = phoneFormated + val + "-";
                }else{
                    phoneFormated = phoneFormated + val;
                }
            });
            let obj = this.props.curriculumData.phone;
            if(phone.replace(/[^0-9]/g,'').split("").length < 12){
                if(how === 'phone1'){
                    obj.phoneOne = phone.replace(/[^0-9]/g,'');
                    this.setState({ phone1: phoneFormated })
                }else if(how === 'phone2'){
                    obj.phoneTwo = phone.replace(/[^0-9]/g,'');
                    this.setState({ phone2: phoneFormated })
                }else{
                    obj.phoneTwo = phone.replace(/[^0-9]/g,'');
                    this.setState({ phone3: phoneFormated })
                }

                this.props.changePhone(obj)
            }
        }
    };

    render() {

        const { name, otherMail, nationality, dateBirth, civilStatus, address, zipCode, city, uf, phone, sex } = this.props.curriculumData;

        return (
            <div>
                <fieldset>
                    <div className="form-group">
                        <label>Nome completo</label>
                        <input type={"text"} style={{borderColor: '#dc3545'}} className={"form-control is-invalid"}
                               onChange={(e)=>{this.props.changeName(e.target.value)}} value={name} placeholder={'Nome completo'}/>
                        <div className="invalid-feedback">
                            Por favor, insira seu nome completo.
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className="form-group col-md-11">
                            <label>E-mail</label>
                            <input type={"email"} disabled={!this.state.otherMail} className={!this.state.mailValid ? "form-control is-invalid" : "form-control"}
                                   value={this.state.otherMail ? otherMail : this.props.auth.mail} style={{borderColor: !this.state.mailValid && '#dc3545'}}
                                   placeholder={'example@mail.com'} onChange={this.state.otherMail && this.submitMail.bind(this)}
                                   ref={el => this.refOtherMail = el} onBlur={this.validMail.bind(this)}/>
                            <div className="invalid-feedback">
                                Por favor, insira um e-mail válido.
                            </div>
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
                    <div className={'row'}>
                        <div className="col">
                            <label>Nacionalidade</label>
                            <input type={"text"} className={"form-control"} onChange={(e)=>{this.props.changeNationality(e.target.value)}}
                                   value={nationality} placeholder={'Nacionalidade'}/>
                        </div>
                        <div className="col">
                            <label>Data de nascimento</label>
                            {/*<Datetime timeFormat={false} value={dateBirth} onChange={this.handleChangeDate} input={true}*/}
                            {/*required={true} locale="pt-br" disableCloseOnClickOutside={false}/>*/}
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
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Sexo</label>
                            <select className={"form-control"} defaultValue={sex} onChange={(e)=>{this.props.changeSex(e.target.value)}}>
                                <option value={''} selected>Selecione...</option>
                                {
                                    OPTIONS_SEX.map((tool, index)=>{
                                        return (
                                            <option key={index} value={tool.value}>{tool.label}</option>
                                        )
                                    })
                                }
                            </select>
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
                        <MaskedInput
                            mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/]}
                            className="form-control"
                            placeholder={"XXXXX-XXX"}
                            required={true}
                            guide={true}
                            id={'phone1'}
                            value={zipCode}
                            onChange={(e)=>{this.props.changeZipCode(e.target.value)}}
                        />
                    </div>
                    <div className="form-row">
                        <div className={'form-group col-md-11'} style={{display: this.state.tel1}}>
                            <div className={'form-group'}>
                                <label>Telefone ou celular</label>
                                <input type={"text"} className={"form-control"} onChange={(e)=>{this.formatPhone(e.target.value, "phone1")}}
                                       value={this.state.phone1} placeholder={'(XX) X XXXX-XXXX'}/>
                            </div>
                        </div>
                        <div className={'form-group col-md-1 text-center'} style={{display: this.state.tel1}}>
                            <label style={{visibility: 'hidden'}}>Ignore it</label>
                            <button className={'btn btn-default text-uppercase btn-sm form-control'} style={{background: '#e0dbdb'}}
                                    type={'button'} onClick={this.changeAddTels}>
                                <FaPlus/>
                            </button>
                        </div>
                        <div className="form-group col-md-6" style={{display: this.state.tel2}}>
                            <label htmlFor="phone1">Telefone ou celular</label>
                            <input type={"text"} className={"form-control"} onChange={(e)=>{this.formatPhone(e.target.value, "phone1")}}
                                   value={this.state.phone1} placeholder={'(XX) X XXXX-XXXX'}/>
                        </div>
                        <div className="form-group col-md-5" style={{display: this.state.tel2}}>
                            <label htmlFor="phone2"><FaMinus style={{cursor: 'pointer'}} onClick={this.changeRemoveTel.bind(this, 2)}/></label>
                            <input type={"text"} className={"form-control"} onChange={(e)=>{this.formatPhone(e.target.value, "phone2")}}
                                   value={this.state.phone2} placeholder={'(XX) X XXXX-XXXX'}/>
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
                            <input type={"text"} className={"form-control"} onChange={(e)=>{this.formatPhone(e.target.value, "phone1")}}
                                   value={this.state.phone1} placeholder={'(XX) X XXXX-XXXX'}/>
                        </div>
                        <div className="form-group col-md-4" style={{display: this.state.tel3}}>
                            <label title={'Remover'}><FaMinus style={{cursor: 'pointer'}} onClick={this.changeRemoveTel.bind(this, 3)}/></label>
                            <input type={"text"} className={"form-control"} onChange={(e)=>{this.formatPhone(e.target.value, "phone2")}}
                                   value={this.state.phone2} placeholder={'(XX) X XXXX-XXXX'}/>
                        </div>
                        <div className="form-group col-md-4" style={{display: this.state.tel3}}>
                            <label title={'Remover'}><FaMinus style={{cursor: 'pointer'}} onClick={this.changeRemoveTel.bind(this, 3)}/></label>
                            <input type={"text"} className={"form-control"} onChange={(e)=>{this.formatPhone(e.target.value, "phone3")}}
                                   value={this.state.phone3} placeholder={'(XX) X XXXX-XXXX'}/>
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