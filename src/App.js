import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Navi from './Components/Navi'
import Home from './Components/Home'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navi />
        <Home />
      </div>
    </Router>
  )
}

export default App;