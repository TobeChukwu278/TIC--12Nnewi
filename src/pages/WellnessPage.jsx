// src/pages/WellnessPage.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const wellnessProducts = [ // This data is a copy from your WellnessProductsSlider for consistency
    {
        id: 19,
        name: 'Essential Oil Diffuser',
        price: '$35.00',
        image: 'https://via.placeholder.com/300x400/90EE90/000000?text=Diffuser',
        inStock: true,
        reviews: 4.8,
        originalPrice: '$45.00',
        discountedPrice: '$35.00',
    },
    {
        id: 20,
        name: 'Yoga Mat with Carrier',
        price: '$50.00',
        image: 'https://via.placeholder.com/300x400/ADD8E6/000000?text=Yoga+Mat',
        inStock: true,
        reviews: 4.6,
        originalPrice: '$60.00',
        discountedPrice: '$50.00',
    },
    {
        id: 21,
        name: 'Herbal Tea Sampler Box',
        price: '$20.00',
        image: 'https://via.placeholder.com/300x400/F08080/FFFFFF?text=Tea+Box',
        inStock: false,
        reviews: 4.9,
        originalPrice: '$25.00',
        discountedPrice: '$20.00',
    },
    {
        id: 22,
        name: 'Aromatherapy Candle Set',
        price: '$25.00',
        image: 'https://via.placeholder.com/300x400/E6E6FA/000000?text=Candle+Set',
        inStock: true,
        reviews: 4.7,
        originalPrice: '$35.00',
        discountedPrice: '$25.00',
    },
    {
        id: 23,
        name: 'Stainless Steel Water Bottle',
        price: '$15.00',
        image: 'https://via.placeholder.com/300x400/FFA07A/000000?text=Water+Bottle',
        inStock: true,
        reviews: 4.5,
        originalPrice: '$20.00',
        discountedPrice: '$15.00',
    },
    {
        id: 24,
        name: 'Weighted Sleep Blanket',
        price: '$80.00',
        image: 'https://via.placeholder.com/300x400/800080/FFFFFF?text=Sleep+Blanket',
        inStock: true,
        reviews: 4.9,
        originalPrice: '$100.00',
        discountedPrice: '$80.00',
    },
];

const WellnessPage = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Wellness</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {wellnessProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default WellnessPage;