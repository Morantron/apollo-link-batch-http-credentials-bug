import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo'

import { ApolloClient } from 'apollo-client'
import { BatchHttpLink as HttpLink } from 'apollo-link-batch-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new HttpLink({ credentials: 'include' }),
  cache: new InMemoryCache(),
});

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
