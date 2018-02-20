import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class App extends Component {
  render() {
    if ((this.props.data || {}).loading) {
      return <span>Loading...</span>
    }

    return (
      <div style={{padding: 20}}>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

export default graphql(gql `
  query {
    hello
  }
`)(App);
