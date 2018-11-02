import React, { Component } from 'react';
import { FaDownload, FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter, FaGithub, FaPinterestP, FaInstagram, FaYoutube } from 'react-icons/fa';
import { COLORS } from '../../constant/CvColors';
import ReactTooltip from 'react-tooltip';

export default class About extends Component {

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
        }
    }

    // Control colores for icons social networks
    hoverBoll(info, item){
        const value = {
            download: item === 'download' && !this.state.ball ? this.props.colorSelected : COLORS.WHITE,
            face: item === 'face' && !this.state.ball ? this.props.colorSelected : COLORS.WHITE,
            insta: item === 'insta' && !this.state.ball ? this.props.colorSelected : COLORS.WHITE,
            github: item === 'github' && !this.state.ball ? this.props.colorSelected : COLORS.WHITE,
            pint: item === 'pint' && !this.state.ball ? this.props.colorSelected : COLORS.WHITE,
            twitter: item === 'twitter' && !this.state.ball ? this.props.colorSelected : COLORS.WHITE,
            gplus: item === 'gplus' && !this.state.ball ? this.props.colorSelected : COLORS.WHITE,
            linkedin: item === 'linkedin' && !this.state.ball ? this.props.colorSelected : COLORS.WHITE,
            yt: item === 'yt' && !this.state.ball ? this.props.colorSelected : COLORS.WHITE,
        };
        if(this.state.ball){
            if(info !== 'img') {
                this.setState({ball: false, imgColor: value})
            }
        }else{
            this.setState({ball: true, imgColor: value})
        }
    };

    render() {
        
        return (
            <div>
                <div className="site-header top-section top-section-home image-bg parallax-section"
                     data-image-bg="../../images/capa.jpg">
                    <div className="overlay-section"/>
                </div>
                <section id="about-section" className="about-section">
                    <div className="section-content">
                        <div className="container-mat c-curriculo">
                            <div className="row-mat r-curriculo">
                                <div className="cole s12 fadeInUp animated wow" data-wow-duration="1s" data-wow-delay="0.3s"
                                     data-wow-offset="0">
                                    <div className="cole s12 w-block shadow-bg pd-0">
                                        <div className="cole m5 s12 about-img parallax-layer al-center pd-50 aa">
                                            <div className="about-img-content image-bg shadow-bg layer" data-depth="0.1"
                                                 style={{position: 'relative', display: 'block', left: '0px', top: '0px', transform: 'translate3d(0.769725px, -4.30725px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', background: 'url(http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Yin-Yang-PNG-Transparent-Image-6-500x500.png) center top / cover no-repeat'}}>
                                                <ReactTooltip place={'top'} effect={'solid'} />
                                                <a href=""
                                                       className="btn-circle tooltipped layer shadow-bg" data-position="top"
                                                       data-delay="50" data-tip="Download currículo" data-depth="0.25"  onMouseOver={this.hoverBoll.bind(this, 'ball', 'download')}
                                                       data-tooltip-id="1481b9c0-143c-a285-9cff-87745145e410" onMouseOut={this.hoverBoll.bind(this, 'ball', 'download')}
                                                       style={{position: 'absolute', display: 'block', left: '0px', top: '0px', transform: 'translate3d(3.7375px, -8.05177px, 0px)', transformStyle: 'preserve-3d', backfaceisibility: 'hidden', backgroundColor: this.props.colorSelected, color: this.props.colorSelected}}>
                                                        <FaDownload style={{color: this.state.imgColor.download}} onMouseOver={this.hoverBoll.bind(this, 'img', 'download')}/></a>
                                            </div>
                                            <div className="about-name" style={{color: this.props.colorSelected}}>John Doe</div>
                                            <div className="about-title">Software Engineer</div>
                                        </div>
                                        <div className="cole m7 s12 about-data-wrapper pd-50">
                                            <div className="about-desc pd-0">
                                                <div className="about-section-title">Sobre
                                                <span className="about-section-title-after" style={{backgroundColor: this.props.colorSelected}}/></div>
                                                <div className="about-data">
                                                    {/*<p className="about-description">*/}
                                                        {/*Procuro uma oportunidade para desempenhar de maneira exemplar, todas as tarefas que*/}
                                                        {/*me forem atribuídas, possuo uma grande disposição para aprender e sei que os*/}
                                                        {/*obstáculos durante a caminhada profissional são ingredientes fundamentais para o*/}
                                                        {/*sucesso.*/}
                                                    {/*</p>*/}
                                                    <div><span>Nacionalidade</span>Espanhol</div>
                                                    <div><span>Idade</span>25</div>
                                                    <div><span>Sexo</span>Masculino</div>
                                                    <div><span>Estado Civil</span>Casado</div>
                                                    <div><span>Endereço</span>1234 Street, W3 Island</div>
                                                    <div><span>Telefone</span>+0123 456 789</div>
                                                    <div><span>E-mail</span>teste@mail.com</div>
                                                    <div><span>Website</span>http://www.envato.com</div>
                                                </div>
                                                <div className="about-info-add text-center">
                                                    <span>Procurando novas oportunidades</span>
                                                    <br/>
                                                    <span>Disponibilidade para viagens e mudanças</span>
                                                    <br/>
                                                    <span>Disponibilidade para projetos freelancer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="about-social cole s12 pd-0" style={{backgroundColor: this.props.colorSelected}}>
                                            <a className="waves-effect waves-light" href="#0" onMouseOver={this.hoverBoll.bind(this, 'ball', 'face')} onMouseOut={this.hoverBoll.bind(this, 'ball', 'face')}>
                                                <FaFacebookF style={{color: this.state.imgColor.face}} onMouseOver={this.hoverBoll.bind(this, 'img', 'face')}/>
                                            </a>
                                            <a className="waves-effect waves-light" href="#0" onMouseOver={this.hoverBoll.bind(this, 'ball', 'gplus')} onMouseOut={this.hoverBoll.bind(this, 'ball', 'gplus')}>
                                                <FaGooglePlusG  style={{color: this.state.imgColor.gplus}} onMouseOver={this.hoverBoll.bind(this, 'img', 'gplus')}/>
                                            </a>
                                            <a className="waves-effect waves-light" href="#0" onMouseOver={this.hoverBoll.bind(this, 'ball', 'linkedin')} onMouseOut={this.hoverBoll.bind(this, 'ball', 'linkedin')}>
                                                <FaLinkedinIn style={{color: this.state.imgColor.linkedin}} onMouseOver={this.hoverBoll.bind(this, 'img', 'linkedin')}/>
                                            </a>
                                            <a className="waves-effect waves-light" href="#0" onMouseOver={this.hoverBoll.bind(this, 'ball', 'twitter')} onMouseOut={this.hoverBoll.bind(this, 'ball', 'twitter')}>
                                                <FaTwitter style={{color: this.state.imgColor.twitter}} onMouseOver={this.hoverBoll.bind(this, 'img', 'twitter')}/>
                                            </a>
                                            <a className="waves-effect waves-light" href="#0" onMouseOver={this.hoverBoll.bind(this, 'ball', 'github')} onMouseOut={this.hoverBoll.bind(this, 'ball', 'github')}>
                                                <FaGithub style={{color: this.state.imgColor.github}} onMouseOver={this.hoverBoll.bind(this, 'img', 'github')}/>
                                            </a>
                                            <a className="waves-effect waves-light" href="#0" onMouseOver={this.hoverBoll.bind(this, 'ball', 'pint')} onMouseOut={this.hoverBoll.bind(this, 'ball', 'pint')}>
                                                <FaPinterestP style={{color: this.state.imgColor.pint}} onMouseOver={this.hoverBoll.bind(this, 'img', 'pint')}/>
                                            </a>
                                            <a className="waves-effect waves-light" href="#0" onMouseOver={this.hoverBoll.bind(this, 'ball', 'yt')} onMouseOut={this.hoverBoll.bind(this, 'ball', 'yt')}>
                                                <FaYoutube style={{color: this.state.imgColor.yt}} onMouseOver={this.hoverBoll.bind(this, 'img', 'yt')}/>
                                            </a>
                                            <a className="waves-effect waves-light" href="#0" onMouseOver={this.hoverBoll.bind(this, 'ball', 'insta')} onMouseOut={this.hoverBoll.bind(this, 'ball', 'insta')}>
                                                <FaInstagram style={{color: this.state.imgColor.insta}} onMouseOver={this.hoverBoll.bind(this, 'img', 'insta')}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}