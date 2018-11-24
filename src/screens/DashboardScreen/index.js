import React, { Component } from 'react';

import getHeads from '../../api/heads';

import VideoFeed from '../../components/VideoFeed';

class DashboardScreen extends Component {

    onGotPicture = (blob) => {
        getHeads(blob).then(console.log).catch(console.error);
    }

    render() {
        return (
            <div className="fullscreen">
                <p>This is the dashboard</p>
                <VideoFeed onGotPicture={this.onGotPicture} pictureInterval={3000} />
            </div>
        );
    }

}

export default DashboardScreen;