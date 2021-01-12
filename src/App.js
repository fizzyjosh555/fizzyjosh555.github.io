import './css/App.css';
import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

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
        <Switch>
          <Route exact path="/" component={Intro}></Route>
          <Route exact path="/about"component={About}></Route>
          <Route exact path="/skillsedu" component={SkillsEdu}></Route>
          <Route exact path="/experience" component={Experience}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route><Redirect from='*' to='/'/></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
