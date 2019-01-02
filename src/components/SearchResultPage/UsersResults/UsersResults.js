import React from 'react';
import PropTypes from 'prop-types';
import ResultItem from './ResultItem/ResultItem';
import './UserResults.scss';

const UsersResults = ({userResults, selectedUser, handleSelectUser}) => {
    return (
        <div className="UserResults">
            <div className={'title'}>GitHub Users</div>
            <div className={'users-list'}>
                {userResults.map(({node}, index) => (
                    <ResultItem
                        result={node}
                        key={index}
                        active={node.login === selectedUser}
                        handleSelectUser={handleSelectUser}
                    />
                ))}
            </div>
        </div>
    );
};

UsersResults.propTypes = {
    handleSelectUser: PropTypes.func,
    userResults: PropTypes.array,
    selectedUser: PropTypes.string,
};
UsersResults.defaultProps = {
    handleSelectUser: () => {},
    userResults:[],
    selectedUser: ''
};

export default UsersResults;

