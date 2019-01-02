import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import SearchResultPage from './components/SearchResultPage/SearchResultPage';
import RepositoryPage from './components/RepositoryPage/RepositoryPage';
import Header from './components/Header/Header';

class App extends Component {
    state = {
        searchTerm: '',
    };

    searchGitHubUser = searchTerm => {
        this.setState({ searchTerm });

    };

    render() {
        let { searchTerm } = this.state;

        return (
            <div className="App">
                <Router>
                    <div>
                        <Header searchGitHubUser={this.searchGitHubUser} />
                        <main>
                            <Route
                                exact
                                path="/"
                                component={() => <SearchResultPage searchTerm={searchTerm} />}
                            />
                            <Route path="/:user/:repoName" component={()=> <RepositoryPage/>} />
                        </main>
                    </div>

                </Router>
            </div>
        );
    }
}

export default App;
