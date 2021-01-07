import './css/App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import Intro from './contents/Intro';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Route exact path="/">
          <Intro></Intro>
        </Route>
      </div>
    </Router>
  );
};

export default App;
