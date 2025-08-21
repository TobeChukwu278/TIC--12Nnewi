// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/nav/Nav'; // Ensure you import UserProvider
import { UserProvider } from './components/UserContext';
// import HomePage from './pages/HomePage';
import HomePage from './pages/Home'
import HandmadeCraftsPage from './pages/HandmadeCraftsPage';
import AgroTechPage from './pages/AgroTechPage';
import IndustrialProductsPage from './pages/IndustrialProductsPage';
import GroceriesPage from './pages/GroceriesPage';
import WellnessPage from './pages/WellnessPage';
import ProductDetailPage from './components/ProductDetailPage';
import SearchPage from './components/nav/SearchPage';
import TechnologyGadgetsPage from './pages/TechnologyGadgetsPage';
import WishlistPage from './components/nav/WishlistPage';
import OrdersPage from './components/nav/OrdersPage';
import AccountPage from './components/nav/AccountPage';
import Land from './Land/Land';
import LoginSignup from './components/LoginSignup';

const App = () => {
  const location = useLocation();

  // Hide navigation only on the landing page
  const pathsWithoutNav = ['/land'];

  // The navigation will now be visible on all pages EXCEPT for those in the pathsWithoutNav array.
  const showNavigation = !pathsWithoutNav.includes(location.pathname);

  return (
    <div className='px-2'>
      {/* Conditionally render the Navigation component, now wrapped in the provider */}
      <UserProvider>
        {showNavigation && (
          <Navigation />

        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/land" element={<Land />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/technology-&-gadgets" element={<TechnologyGadgetsPage />} />
          <Route path="/leather-works/crafts" element={<HandmadeCraftsPage />} />
          <Route path="/agro-allied" element={<AgroTechPage />} />
          <Route path="/industrial-products" element={<IndustrialProductsPage />} />
          <Route path="/food-processing" element={<GroceriesPage />} />
          <Route path="/wellness" element={<WellnessPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </UserProvider>
    </div>
  );
};

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navigation from './components/nav/Nav';
// import LoginSignup from './components/auth/LoginSignup';
// // Import the new provider
// import { UserProvider } from './components/UserContext';
// import Home from './components/Home';

// function App() {
//   return (
//     // Wrap the entire app with the UserProvider to make the context available
//     <UserProvider>
//       <Router>
//         <Navigation />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<LoginSignup />} />
//         </Routes>
//       </Router>
//     </UserProvider>
//   );
// }

// export default App;

