import React, { Component } from 'react';

import Button from '../../components/Button';

class StartScreen extends Component {

    start = () => {

    }

    render() {
        const { onStart } = this.props;
        return (
            <div class={"empty" /* fullscreen flex centered */}>
                <Button onClick={ onStart }>
                    Start
                </Button>
            </div>
        );
    }

}

export default StartScreen;