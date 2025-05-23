import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

// Fetch all products
export const fetchProducts = () => {
  return axios.get(API_URL);
};

// Delete a product by ID
export const deleteProduct = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
