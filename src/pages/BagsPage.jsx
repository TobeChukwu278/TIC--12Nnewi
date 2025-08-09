// src/pages/BagsPage.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const bagsProducts = [
    { id: 43, name: 'Stylish Leather Backpack', image: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=Backpack', inStock: true, reviews: 4.6, originalPrice: '$120.00', discountedPrice: '$99.99' },
    { id: 44, name: 'Casual Crossbody Bag', image: 'https://via.placeholder.com/300x400/D2B48C/000000?text=Crossbody', inStock: true, reviews: 4.2, originalPrice: '$40.00', discountedPrice: '$35.00' },
    { id: 45, name: 'Elegant Evening Clutch', image: 'https://via.placeholder.com/300x400/F0F8FF/000000?text=Clutch', inStock: false, reviews: 4.8, originalPrice: '$75.00', discountedPrice: '$60.00' },
    { id: 46, name: 'Laptop Briefcase (Waterproof)', image: 'https://via.placeholder.com/300x400/708090/FFFFFF?text=Briefcase', inStock: true, reviews: 4.7, originalPrice: '$90.00', discountedPrice: '$75.00' },
    { id: 47, name: 'Travel Duffel Bag', image: 'https://via.placeholder.com/300x400/6A5ACD/FFFFFF?text=Duffel+Bag', inStock: true, reviews: 4.5, originalPrice: '$150.00', discountedPrice: '$130.00' },
    { id: 48, name: 'Canvas Tote Bag', image: 'https://via.placeholder.com/300x400/F5DEB3/000000?text=Tote+Bag', inStock: true, reviews: 4.0, originalPrice: '$30.00', discountedPrice: '$25.00' },
    { id: 49, name: 'Kid\'s Animal Backpack', image: 'https://via.placeholder.com/300x400/FFB6C1/000000?text=Kid+Backpack', inStock: true, reviews: 4.9, originalPrice: '$45.00', discountedPrice: '$38.00' },
    { id: 50, name: 'Professional Camera Bag', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Camera+Bag', inStock: true, reviews: 4.7, originalPrice: '$110.00', discountedPrice: '$95.00' },
];

const BagsPage = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Bags</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {bagsProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default BagsPage;