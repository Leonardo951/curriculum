import React, { Component } from 'react';
import { FaFacebook, FaGooglePlus, FaLinkedin } from 'react-icons/fa';
import scrollToComponent from "react-scroll-to-component";
import CardResetPassword from "../components/CardResetPassword";

export default class Login extends Component {

    constructor(props, context) {
        super(props, context);
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
            }
        }
    }

    submitEmail = ()=>{
        this.setState({sendReset: {btnDisable: true, textVisible: 'block'}})
    };

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

    render() {
        return (
            <div className="login-wrap">
                <div className={'form-login'}>
                    <header className="login-header">
                        <h1 className="login-logo">Resume</h1>
                        <h2 className="little-big-header">ACESSO</h2>
                    </header>

                    <div className="flex-grid">

                        <div className="login-half left">


                            <div className="login-area">


                                <form className="login-form top-label-form" id="login-login-form"
                                      accept-charset="UTF-8" method="post" ref={'mainForm'}>

                                    <div id="login-email" className="field">
                                        <div className="input-field">
                                            <input placeholder="Digite seu e-mail" id="first_name" type="text"
                                                   className="validate"/>
                                            <label htmlFor="first_name">E-mail</label>
                                        </div>
                                    </div>

                                    <div id="login-password" className="field">
                                        <div className="input-field">
                                            <input placeholder="Digite sua senha" id="first_Password" type="text"
                                                   className="validate"/>
                                            <label htmlFor="first_Password">Senha</label>
                                        </div>
                                    </div>
                                    <div id="login-error"/>
                                    <div>
                                        <label className="spacing-label">&nbsp;</label>
                                        <button className={'btn btn-success text-center text-uppercase'}>
                                            Login
                                        </button>
                                        &nbsp;&nbsp;
                                        <a href="" className="forgot-password-link"
                                           onClick={(e)=>{e.preventDefault(); this.enableResetPassword(); this.altActiveForScroll()}}>
                                            Perdeu sua senha?
                                        </a>
                                    </div>
                                </form>
                                <CardResetPassword ref={'reset'} sendReset={this.state.sendReset}
                                    resetPassword={this.state.resetPassword} submitEmail={this.submitEmail}/>
                            </div>
                        </div>
                        <div className="login-divider">
                            <div className="bar bar-top"/>
                            <span className="login-or">OU</span>
                            <div className="bar bar-bottom"/>
                        </div>
                        <div className="login-half right">
                            <div className="login-social-buttons">
                                <div className="button social-account-button linkedin-button button-fullwidth">
                                    <FaLinkedin/>
                                    <span className={'span-social'}>Login com o Linkedin</span>
                                </div>
                                <div className="button google-button social-account-button button-fullwidth">
                                    <FaGooglePlus/>
                                    <span className={'span-social'}>Login com Google+</span>
                                </div>
                                <div className="button social-account-button facebook-button button-fullwidth">
                                    <FaFacebook/>
                                    <span className={'span-social'}>Login com Facebook</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="signup-callout" style={{color: '#fff'}}>
                        Ainda não tem uma conta?   Cadastre-se já!
                    </div>
                </div>
            </div>
        );
    }
}

