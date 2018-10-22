import React, { Component } from 'react';
import CreateCurriculo from "../components/Curriculo/CreateCurriculo";
import ViewCurriculo from "../components/Curriculo/ViewCurriculo";
// import '../styles/css/bootstrap.min.css';

export default class Curriculo extends Component {
    render() {
        return (
            <section className="divided clearfix">
                <div className="row">
                    <CreateCurriculo/>
                    <ViewCurriculo/>
                </div>
            </section>
        );
    }
}