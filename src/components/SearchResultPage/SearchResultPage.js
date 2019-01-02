import React from 'react';
import PropTypes from 'prop-types';
import UsersResults from './UsersResults/UsersResults';
import RepositoriesList from './RepositoriesList/RepositoriesList';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Info from '../Common/Info/Info';
import ArtlandLoader from '../Common/ArtlandLoader/ArtlandLoader';

const USER_QUERY = gql`
    query SearchGitHubUser($term: String!) {
        search(query: $term, first: 20, type: USER) {
            userCount
            pageInfo {
                endCursor
                hasNextPage
            }
            edges {
                node {
                    ... on User {
                        login
                        name
                        repositories(first: 50, isFork: false) {
                            totalCount
                            edges {
                                node {
                                    name
                                    stargazers {
                                        totalCount
                                    }
                                    watchers {
                                        totalCount
                                    }
                                }
                            }

                            totalCount
                        }
                        starredRepositories {
                            totalCount
                        }
                        __typename
                    }
                }
            }
        }
    }
`;

class SearchResultPage extends React.Component {
    static defaultProps = {
        searchTerm: '',
    };

    static propTypes = {
        searchTerm: PropTypes.string,
    };

    state = {
        selectedUser: '',
    };

    handleSelectUser = userId => {
        this.setState({ selectedUser: userId });
    };

    render() {
        let { searchTerm } = this.props;

        let { selectedUser } = this.state;
        return (
            <Query query={USER_QUERY} variables={{ term: searchTerm }} fetchPolicy={'cache-and-network'}>
                {({ loading, error, data }) => {
                    if (loading) return <ArtlandLoader />;
                    if (error) return <Info info={'Ooops something went wrong'} />;
                    let {
                        search: { edges },
                    } = data;

                    if (edges && edges.length === 0) {
                        return <Info info={'Please search users!'} />;
                    }

                    return (
                        <div>
                            <UsersResults
                                userResults={edges}
                                handleSelectUser={this.handleSelectUser}
                                selectedUser={selectedUser}
                            />
                            {selectedUser ? (
                                <RepositoriesList listOfRepositories={edges} selectedUser={selectedUser} />
                            ) : (
                                <Info info={'Please select user'} />
                            )}
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default SearchResultPage;
