import React, { Component } from 'react';
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
