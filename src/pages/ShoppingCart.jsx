import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  state = { cartItems: [] };

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Obtém o carrinho atual do localStorage ou cria um novo array vazio
    this.setState({ cartItems: cart }); // Atualiza o estado com os itens do carrinho
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        <h1>Carrinho de Compras</h1>
        { cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={ index }>
              <span data-testid="shopping-cart-product-name">{item.title}</span>
              <span>{`R$ ${item.price}`}</span>
              <span
                data-testid="shopping-cart-product-quantity"
              >
                {`Quantidade: ${item.quantity}`}
              </span>
            </div>
          ))
        ) : (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        )}
      </div>
    );
  }
}
