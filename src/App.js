import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Navi from './Components/Navi'

function App() {
  return (
    <>
      <Router>
        <Navi />
      </Router>
    </>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
