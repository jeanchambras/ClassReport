import React, { Component } from 'react';

import { processHands, processHeads } from '../../api';

import VideoFeed from '../../components/VideoFeed';

class DashboardScreen extends Component {

    onGotPicture = (blob) => {
        processHeads(blob).then(console.log).catch(console.error);
    }

    render() {
        return (
            <div className="fullscreen">
                <p>This is the dashboard</p>
                <VideoFeed onGotPicture={this.onGotPicture} pictureInterval={1500} />
            </div>
        );
    }

}

export default DashboardScreen;
