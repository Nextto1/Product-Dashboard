// src/components/ProductList.jsx
import React from 'react';
import useFetch from '../hooks/useFetch';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { data: products, loading, error } = useFetch('https://mock-data-josw.onrender.com/products');

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
