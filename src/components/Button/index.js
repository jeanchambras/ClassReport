import React, { Component } from 'react';

class Button extends Component {

    render() {
        const { onClick, children, style } = this.props;
        return (
            <a onClick={ onClick }>
                <div style={ style }>
                    { children }
                </div>
            </a>
        );
    }

}

export default Button;