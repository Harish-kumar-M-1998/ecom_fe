import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../store/productsSlice'; // Action to set the selected product

function ProductCard({ product }) {
    const dispatch = useDispatch();
    const [isHovered, setIsHovered] = useState(false);

    const handleProductClick = () => {
        dispatch(setSelectedProduct(product)); // Set the selected product in Redux store
    };

    return (
        <div
            className={`bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 ease-in-out transform ${isHovered ? 'scale-105' : 'scale-100'
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleProductClick} // Open the modal on click
        >
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-105"
            />

            <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600 mt-2">${product.price}</p>
            </div>
        </div>
    );
}

export default ProductCard;
