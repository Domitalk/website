import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Navi from './Components/Navi'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navi />
      </div>
    </Router>
  )
}

export default App;