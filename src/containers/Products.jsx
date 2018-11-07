import React, { Component } from 'react';
import Product from '../components/Product';

export default class Products extends Component {
  state = {
    isLoading: true,
    products: [],
  };

  componentDidMount() {
    const API_URL = 'http://5be2706304cb600013a62006.mockapi.io/api/products';
    fetch(API_URL)
      .then(res => res.json())
      .then(products => {
        this.setState({
          products,
          isLoading: false,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Products page</h1>
        {this.state.isLoading ? (
          <h2>Loading products...</h2>
        ) : (
          <div className="row">
            {this.state.products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
