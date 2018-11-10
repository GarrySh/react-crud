const API_URL = 'https://5be2706304cb600013a62006.mockapi.io/api/products';

export const getAllProducts = () => fetch(API_URL).then(res => res.json());

export const getProduct = id => fetch(`${API_URL}/${id}`).then(res => res.json());

export const createProduct = product =>
  fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(product),
  }).then(res => res.json());
