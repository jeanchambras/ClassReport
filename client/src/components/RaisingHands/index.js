import React, { Component } from 'react';

const RaisingHands = ({ raisingHand, peopleCount }) => (raisingHand >= 1) && (
    <div className="columns is-multiline">
        <div className="column is-full  has-text-centered hand-emoji height-one-third">
            <span className="is-size-big is-spaced-down"> 🤚 </span>
        </div>
        <div className="column is-full has-text-centered height-one-third">
            <h2 className="big-font-title has-text-weight-bold">
                {raisingHand}
            </h2>
            <h3 className="is-size-3 offset-up ">
                { (peopleCount > 0) ? `${Math.round(raisingHand/peopleCount * 100)}%` : '' }
            </h3>
        </div>
    </div>
   );
   
   export default RaisingHands;