import React from 'react';
import { Router, Route, useHistory } from 'react-router-dom'
import './App.css';

import Home from './pages/Home'
import Results from './pages/PlagiarismResults'

function App() {
  const history = useHistory();
  return (
    <div className="App">
        <Router history={history}>
          <Route exact path="/plagiarism-results" component={Results}/>
          <Route exact path="/" component={Home}/>
        </Router>
    </div>
  );
}

export default App;
