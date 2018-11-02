import React, { Component } from 'react';
import PortfolioCard from "./PortfolioCard";

export default class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <section id="portfolio-section" className="portfolio-section">
                <div className="container-mat">
                    <div className="row-mat">
                        <div className="cole s12 section-title">
                            <h2>Portfolio</h2>
                        </div>
                        <div className="cole s12">
                            <div className="cole s12 section-content pd-0">
                                <ul className="filter">
                                    <li><a className="active" href="#" data-filter="*">All</a></li>
                                    <li><a href="#" data-filter=".python">Python</a></li>
                                    <li><a href="#" data-filter=".go">Go</a></li>
                                    <li><a href="#" data-filter=".javascript">Javascript</a></li>
                                    <li><a href="#" data-filter=".angular">Angular</a></li>
                                    <li><a href="#" data-filter=".react">React</a></li>
                                </ul>

                                <ul className="portfolio-items isotope"
                                    style={{position: 'relative', overflow: 'hidden', height: '420.812px'}}>
                                    <PortfolioCard local={'translate3d(0px, 0px, 0px)'}/>
                                    <PortfolioCard local={'translate3d(306px, 0px, 0px)'}/>
                                    <PortfolioCard local={'translate3d(613px, 0px, 0px)'}/>
                                    <PortfolioCard local={'translate3d(0px, 210px, 0px)'}/>
                                    <PortfolioCard local={'translate3d(306px, 210px, 0px)'}/>
                                    <PortfolioCard local={'translate3d(613px, 210px, 0px)'}/>
                                </ul>
                            </div>
                            <div className="cole s12 portfolio-all al-center">
                                <a href="" className="btn-circle waves-effect tooltipped"
                                   data-position="top" data-delay="50" data-tooltip="All Portfolio"
                                   data-tooltip-id="1b9166eb-701b-dd92-cbaa-555cd412beb7"><span/><span/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}