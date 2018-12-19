import React from 'react';
import PropTypes from 'prop-types';
import ResultItem from "./ResultItem/ResultItem";

const userResults = []


const UsersResults = (props) => {
    return (
        <div>
            <div>Users</div>
            <div>
                {userResults.map((item,index) => <ResultItem result={item} key={index}/>)}
            </div>
        </div>
    );
};

UsersResults.propTypes = {};
UsersResults.defaultProps = {};

export default UsersResults;
