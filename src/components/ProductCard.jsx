import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-lg mb-2" />
      <h2 className="text-xl font-semibold">{product.title}</h2>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <div className="flex justify-between">
        <Link
          to={`/product/edit/${product.id}`}
          className="bg-yellow-400 text-white px-3 py-1 rounded-lg shadow hover:bg-yellow-500"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(product.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
