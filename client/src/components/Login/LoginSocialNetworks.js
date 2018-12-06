import React, { Component } from 'react';
import { FaFacebook, FaGooglePlus, FaLinkedin } from 'react-icons/fa';

export default class LoginSocialNetworks extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
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
        );
    }
}

