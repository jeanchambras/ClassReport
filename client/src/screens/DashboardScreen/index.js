import React, { Component } from 'react';

import { processHands, processHeads } from '../../api';

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
                <p>This is the dashboard</p>
                { /* TODO: stop button (this.props.onStop) */ }
                <VideoFeed ref={ref => this.videoFeed = ref} onGotPicture={this.onGotPicture} pictureDelay={1000} />
            </div>
        );
    }

}

export default DashboardScreen;
