import React, { Component } from 'react';

import { processHands, processHeads } from '../../api';

import FullscreenEmotion from '../../components/FullscreenEmotion';
import DashBar from '../../components/DashBar';
import VideoFeed from '../../components/VideoFeed';

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

    onGotPicture = (blob) => {
        const { onGotNewData } = this.props;

        Promise.all([
            processHands(blob),
            processHeads(blob)
        ])
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
            <div className="fullscreen">
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
                    peopleCount={ data.hands && data.hands.skeletonCount }
                    raisingHand={ data.hands && data.hands.count }
                />
            </div>
        );
    }

}

export default DashboardScreen;
