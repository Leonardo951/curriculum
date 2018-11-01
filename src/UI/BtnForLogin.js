import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BtnForLogin extends Component {
    render() {
        return (
            <Link to={'/login'}>
                <button className={'btn btn-primary text-center'}>
                    Login
                </button>
            </Link>
        );
    }
}