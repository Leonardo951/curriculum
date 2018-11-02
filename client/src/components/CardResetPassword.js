import React, { Component } from 'react';

export default class CardResetPassword extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
        }
    }



    render() {
        return (
            <form className="forgot-password-form login-form" style={{visibility: this.props.resetPassword.visible,
                    top: this.props.resetPassword.top, position: this.props.resetPassword.position,
                        opacity: this.props.resetPassword.opacity}}>
                <h3 className={'h3'}>Redefina sua senha</h3>
                <div className="field">
                    <div className="input-field">
                        <input placeholder="Digite seu e-mail" id="first_name" type="email"
                               className="validate"/>
                        <label htmlFor="first_name">E-mail</label>
                    </div>
                </div>
                <button className={'btn btn-secondary text-center text-uppercase'} style={{width: '100%'}}
                        disabled={this.props.sendReset.btnDisable} onClick={this.props.submitEmail}>
                    Enviar e-mail
                </button>
                <div id="sent-message">
                    <p style={{marginTop: '10px', color: 'white', display: this.props.sendReset.textVisible}}>
                        Seu e-mail para redefinição de senha deve chegar em breve.
                    </p>
                </div>
            </form>
        );
    }
}

