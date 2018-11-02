import React, { Component } from 'react';

export default class UserNavbar extends Component {
    render() {
        return (
            <div className="navbar navbar-default navbar-fixed-top" role="navigation">
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <div className="dropdown-toggle" data-toggle="dropdown">
                            <span className="glyphicon glyphicon-user"/>
                            <strong className="pointer">Fulano Ciclano</strong>
                            <span className="glyphicon glyphicon-chevron-down"/>
                        </div>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li>
                                <div className="navbar-login">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <p className="text-center">
                                                <span className="glyphicon glyphicon-user icon-size"/>
                                            </p>
                                        </div>
                                        <div className="col-lg-8">
                                            <p className="text-left"><strong>Nome Completo</strong></p>
                                            <p className="text-left small">correoElectronico@email.com</p>
                                            <p className="text-left">
                                                <span className="btn btn-primary btn-block btn-sm">Ver meu currículo</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="divider"/>
                            <li>
                                <div className="navbar-login navbar-login-session">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <p className="btn btn-danger btn-block">Sair
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}