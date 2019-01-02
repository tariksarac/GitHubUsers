import React from 'react';
import FileItem from './FileItem/FileItem';
import Modal from 'react-modal';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import './RepositoryPage.scss';
import { withRouter } from 'react-router-dom';
import ModalContent from './Modal/ModalContent';
import { customStyles } from '../../utils/constants';
import Info from '../Common/Info/Info';
import Button from '../Common/Button/Button';
import ArtlandLoader from '../Common/ArtlandLoader/ArtlandLoader';

const GET_REPO = gql`
    query GetRepositoryData($user: String!, $repoName: String!) {
        repository(owner: $user, name: $repoName) {
            id
            assignableUsers(first: 50) {
                nodes {
                    id
                }
            }
            labels(first: 50) {
                nodes {
                    id
                }
            }
            projects(first: 50) {
                nodes {
                    id
                }
            }
            stargazers {
                totalCount
            }
            watchers {
                totalCount
            }
            name
            issues(first: 50, states: OPEN) {
                totalCount
                edges {
                    node {
                        title
                        number
                        createdAt
                        author {
                            login
                            ... on User {
                                name
                            }
                        }
                    }
                }
            }

            object(expression: "master:README.md") {
                id
                ... on Blob {
                    text
                }
            }
        }
    }
`;

const CREATE_ISSUE = gql`
    mutation AddIssue($input: CreateIssueInput!) {
        createIssue(input: $input) {
            clientMutationId
            issue {
                body
            }
        }
    }
`;

class RepositoryPage extends React.Component {

    state = {
        modalIsOpen: false,
        title: '',
        body: '',
    };

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleAddIssue = async mutate => {
        const { data, error } = await mutate();
        if (data) {
        }
        if (error) {
            this.setState({ error: error });
        }
        this.closeModal();
    };

    render() {
        let { params } = this.props.match;
        let { title, body } = this.state;

        return (
            <Query query={GET_REPO} variables={{ ...params }}>
                {({ loading, error, data }) => {
                    if (loading) return <ArtlandLoader />;
                    if (error) return <Info info={'Ooops something went wrong'} />;

                    let {
                        repository: {
                            assignableUsers: { nodes: assignableUsers },
                            labels: { nodes: labels },
                            projects: { nodes: projects },
                            name,
                            id,
                            stargazers: { totalCount: stargazersTotalCount },
                            watchers: { totalCount: watchersTotalCount },
                            issues: { edges },
                        },
                    } = data;

                    let ownerLogin = `${params.user} / ${name}`;
                    return (
                        <div>
                            <div className={'repo-heading'}>
                                <div className={'repo-title-name'}>{ownerLogin}</div>
                                <div className={'repo-title-stars'}>
                                    {stargazersTotalCount} Stars • {watchersTotalCount} Watching
                                </div>
                            </div>
                            <div className={'repo-title'}>
                                <div className={'issues'}>Open Issues</div>
                                <Button onClick={this.openModal} buttonText={'Create Issue'} />
                            </div>
                            {edges.map((item, index) => <FileItem file={item.node} key={index} />)}
                            <Modal
                                isOpen={this.state.modalIsOpen}
                                onRequestClose={this.closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                                ariaHideApp={false}>
                                <Mutation
                                    refetchQueries={[
                                        {
                                            query: GET_REPO,
                                            variables: { ...params },
                                        },
                                    ]}
                                    awaitRefetchQueries
                                    mutation={CREATE_ISSUE}
                                    variables={{
                                        input: {
                                            assigneeIds: assignableUsers.reduce((total, amount) => {
                                                total.push(amount.id);
                                                return total;
                                            }, []),
                                            labelIds: labels.reduce((total, amount) => {
                                                total.push(amount.id);
                                                return total;
                                            }, []),
                                            projectIds: projects.reduce((total, amount) => {
                                                total.push(amount.id);
                                                return total;
                                            }, []),
                                            repositoryId: id,
                                            title: title,
                                            body: title,
                                        },
                                    }}
                                    update={(cache, { data: { AddIssue } }) => {
                                        const { createIssue } = cache.readQuery({ query: CREATE_ISSUE });
                                        debugger;
                                        cache.writeQuery({
                                            query: CREATE_ISSUE,
                                            data: { createIssue: createIssue.concat([AddIssue]) },
                                            variables: {
                                                input: {
                                                    assigneeIds: assignableUsers.reduce((total, amount) => {
                                                        total.push(amount.id);
                                                        return total;
                                                    }, []),
                                                    labelIds: labels.reduce((total, amount) => {
                                                        total.push(amount.id);
                                                        return total;
                                                    }, []),
                                                    projectIds: projects.reduce((total, amount) => {
                                                        total.push(amount.id);
                                                        return total;
                                                    }, []),
                                                    repositoryId: id,
                                                    title: title,
                                                    body: title,
                                                },
                                            },
                                        });
                                    }}>
                                    {(AddIssue, { data, error }) => (
                                        <ModalContent
                                            AddIssue={() => this.handleAddIssue(AddIssue)}
                                            handleChange={this.handleChange}
                                            title={title}
                                            body={body}
                                            closeModal={this.closeModal}
                                        />
                                    )}
                                </Mutation>
                            </Modal>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default withRouter(RepositoryPage);
