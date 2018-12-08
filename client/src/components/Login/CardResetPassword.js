import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import * as authActions from "../../state/actions/authAction";
import connect from "react-redux/es/connect/connect";
import { FaTimes } from "react-icons/fa";
import ReactNotification from "react-notifications-component";
import { NotificationSuccess, NotificationAwesome, NotificationError } from "../../functions/Notifications";

class CardResetPassword extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            mailReset: "",
            mailValid: true,
            initialMail: true,
            controlErrs: 1
        };

        this.notificationDOMRef = React.createRef();
    }

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

    validMail = val =>{
        if(this.validEmail(val)){
            this.setState({ mailValid:  true })
        }else{
            this.setState({ mailValid:  false })
        }
    };

    submitMail = e => {
        this.setState({ mailReset: e.target.value });
        if(!this.state.mailValid){
            this.validMail(e.target.value)
        }
    };

    reportMail = () => {
        if(this.validEmail(this.props.auth.mail)){
            this.setState({ initialMail: false, mailReset: this.props.auth.mail })
        }else{
            this.setState({ initialMail: false })
        }
    };

    successResetPassword = ()=> {
        this.notificationDOMRef.current.addNotification(NotificationSuccess({
            useIcon: true,
            title: "Pronto!",
            message: "Seu e-mail para redefinição de senha deve chegar em breve."
        }));
        this.rebootConf("success")
    };

    infoResetPassword = ()=> {
        let menssage = "";
        if(this.state.controlErrs === 1){
            menssage = "Verique o e-mail informado, pode haver algum erro";
        }else if(this.state.controlErrs === 2){
            menssage = "Faça seu cadastro. É rápido e simples!";
        }else if(this.state.controlErrs > 2){
            menssage = "Precisa de ajuda? Envie uma mensagem ao editor!";
        }
        this.notificationDOMRef.current.addNotification(NotificationAwesome({
            message: menssage
        }));
        this.rebootConf("err");
    };

    errorResetPassword = ()=> {
        this.notificationDOMRef.current.addNotification(NotificationError({
            useIcon: true,
            title: "Ops!",
            message: this.props.auth.error
        }));
        setTimeout(()=>{
            this.infoResetPassword();
        },2000);
    };

    rebootConf = type =>{
        this.props.rebootConfig();
        if(type === 'err'){
            const qnt = this.state.controlErrs+1;
            this.setState({ mailValid: false, controlErrs: qnt });
        }else{
            setTimeout(()=>{
                this.props.close()
            },4000);
        }
    };

    submitResetPass = () => {
        if(this.state.mailValid){
            this.props.submitResetPass(this.state.mailReset)
        }
    };

    render() {
        return (
            <form className="forgot-password-form login-form" style={{visibility: this.props.resetPassword.visible,
                top: this.props.resetPassword.top, position: this.props.resetPassword.position,
                opacity: this.props.resetPassword.opacity}}>
                <h3 className={'h3'}>Redefina sua senha
                    <button type="button" className="close" aria-label="Close" onClick={this.props.close}>
                        <FaTimes style={{color: '#fff', fontSize: '12px'}}/>
                    </button>
                </h3>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type={"text"} className={!this.state.mailValid ? "form-control is-invalid" : "form-control"}
                           onChange={this.submitMail.bind(this)} style={{borderColor: !this.state.mailValid && '#dc3545', color: '#fff'}}
                           value={this.state.initialMail ? this.reportMail() : this.state.mailReset}
                           placeholder={'Digite seu e-mail'} onBlur={e => {this.validMail(e.target.value)}} />
                    <div className="invalid-feedback">
                        Por favor, insira um e-mail válido.
                    </div>
                </div>
                <button className={'btn btn-secondary text-center text-uppercase'} style={{width: '100%'}} type={'button'}
                        disabled={this.props.sendReset.btnDisable} onClick={this.submitResetPass.bind(this)}>
                    Enviar e-mail
                </button>
                <br/><br/>
                <ReactNotification ref={this.notificationDOMRef} />
                {this.props.auth.submitResetPass && this.successResetPassword()}
                {this.props.auth.failed && this.errorResetPassword()}
            </form>
        );
    }
}


const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(authActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardResetPassword);
