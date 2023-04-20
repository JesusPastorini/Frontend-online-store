import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  state = { produtos: [], pesquisa: '', visuaProd: false };

  onChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  getProduct = async () => {
    const { pesquisa } = this.state;
    const produtos = await getProductsFromCategoryAndQuery(' ', pesquisa);
    const { results } = produtos;
    this.setState({ produtos: results, pesquisa, visuaProd: true });
    console.log(results);
  };

  render() {
    const { produtos, visuaProd } = this.state;
    return (

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
          Pesquisar
        </button>
        {
          !visuaProd ? (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          ) : (
            <div>
              {produtos.length > 0 ? (
                produtos.map((prod) => (
                  <div data-testid="product" key={ prod.id }>
                    <h2>{ prod.title }</h2>
                    <img src={ prod.thumbnail } alt={ prod.title } />
                    <p>{ `R$ ${prod.price}` }</p>
                  </div>
                ))) : (<span>Nenhum produto foi encontrado</span>)}
            </div>)
        }
        <div>
          <div>
            <Link to="/ShoppingCart" data-testid="shopping-cart-button">
              search
            </Link>
          </div>
          <Categories />
        </div>
      </div>
    );
  }
}

export default Home;
