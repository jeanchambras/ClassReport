import React, { Component } from 'react';

import { processHands, processHeads } from '../../api';
import DashBar from "../../components/DashBar"

import VideoFeed from '../../components/VideoFeed';

class DashboardScreen extends Component {

    onGotPicture = (blob) => {
        processHeads(blob).then(console.log).catch(console.error);
    }

    render() {
        return (
            <div className="fullscreen">
                <VideoFeed onGotPicture={this.onGotPicture} pictureInterval={1500} />
                <DashBar peopleCount={400} raisingHand={18}/>
            </div>
        );
    }

}

export default DashboardScreen;
