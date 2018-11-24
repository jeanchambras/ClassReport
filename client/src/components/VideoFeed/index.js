import React, { Component } from 'react';

const supported = 'mediaDevices' in navigator;
if (!supported)
    alert(`Your browser doesn't support WebRTC. Please upgrade to a newer version.`);

const constraints = {
    audio: false,
    video: {
        width: {
            min: 1280,
            ideal: 3840,
            max: 3840
        },
        height: {
            min: 720,
            ideal: 2160,
            max: 2160
        }
    }
};

const getVideo = () => navigator.mediaDevices.getUserMedia(constraints);

/**
 * props:
 * - pictureInterval: in ms
 * - onGotPicture: (blob) => ()
 */
class VideoFeed extends Component {
    state = {
        hasStream: false
    };

    captureDevice = null;
    timer = null;

    componentDidMount() {
        this.requestStream();
    }

    requestStream = () => {
        getVideo().then(this.onStreamSuccess).catch(this.onStreamError);
    }

    /**
     * Stream was successfully retrieved
     */
    onStreamSuccess = (stream) => {
        this.stream = stream;

        const track = stream.getVideoTracks()[0];
        this.captureDevice = new ImageCapture(track);

        this.startTimer();

        this.setState({ hasStream: true });
    }

    /**
     * An error has occurred during request (e.g. user refused)
     */
    onStreamError = (error) => {
        alert(`An error has occurred while retrieving the video stream.`);
        console.error(error);
    }

    takePicture = () => {
        this.captureDevice.takePhoto().then(this.props.onGotPicture).catch(this.onTakePictureError);
    }

    onTakePictureError = (error) => {
        console.error(error);
    }

    startTimer = () => {
        const { pictureInterval } = this.props;
        if (pictureInterval) {
            this.takePicture();
            this.timer = setInterval(this.takePicture, pictureInterval);
        }
    }

    render() {
        const { hasStream } = this.state;
        const { stream } = this;
        return (
            <div className={"fullscreen" /* TODO: video container styling */}>
                <VideoObject
                    stream={hasStream && stream}
                />
            </div>
        );
    }

}

const VideoObject = ({ stream }) => {
    return stream ? (
        <video
            className={"fullscreen" /* TODO: video styling */}
            src={window.URL.createObjectURL(stream)}
            autoPlay
        />
    ) : null;
}

export default VideoFeed;