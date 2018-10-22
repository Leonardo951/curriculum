import React, { Component } from 'react';

export default class CreateCurriculo extends Component {
    render() {
        return (
            <div className="col-md-6">
                <br/>
                <form className="form-horizontal">
                    <fieldset>
                        <legend className="text-center">MONTE SEU CURRÍCULO</legend>
                        <div className="form-group">
                            <label className="col-md-3 control-label">Nome Completo</label>
                            <div className="col-md-9">
                                <input type="text" placeholder="Seu nome" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-5 control-label">Data de Nascimento</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">Nacionalidade</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">E-mail</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">Estado Civil</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">Telefone</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">Celular</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-5 control-label">Logradouro</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-5 control-label">Número</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-5 control-label">Bairro</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-5 control-label">Cidade</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-5 control-label">Estado</label>
                            <div className="col-md-9">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="email">Your E-mail</label>
                            <div className="col-md-9">
                                <input id="email" name="email" type="text" placeholder="Your email"
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="message">Your message</label>
                            <div className="col-md-9">
                                    <textarea className="form-control" id="message" name="message"
                                              placeholder="Please enter your message here..." rows="5"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12 text-right">
                                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}