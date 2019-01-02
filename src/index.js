import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const link = createHttpLink({
    uri: GITHUB_BASE_URL,
    headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
        Accept: "application/vnd.github.starfire-preview+json"
    },

});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'),
);
serviceWorker.unregister();
