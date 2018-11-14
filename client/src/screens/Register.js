import React, { Component } from 'react';
import InputLabel from "../UI/InputLabel";
import { Link } from 'react-router-dom';
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import axios from 'axios';
import * as authActions from '../state/actions/authAction';

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            cpfValid: 'none',
            mail: 'none',
            pass: 'none',
            password: '',
            cpf: '',
            email: ''
        };
    }

    TestaCPF(strCPF) {
        let Soma;
        let Resto;
        Soma = 0;
        strCPF = strCPF.replace(/[^\d]+/g,'');
        if (strCPF === "00000000000" ||
            strCPF === "11111111111" ||
            strCPF === "22222222222" ||
            strCPF === "33333333333" ||
            strCPF === "44444444444" ||
            strCPF === "55555555555" ||
            strCPF === "66666666666" ||
            strCPF === "77777777777" ||
            strCPF === "88888888888" ||
            strCPF === "99999999999"){
            this.setState({cpfValid: 'block'});
            return false;
        }else if(strCPF.length < 11){
            this.setState({cpfValid: 'block'});
            return false;
        }

        for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11))  Resto = 0;
        if (Resto !== parseInt(strCPF.substring(9, 10)) ){
            this.setState({cpfValid: 'block'});
            return false;
        }

        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11))  Resto = 0;
        if (Resto !== parseInt(strCPF.substring(10, 11) ) ) {
            this.setState({cpfValid: 'block'});
            return false;
        }else{
            this.setState({cpfValid: 'none', cpf: strCPF});
            return true;
        }
    }

    testaMail(strMail){
        let usuario = strMail.substring(0, strMail.indexOf("@"));
        let dominio = strMail.substring(strMail.indexOf("@")+ 1, strMail.length);
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")===-1) &&
            (dominio.search("@")===-1) &&
            (usuario.search(" ")===-1) &&
            (dominio.search(" ")===-1) &&
            (dominio.search(".")!==-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1) || strMail === '')
        {
            this.setState({mail: 'none', email: strMail});
            return true;
        }else{
            this.setState({mail: 'block'});
            return false;
        }
    }

    ValidPass(confirm, strPass){
        if(!confirm) {
            this.setState({password: strPass});
            return false;
        }else{
            if(this.state.password !== strPass){
                this.setState({pass: 'block'});
                return true;
            }else{
                this.setState({pass: 'none'});
                return false;
            }
        }
    }

    saveData = ()=>{
        // verify valid
        if(this.state.mail === 'none' || this.state.cpfValid === 'none' || this.state.pass === 'block'){
            const obj = {
                cpf: this.state.cpf,
                mail: this.state.email,
                password: this.state.password,
            };
            this.props.newUser(Object.assign(obj, this.props.curriculumData));
        }
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
                                    <InputLabel label={'CPF'} place={"Somente números"} help={helpCpf}
                                                viewCpf={this.TestaCPF.bind(this)}/>
                                    <small style={{color: 'red', display: this.state.cpfValid}}>O CPF digitado não é válido.</small>
                                    <InputLabel label={'E-mail'} type={'email'} place={"example@mail.com"}
                                                viewMail={this.testaMail.bind(this)}/>
                                    <small style={{color: 'red', display: this.state.mail}}>O e-mail digitado não é válido.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6"  style={{padding: "0.5em"}}>
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title" style={{fontSize: '35px'}}>Proteja sua conta !</h2>
                                    <InputLabel label={'Senha'} type={'password'} confirm={false} viewSenha={this.ValidPass.bind(this)}/>
                                    <InputLabel label={'Digite sua senha novamente'} confirm={true} type={'password'} viewSenha={this.ValidPass.bind(this)} />
                                    <small style={{color: 'red', display: this.state.pass}}>Ops! As senhas são diferentes.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop: "1em"}}>
                        {/*<Link to={'/curriculo'}>*/}
                        <button type="button" className="btn btn-success text-uppercase btn-lg btn-block"
                                onClick={this.saveData}>
                            Criar meu currículo agora
                        </button>
                        {/*</Link>*/}
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    curriculumData: state.curriculumData
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(authActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);