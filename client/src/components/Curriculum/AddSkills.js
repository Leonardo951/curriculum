import React, { Component } from 'react';
import {FaEdit, FaPlus, FaTimes, FaTrash} from "react-icons/fa";
import scrollToComponent from "react-scroll-to-component";
import {bindActionCreators} from "redux";
import * as curriculumActions from "../../state/actions/curriculumAction";
import connect from "react-redux/es/connect/connect";
import Typography from '@material-ui/core/Typography';
import Slider from '../../UI/Slider';

class Addskills extends Component {

    constructor(props){
        super(props);
        this.state = {
            viewMore: false,
            text: '',
            width: 50
        };
    }

    editLine = line => {
        const { text, percent } = this.props.curriculumData.skills[line];
        this.setState({ text: text, width: percent });
        this.inputSkill.focus();
        this.props.removeSkill(line);
    };

    addLine = () => {
        if(this.state.text !== ''){
            let newSkill = {
                text: this.state.text,
                percent: this.state.width
            };
            this.props.addSkills(newSkill);
            this.setState({ text: '', width: 50 });
            this.inputSkill.focus();
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
                            <input type="text" className="form-control" onChange={e => this.setState({ text: e.target.value })}
                                   placeholder={this.props.curriculumData.skills.length < 8 ? 'Escolha 8 habilidades' : '8 habilidades já adicionadas'}
                                   value={this.state.text} ref={el => this.inputSkill = el}
                                    disabled={this.props.curriculumData.skills.length >= 8 && true}/>
                        </div>
                    </th>
                    <th>
                        <div className="form-group" style={{margin: '1px', top: '15px'}}>
                            <Typography id="label">
                                Nível de entendimento: {this.props.curriculumData.skills.length < 8 ? this.state.width : 0}%
                            </Typography>
                            <Slider
                                value={this.props.curriculumData.skills.length < 8 ? this.state.width : 0}
                                aria-labelledby="label"
                                min={0}
                                max={100}
                                step={1}
                                onChange={(event, val) => this.setState({ width: val })}
                            />
                        </div>
                    </th>
                    <th className={'text-center'}>
                        <button className={'btn btn-success text-uppercase btn-sm'} type={'button'}
                                disabled={this.props.curriculumData.skills.length >= 8 && true}
                                onClick={this.props.curriculumData.skills.length < 8 && this.addLine.bind(this)}>Adicionar</button>
                    </th>
                </tr>
                </thead>
                <tbody ref={'bodyTable'}>
                {
                    this.props.curriculumData.skills.map((tool, index)=>{
                        if(index < 5){
                            return(
                                <tr key={index}>
                                    <td>{tool.text}</td>
                                    <td className={'text-center'}>{tool.percent}%</td>
                                    <td className={'text-center'}>
                                        <FaEdit style={{cursor: 'pointer', marginRight: '10px', fontSize: '19px', color: 'mediumblue'}}
                                                title={'Editar linha'} onClick={this.editLine.bind(this, index)}/>
                                        <FaTrash style={{cursor: 'pointer', marginLeft: '10px', fontSize: '17px', color: '#962b2b'}}
                                                 title={'Remover linha'} onClick={e => this.props.removeSkill(index)}/>
                                    </td>
                                </tr>
                            )
                        }else if(this.state.viewMore){
                            return(
                                <tr key={index}>
                                    <td>{tool.text}</td>
                                    <td className={'text-center'}>{tool.percent}%</td>
                                    <td className={'text-center'}>
                                        <FaEdit style={{cursor: 'pointer', marginRight: '10px', fontSize: '19px', color: 'mediumblue'}}
                                                title={'Editar linha'} onClick={this.editLine.bind(this, index)}/>
                                        <FaTrash style={{cursor: 'pointer', marginLeft: '10px', fontSize: '17px', color: '#962b2b'}}
                                                 title={'Remover linha'} onClick={e => this.props.removeSkill(index)}/>
                                    </td>
                                </tr>
                            )
                        }
                    })
                }
                {
                    this.props.curriculumData.skills.length > 5 && !this.state.viewMore ?
                        <tr style={{borderRadius: '5px'}}>
                            <td className={'text-center'} style={{backgroundColor: '#efefef', fontWeight: 'bold', borderRadius: '3px'}} colSpan={3}>
                                <a href="" onClick={(e)=>{e.preventDefault(); this.viewMore();}}>Ver todas</a>
                            </td>
                        </tr>
                        :
                        <div/>
                }
                {
                    this.state.viewMore ?
                        <tr style={{borderRadius: '5px'}}>
                            <td className={'text-center'} style={{backgroundColor: '#efefef', fontWeight: 'bold'}} colSpan={3}>
                                <a href="" onClick={(e)=>{e.preventDefault(); this.viewMore();}}>Ver menos</a>
                            </td>
                        </tr>
                        :
                        <div/>
                }
                {
                    this.props.curriculumData.skills.length === 0 ?
                        <tr style={{borderRadius: '5px'}}>
                            <td className={'text-center'} colSpan={3} style={{backgroundColor: '#efefef', fontWeight: 'bold'}}>
                                    Digite acima para adicionar</td>
                        </tr>
                        :
                        <div/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Addskills);