import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './store/productsSlice';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import "./App.css"

function App() {
  const dispatch = useDispatch();
  const { search, category } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ search, category }));
  }, [dispatch, search, category]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">ECommerce Landing Page</h1>
      

      {/* Center search and category filter */}
      <div className="flex flex-col items-center justify-center mb-6 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <SearchBar />
        <CategoryFilter />
      </div>

      {/* Product Grid */}
      <ProductGrid />

      {/* Product Modal */}
      <ProductModal />
    </div>
  );
}

export default App;
