const API_URL = 'https://5be2706304cb600013a62006.mockapi.io/api/products';

export const getAllProducts = () => fetch(API_URL).then(res => res.json());

export const getProduct = id => fetch(`${API_URL}/${id}`).then(res => res.json());
