import React from 'react';
import PropTypes from 'prop-types';

const ResultItem = (props) => {
    return (
        <div>
            <div className={'result-container'}>
                <div className={'result-name'}></div>
                <div className={'result-repositories'}>
                    <div className={'repo-number'}></div>
                    <div className={'repo-stars'}></div>
                </div>
            </div>
            <div className={'active-results'}></div>
        </div>
    );
};

ResultItem.propTypes = {};
ResultItem.defaultProps = {};

export default ResultItem;
