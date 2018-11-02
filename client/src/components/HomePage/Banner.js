import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="overlay"/>
                <img src="http://via.placeholder.com/1349x500" className="img-responsive" alt={'verei'}/>
                <div className="content">
                    <div className="container">
                        <div className="col-md-8">
                            <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="btn btn-primary"><Link to='/register'>Cadastre agora seu currículo</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}