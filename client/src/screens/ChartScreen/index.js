import React, { Component } from 'react';

import ReactChartkick, { LineChart, PieChart, ScatterChart } from 'react-chartkick';
import Chart from 'chart.js';
ReactChartkick.addAdapter(Chart);

/*
    data = [
        {
            time: ...,
            data: {
                heads: {
                    count,
                    emotions: {
                        anger: 0.55,
                        ...
                    }
                }
            }
        },
        {
            ...
        },
        ...
    ]
*/
const computeTotalEmotions = (data) => {
    let emotionValues = {};
    for (const i in data) {
        const currentData = data[i];
        const emotions = currentData.data.heads.emotions;
        for (const emotionName in emotions) {
            if (emotions[emotionName] > 0) {
                if (!emotionValues[emotionName]) {
                    emotionValues[emotionName] = 0;
                }
                emotionValues[emotionName] += emotions[emotionName];
            }
        }
    }
    return Object.keys(emotionValues).map(emotionName => [emotionName, emotionValues[emotionName]]);
}

class ChartScreen extends Component {
	render() {
        const data = this.props.data;
		return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <h1><b>Session results</b></h1>
                <div style={{ width: 800 }}>
                    { /* <h2>First Chart</h2> */ }
                    <LineChart data={data.map(v => [v.time, v.data.heads.count])} xtitle="Time" ytitle="Attentive students" />
                </div>
                <div style={{ width: 800 }}>
                    { /* <h2>Second Chart</h2> */ }
                    <PieChart data={computeTotalEmotions(data)} />
                </div>
            </div>
        );
	}

}

export default ChartScreen;
