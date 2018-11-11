import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getProduct, updateProduct } from '../API';
import ProductForm from './ProductForm';

class EditProduct extends Component {
  state = {
    isLoading: true,
    product: {},
    isEditing: false,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getProduct(id).then(product => {
      this.setState({
        product,
        isLoading: false,
      });
    });
    console.log(id);
  }

  updateProduct = product => {
    this.setState({
      isEditing: true,
    });
    updateProduct(product.id, product).then(res => {
      this.props.history.push(`/products/${product.id}`);
    });
    console.log(product);
  };

  render() {
    if (this.state.isLoading) {
      return <h2> Loading ...</h2>;
    }
    if (this.state.isEditing) {
      return <h2> Editing ... </h2>;
    }
    return <ProductForm product={this.state.product} onFormSubmit={this.updateProduct} />;
  }
}

export default withRouter(EditProduct);
