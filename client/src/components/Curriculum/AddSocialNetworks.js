import React, { Component } from 'react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter, FaGithub, FaPinterestP, FaInstagram, FaYoutube } from 'react-icons/fa';
import scrollToComponent from "react-scroll-to-component";
import {bindActionCreators} from "redux";
import * as curriculumActions from "../../state/actions/curriculumAction";
import connect from "react-redux/es/connect/connect";
import Typography from "@material-ui/core/Typography";
import Slider from "../../UI/Slider";

class AddSocialNetworks extends Component {

    constructor(props){
        super(props);
        this.state = {
            facebook: false,
            twitter: false,
            github: false,
            pinterest: false,
            linkedin: false,
            instagram: false,
            youtube: false,
            gPlus: false,
        };
    }

    selectFace = what => {
        this.setState({ [what]: true })
    };

    render() {

        return (

            <div>
                <table className="table">
                    <thead>
                    <tr>
                        {/*<th style={{width: '60px'}}>*/}
                            {/*<div className="form-group" style={{margin: '1px', top: '15px'}}>*/}
                                {/*<input type="text" className="form-control" disabled={true}*/}
                                       {/*style={{backgroundColor: '#e0dfde', borderRadius: '7px', padding: '0 5px 0 5px'}}*/}
                                       {/*placeholder={'http://facebook.com/'}/>*/}
                            {/*</div>*/}
                            {/*<FaFacebookF className={'midiaSocialActive'} style={{color: '#3b5998'}}/>*/}
                            {/*</div>*/}
                        {/*</th>*/}
                        <th>
                            <div className={'form-row'}>
                            <div className={'col-md-1'}>
                            <FaFacebookF className={'midiaSocialActive'} style={{color: '#3b5998'}}/>
                            </div>
                            {/*<div className="form-group col-md-10" style={{margin: '1px', top: '15px'}}>*/}
                                <input type="text" className="form-control col-md-11"
                                       placeholder="Selecione uma das mídias sociais abaixo para adicionar"/>
                            {/*</div>*/}
                            </div>
                        </th>
                        <th className={'text-center'}>
                            <button className={'btn btn-success text-uppercase btn-sm'} type={'button'}>Adicionar</button>
                        </th>
                    </tr>
                    </thead>
                </table>
                <br/>
                <div className={'form-row'}>
                    <div className={'form -group col-md-1'}>
                        <FaFacebookF className={'midiaSocial'} onClick={this.selectFace.bind(this, 'facebook')}
                                     style={{color: this.state.facebook && '#3b5998', borderColor: this.state.facebook && '#3b5998'}}/>
                    </div>
                    <div className={'form -group col-md-1'}>
                        <FaGooglePlusG className={'midiaSocial'} onClick={this.selectFace.bind(this, 'gPlus')}
                                       style={{color: this.state.gPlus && '#d34836', borderColor: this.state.gPlus && '#d34836'}}/>
                    </div>
                    <div className={'form -group col-md-1'}>
                        <FaLinkedinIn className={'midiaSocial'} onClick={this.selectFace.bind(this, 'linkedin')}
                                      style={{color: this.state.linkedin && '#0e76a8', borderColor: this.state.linkedin && '#0e76a8'}}/>
                    </div>
                    <div className={'form -group col-md-1'}>
                        <FaTwitter className={'midiaSocial'} onClick={this.selectFace.bind(this, 'twitter')}
                                   style={{color: this.state.twitter && '#00acee', borderColor: this.state.twitter && '#00acee'}}/>
                    </div>
                    <div className={'form -group col-md-1'}>
                        <FaGithub className={'midiaSocial'} onClick={this.selectFace.bind(this, 'github')}
                                  style={{color: this.state.github && '#171515', borderColor: this.state.github && '#171515'}}/>
                    </div>
                    <div className={'form -group col-md-1'}>
                        <FaPinterestP className={'midiaSocial'} onClick={this.selectFace.bind(this, 'pinterest')}
                                      style={{color: this.state.pinterest && '#c8232c', borderColor: this.state.pinterest && '#c8232c'}}/>
                    </div>
                    <div className={'form -group col-md-1'}>
                        <FaInstagram className={'midiaSocial'} onClick={this.selectFace.bind(this, 'instagram')}
                                     style={{color: this.state.instagram && '#3f729b', borderColor: this.state.instagram && '#3f729b'}}/>
                    </div>
                    <div className={'form -group col-md-1'}>
                        <FaYoutube className={'midiaSocial'} onClick={this.selectFace.bind(this, 'youtube')}
                                   style={{color: this.state.youtube && '#d34836', borderColor: this.state.youtube && '#d34836'}}/>
                    </div>
                </div>
            </div>
        )}
}

const mapStateToProps = state => ({
    curriculumData: state.curriculumData
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(curriculumActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddSocialNetworks);