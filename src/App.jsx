import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/nav/Nav'
import HomePage from './pages/Home'
import FashionPage from './pages/FashionPage';
import BagsPage from './pages/BagsPage';
import ElectronicsPage from './pages/ElectronicsPage';
import FootwearPage from './pages/FootwearPage';
import GroceriesPage from './pages/GroceriesPage';
import WellnessPage from './pages/WellnessPage';


const App = () => {
  return (
    <div className='px-2'>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fashion" element={<FashionPage />} />
        <Route path="/bags" element={<BagsPage />} />
        <Route path="/electronics" element={<ElectronicsPage />} />
        <Route path="/footwear" element={<FootwearPage />} />
        <Route path="/groceries" element={<GroceriesPage />} />
        <Route path="/wellness" element={<WellnessPage />} />
      </Routes>
    </div>
  )
}

export default App