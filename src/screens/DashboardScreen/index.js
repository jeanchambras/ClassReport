import React, { Component } from 'react';

import VideoFeed from '../../components/VideoFeed';

class DashboardScreen extends Component {

    onGotPicture = (blob) => {
        console.log(blob);
    }

    render() {
        return (
            <div className="fullscreen">
                <p>This is the dashboard</p>
                <VideoFeed onGotPicture={this.onGotPicture} pictureInterval={2000} />
            </div>
        );
    }

}

export default DashboardScreen;