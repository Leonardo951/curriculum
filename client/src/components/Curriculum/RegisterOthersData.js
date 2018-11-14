import React, { Component } from 'react';
import AddQualifications from "./AddQualifications";
import AddComplementary from "./AddComplementary";
import AddSkills from "./AddSkills";
import { FaAngleDown } from 'react-icons/fa';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import scrollToComponent from "react-scroll-to-component";
import AddSocialNetworks from "./AddSocialNetworks";

export default class RegisterOthersData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: null,
        };

    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
        if(panel === 'panel1' && expanded){
            setTimeout(()=>{
                scrollToComponent(this.refs.panel1, {offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
            }, 100);
        }else if(panel === 'panel2' && expanded){
            setTimeout(()=>{
                scrollToComponent(this.refs.panel2, {offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
            }, 100);
        }else if(panel === 'panel3' && expanded){
            setTimeout(()=>{
                scrollToComponent(this.refs.panel3, {offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
            }, 100);
        }else if(panel === 'panel4' && expanded){
            setTimeout(()=>{
                scrollToComponent(this.refs.panel4, {offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
            }, 100);
        }
    };

    render() {

        const { expanded } = this.state;

        return (
            <div style={{width: '100%'}}>

                <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                    <ExpansionPanelSummary className={'text-uppercase'} expandIcon={<FaAngleDown />}>
                        <Typography style={{fontSize: '15px'}}>Qualificações e Diferenciais</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{display: 'block'}} ref={'panel1'}>
                        <Typography>

                            <AddQualifications/>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                    <ExpansionPanelSummary className={'text-uppercase'} expandIcon={<FaAngleDown />}>
                        <Typography style={{fontSize: '15px'}}>Informações adicionais</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{display: 'block'}} ref={'panel2'}>
                        <Typography>

                            <AddComplementary/>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                    <ExpansionPanelSummary className={'text-uppercase'} expandIcon={<FaAngleDown />}>
                        <Typography style={{fontSize: '15px'}}> Minhas habilidades</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{display: 'block'}} ref={'panel3'}>
                        <Typography>

                            <AddSkills/>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
                    <ExpansionPanelSummary className={'text-uppercase'} expandIcon={<FaAngleDown />}>
                        <Typography style={{fontSize: '15px'}}> Redes sociais</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{display: 'block'}} ref={'panel4'}>
                        <Typography>

                            <AddSocialNetworks/>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

            </div>
        )}
}