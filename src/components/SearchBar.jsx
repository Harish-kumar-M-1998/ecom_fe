// src/components/SearchBar.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../store/productsSlice';

function SearchBar() {
  const dispatch = useDispatch();
  const search = useSelector(state => state.products.search);

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <input
      type="text"
      value={search}
      onChange={handleChange}
      placeholder="Search products..."
      className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
    />
  );
}

export default SearchBar;
