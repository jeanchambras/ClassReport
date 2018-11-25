import React, { Component } from 'react';

import FacebookEmoji from 'react-facebook-emoji';

class FullscreenEmotion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.emotion ? true : false
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.emotion !== prevProps.emotion) {
            this.setState({ active: true });
            setTimeout(() => this.setState({ active: false }), 3000);
        }
    }

    emojiFromEmotion = (emotion) => {
        switch (emotion) {
            case "anger": return "angry"
            case "contempt": return "wow"
            case "disgust": return "angry" // FIXME: disgust is not angry
            case "fear": return "sad"
            case "happiness": return "yay"
            case "neutral": return null
            case "sadness": return "sad"
            case "surprise": return "wow"
        }
    }

    render() {
        const { emotion } = this.props;
        const { active } = this.state;
        const emoji = this.emojiFromEmotion(emotion);
        return (
            <div className="fullscreen-overlay-center" style={{ zIndex: 10 }}>
                <div className={`emoji ${active && 'active'}`}>
                    { emoji && <FacebookEmoji type={emoji} size="xxl" /> }
                </div>
            </div>
        );
    }

}

export default FullscreenEmotion;