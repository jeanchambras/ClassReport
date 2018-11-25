import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class ChartScreen extends Component {

    state = {
        data: [{
            x: 10,
            y: 20
        }, {
            x: 15,
            y: 10
        }]
    };
    
    render() {
        const { data } = this.state;
        return (
            <div className="main">
                <Line data={data}/>
            </div>
        );
    }

}

export default ChartScreen;
