import React, { Component } from 'react';

class Button extends Component {

    render() {
        const { onClick, label, style } = this.props;
        return (
            <a onClick={onClick}>
                <div style={ style }>
                    <span>{ label }</span>
                </div>
            </a>
        );
    }

}

export default Button;