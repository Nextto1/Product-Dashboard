import axios from 'axios';

const BASE_URL = 'https://mock-data-josw.onrender.com';

// Get all products
export const fetchProducts = () => axios.get(`${BASE_URL}/products`);

// Get a single product
export const fetchProduct = (id) => axios.get(`${BASE_URL}/products/${id}`);

// Create a new product
export const createProduct = (product) => axios.post(`${BASE_URL}/products`, product);

// Update a product
export const updateProduct = (id, product) => axios.put(`${BASE_URL}/products/${id}`, product);

// Delete a product
export const deleteProduct = (id) => axios.delete(`${BASE_URL}/products/${id}`);

// Get categories
export const fetchCategories = () => axios.get(`${BASE_URL}/categories`);
