import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import scrollToComponent from "react-scroll-to-component";
import CardResetPassword from "../components/Login/CardResetPassword";
import LoginSocialNetworks from "../components/Login/LoginSocialNetworks";
import {bindActionCreators} from "redux";
import * as authActions from "../state/actions/authAction";
import * as appActions from "../state/actions/appActions";
import connect from "react-redux/es/connect/connect";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resetPassword: {
                active: false,
                visible: 'hidden',
                position: 'absolute',
                opacity: 0,
                top: '20px'
            },
            sendReset: {
                btnDisable: false,
                textVisible: 'none'
            },
            mailValid: true,
            passwordValid: true
        };
    }

    componentDidMount(){
        this.props.changeScreen("login")
    }

    enableResetPassword = ()=>{
        this.state.resetPassword.active ?
            this.setState({resetPassword: {active: false, visible: 'hidden', position: 'absolute', opacity: 0, top: '20px'}})
            :
            this.setState({resetPassword: {active: true, visible: 'visible', position: 'relative', opacity: 1, top: 0}})
    };

    altActiveForScroll = ()=>{
        !this.state.resetPassword.active ?
            setTimeout(() => {
                scrollToComponent(this.refs.reset, {offset: 0, align: 'middle', duration: 300, ease: 'inCirc'});
            }, 200)
            :
            setTimeout(() => {
                scrollToComponent(this.refs.mainForm, {offset: 0, align: 'middle', duration: 300, ease: 'inCirc'});
            }, 300)
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

    validMail = val =>{
        if(this.validEmail(val)){
            this.setState({ mailValid:  true })
        }else{
            this.setState({ mailValid:  false })
        }
    };

    validPass = val =>{
        if(val.length >= 8 || val.length === 0){
            this.setState({ passwordValid:  true })
        }else{
            this.setState({ passwordValid:  false })
        }
    };

    submitMail = e => {
        this.props.changeMail(e.target.value);
        if(!this.state.mailValid){
            this.validMail(e.target.value)
        }
    };

    submitPass = e => {
        this.props.changePass(e.target.value);
        if(!this.state.passwordValid){
            this.validPass(e.target.value)
        }
    };

    submitLogin = e => {
        if(this.state.passwordValid && this.state.mailValid){
            this.props.submitLogin({
                mail: this.props.auth.mail,
                pass: this.props.auth.password
            })
        }
    };

    render() {

        const { mail, password } = this.props;

        return (
            <div className="login-wrap">
                <div className={'form-login'}>
                    <header className="login-header">
                        <h1 className="login-logo">CVCLOUD</h1>
                        <h2 className="little-big-header">ACESSO</h2>
                    </header>

                    <div className="flex-grid">

                        <div className="login-half left">

                            <div className="login-area">

                                <form className="login-form top-label-form" ref={'mainForm'}>
                                    <div className="form-group">
                                        <label>E-mail</label>
                                        <input type={"text"} className={!this.state.mailValid ? "form-control is-invalid" : "form-control"}
                                               onChange={this.submitMail.bind(this)} style={{borderColor: !this.state.mailValid && '#dc3545'}}
                                               value={mail} placeholder={'Digite seu e-mail'} onBlur={(e)=>{this.validMail.bind(e.target.value)}} />
                                        <div className="invalid-feedback">
                                            Por favor, insira um e-mail válido.
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Senha</label>
                                        <input type={"password"} className={!this.state.passwordValid ? "form-control is-invalid" : "form-control"}
                                               onChange={this.submitPass.bind(this)} value={password} placeholder={'Digite sua senha'}
                                               onBlur={(e)=>{this.validPass(e.target.value)}} style={{borderColor: !this.state.passwordValid && '#dc3545'}}/>
                                        <div className="invalid-feedback">
                                            Por favor, insira uma senha válida.
                                        </div>
                                    </div>
                                    <div id="login-error"/>
                                    <div>
                                        <label className="spacing-label">&nbsp;</label>
                                        <button className={'btn btn-success text-center text-uppercase'} onClick={this.submitLogin.bind(this)} type={'button'}>
                                            Login
                                        </button>
                                        &nbsp;&nbsp;
                                        <a href="" className="forgot-password-link"
                                           onClick={(e)=>{e.preventDefault(); this.enableResetPassword(); this.altActiveForScroll()}}>
                                            Perdeu sua senha?
                                        </a>
                                    </div>
                                </form>
                                <CardResetPassword ref={'reset'} sendReset={this.state.sendReset} resetPassword={this.state.resetPassword}
                                                   close={this.enableResetPassword.bind(this)} />
                            </div>
                        </div>
                        <div className="login-divider">
                            <div className="bar bar-top"/>
                                <span className="login-or">OU</span>
                            <div className="bar bar-bottom"/>
                        </div>
                        <LoginSocialNetworks/>
                    </div>
                    <div className="signup-callout" style={{color: '#fff'}}>
                        Ainda não tem uma conta?   <Link to={'/register'} className={'registerNow'}> Cadastre-se já!</Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(Object.assign({}, authActions, appActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
