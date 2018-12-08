import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import * as authActions from '../state/actions/authAction';
import { cpfMaskInput, cpfValid, mailValid } from "../functions/Validation";
import ReactNotification from "react-notifications-component";
import {NotificationError, NotificationWarning} from "../functions/Notifications";

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            cpfValid: true,
            mailValid: true,
            passValid: true,
            pwValid: true,
            cpf: '',
            mail: '',
            password: '',
            pass: '',
            qntAttempts: 0
        };

        this.notificationDOMRef = React.createRef();
    }

    cpfFormat = e =>{
        const cpf = cpfMaskInput(e.target.value, this.state.cpf);
        if(cpf.length === 14){
            this.setState({ cpf, cpfValid: cpfValid(cpf) })
        }else{
            this.setState({ cpf, cpfValid: true })
        }
    };

    cpfValid = e =>{
        this.setState({ cpfValid: cpfValid(e.target.value) })
    };

    mailValid = e =>{
        this.setState({ mailValid: mailValid(e.target.value) });
    };

    validPw = e =>{
        if(e.target.value.length < 8 && e.target.value.length !== 0){
            this.setState({ pwValid: false })
        }else{
            this.setState({ pwValid: true })
        }
    };

    passValid = e =>{
        if(e.target.value !== this.state.password && e.target.value.length !== 0){
            this.setState({ passValid: false })
        }else{
            this.setState({ passValid: true })
        }
    };

    saveData = ()=>{
        const { cpf, mail, pass, password, cpfValid, mailValid, passValid, pwValid } = this.state;
        if(cpfValid && mailValid && passValid && pwValid && cpf !== '' && mail !== '' && password !== '' && pass !== ''){
            this.props.newUser({
                key: '',
                cpf: cpf.replace(".", "").replace(".", "").replace("-", ""),
                mail,
                password,
            });
            this.setState({qntAttempts: 0})
        }else {
            if(cpf !== '' && mail !== '' && password !== '' && pass !== '' && this.state.qntAttempts > 3){
                this.warningRegister('Há campos com dados inválidos')
            }else if (this.state.qntAttempts > 3) {
                this.warningRegister('Há campos sem dados')
            }
            this.setState({qntAttempts: this.state.qntAttempts + 1})
        }
    };

    warningRegister = message =>{
        this.notificationDOMRef.current.addNotification(NotificationWarning({
            useIcon: true,
            title: 'Não é possível prosseguir',
            message
        }));
    };

    errorExecuteRegister = () => {
        this.notificationDOMRef.current.addNotification(NotificationError({
            useIcon: true,
            title: 'Houve um erro!',
            message: this.props.auth.error
        }));
        this.props.rebootConfig();
    };

    render() {
        const helpCpf = 'Nós não divulgaremos seu CPF e ele não será inserido em seu currículo, Solicitamos apenas para manter o controle de usuários.';

        return (
            <div className="container" style={{marginTop: "1em"}}>
                <form style={{marginBottom: "5%"}}>
                    <div className="card person-card">
                        <div className="card-body">
                            <img id="img_sex" className="person-img" alt={'verei'}
                                 src="https://visualpharm.com/assets/217/Life%20Cycle-595b40b75ba036ed117d9ef0.svg"/>
                            <h2 id="who_message" className="card-title" style={{fontSize: '35px'}}>
                                    Quem é você ?
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6" style={{padding: "0.5em"}}>
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title" style={{fontSize: '35px'}}>
                                        Seus dados ?
                                    </h2>
                                    <div className="form-group">
                                        <label>CPF</label>
                                        <input type={"text"} style={{borderColor: !this.state.cpfValid && '#dc3545'}} value={this.state.cpf}
                                               className={!this.state.cpfValid ? "form-control is-invalid" : "form-control"}
                                               onBlur={this.cpfValid.bind(this)} onChange={this.cpfFormat.bind(this)} placeholder={'Somente números'}/>
                                        <div className="invalid-feedback">
                                            CPF inválido!
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>E-mail</label>
                                        <input type={"email"} style={{borderColor: !this.state.mailValid && '#dc3545'}} value={this.state.mail}
                                               className={!this.state.mailValid ? "form-control is-invalid" : "form-control"} placeholder={'example@mail.com'}
                                               onBlur={this.mailValid.bind(this)} onChange={e=>{this.setState({ mail: e.target.value, mailValid: true })}} />
                                        <div className="invalid-feedback">
                                            E-mail inválido!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6"  style={{padding: "0.5em"}}>
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title" style={{fontSize: '35px'}}>Proteja sua conta !</h2>
                                    <div className="form-group">
                                        <label>Senha</label>
                                        <input type={"password"} style={{borderColor: !this.state.pwValid && '#dc3545'}} value={this.state.password}
                                               className={!this.state.pwValid ? "form-control is-invalid" : "form-control"}
                                               onBlur={this.validPw.bind(this)} onChange={e=>{this.setState({ password: e.target.value, pwValid: true })}} />
                                        <div className="invalid-feedback">
                                            Por favor, crie uma senha com no mínimo 8 caracteres.
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Confirme sua senha</label>
                                        <input type={"password"} style={{borderColor: !this.state.passValid || !this.state.pwValid && '#dc3545'}}
                                               className={!this.state.passValid ? "form-control is-invalid" : "form-control"} value={this.state.pass}
                                               onBlur={this.passValid.bind(this)} onChange={e=>{this.setState({ pass: e.target.value, passValid: true })}} />
                                        <div className="invalid-feedback">
                                            Ops! As senhas são diferentes.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop: "1em"}}>
                        <button type="button" className="btn btn-success text-uppercase btn-lg btn-block"
                                onClick={this.saveData}>
                            Criar meu currículo agora
                        </button>
                    </div>
                </form>
                <ReactNotification ref={this.notificationDOMRef} />
                { this.props.auth.failed && this.errorExecuteRegister() }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    curriculumData: state.curriculumData
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(authActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);