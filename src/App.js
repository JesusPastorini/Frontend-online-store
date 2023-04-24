import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/ShoppingCart" component={ ShoppingCart } />
        <Route path="/ProductDetails/:id" component={ ProductDetails } />
      </Switch>
    </div>
  );
}

export default App;
