import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

const Pagination = ({ onPageChange, startCursor, hasNextPage, hasPreviousPage, endCursor }) => {
    return (
        <div className={'Pagination'}>
            <div
                className={'next-prev'}
                style={{ opacity: hasPreviousPage && '1' }}
                onClick={() => hasPreviousPage && onPageChange(null, startCursor)}>
                Prev
            </div>
            <div
                className={'next-prev'}
                style={{ opacity: hasNextPage && '1' }}
                onClick={() => hasNextPage && onPageChange(endCursor, null)}>
                Next
            </div>
        </div>
    );
};

Pagination.propTypes = {
    onPageChange: PropTypes.func,
    startCursor: PropTypes.string,
    endCursor: PropTypes.string,
    hasNextPage: PropTypes.bool,
    hasPreviousPage: PropTypes.bool,
};
Pagination.defaultProps = {
    onPageChange: () => {},
};

export default Pagination;
