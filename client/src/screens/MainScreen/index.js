import React, { Component } from 'react';

import StartScreen from '../StartScreen';
import DashboardScreen from '../DashboardScreen';
import GraphScreen from "../ChartScreen"

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

        // FIXME: debug
        console.log(data);
    }

    render() {
        const { started, startTime, endTime, recordedData } = this.state;
        return (!started ?
            (endTime ?
                <GraphScreen
                    startTime={startTime}
                    endTime={endTime}
                    data={recordedData}
                />
            :
                <StartScreen
                    onStart={ this.start }
                    startTime={startTime}
                    endTime={endTime}
                    recordedData={recordedData}
                />
            )
        :    
            <DashboardScreen
                onGotNewData={ this.onGotNewData }
                onStop={ this.stop }
            />
        );
    }

}

export default MainScreen;