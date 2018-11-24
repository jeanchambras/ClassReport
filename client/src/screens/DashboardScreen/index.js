import React, { Component } from 'react';

import { processHands, processHeads } from '../../api';
import DashBar from "../../components/DashBar"

import VideoFeed from '../../components/VideoFeed';

class DashboardScreen extends Component {

    onGotPicture = (blob) => {
        const { onGotNewData } = this.props;

        Promise.all([
            processHands(blob),
            processHeads(blob)
        ])
        .then(([hands, heads]) => {
            onGotNewData({ hands, heads });
            this.videoFeed.startTimer();
        })
        .catch(console.error);
    }

    render() {
        return (
            <div className="fullscreen">
                <VideoFeed ref={ref => this.videoFeed = ref} onGotPicture={this.onGotPicture} pictureDelay={500} />
                <DashBar peopleCount={400} raisingHand={18}/>
            </div>
        );
    }

}

export default DashboardScreen;
