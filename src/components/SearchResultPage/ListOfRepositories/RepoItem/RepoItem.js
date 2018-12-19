import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = (props) => {
    return (
        <div>
            <div className={'repo-name'}></div>
            <div className={'repo-stars'}></div>
        </div>
    );
};

RepoItem.propTypes = {};
RepoItem.defaultProps = {};

export default RepoItem;
