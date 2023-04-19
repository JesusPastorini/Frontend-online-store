import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Home from './components/Home';

// initial commit
// Jesus

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </div>
  );
}

export default App;
