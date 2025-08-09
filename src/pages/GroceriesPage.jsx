// src/pages/GroceriesPage.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const groceriesProducts = [
    { id: 67, name: 'Organic Bananas (1kg)', image: 'https://via.placeholder.com/300x400/FFD700/000000?text=Bananas', inStock: true, reviews: 4.5, originalPrice: '$3.00', discountedPrice: '$2.50' },
    { id: 68, name: 'Fresh Farm Eggs (Dozen)', image: 'https://via.placeholder.com/300x400/F0F8FF/000000?text=Eggs', inStock: true, reviews: 4.8, originalPrice: '$5.00', discountedPrice: '$4.50' },
    { id: 69, name: 'Whole Wheat Bread', image: 'https://via.placeholder.com/300x400/D2B48C/000000?text=Bread', inStock: true, reviews: 4.2, originalPrice: '$4.00', discountedPrice: '$3.50' },
    { id: 70, name: 'Premium Olive Oil (1L)', image: 'https://via.placeholder.com/300x400/ADD8E6/000000?text=Olive+Oil', inStock: true, reviews: 4.9, originalPrice: '$20.00', discountedPrice: '$18.00' },
    { id: 71, name: 'Assorted Fresh Vegetables', image: 'https://via.placeholder.com/300x400/90EE90/000000?text=Vegetables', inStock: true, reviews: 4.7, originalPrice: '$15.00', discountedPrice: '$12.00' },
    { id: 72, name: 'Ground Coffee (250g)', image: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=Coffee', inStock: false, reviews: 4.6, originalPrice: '$10.00', discountedPrice: '$8.50' },
    { id: 73, name: 'Dairy Milk (1 Gallon)', image: 'https://via.placeholder.com/300x400/FFFFFF/000000?text=Milk', inStock: true, reviews: 4.3, originalPrice: '$4.00', discountedPrice: '$3.75' },
    { id: 74, name: 'Basmati Rice (5kg)', image: 'https://via.placeholder.com/300x400/F5DEB3/000000?text=Rice', inStock: true, reviews: 4.8, originalPrice: '$12.00', discountedPrice: '$10.00' },
];

const GroceriesPage = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Groceries</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {groceriesProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default GroceriesPage;