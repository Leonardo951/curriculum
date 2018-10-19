import React, { Component } from 'react';
import { IoIosHelpCircleOutline } from "react-icons/io";
import MaskedInput from 'react-text-mask';

export default class InputLabel extends Component {

    constructor(){
        super();
        this.state = {
            invalid: '',
        }
    }

    validaCPF(e) {
        let strCPF = e.target.value;
        let valido = this.props.viewCpf(strCPF);
        !valido ? this.setState({invalid: 'red'}) : this.setState({invalid: ''});
    };

    validaMail(e){
        let strMail = e.target.value;
        let valido = this.props.viewMail(strMail);
        !valido ? this.setState({invalid: 'red'}) : this.setState({invalid: ''});
    }

    validaSenha(e){
        let strMail = e.target.value;
        let different = this.props.viewSenha(this.props.confirm, strMail);
        different && this.props.confirm ? this.setState({invalid: 'red'}) : this.setState({invalid: ''});
    }

    render() {
        return (
            <div className="form- group">
                <div className="row">
                    <div className="col-sm-10">
                        <label className="col-form-label">{this.props.label}</label>
                    </div>
                    {
                        !this.props.help ?
                            <div/>
                        :
                            <div className="col-sm-1" title={this.props.help}>
                                <IoIosHelpCircleOutline/>
                            </div>
                    }
                </div>
                {
                    this.props.type ?
                        <input type={this.props.type} className="form-control" style={{borderColor: this.state.invalid}}
                               placeholder={this.props.place} onBlur={this.props.type === 'email' ? this.validaMail.bind(this) : this.validaSenha.bind(this)} required/>
                    :
                        <MaskedInput
                            mask={[/[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '-', /[0-9]/, /\d/]}
                            className="form-control"
                            placeholder={this.props.place}
                            required={true}
                            guide={true}
                            style={{borderColor: this.state.invalid}}
                            onChange={this.validaCPF.bind(this)}
                        />
                }
            </div>
        );
    }
}