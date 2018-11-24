import React, { Component } from 'react';

const People = ({count}) => (
    <div className="columns">
        <div className="column is-half">👨‍🎓 {count}</div>
    </div>
   );
   
   export default People;