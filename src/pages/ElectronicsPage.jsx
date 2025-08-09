// src/pages/ElectronicsPage.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const electronicsProducts = [
    { id: 51, name: '4K Smart LED TV', image: 'https://via.placeholder.com/300x400/000080/FFFFFF?text=Smart+TV', inStock: true, reviews: 4.9, originalPrice: '$700.00', discountedPrice: '$599.00' },
    { id: 52, name: 'Wireless Bluetooth Earbuds', image: 'https://via.placeholder.com/300x400/4169E1/FFFFFF?text=Earbuds', inStock: true, reviews: 4.7, originalPrice: '$70.00', discountedPrice: '$59.00' },
    { id: 53, name: 'Portable Bluetooth Speaker', image: 'https://via.placeholder.com/300x400/6495ED/FFFFFF?text=Bluetooth+Speaker', inStock: true, reviews: 4.5, originalPrice: '$45.00', discountedPrice: '$39.00' },
    { id: 54, name: 'Gaming Laptop (High-End)', image: 'https://via.placeholder.com/300x400/1E90FF/FFFFFF?text=Gaming+Laptop', inStock: false, reviews: 4.8, originalPrice: '$1500.00', discountedPrice: '$1300.00' },
    { id: 55, name: 'External SSD 1TB', image: 'https://via.placeholder.com/300x400/87CEFA/000000?text=External+SSD', inStock: true, reviews: 4.6, originalPrice: '$100.00', discountedPrice: '$85.00' },
    { id: 56, name: 'Smart Home Security Camera', image: 'https://via.placeholder.com/300x400/B0E0E6/000000?text=Security+Camera', inStock: true, reviews: 4.4, originalPrice: '$120.00', discountedPrice: '$99.00' },
    { id: 57, name: 'Drone with 4K Camera', image: 'https://via.placeholder.com/300x400/ADD8E6/000000?text=Drone', inStock: true, reviews: 4.9, originalPrice: '$300.00', discountedPrice: '$250.00' },
    { id: 58, name: 'Wireless Charging Pad', image: 'https://via.placeholder.com/300x400/E0FFFF/000000?text=Charging+Pad', inStock: true, reviews: 4.2, originalPrice: '$30.00', discountedPrice: '$25.00' },
];

const ElectronicsPage = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Electronics</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {electronicsProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ElectronicsPage;