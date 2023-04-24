import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  state = { cartItems: [] };

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Obtém o carrinho atual do localStorage ou cria um novo array vazio
    this.setState({ cartItems: cart }); // Atualiza o estado com os itens do carrinho
  }

  QuantityChange = (index, newQuantity) => { // funçao que atualiza a quantidade de produto no carrinho
    const { cartItems } = this.state;
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = Math.max(newQuantity, 1);
    this.setState({ cartItems: newCartItems });
    localStorage.setItem('cart', JSON.stringify(newCartItems)); // salva no localstorage
  };

  RemoveProduct = (index) => { // funçao que remove o produto do carrinho
    const { cartItems } = this.state;
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    this.setState({ cartItems: newCartItems });
    localStorage.setItem('cart', JSON.stringify(newCartItems)); // salva no localstorage
  };

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

                <button // botao que diminui a quantidade
                  data-testid="product-decrease-quantity"
                  onClick={ () => this.QuantityChange(index, item.quantity - 1) }
                >
                  -
                </button>

                {item.quantity}

                <button // botao que aumenta a quantidade
                  data-testid="product-increase-quantity"
                  onClick={ () => this.QuantityChange(index, item.quantity + 1) }
                >
                  +
                </button>

                <button // botao que remove o produto do carrinho
                  data-testid="remove-product"
                  onClick={ () => this.RemoveProduct(index) }
                >
                  Remover
                </button>

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
