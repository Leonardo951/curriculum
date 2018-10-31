import React, { Component } from 'react';
import AddExperience from './AddExperience';
import {FaChevronLeft, FaChevronRight, FaMinus, FaPlus} from "react-icons/fa";

export default class RegisterExperiences extends Component {

    constructor(props){
        super(props);
        this.state = {
            experience: [
                {f: 1},
            ]
        };
    }

    addExperience = ()=>{
        let formations = this.state.experience;
        formations.push({f: this.state.experience.length+1});
        this.setState({experience : formations})
    };

    removeExperience = ()=>{
        let formations = this.state.experience;
        formations =  formations.filter((tool, index)=> {
            if(tool.f !== this.state.experience.length)   {
                return true
            }
        });
        this.setState({experience : formations})
    };

    removeEspecificExperience(number){
        let formations = this.state.experience;
        formations =  formations.filter((tool, index)=> {
            if(tool.f !== number)   {
                return true
            }
        });
        this.setState({experience : formations})
    };

    render() {
        const counter = this.state.experience.length;

        return (
            <div>
                {
                    this.state.experience.map((tool, index)=>{
                        if(counter === tool.f){
                            return (
                                <AddExperience key={index} number={tool.f} focus={counter !== 1 ? true : false}
                                              remove={this.removeEspecificExperience.bind(this, tool.f)}/>
                            );
                        }else{
                            return (
                                <AddExperience key={index} number={tool.f} focus={false} remove={this.removeEspecificExperience.bind(this, tool.f)}/>
                            );
                        }
                    })
                }
                <fieldset>
                    <div className="row-mat">
                        <div className="input-field cole s6">
                            <button className={'btn btn-secondary text-uppercase btn-sm'} type={'button'}
                                    onClick={this.addExperience}>
                                <FaPlus/> Adicionar experiência
                            </button>
                        </div>
                        {
                            counter > 1 ?
                                <div className="input-field cole s6" style={{width: 'auto', float: 'right'}}>
                                    <button className="btn btn-secondary text-uppercase btn-sm" type="button"
                                            onClick={this.removeExperience}>
                                        <FaMinus/> Remover experiência
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