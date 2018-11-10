import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { createProduct } from '../API';

class CreateProduct extends Component {
  state = {
    product: {
      title: '',
      description: '',
      price: '',
      quantity: 0,
      image: '',
    },
    creating: false,
  };

  createProduct = product => {
    console.log('form submitted', product);
    this.setState({ creating: true });
    createProduct(product).then(result => {
      this.props.history.push(`/products/${result.id}`);
    });
  };

  render() {
    return (
      <div className="container mt-3">
        <h1>Create new product</h1>
        <ProductForm product={this.state.product} onFormSubmit={this.createProduct} />
      </div>
    );
  }
}

export default withRouter(CreateProduct);
