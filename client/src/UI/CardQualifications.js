import React, { Component } from 'react';

export default class CardQualifications extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="card" style={{borderRadius: '5px'}}>
                    <div className="card-body">
                        {/*<h5 className="card-title">Card title</h5>*/}
                        <p className="card-text">
                            { this.props.qualification }
                        </p>
                    </div>
                    {/*<div className="card-footer">*/}
                        {/*<small className="text-muted">Last updated 3 mins ago</small>*/}
                    {/*</div>*/}
            </div>
        );
    }
}