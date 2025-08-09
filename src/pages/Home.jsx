import React from 'react';
import BannerSlider from '../components/home/BannerSlider';
import FeaturedCategories from '../components/home/FeaturedCategories';
import ProductSection from '../components/home/ProductSection';
import WellnessSection from '../components/home/WellnessSection';
import HealthSection from '../components/home/HealthSection';
import Footer from '../components/home/Footer';

const HomePage = () => {
    return (
        <div>
            {/* 1. Banner Section with Slider */}
            <BannerSlider />

            {/* 2. Featured Categories */}
            <FeaturedCategories />

            {/* 3. Popular Products Section */}
            <ProductSection title="Popular Products" category="popular" />

            {/* 4. New Products Section */}
            <ProductSection title="New Products" category="new" />

            {/* 5. Featured Products Section */}
            <ProductSection title="Featured Products" category="featured" />

            {/* 6. Wellness Section */}
            <WellnessSection />

            {/* 7. Health Section */}
            <HealthSection />

            {/* 8. Footer */}
            <Footer />
        </div>
    );
};

export default HomePage;