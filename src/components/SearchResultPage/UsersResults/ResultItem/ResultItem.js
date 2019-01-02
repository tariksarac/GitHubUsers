import React from 'react';
import PropTypes from 'prop-types';
import './ResultItem.scss';

const ResultItem = ({
    handleSelectUser,
    active,
    result: {
        login,
        name,
        repositories: { totalCount: repositoriesCount },
        starredRepositories: { totalCount: starredRepositoriesCount },
    },
}) => {
    return (
        <div className={'ResultItem'} onClick={() => handleSelectUser(login)}>
            <div className={'result-container'}>
                <div className={'result-name'}>{name}</div>
                <div className={'result-repositories'}>
                    <div className={'repo-number'}>{`${repositoriesCount} Repositories `}</div>
                    <div className={'repo-stars'}>{` • ${starredRepositoriesCount} Stars`}</div>
                </div>
            </div>
            {active && <div className={'active-results'} />}
        </div>
    );
};

ResultItem.propTypes = {
    active: PropTypes.bool,
    result: PropTypes.object,
};
ResultItem.defaultProps = {
    active: false,
};

export default ResultItem;
