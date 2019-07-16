import React from 'react'
import Home from './components/Home'
import { ThemeProvider } from 'styled-components'
import defaulTheme from './theme'
import { ApolloProvider } from 'react-apollo'
import apolloClient from './data/client'

function App() {
  return (
    <div>
      <ApolloProvider client={apolloClient} >
        <ThemeProvider theme={defaulTheme} >
          <Home />
        </ThemeProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
