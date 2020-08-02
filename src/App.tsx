import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// import { Container } from './styles';

import Routes from './routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
