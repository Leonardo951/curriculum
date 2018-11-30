import React, { Component } from 'react';
import { FaDownload, FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter, FaGithub, FaPinterestP, FaInstagram, FaYoutube } from 'react-icons/fa';
import { COLORS } from '../../constant/cv';
import {OPTIONS_CIVIL_STATUS, OPTIONS_SEX, OPTIONS_STATES_OF_BRAZIL} from '../../constant/curriculum';
import ReactTooltip from 'react-tooltip';
import connect from "react-redux/es/connect/connect";

class About extends Component {

    constructor(props){
        super(props);
        this.state = {
            ball: false,
            imgColor: {
                download: COLORS.WHITE,
                face: COLORS.WHITE,
                insta: COLORS.WHITE,
                github: COLORS.WHITE,
                pint: COLORS.WHITE,
                twitter: COLORS.WHITE,
                gplus: COLORS.WHITE,
                linkedin: COLORS.WHITE,
                yt: COLORS.WHITE,
            },
        };
    }

    // Control colores for icons social networks
    hoverBoll(info, item){
        const value = {
            download: item === 'download' && !this.state.ball ? this.props.colorCv : COLORS.WHITE,
            face: item === 'face' && !this.state.ball ? this.props.colorCv : COLORS.WHITE,
            insta: item === 'insta' && !this.state.ball ? this.props.colorCv : COLORS.WHITE,
            github: item === 'github' && !this.state.ball ? this.props.colorCv : COLORS.WHITE,
            pint: item === 'pint' && !this.state.ball ? this.props.colorCv : COLORS.WHITE,
            twitter: item === 'twitter' && !this.state.ball ? this.props.colorCv : COLORS.WHITE,
            gplus: item === 'gplus' && !this.state.ball ? this.props.colorCv : COLORS.WHITE,
            linkedin: item === 'linkedin' && !this.state.ball ? this.props.colorCv : COLORS.WHITE,
            yt: item === 'yt' && !this.state.ball ? this.props.colorCv : COLORS.WHITE,
        };
        if(this.state.ball){
            if(info !== 'img') {
                this.setState({ball: false, imgColor: value})
            }
        }else{
            this.setState({ball: true, imgColor: value})
        }
    };

    dateBirth = ()=> {
        const date = new Date(this.props.curriculumData.dateBirth);
        return this.defineAge(date.getFullYear(), date.getMonth(), date.getDate());
    };

    formatPhone = phone => {
        let phoneFormated = "(";
        let nineNumbers = false;
        if(phone.split("").length > 10){
            nineNumbers = true;
        }
        phone.split("").map((val, index)=>{
            if(index === 0){
                phoneFormated = phoneFormated + val;
            }else if(index === 1){
                phoneFormated = phoneFormated + val + ") ";
            }else if(index === 2 && nineNumbers){
                phoneFormated = phoneFormated + val + " ";
            }else if(index === 6 && nineNumbers){
                phoneFormated = phoneFormated + val + "-";
            }else if(index === 5 && !nineNumbers){
                phoneFormated = phoneFormated + val + "-";
            }else{
                phoneFormated = phoneFormated + val;
            }
        });
        return phoneFormated;
    };

    defineAge = (year, month, day) => {
        let dt = new Date,
            currentYear = dt.getFullYear(),
            currentMonth = dt.getMonth() + 1,
            currentDay = dt.getDate(),
            howOld = currentYear - year;
        if (currentMonth < month || currentMonth === month && currentDay < day) {
            howOld--;
        }
        return howOld === 0 ? 0 : howOld;
    };

    defineNameUser = name=> {
        const names = name.split(" ");
        const larger = names.length;
        return names[0] + " " + names[larger-1]
    };

    titleize = text => {
        let name;
        let newText;
        text.split(" ").map((val, index)=>{
            if(val.length !== 2){
                val.split("").map((tool, i)=>{
                    if(i === 0){
                        name = tool.toUpperCase()
                    }else{
                        name = name+tool
                    }
                });
                if(newText === undefined){
                    newText = name;
                }else{
                    newText = newText+" "+name;
                }
            }else{
                newText = newText+" "+val;
            }
        });
        return newText;
    };

    render() {

        const { name, jobMain, sex, website, email, otherMail, nationality, civilStatus, address, city, state, phone, socialNetworks } = this.props.curriculumData;

        return (
            <section id="about-section" className="about-section">
                <div className="section-content">
                    <div className="container-mat c-curriculo">
                        <div className="row-mat r-curriculo">
                            <div className="cole s12 fadeInUp animated wow" data-wow-duration="1s" data-wow-delay="0.3s"
                                 data-wow-offset="0">
                                <div className="cole s12 w-block shadow-bg pd-0">
                                    <div className="cole m5 s12 about-img parallax-layer al-center pd-50 aa">
                                        <div className="about-img-content image-bg shadow-bg layer" data-depth="0.1"
                                             style={{position: 'relative', display: 'block', left: '0px', top: '0px',
                                                 transform: 'translate3d(0.769725px, -4.30725px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', background: 'url(http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Yin-Yang-PNG-Transparent-Image-6-500x500.png) center top / cover no-repeat'}}>
                                            <ReactTooltip place={'top'} effect={'solid'} />
                                            <a href=""
                                               className="btn-circle tooltipped layer shadow-bg" data-position="top"
                                               data-delay="50" data-tip="Download currículo" data-depth="0.25"
                                               onMouseOver={this.hoverBoll.bind(this, 'ball', 'download')}
                                               data-tooltip-id="1481b9c0-143c-a285-9cff-87745145e410"
                                               onMouseOut={this.hoverBoll.bind(this, 'ball', 'download')}
                                               style={{position: 'absolute', display: 'block', left: '0px', top: '0px',
                                                   transform: 'translate3d(3.7375px, -8.05177px, 0px)', transformStyle: 'preserve-3d',
                                                   backfaceisibility: 'hidden', backgroundColor: this.props.colorCv, color: this.props.colorCv}}>
                                                <FaDownload style={{color: this.state.imgColor.download}}
                                                            onMouseOver={this.hoverBoll.bind(this, 'img', 'download')}/>
                                            </a>
                                        </div>
                                        <div className="about-name" style={{color: this.props.colorCv}}>{ this.defineNameUser(name) }</div>
                                        <div className="about-title">{ jobMain }</div>
                                    </div>
                                    <div className="cole m7 s12 about-data-wrapper pd-50">
                                        <div className="about-desc pd-0">
                                            <div className="about-section-title">Sobre
                                                <span className="about-section-title-after" style={{backgroundColor: this.props.colorCv}}/></div>
                                            <div className="about-data">
                                                <div><span>Nome Completo</span>{ this.titleize(name) }</div>
                                                <div><span>Nacionalidade</span>{ nationality }</div>
                                                <div><span>Idade</span>{ this.dateBirth() }</div>
                                                {
                                                    OPTIONS_SEX.map((tool, index)=>{
                                                        if(sex === tool.value && sex !== 'NoInformed'){
                                                            return <div key={index}><span>Sexo</span>{ tool.label }</div>
                                                        }
                                                    })
                                                }
                                                {
                                                    OPTIONS_CIVIL_STATUS.map((tool, index)=>{
                                                        if(civilStatus === tool.value){
                                                            if(sex === "M"){
                                                                return <div key={index}><span>Estado Civil</span>{ tool.label_m }</div>
                                                            }else if(sex === "F"){
                                                                return <div key={index}><span>Estado Civil</span>{ tool.label_f }</div>
                                                            }else{
                                                                return <div key={index}><span>Estado Civil</span>{ tool.label }</div>
                                                            }
                                                        }
                                                    })
                                                }
                                                <div><span>Endereço</span>
                                                    {
                                                        address + '/ ' + city + '-'+ OPTIONS_STATES_OF_BRAZIL.map((tool, index)=>{
                                                            if(state === tool.state){
                                                                return tool.uf
                                                            }
                                                        })
                                                    }
                                                </div>
                                                <div>
                                                    <span>Telefone</span>
                                                    { this.formatPhone(phone.phoneOne) }
                                                    { phone.phoneTwo !== '' && '/ '+this.formatPhone(phone.phoneTwo) }
                                                    { phone.phoneThree !== '' && '/ '+this.formatPhone(phone.phoneThree) }
                                                </div>
                                                <div>
                                                    <span>E-mail { otherMail !== '' && 's' }</span>
                                                    { email }
                                                    { otherMail !== '' && '/ ' + otherMail }
                                                </div>
                                                {
                                                    website !== '' &&
                                                    <div><span>Website</span>{ website }</div>
                                                }
                                            </div>
                                            {/*<div className="about-info-add text-center">*/}
                                            {/*<span>Procurando novas oportunidades</span>*/}
                                            {/*<br/>*/}
                                            {/*<span>Disponibilidade para viagens e mudanças</span>*/}
                                            {/*<br/>*/}
                                            {/*<span>Disponibilidade para projetos freelancer</span>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                    <div className="about-social cole s12 pd-0" style={{backgroundColor: this.props.colorCv}}>
                                        {
                                            socialNetworks.Facebook.use &&
                                            <a className="waves-effect waves-light" href={socialNetworks.Facebook.link}
                                               onMouseOver={this.hoverBoll.bind(this, 'ball', 'face')}
                                               onMouseOut={this.hoverBoll.bind(this, 'ball', 'face')}>
                                                <FaFacebookF style={{color: this.state.imgColor.face}}
                                                             onMouseOver={this.hoverBoll.bind(this, 'img', 'face')}/>
                                            </a>
                                        }
                                        {
                                            socialNetworks.GPlus.use &&
                                            <a className="waves-effect waves-light" href={socialNetworks.GPlus.link}
                                               onMouseOver={this.hoverBoll.bind(this, 'ball', 'gplus')}
                                               onMouseOut={this.hoverBoll.bind(this, 'ball', 'gplus')}>
                                                <FaGooglePlusG  style={{color: this.state.imgColor.gplus}}
                                                                onMouseOver={this.hoverBoll.bind(this, 'img', 'gplus')}/>
                                            </a>
                                        }
                                        {
                                            socialNetworks.Linkedin.use &&
                                            <a className="waves-effect waves-light" href={socialNetworks.Linkedin.link}
                                               onMouseOver={this.hoverBoll.bind(this, 'ball', 'linkedin')}
                                               onMouseOut={this.hoverBoll.bind(this, 'ball', 'linkedin')}>
                                                <FaLinkedinIn style={{color: this.state.imgColor.linkedin}}
                                                              onMouseOver={this.hoverBoll.bind(this, 'img', 'linkedin')}/>
                                            </a>
                                        }
                                        {
                                            socialNetworks.Twitter.use &&
                                            <a className="waves-effect waves-light" href={socialNetworks.Twitter.link}
                                               onMouseOver={this.hoverBoll.bind(this, 'ball', 'twitter')}
                                               onMouseOut={this.hoverBoll.bind(this, 'ball', 'twitter')}>
                                                <FaTwitter style={{color: this.state.imgColor.twitter}}
                                                           onMouseOver={this.hoverBoll.bind(this, 'img', 'twitter')}/>
                                            </a>
                                        }
                                        {
                                            socialNetworks.Github.use &&
                                            <a className="waves-effect waves-light" href={socialNetworks.Github.link}
                                               onMouseOver={this.hoverBoll.bind(this, 'ball', 'github')}
                                               onMouseOut={this.hoverBoll.bind(this, 'ball', 'github')}>
                                                <FaGithub style={{color: this.state.imgColor.github}}
                                                          onMouseOver={this.hoverBoll.bind(this, 'img', 'github')}/>
                                            </a>
                                        }
                                        {
                                            socialNetworks.Pinterest.use &&
                                            <a className="waves-effect waves-light" href={socialNetworks.Pinterest.link}
                                               onMouseOver={this.hoverBoll.bind(this, 'ball', 'pint')}
                                               onMouseOut={this.hoverBoll.bind(this, 'ball', 'pint')}>
                                                <FaPinterestP style={{color: this.state.imgColor.pint}}
                                                              onMouseOver={this.hoverBoll.bind(this, 'img', 'pint')} />
                                            </a>
                                        }
                                        {
                                            socialNetworks.Youtube.use &&
                                            <a className="waves-effect waves-light" href={socialNetworks.Youtube.link}
                                               onMouseOver={this.hoverBoll.bind(this, 'ball', 'yt')}
                                               onMouseOut={this.hoverBoll.bind(this, 'ball', 'yt')}>
                                                <FaYoutube style={{color: this.state.imgColor.yt}}
                                                           onMouseOver={this.hoverBoll.bind(this, 'img', 'yt')}/>
                                            </a>
                                        }
                                        {
                                            socialNetworks.Instagram.use &&
                                            <a className="waves-effect waves-light" href={socialNetworks.Instagram.link}
                                               onMouseOver={this.hoverBoll.bind(this, 'ball', 'insta')}
                                               onMouseOut={this.hoverBoll.bind(this, 'ball', 'insta')}>
                                                <FaInstagram style={{color: this.state.imgColor.insta}}
                                                             onMouseOver={this.hoverBoll.bind(this, 'img', 'insta')}/>
                                            </a>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    colorCv: state.colorCv,
    curriculumData: state.curriculumData
});

export default connect(mapStateToProps, null)(About);