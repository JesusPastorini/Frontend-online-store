import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

// initial commit
// Jesus

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/ShoppingCart" component={ ShoppingCart } />
      </Switch>
    </div>
  );
}

export default App;
