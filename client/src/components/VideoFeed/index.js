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

        this.setState({ hasStream: true, streamUrl: window.URL.createObjectURL(stream) });
    }

    /**
     * An error has occurred during request (e.g. user refused)
     */
    onStreamError = (error) => {
        alert(`An error has occurred while retrieving the video stream.`);
        console.error(error);
    }

    takePicture = () => {
        this.captureDevice.grabFrame()
        .then(this.props.onGotPicture)
        .catch(err => {
            this.onTakePictureError();
            this.startTimer();
        });
    }

    onTakePictureError = (error) => {
        console.error(error);
    }

    startTimer = () => {
        const { pictureDelay } = this.props;
        if (pictureDelay) {
            this.timer = setTimeout(this.takePicture, pictureDelay);
        }
    }

    render() {
        const { hasStream, streamUrl } = this.state;
        return (
            <div className={"fullscreen video-container" /* TODO: video container styling */}>
                <VideoObject
                    streamUrl={hasStream && streamUrl}
                />
            </div>
        );
    }

}

const VideoObject = ({ streamUrl }) => {
    return streamUrl ? (
        <video
            className={"fullscreen"}
            style={{height: 'auto'}}
            src={streamUrl}
            autoPlay
        />
    ) : null;
}

export default VideoFeed;