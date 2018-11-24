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
<<<<<<< HEAD
                <p>This is the dashboard</p>
                { /* TODO: stop button (this.props.onStop) */ }
                <VideoFeed ref={ref => this.videoFeed = ref} onGotPicture={this.onGotPicture} pictureDelay={1000} />
=======
                <VideoFeed onGotPicture={this.onGotPicture} pictureInterval={1500} />
                <DashBar peopleCount={400} raisingHand={18}/>
>>>>>>> d2c15ea3beb79271a89f74711f210808d3f909e3
            </div>
        );
    }

}

export default DashboardScreen;
