import React from 'react';
import PropTypes from 'prop-types';
import UsersResults from './UsersResults/UsersResults';
import ListOfRepositories from "./ListOfRepositories/ListOfRepositories";
import ReactPaginate from 'react-paginate';

class SearchResultPage extends React.Component {
    static defaultProps = {};

    static propTypes = {
        perPage:10
    };

    state = {};

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);

        this.setState({offset: offset}, () => {
            // this.loadCommentsFromServer();
        });
    };

    render() {
        return (
            <div>
                <UsersResults />
                <ListOfRepositories/>
                <ReactPaginate previousLabel={"previous"}
                               nextLabel={"next"}
                               breakLabel={"..."}
                               breakClassName={"break-me"}
                               pageCount={this.state.pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination"}
                               subContainerClassName={"pages pagination"}
                               activeClassName={"active"} />
            </div>
        );
    }
}

export default SearchResultPage;

