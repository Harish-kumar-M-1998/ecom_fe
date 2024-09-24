import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

function ProductGrid() {
  const { items, status, error } = useSelector(state => state.products);

  if (status === 'loading') {
    return <p className="text-center">Loading products...</p>;
  }

  if (status === 'failed') {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (items.length === 0) {
    return <p className="text-center">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {items.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
