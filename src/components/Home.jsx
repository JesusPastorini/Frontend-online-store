import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        Home
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            search
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
