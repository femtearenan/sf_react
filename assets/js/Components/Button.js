import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
    const { className, ...otherProps } = props;

    return (
        <button 
            className={`btn ${className}`}
            {...otherProps}
        >{props.children}</button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
};

Button.defaultProps = {
    className: ''
}