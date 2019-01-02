import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss'

const Button = ({buttonText, onClick, style}) => {
    return (
        <button style={style} className={'Button'} onClick={onClick}>{buttonText}</button>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string,
    onClick: PropTypes.func
};
Button.defaultProps = {
    buttonText: 'Enter button text',
    onClick: ()=>{}
};

export default Button;
