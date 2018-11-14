import React, { Component } from 'react';
import AddFormation from './AddFormation';
import {FaChevronLeft, FaChevronRight, FaMinus, FaPlus} from "react-icons/fa";
import {bindActionCreators} from "redux";
import * as curriculumActions from "../../state/actions/curriculumAction";
import connect from "react-redux/es/connect/connect";

class RegisterEducation extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }

    addFormation = ()=>{
        let newFormation = this.props.curriculumData.formation;
        newFormation.push({
                course: null,
                locale: null,
                initials: null,
                status: '',
                dateEnd: {year: 2018, month: 0},
                semOrYear: '',
                period: '',
            });
        this.props.changeFormation(newFormation);
    };

    removeEspecificFormation(number){
        let updateFormation = this.props.curriculumData.formation;
        updateFormation =  updateFormation.filter((tool, index)=> {
            if(index !== number)   {
                return true
            }
        });
        this.props.changeFormation(updateFormation);
    };

    render() {

        return (
            <div>
                {
                    this.props.curriculumData.formation.map((tool, index)=>{
                        return (
                            <AddFormation key={index} remove={this.removeEspecificFormation.bind(this, index)} index={index}/>
                        )})
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
                            this.props.curriculumData.formation.length > 1 &&
                                <div className="input-field cole s6" style={{width: 'auto', float: 'right'}}>
                                    <button className="btn btn-secondary text-uppercase btn-sm" type="button"
                                            onClick={this.removeEspecificFormation.bind(this, this.props.curriculumData.formation.length-1)}>
                                        <FaMinus/> Remover formação
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterEducation);