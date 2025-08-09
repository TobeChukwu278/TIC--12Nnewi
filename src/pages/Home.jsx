// src/components/HomePage.jsx
import React from 'react';
import BannerSlider from '../components/home/BannerSlider';
import FeaturedCategories from '../components/home/FeaturedCategories';
import PopularProductsSlider from '../components/home/PopularProductsSlider';
import NewProductsSlider from '../components/home/NewProductsSlider';
import ProductSection from '../components/home/ProductSection';
import WellnessProductsSlider from '../components/home/WellnessProductsSlider';
import HealthProductsSlider from '../components/home/HealthProductsSlider';
import FeaturedProductsSlider from '../components/home/FeaturedProductsSlider';
import Footer from '../components/home/Footer';

const HomePage = () => {
    return (
        <div>
            <BannerSlider />
            <FeaturedCategories />
            <PopularProductsSlider />

            {/* Use the new component here instead of ProductSection */}
            <NewProductsSlider />
            <FeaturedProductsSlider />


            <WellnessProductsSlider />
            <HealthProductsSlider />
            <Footer />
        </div>
    );
};

export default HomePage;