// src/pages/FootwearPage.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const footwearProducts = [
    { id: 59, name: 'Men\'s Running Shoes', image: 'https://via.placeholder.com/300x400/BDB76B/000000?text=Running+Shoes', inStock: true, reviews: 4.6, originalPrice: '$90.00', discountedPrice: '$75.00' },
    { id: 60, name: 'Women\'s Fashion Sneakers', image: 'https://via.placeholder.com/300x400/FFC0CB/000000?text=Sneakers', inStock: true, reviews: 4.7, originalPrice: '$70.00', discountedPrice: '$60.00' },
    { id: 61, name: 'Casual Leather Loafers', image: 'https://via.placeholder.com/300x400/D2B48C/000000?text=Loafers', inStock: true, reviews: 4.4, originalPrice: '$80.00', discountedPrice: '$68.00' },
    { id: 62, name: 'Hiking Boots (Waterproof)', image: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=Hiking+Boots', inStock: true, reviews: 4.8, originalPrice: '$150.00', discountedPrice: '$120.00' },
    { id: 63, name: 'Kids\' Athletic Sandals', image: 'https://via.placeholder.com/300x400/ADD8E6/000000?text=Kid+Sandals', inStock: false, reviews: 4.5, originalPrice: '$35.00', discountedPrice: '$28.00' },
    { id: 64, name: 'Elegant High Heels', image: 'https://via.placeholder.com/300x400/800080/FFFFFF?text=High+Heels', inStock: true, reviews: 4.9, originalPrice: '$95.00', discountedPrice: '$80.00' },
    { id: 65, name: 'Comfortable Slippers', image: 'https://via.placeholder.com/300x400/F5DEB3/000000?text=Slippers', inStock: true, reviews: 4.3, originalPrice: '$25.00', discountedPrice: '$20.00' },
    { id: 66, name: 'Classic Canvas Shoes', image: 'https://via.placeholder.com/300x400/A9A9A9/FFFFFF?text=Canvas+Shoes', inStock: true, reviews: 4.7, originalPrice: '$40.00', discountedPrice: '$33.00' },
];

const FootwearPage = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Footwear</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {footwearProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default FootwearPage;