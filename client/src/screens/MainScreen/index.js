import React, { Component } from 'react';

import StartScreen from '../StartScreen';
import DashboardScreen from '../DashboardScreen';

class MainScreen extends Component {
    state = {
        started: false
    };

    start = () => {
        this.setState({
            started: true
        });
    }

    render() {
        const { started } = this.state;
        return (!started ?
            <StartScreen
                onStart={ this.start }
            />
        :    
            <DashboardScreen

            />
        );
    }

}

export default MainScreen;