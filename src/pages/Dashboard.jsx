// src/pages/Dashboard.jsx
import React from 'react';
import ProductList from '../components/ProductList';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Product Dashboard</h1>
      <ProductList />
    </div>
  );
};

export default Dashboard;
