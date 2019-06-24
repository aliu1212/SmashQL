import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient();
const ApolloApp = AppComponent => (
  <ApolloProvider client={ client }>
    <AppComponent client={ client }/>
  </ApolloProvider>
)

render(ApolloApp(App), document.getElementById('app'));