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
            started: true,
            startTime: Date.now()
        });
    }

    stop = () => {
        this.setState({
            started: false,
            endTime: Date.now()
        })
    }

    onGotNewData = (data) => {
        const currentData = this.state.recordedData;
        this.setState({
            recordedData: [
                ...currentData,
                {
                    time: Date.now(),
                    data
                }
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
                onGotNewData={ this.onGotNewData }
                onStop={ this.stop }
            />
        );
    }

}

export default MainScreen;