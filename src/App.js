import './css/App.css';
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import Intro from './contents/Intro';
import About from './contents/About';
import SkillsEdu from './contents/SkillsEdu';
import Experience from './contents/Experience';
import Projects from './contents/Projects';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Route exact path="/">
          <Intro></Intro>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/skillsedu">
          <SkillsEdu></SkillsEdu>
        </Route>
        <Route path="/experience">
          <Experience></Experience>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
      </div>
    </Router>
  );
};

export default App;
