import React, { Component } from 'react';
import { ScaleLoader } from 'react-spinners';
import connect from "react-redux/es/connect/connect";

class Loading extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        if(this.props.app.loading) {
            return (
                <div className={'block-main-loading'}>
                    <div className="centralize">
                        <div className='sweet-loading'>
                            <ScaleLoader
                                className={'override'}
                                height={50}
                                width={7}
                                color={'#2D5E55'}
                                loading={this.props.app.loading}
                            />
                        </div>
                        <h5>Aguarde enquanto montamos o currículo</h5>
                    </div>
                </div>
            );
        }else{
            return <div/>
        }
    }
}

const mapStateToProps = state => ({
    app: state.app
});

export default connect(mapStateToProps, null)(Loading);
