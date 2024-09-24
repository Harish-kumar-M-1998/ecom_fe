// src/components/CategoryFilter.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../store/productsSlice';

const categories = ['All', 'Electronics', 'Clothing', 'Home Appliances'];

function CategoryFilter() {
  const dispatch = useDispatch();
  const category = useSelector(state => state.products.category);

  const handleChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  return (
    <select
      value={category}
      onChange={handleChange}
      className="w-full md:w-1/4 p-2 border border-gray-300 rounded mt-2 md:mt-0"
    >
      {categories.map(cat => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  );
}

export default CategoryFilter;
