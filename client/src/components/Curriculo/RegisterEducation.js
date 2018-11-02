import React, { Component } from 'react';
import AddFormation from './AddFormation';
import {FaChevronLeft, FaChevronRight, FaMinus, FaPlus} from "react-icons/fa";

export default class RegisterEducation extends Component {

    constructor(props){
        super(props);
        this.state = {
            formation: [
                {f: 1},
            ]
        };
    }

    addFormation = ()=>{
          let formations = this.state.formation;
          formations.push({f: this.state.formation.length+1});
          this.setState({formation : formations})
    };

    removeFormation = ()=>{
        let formations = this.state.formation;
        formations =  formations.filter((tool, index)=> {
            if(tool.f !== this.state.formation.length)   {
                return true
            }
        });
        this.setState({formation : formations})
    };

    removeEspecificFormation(number){
        let formations = this.state.formation;
        formations =  formations.filter((tool, index)=> {
            if(tool.f !== number)   {
                return true
            }
        });
        this.setState({formation : formations})
    };

    render() {
        const counter = this.state.formation.length;

        return (
            <div>
                {
                    this.state.formation.map((tool, index)=>{
                        if(counter === tool.f){
                            return (
                                <AddFormation key={index} number={tool.f} focus={counter !== 1 ? true : false}
                                                remove={this.removeEspecificFormation.bind(this, tool.f)}/>
                            );
                        }else{
                            return (
                                <AddFormation key={index} number={tool.f} focus={false} remove={this.removeEspecificFormation.bind(this, tool.f)}/>
                            );
                        }
                    })
                }
                <fieldset>
                    <div className="row-mat">
                        <div className="input-field cole s6">
                            <button className={'btn btn-secondary text-uppercase btn-sm'} type={'button'}
                                    onClick={this.addFormation}>
                                <FaPlus/> Adicionar formação
                            </button>
                        </div>
                        {
                            counter > 1 ?
                                <div className="input-field cole s6" style={{width: 'auto', float: 'right'}}>
                                    <button className="btn btn-secondary text-uppercase btn-sm" type="button"
                                            onClick={this.removeFormation}>
                                        <FaMinus/> Remover formação
                                    </button>
                                </div>
                                :
                                <div/>
                        }
                    </div>
                </fieldset>
            </div>
        );
    }
}