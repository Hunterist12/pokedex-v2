import React from 'react';
import Home from './components/Home'
import { ThemeProvider } from 'styled-components'
import defaulTheme from './theme'

function App() {
  return (
    <div>
      <ThemeProvider theme={defaulTheme} >
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
