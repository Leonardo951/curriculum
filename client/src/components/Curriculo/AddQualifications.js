import React, { Component } from 'react';
import {FaEdit, FaPlus, FaTimes, FaTrash} from "react-icons/fa";
import scrollToComponent from "react-scroll-to-component";
import {bindActionCreators} from "redux";
import * as curriculumActions from "../../state/actions/curriculum";
import connect from "react-redux/es/connect/connect";

class AddQualifications extends Component {

    constructor(props){
        super(props);
        this.state = {
            viewMore: false
        };
    }

    removeLine = line => {
        let updateQualification = this.props.curriculumData.qualifications;
        updateQualification = updateQualification.filter((tool, index)=>{
            if(index !== line){
                return true;
            }
        });
        this.props.changeQualifications(updateQualification);
    };

    editLine = line => {
        this.inputQua.value = this.props.curriculumData.qualifications[line];
        this.inputQua.focus();
        this.removeLine(line);
    };

    addLine = e => {
        if(e.key === 'Enter' && this.inputQua.value !== '' || e.type === 'click' && this.inputQua.value !== ''){
            let newQualificaton = this.props.curriculumData.qualifications;
            newQualificaton = newQualificaton.concat(this.inputQua.value).reverse();
            this.inputQua.value = "";
            this.props.changeQualifications(newQualificaton);
            }
    };

    viewMore = () => {
        if(!this.state.viewMore){
            setTimeout(()=>{
                scrollToComponent(this.refs.bodyTable, {offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
            }, 100);
        }
        this.setState({viewMore: !this.state.viewMore});
    };

    render() {

        return (

            <table className="table">
                <thead>
                <tr>
                    <th>
                        <div className="form-group" style={{margin: '1px', top: '15px'}}>
                            <input type="text" className="form-control" onKeyPress={this.addLine.bind(this)}
                                   placeholder="Digite e aperte o enter para adicionar" ref={el => this.inputQua = el}/>
                        </div>
                    </th>
                    <th className={'text-center'}>
                        <button className={'btn btn-primary text-uppercase btn-sm'} type={'button'}
                                onClick={this.addLine.bind(this)}>Adicionar</button>
                    </th>
                </tr>
                </thead>
                <tbody ref={'bodyTable'}>
                {
                    this.props.curriculumData.qualifications.map((tool, index)=>{
                        if(index < 5){
                            return(
                                <tr key={index}>
                                    <td>{tool}</td>
                                    <td className={'text-center'}>
                                        <FaEdit style={{cursor: 'pointer', marginRight: '10px', fontSize: '19px', color: 'mediumblue'}}
                                                title={'Editar linha'} onClick={this.editLine.bind(this, index)}/>
                                        <FaTrash style={{cursor: 'pointer', marginLeft: '10px', fontSize: '17px', color: '#962b2b'}}
                                                 title={'Remover linha'} onClick={this.removeLine.bind(this, index)}/>
                                    </td>
                                </tr>
                            )
                        }else if(this.state.viewMore){
                            return(
                                <tr key={index}>
                                    <td>{tool}</td>
                                    <td className={'text-center'}>
                                        <FaEdit style={{cursor: 'pointer', marginRight: '10px', fontSize: '19px', color: 'mediumblue'}}
                                                title={'Editar linha'} onClick={this.editLine.bind(this, index)}/>
                                        <FaTrash style={{cursor: 'pointer', marginLeft: '10px', fontSize: '17px', color: '#962b2b'}}
                                                 title={'Remover linha'} onClick={this.removeLine.bind(this, index)}/>
                                    </td>
                                </tr>
                            )
                        }
                    })
                }
                {
                    this.props.curriculumData.qualifications.length > 5 && !this.state.viewMore &&
                        <tr style={{borderRadius: '5px'}}>
                            <td className={'text-center'} style={{backgroundColor: '#efefef', fontWeight: 'bold', borderRadius: '3px'}} colSpan={2}>
                                <a href="" onClick={(e)=>{e.preventDefault(); this.viewMore();}}>Ver todas</a>
                            </td>
                        </tr>
                }
                {
                    this.state.viewMore &&
                        <tr style={{borderRadius: '5px'}}>
                            <td className={'text-center'} style={{backgroundColor: '#efefef', fontWeight: 'bold'}} colSpan={2}>
                                <a href="" onClick={(e)=>{e.preventDefault(); this.viewMore();}}>Ver menos</a>
                            </td>
                        </tr>
                }
                {
                    this.props.curriculumData.qualifications.length === 0 &&
                        <tr style={{borderRadius: '5px'}}>
                            <td className={'text-center'} colSpan={2} style={{backgroundColor: '#efefef', fontWeight: 'bold'}}>
                                                Digite acima para adicionar</td>
                        </tr>
                }
                </tbody>
            </table>
        )}
}

const mapStateToProps = state => ({
    curriculumData: state.curriculumData
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(curriculumActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddQualifications);