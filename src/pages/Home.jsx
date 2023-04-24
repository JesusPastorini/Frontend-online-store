import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductPreview from '../components/ProductPreview';

class Home extends Component {
  state = {
    categories: [],
    produtos: [],
    pesquisa: '',
    listaCategorias: '',
    // visuaProd: false,
  };

  componentDidMount() {
    this.categoriesURL();
  }

  categoriesURL = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  };

  offChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    this.setState({ [name]: value }, () => { this.getProduct(); });
  };

  getProduct = async () => {
    const { pesquisa, listaCategorias } = this.state;
    const produtos = await getProductsFromCategoryAndQuery(listaCategorias, pesquisa);
    this.setState({ produtos: produtos.results });
  };

  onChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { categories } = this.state;
    const { produtos } = this.state;
    const categorias = categories.map(({ id, name }) => (
      <li key={ id }>
        <label htmlFor="category" data-testid="category">
          <input
            type="radio"
            name="listaCategorias"
            value={ id }
            id="category"
            onChange={ this.offChange }
          />
          { name }
        </label>
      </li>
    ));
    return (
      <main className="homepage-div">
        <Link to="/ShoppingCart" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
        <div>
          <button
            type="button"
            name="botao"
            data-testid="query-button"
            onClick={ this.getProduct }
          >
            Search
          </button>
          <span data-testid="home-initial-message">
            <input
              placeholder="pesquisar"
              name="pesquisa"
              type="text"
              data-testid="query-input"
              onChange={ this.onChange }
            />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
          <ul>
            { produtos.length > 0
              ? produtos.map((produto) => (
                <li data-testid="product" key={ produto.id }>
                  <ProductPreview product={ produto } />
                </li>
              )) : <span>Nenhum produto foi encontrado</span> }
          </ul>
        </div>
        <nav>
          { categorias }
        </nav>
      </main>
    );
  }
}
export default Home;
