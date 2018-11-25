import React, { Component } from 'react';

import { processHands, processHeads } from '../../api';

import FullscreenEmotion from '../../components/FullscreenEmotion';
import DashBar from '../../components/DashBar';
import VideoFeed from '../../components/VideoFeed';
import Timer from '../../components/Timer'

const getMaxEmotion = (emotions) => {
    let maxEmotion = null;
    for (const emotionName in emotions) {
        if (!maxEmotion || emotions[maxEmotion] < emotions[emotionName]) {
            maxEmotion = emotionName;
        }
    }
    return maxEmotion;
}

class DashboardScreen extends Component {

    state = {
        data: {}
    };

    canvas = null;

    onGotPicture = (imageBitmap) => {
        const { onGotNewData } = this.props;

        return new Promise(res => {
            if (!this.canvas) {
                this.canvas = document.createElement('canvas');
            }
            const canvas = this.canvas;
            let w = imageBitmap.width;
		    let h = imageBitmap.height;
            canvas.width = w;
            canvas.height = h;
            let ctx = canvas.getContext("2d");
            ctx.drawImage(imageBitmap, 0, 0);
            canvas.toBlob(res, 'image/jpeg');
        })
        .then(blob => {
            return Promise.all([
                processHands(blob),
                processHeads(blob)
            ]);
        })
        .then(([hands, heads]) => {
            const data = { hands, heads };
            onGotNewData(data);
            this.videoFeed.startTimer();

            this.setState({
                data,
                emotion: getMaxEmotion(heads.emotions)
            });
        })
        .catch(console.error);
    }

    render() {
        const { data } = this.state;
        return (
            <div className="main">
                <div className="container left">
                    <Timer onStop={ this.props.onStop } />
                </div>
                <FullscreenEmotion
                    emotion={ this.state.emotion }
                />
                <VideoFeed
                    ref={ref => this.videoFeed = ref}
                    onGotPicture={this.onGotPicture}
                    pictureDelay={500}
                />
                <DashBar
                    active={ data.hands ? true : false }
                    peopleCount={ data.hands && data.heads.count}
                    raisingHand={ data.hands && data.hands.count }
                />
            </div>
        );
    }

}

export default DashboardScreen;
