import React, { Component } from 'react';

import StartScreen from '../StartScreen';
import DashboardScreen from '../DashboardScreen';

class MainScreen extends Component {
    state = {
        started: false,
        recordedData: []
    };

    start = () => {
        this.setState({
            started: true
        });
    }

    onGotNewData = (data) => {
        const currentData = this.state.recordedData;
        this.setState({
            recordedData: [
                ...currentData,
                data
            ]
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
                onGotNewData={this.onGotNewData}
            />
        );
    }

}

export default MainScreen;