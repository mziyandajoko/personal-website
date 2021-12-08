import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './app.css'
import { ThemeProvider } from 'styled-components'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

const theme = {
  color: {
    white: '#ffff',
    red: 'red',
    peach: '#FDEBD3',
  },
  font: {
    medium:'20px',
  }

}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
    </ThemeProvider>
  )
}

export default App
