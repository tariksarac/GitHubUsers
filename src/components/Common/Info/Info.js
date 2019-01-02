import React from 'react';
import PropTypes from 'prop-types';
import './Info.scss'

const Info = ({info}) => {
    return (
        <div className={'Info'}>{info}</div>
    );
};

Info.propTypes = {
    info: PropTypes.string
};
Info.defaultProps = {
    info: 'Please select'
};

export default Info;
