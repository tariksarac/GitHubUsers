import React from 'react';
import PropTypes from 'prop-types';
import './FileItem.scss';
import { getDateTime } from '../../../utils/helper';

const FileItem = ({ file }) => {
    return (
        <div className={'FileItem'}>
            <div className={'title'}>{file.title}</div>
            <div className={'description'}>
                <div className={'name'}>
                    {file.number} opened {getDateTime(file.createdAt)} by {file.author.name}
                </div>
            </div>
        </div>
    );
};

FileItem.propTypes = {
    file: PropTypes.object,
};
FileItem.defaultProps = {};

export default FileItem;
