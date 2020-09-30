import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Navi from './Components/Navi';
import Home from './Components/Home';
import About from './Components/About';
import CardsContainer from './Containers/CardsContainer';
import projectData from './fillData/projectData.js';
import blogData from './fillData/blogData.js';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navi />
        <Home />
        <About />
        <CardsContainer arrayData={projectData} header={"Projects"} />
        <CardsContainer arrayData={blogData} header={"Blogs"}/>
      </div>
    </Router>
  )
}

export default App;