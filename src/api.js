// src/api.js

import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

// Fetch all products
export const getProducts = () => axios.get(API_URL);

// Delete a product by ID
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);

// Create a product
export const createProduct = (product) => axios.post(API_URL, product);

// Update a product
export const updateProduct = (id, product) => axios.put(`${API_URL}/${id}`, product);
