import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.scss'

const TextArea = ({value, onChange, name}) => {
    return (
        <textarea className={'TextArea'} value={value} onChange={onChange} name={name}></textarea>
    );
};

TextArea.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string
};
TextArea.defaultProps = {
    value: '',
    onChange: ()=>{},
    name: ''
};

export default TextArea;
