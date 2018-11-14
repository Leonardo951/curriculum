import React, { Component } from 'react';
import AddExperience from './AddExperience';
import {FaChevronLeft, FaChevronRight, FaMinus, FaPlus} from "react-icons/fa";
import {bindActionCreators} from "redux";
import * as curriculumActions from "../../state/actions/curriculumAction";
import connect from "react-redux/es/connect/connect";

class RegisterExperiences extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }

    addExperience = ()=>{
        let newExperience = this.props.curriculumData.experience;
        newExperience.push({
            job: null,
            company: null,
            initials: null,
            periodWork: {from: {year: 2018, month: 0}, to: {year: 2018, month: 0}},
            current: false,
            mainAct: []
        });
        this.props.changeExperience(newExperience);
    };

    removeEspecificExperience(number){
        let updateExperience = this.props.curriculumData.experience;
        updateExperience =  updateExperience.filter((tool, index)=> {
            if(index !== number)   {
                return true
            }
        });
        this.props.changeExperience(updateExperience);
    };

    render() {

        return (
            <div>
                {
                    this.props.curriculumData.experience.map((tool, index)=>{
                        return (
                            <AddExperience key={index} index={index}
                                          remove={this.removeEspecificExperience.bind(this, index)}/>
                        )})
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
                            this.props.curriculumData.experience.length > 1 &&
                                <div className="input-field cole s6" style={{width: 'auto', float: 'right'}}>
                                    <button className="btn btn-secondary text-uppercase btn-sm" type="button"
                                            onClick={this.removeEspecificExperience.bind(this, this.props.curriculumData.experience.length-1)}>
                                        <FaMinus/> Remover experiência
                                    </button>
                                </div>
                        }
                    </div>
                </fieldset>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    curriculumData: state.curriculumData
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(curriculumActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterExperiences);