import React, { Component } from 'react';
import { FaFacebook } from 'react-icons/fa';

export default class Login extends Component {
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
                                  accept-charset="UTF-8" method="post">

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
                                    <a href="#" id="forgot-password-link" className="forgot-password-link">
                                        Perdeu sua senha?
                                    </a>
                                </div>
                            </form>
                            <form className="forgot-password-form login-form" id="forgot-password-form" action="#0">
                                <h3 className={'h3'}>Redefina sua senha</h3>
                                <div className="field">
                                    <div className="input-field">
                                        <input placeholder="Digite seu e-mail" id="first_name" type="text"
                                               className="validate"/>
                                        <label htmlFor="first_name">E-mail</label>
                                    </div>
                                </div>

                                <div id="sent-message">
                                    <div id="sent-message-message"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="login-divider">
                        <div className="bar bar-top"/>
                        <span className="login-or">OU</span>
                        <div className="bar bar-bottom"/>
                    </div>

                    <div className="login-half right">

                        <div className="module social-auth-errors" id="login-social-auth-errors"/>

                        <div className="login-social-buttons">


                            <a id="login-with-twitter" href="/auth/twitter" data-network="Twitter"
                               className="button social-account-button twitter-button button-fullwidth">
                                {/*<svg className="icon-twitter" width="26" height="26">*/}
                                    {/*<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#twitter"/>*/}
                                {/*</svg>*/}
                                <span className={'span-social'}>Log In with Twitter</span>
                            </a>

                            <a id="login-with-github" href="/auth/github" data-network="Github"
                               className="button github-button social-account-button button-fullwidth">
                                {/*<svg className="icon-github" width="26" height="26">*/}
                                    {/*<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#octocat"/>*/}
                                {/*</svg>*/}
                                <span className={'span-social'}>Log In with GitHub</span>
                            </a>

                            <a id="login-with-facebook" href="/auth/facebook" data-network="Facebook"
                               className="button social-account-button facebook-button button-fullwidth">
                                {/*<svg className="icon-facebook" width="26" height="26">*/}
                                    {/*<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#facebook"/>*/}
                                {/*</svg>*/}
                                <FaFacebook/>
                                <span className={'span-social'}>Log In with Facebook</span>
                            </a>

                        </div>

                    </div>

                </div>

                <div className="signup-callout">
                    Need an account? <a href="/accounts/signup/user/free">Sign up now!</a>
                </div>

            </div>
            </div>
        );
    }
}

