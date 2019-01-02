import React from 'react';
import PropTypes from 'prop-types';
import './RepoItem.scss';
import { withRouter } from 'react-router-dom';

const RepoItem = ({
    repo: {
        name,
        stargazers: { totalCount: starTotalCount },
        watchers: { totalCount: watchersTotalCount },
    },
    history,
    selectedUser,
}) => {
    return (
        <div className={'RepoItem'} onClick={() => history.push(`${selectedUser}/${name}`)}>
            <div className={'repo-name'}>{name}</div>
            <div className={'repo-stars'}>{`${starTotalCount} Stars • ${watchersTotalCount} Watching`}</div>
        </div>
    );
};

RepoItem.propTypes = {
    repo: PropTypes.object,
    selectedUser: PropTypes.string,
};
RepoItem.defaultProps = {};

export default withRouter(RepoItem);
