import React, { Component } from 'react';

class Button extends Component {

    render() {
        const { onClick, children, style } = this.props;
        return (
            <a onClick={ onClick } className="button is-white is-rounded is-outlined is-large">
                <div style={ style }>
                    { children }
                </div>
            </a>
        );
    }

}

export default Button;