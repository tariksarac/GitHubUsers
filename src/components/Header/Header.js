import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '../Common/Button/Button';

class Header extends Component {
    static defaultProps = {};

    static propTypes = {
        searchGitHubUser: PropTypes.func,
    };

    state = {
        searchValue: '',
    };

    onSearchChange = searchValue => this.setState({ searchValue });

    goHome = () => {
        if (this.props.location.path !== '/') {
            this.props.history.push('/');
        }
    };

    onKeyDown = event => {
        if (event.which === 13) {
            event.preventDefault();
            this.props.searchGitHubUser(this.state.searchValue);
            this.goHome();
        }
    };

    render() {
        let { searchValue } = this.state;
        let { searchGitHubUser } = this.props;
        return (
            <header className="App-header">
                <div
                    className={'logo'}
                    onClick={() => {
                        this.goHome();
                        searchGitHubUser('');
                    }}>
                    GitHubUsers
                </div>
                <input
                    placeholder={'Type user name'}
                    value={searchValue}
                    onChange={e => this.onSearchChange(e.target.value)}
                    onKeyDown={this.onKeyDown}
                />
                <Button
                    buttonText={'Search GitHub Users'}
                    onClick={() => {
                        searchGitHubUser(searchValue);
                        this.goHome();
                    }}
                />
            </header>
        );
    }
}

export default withRouter(Header);
