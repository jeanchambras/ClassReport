import React, { Component } from 'react';
import RaisingHands from "../People"
class DashBar extends Component {

    render() {
        const { peopleCount, raisingHand, active, children, style } = this.props;
        return active && (
            <div className="container right bg-opacity has-text-white">
                    <div className="columns is-multiline">
                        <div className="column is-full is-size-1 has-text-centered is-spaced-down">
                            <p>👨‍🎓 {peopleCount}</p>
                        </div>
                        <div className="column">
                            <RaisingHands raisingHand={raisingHand} peopleCount={peopleCount}/>
                        </div>
                        
                    </div>
                </div>
        );
    }

}

export default DashBar;