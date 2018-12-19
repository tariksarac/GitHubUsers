import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import SearchResultPage from "./components/SearchResultPage/SearchResultPage";
import RepositoryPage from "./components/RepositoryPage/RepositoryPage";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <header className="App-header">
                            <input />
                            <button />
                        </header>

                        <Route exact path="/" component={SearchResultPage} />
                        <Route path="/repo/:name" component={RepositoryPage} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
