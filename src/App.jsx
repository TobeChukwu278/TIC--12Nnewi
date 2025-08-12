// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/nav/Nav';
import HomePage from './pages/Home';
import TechnologyGadgetsPage from './pages/TechnologyGadgetsPage';
import HandmadeCraftsPage from './pages/HandmadeCraftsPage';
import AgroTechPage from './pages/AgroTechPage';
import IndustrialProductsPage from './pages/IndustrialProductsPage';
import GroceriesPage from './pages/GroceriesPage';
import WellnessPage from './pages/WellnessPage';
import ProductDetailPage from './components/ProductDetailPage';
import SearchPage from './components/nav/SearchPage';
import WishlistPage from './components/nav/WishlistPage';
import OrdersPage from './components/nav/OrdersPage';
import AccountPage from './components/nav/AccountPage';
import Land from './Land/Land';

const App = () => {
  const location = useLocation();

  // Define an array of all paths where the navigation should NOT be visible.
  // In this case, we'll only hide it on the initial landing page ('/').
  const pathsWithoutNav = ['/'];

  // The navigation will now be visible on all pages EXCEPT for those in the pathsWithoutNav array.
  const showNavigation = !pathsWithoutNav.includes(location.pathname);

  return (
    <div className='px-2'>
      {/* Conditionally render the Navigation component based on the current path */}
      {showNavigation && <Navigation />}
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/store" element={<HomePage />} />
        <Route path="//technology-&-gadgets" element={<TechnologyGadgetsPage />} />
        <Route path="/handmade-crafts" element={<HandmadeCraftsPage />} />
        <Route path="/agro-tech" element={<AgroTechPage />} />
        <Route path="/industrial-products" element={<IndustrialProductsPage />} />
        <Route path="/groceries" element={<GroceriesPage />} />
        <Route path="/wellness" element={<WellnessPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </div>
  );
};

export default App;
