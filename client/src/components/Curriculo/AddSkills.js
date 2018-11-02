import React, { Component } from 'react';
import {FaPlus, FaTimes, FaTrash} from "react-icons/fa";
import scrollToComponent from "react-scroll-to-component";

export default class AddSkills extends Component {

    constructor(props){
        super(props);
        this.state = {
            mainActivities: [
                {atv: 'Trabalhar com controle de horas'},
                {atv: 'oordenar os indicadores organizacionais'},
                {atv: 'Gerenciar controle de documentos e registros internos e externos'},
                {atv: 'Apoiar o gerenciamentos de projetos de TI'},
                {atv: 'Auxilio à área  da Qualidade'},
                {atv: 'Apoiar RH em atividades de treinamento e desenvolvimento de equipes e liderança'},
                {atv: 'Correção de bugs e desenvolvimento de novas funcionalidades em JavaScript'},
                {atv: 'Supervisionar o controle das ações corretivas, preventivas e de melhorias em curso'},
            ],
            viewMore: false
        };

        // this.refPage = React.createRef();
        //
        // if(this.props.focus){
        //     setTimeout(()=>{
        //         scrollToComponent(this.refPage.current, {offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
        //     }, 100);
        // }
    }

    removeLine(key){
        let newActivities = this.state.mainActivities.filter((tool, index)=>{
            if(index !== key){
                return true
            }
        });
        this.setState({mainActivities: newActivities})
    };

    addLine(e){
        if(e.key === 'Enter' && this.inputAtv.value !== '' || e.type === 'click' && this.inputAtv.value !== ''){
            let newActivities = this.state.mainActivities;
            let newValue = this.inputAtv.value;
            newActivities.unshift({atv: newValue});
            this.inputAtv.value = "";
            this.setState({mainActivities: newActivities});
        }
    };

    viewMore = ()=>{
        const more = this.state.viewMore ? false : true;
        if(more){
            setTimeout(()=>{
                scrollToComponent(this.refs.bodyTable, {offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
            }, 100);
        }
        this.setState({viewMore: more});
    };

    render() {

        return (
            <table className="table">
                <thead>
                <tr>
                    <th>
                        <div className="input-field cole s12" style={{margin: '1px', top: '15px'}}>
                            <input type="text" className="c-form-input" onKeyPress={this.addLine.bind(this)}
                                   placeholder="Digite e aperte o enter para adicionar" ref={el => this.inputAtv = el}/>
                        </div>
                    </th>
                    <th className={'text-center'}>
                        <button className={'btn btn-primary text-uppercase btn-sm'} type={'button'} onClick={this.addLine.bind(this)}>Adicionar</button>
                    </th>
                </tr>
                </thead>
                <tbody ref={'bodyTable'}>
                {
                    this.state.mainActivities.map((tool, index)=>{
                        if(index < 5){
                            return(
                                <tr>
                                    <td>{tool.atv}</td>
                                    <td className={'text-center'} key={index}>
                                        <FaTrash style={{cursor: 'pointer'}}  title={'Remover linha'}
                                                 onClick={this.removeLine.bind(this, index)}/>
                                    </td>
                                </tr>
                            )
                        }else if(this.state.viewMore){
                            return(
                                <tr>
                                    <td>{tool.atv}</td>
                                    <td className={'text-center'} key={index}>
                                        <FaTrash style={{cursor: 'pointer'}}  title={'Remover linha'}
                                                 onClick={this.removeLine.bind(this, index)}/>
                                    </td>
                                </tr>
                            )
                        }
                    })
                }
                {
                    this.state.mainActivities.length > 5 && !this.state.viewMore ?
                        <tr style={{borderRadius: '5px'}}>
                            <td className={'text-center'} style={{backgroundColor: '#efefef', fontWeight: 'bold', borderRadius: '3px'}} colSpan={2}>
                                <a href="" onClick={(e)=>{e.preventDefault(); this.viewMore();}}>Ver todas</a>
                            </td>
                        </tr>
                        :
                        <div/>
                }
                {
                    this.state.viewMore ?
                        <tr style={{borderRadius: '5px'}}>
                            <td className={'text-center'} style={{backgroundColor: '#efefef', fontWeight: 'bold'}} colSpan={2}>
                                <a href="" onClick={(e)=>{e.preventDefault(); this.viewMore();}}>Ver menos</a>
                            </td>
                        </tr>
                        :
                        <div/>
                }
                {
                    this.state.mainActivities.length === 0 ?
                        <tr style={{borderRadius: '5px'}}>
                            <td className={'text-center'} colSpan={2} style={{backgroundColor: '#efefef', fontWeight: 'bold'}}>
                                    Digite acima para adicionar</td>
                        </tr>
                        :
                        <div/>
                }
                </tbody>
            </table>
        )}
}