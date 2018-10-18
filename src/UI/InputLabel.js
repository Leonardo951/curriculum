import React, { Component } from 'react';
import { IoIosHelpCircleOutline } from "react-icons/io";
import MaskedInput from 'react-text-mask';

export default class InputLabel extends Component {

    constructor(){
        super();
        this.state = {
            valid: false
        }
    }

    validaCPF = (e)=>{
        console.log(e);
        // let strCPF = e.target.value;
        // let Soma;
        // let Resto;
        // Soma = 0;
        // if (strCPF === "00000000000"){
        //     this.setState({valid: false})
        // }
        //
        // for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        // Resto = (Soma * 10) % 11;
        //
        // if ((Resto === 10) || (Resto === 11))  Resto = 0;
        // if (Resto !== parseInt(strCPF.substring(9, 10)) ){
        //     this.setState({valid: false})
        // }
        //
        // Soma = 0;
        // for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        // Resto = (Soma * 10) % 11;
        //
        // if ((Resto === 10) || (Resto === 11))  Resto = 0;
        // if (Resto !== parseInt(strCPF.substring(10, 11) ) ){
        //     this.setState({valid: false})
        // }else{
        //     this.setState({valid: true});
        //     console.log(this.state.valid)
        // }
    };

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
                        <input type={this.props.type} className="form-control"
                               placeholder={this.props.place} required/>
                    :
                        <MaskedInput
                            mask={[/[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '-', /[0-9]/, /\d/]}
                            className="form-control"
                            placeholder={this.props.place}
                            guide={false}
                            onChange={this.validaCPF(this)}
                        />
                }
            </div>
        );
    }
}