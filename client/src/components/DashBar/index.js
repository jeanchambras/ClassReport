import React, { Component } from 'react';
import People from "../../components/People"
class DashBar extends Component {

    render() {
        const { peopleCount, raisingHand, children, style } = this.props;
        return (
            <div className="container right bg-opacity has-text-white">
                    <div className="columns is-multiline">
                        <div className="column is-full is-size-1 has-text-centered is-spaced-down">
                            <p>👨‍🎓 {peopleCount}</p>
                        </div>
                        <div className="column is-full  has-text-centered emoji height-one-third">
                       <span className="is-size-big is-spaced-down">
                        🤚 
                        </span>
                        </div>
                        <div className="column is-full has-text-centered height-one-third">
                            <h2 className="big-font-title has-text-weight-bold">
                                {raisingHand}
                            </h2>
                            <h3 className="is-size-3 offset-up ">
                                {raisingHand/peopleCount}%
                            </h3>
                        </div>
                    </div>
                </div>
        );
    }

}

export default DashBar;