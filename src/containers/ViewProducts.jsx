import React, { Component } from 'react';
import { getProduct } from '../API';
import Product from '../components/Product';

export default class ViewProducts extends Component {
  state = {
    isLoading: true,
    product: {},
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getProduct(id).then(product =>
      this.setState({
        isLoading: false,
        product,
      }),
    );
  }

  render() {
    const { isLoading, product } = this.state;
    return isLoading ? (
      <h2>Loading product...</h2>
    ) : (
      <Product product={product} cols="col-12" showEdit />
    );
  }
}
