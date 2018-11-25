import React, { Component } from 'react';

import Button from '../../components/Button';

class StartScreen extends Component {

    start = () => {

    }

    render() {
        const { onStart } = this.props;
        return (
            <div className={"hero is-fullheight"}>
                <div className="hero-body has-background-primary ">
                    <div className="container">
                        <div className="columns is-full is-multiline has-text-centered">
                            <div className="column has-text-centered is-12">
                                <img src={require("../../assets/logo.svg")} className="is-logo"/>
                            </div>
                            <div className="column is-12">
                                <Button onClick={ onStart }>
                                    Start
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default StartScreen;