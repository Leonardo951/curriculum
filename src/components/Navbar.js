import React, { Component } from 'react';
import UserNavbar from './UserNavbar';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand">Navbar</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <span className="nav-link">Home</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">Link</span>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <span className="dropdown-item">Action</span>
                                <span className="dropdown-item">Another action</span>
                                <div className="dropdown-divider"/>
                                <span className="dropdown-item">Something else here</span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link disabled">Disabled</span>
                        </li>
                    </ul>
                    <UserNavbar/>
                </div>
            </nav>
        );
    }
}

