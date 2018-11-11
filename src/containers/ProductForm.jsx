import React, { Component } from 'react';

export default class ProductForm extends Component {
  state = {
    product: {
      title: '',
      description: '',
      price: '',
      quantity: 0,
      image: '',
    },
  };

  componentDidMount() {
    this.setState({ product: { ...this.props.product } });
  }

  handleValueChange = event => {
    const { name, value } = event.target;
    this.setState(state => ({
      product: {
        ...state.product,
        [name]: value,
      },
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormValid()) {
      this.props.onFormSubmit(this.state.product);
    }
  };

  isFormValid = () => {
    const { product } = this.state;
    const hasTitle = product.title.trim() !== '';
    const hasDescription = product.description.trim() !== '';
    const hasPrice = !isNaN(product.price) && Number(product.price) >= 0;
    const hasQuantity = !isNaN(product.quantity) && Number(product.quantity) >= 0;
    const hasImage = product.image.trim() !== '';
    return hasTitle && hasDescription && hasPrice && hasQuantity && hasImage;
  };

  render() {
    const { title, description, price, quantity, image } = this.state.product;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-row">
            Product title
            <input
              type="text"
              onChange={this.handleValueChange}
              className="form-control"
              name="title"
              id="title"
              value={title}
              placeholder="Enter product title"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-row">
            Product description
            <textarea
              className="form-control"
              onChange={this.handleValueChange}
              name="description"
              id="description"
              value={description}
              placeholder="Enter product description"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="price" className="form-row">
            Product price
            <input
              type="text"
              onChange={this.handleValueChange}
              className="form-control"
              name="price"
              id="price"
              value={price}
              placeholder="Enter product price"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="quantity" className="form-row">
            Product quantity
            <input
              type="number"
              onChange={this.handleValueChange}
              className="form-control"
              name="quantity"
              id="quantity"
              value={quantity}
              min="0"
              placeholder="Enter product quantity"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-row">
            Product image
            <input
              type="text"
              onChange={this.handleValueChange}
              className="form-control"
              name="image"
              id="image"
              value={image}
              placeholder="https://example.com/image.jpg"
              required
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
