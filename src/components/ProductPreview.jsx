import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductPreview extends React.Component {
  addShop = (title, thumbnail, price) => {
    const cartItem = { title, thumbnail, price, quantity: 1 }; // Adiciona o produto com quantidade inicial 1
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Obtém o carrinho atual do localStorage ou cria um novo array vazio
    cart.push(cartItem); // Adiciona o item ao carrinho
    localStorage.setItem('cart', JSON.stringify(cart)); // Salva o carrinho atualizado no localStorage
  };

  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;

    return (
      <div>
        <Link
          data-testid="product-detail-link"
          to={ `/productdetails/${product.id}` }
        >
          <span>{title}</span>
          <img src={ thumbnail } alt={ `Imagem do ${title}` } />
          <span>{`R$ ${price}`}</span>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => this.addShop(title, thumbnail, price) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductPreview.propTypes = {
  product: propTypes.shape({
    price: propTypes.number,
    title: propTypes.string,
    thumbnail: propTypes.string,
    id: propTypes.string,
  }).isRequired,
};

export default ProductPreview;
