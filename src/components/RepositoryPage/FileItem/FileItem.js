import React from 'react';
import PropTypes from 'prop-types';

const FileItem = (props) => {
    return (
        <div className={'FileItem'}>
            <div className={'name'}></div>
            <div className={'description'}></div>
        </div>
    );
};

FileItem.propTypes = {};
FileItem.defaultProps = {};

export default FileItem;
