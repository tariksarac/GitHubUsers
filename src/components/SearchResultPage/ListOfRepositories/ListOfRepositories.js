import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from "./RepoItem/RepoItem";

const repositories = []
const ListOfRepositories = (props) => {
    return (
        <div>
            <div>Users Repositories</div>
            {repositories.map((item,index) => <RepoItem repo={item} key={index}/>)}
        </div>
    );
};

ListOfRepositories.propTypes = {};
ListOfRepositories.defaultProps = {};

export default ListOfRepositories;
