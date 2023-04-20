import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  state = { produtos: [], pesquisa: '', };

  componentDidMount() {
    this.getProduct();
  }

  onChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  getProduct = async () => {
    const { pesquisa } = this.state;
    const produtos = await getProductsFromCategoryAndQuery(' ', pesquisa);
    this.setState({ produtos });
    
  };

  render() {
    const { produtos } = this.state;
    return (

      <div>
        <div>
          <input
            placeholder="pesquisar"
            type="text"
            name="pesquisa"
            data-testid="query-input"
            onChange={ this.onChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.getProduct }
          >
            pesquisar
          </button>

        </div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            search
          </Link>
        </div>
        <Categories />
      </div>
    );
  }
}

export default Home;
