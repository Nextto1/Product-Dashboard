import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
