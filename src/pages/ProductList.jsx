import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/index.js'; // ✅ this should work
import ProductCard from '../components/ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
