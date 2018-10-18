import React, { Component } from 'react';
import InputLabel from "../UI/InputLabel";

export default class Register extends Component {
    render() {
        const helpCpf = 'Nós não divulgaremos seu CPF e ele não será inserido em seu currículo, Solicitamos apenas para manter o controle de usuários.';

        return (
            <div className="container" style={{marginTop: "1em"}}>
                <form style={{marginBottom: "5%"}}>
                    <div className="card person-card">
                        <div className="card-body">
                            <img id="img_sex" className="person-img" alt={'verei'}
                                 src="https://visualpharm.com/assets/217/Life%20Cycle-595b40b75ba036ed117d9ef0.svg"/>
                            <h2 id="who_message" className="card-title">Quem é você ?</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6" style={{padding: "0.5em"}}>
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title">Seus dados ?</h2>
                                    <InputLabel label={'CPF'} place={"Somente números"} help={helpCpf}/>
                                    <small style={{color: 'red'}}>O CPF digitado não é válido</small>
                                    <InputLabel label={'Email'} type={'email'} place={"example@gmail.com"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6"  style={{padding: "0.5em"}}>
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title">Proteja sua conta !</h2>
                                    <InputLabel label={'Senha'} type={'password'} />
                                    <InputLabel label={'Digite sua senha novamente'} type={'password'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop: "1em"}}>
                        <button type="button" className="btn btn-primary btn-lg btn-block">Criar meu currículo agora</button>
                    </div>
                </form>
            </div>
        );
    }
}