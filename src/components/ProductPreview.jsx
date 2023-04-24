import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductPreview extends React.Component {
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
          // inserir função de adicionar ao carrinho
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
