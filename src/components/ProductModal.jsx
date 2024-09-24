// src/components/ProductModal.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedProduct } from '../store/productsSlice';

function ProductModal() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selectedProduct);

  if (!product) return null;

  const handleClose = () => {
    dispatch(clearSelectedProduct());
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-h-screen overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div className="w-full h-64 overflow-hidden rounded mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="mb-2">
          <strong>Description:</strong> {product.description}
        </p>
        <p className="mb-2">
          <strong>Price:</strong> ${product.price.toFixed(2)}
        </p>
        <p className="mb-4">
          <strong>Available Quantity:</strong> {product.availableQuantity}
        </p>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => alert('Add to Cart functionality not implemented.')}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductModal;
