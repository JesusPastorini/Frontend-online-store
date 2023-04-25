import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

export default class ProductDetails extends Component {
  state = {
    produto: ' ',
  };

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const produto = await getProductById(id);

    this.setState({ produto });
  }

  handleAddToCart = () => {
    const { produto } = this.state;
    const quantity = 1; // Quantidade desejada do produto (pode ser ajustada)
  
    // Obtém o carrinho do local storage (se existir)
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Adiciona o produto ao carrinho
    cart.push({ ...produto, quantity });
  
    // Salva o carrinho atualizado no local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  render() {
    const { produto } = this.state;

    return (
      <main>
        <h1>Detalhes do Produto</h1>
        <section>
          <img
            data-testid="product-detail-image"
            src={ produto.thumbnail }
            alt={ produto.title }
          />
          <div>
            <p data-testid="product-detail-name">
              { produto.title }
            </p>
            <p data-testid="product-detail-price">
              R$
              {' '}
              {produto.price}
            </p>
          </div>
          <button
  data-testid="product-detail-add-to-cart"
  onClick={this.handleAddToCart}
>
  Adicionar ao Carrinho
</button>
<Link to="/ShoppingCart" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
        </section>
      </main>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
