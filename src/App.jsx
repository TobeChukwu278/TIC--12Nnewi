// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Remove BrowserRouter from here
import Navigation from './components/nav/Nav';
import HomePage from './pages/Home';
import FashionPage from './pages/FashionPage';
import BagsPage from './pages/BagsPage';
import ElectronicsPage from './pages/ElectronicsPage';
import FootwearPage from './pages/FootwearPage';
import GroceriesPage from './pages/GroceriesPage';
import WellnessPage from './pages/WellnessPage';
import ProductDetailPage from './components/ProductDetailPage';
import Land from './Land/Land';

const App = () => {
  const location = useLocation();

  // Define an array of all paths where the navigation should be visible.
  const storePaths = [
    '/store',
    '/fashion',
    '/bags',
    '/electronics',
    '/footwear',
    '/groceries',
    '/wellness'
  ];

  // The navigation should be shown if the current path starts with any of the store routes.
  // We also need to include the product detail page, which starts with '/product'.
  const showNavigation = storePaths.some(path => location.pathname.startsWith(path)) || location.pathname.startsWith('/product');

  return (
    <div className='px-2'>
      {showNavigation && <Navigation />}
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/store" element={<HomePage />} />
        <Route path="/fashion" element={<FashionPage />} />
        <Route path="/bags" element={<BagsPage />} />
        <Route path="/electronics" element={<ElectronicsPage />} />
        <Route path="/footwear" element={<FootwearPage />} />
        <Route path="/groceries" element={<GroceriesPage />} />
        <Route path="/wellness" element={<WellnessPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;