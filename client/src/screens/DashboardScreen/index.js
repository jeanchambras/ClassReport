import React, { Component } from 'react';

import { processHands, processHeads } from '../../api';
import DashBar from "../../components/DashBar"

import VideoFeed from '../../components/VideoFeed';

class DashboardScreen extends Component {

    onGotPicture = (blob) => {
        const { onGotNewData } = this.props;
        processHeads(blob).then(data => {
            console.log(data);
            onGotNewData(data);
        }).catch(console.error);
    }

    render() {
        return (
            <div className="fullscreen">
                <VideoFeed onGotPicture={this.onGotPicture} pictureInterval={1500} />
                <DashBar peopleCount={400} raisingHand={50}/>
            </div>
        );
    }

}

export default DashboardScreen;
