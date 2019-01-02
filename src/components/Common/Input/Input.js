import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss'

const Input = ({value, onChange, type, name}) => {
    return (
        <input className={'Input'} value={value} onChange={onChange} type={type} name={name}/>
    );
};

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string
};
Input.defaultProps = {
    value: '',
    onChange: ()=>{},
    type: 'text',
    name: ''
};

export default Input;
