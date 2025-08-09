import React from 'react';
import ProductCard from '../components/ProductCard';

// Placeholder data for Fashion products (more items to fill the page)
const fashionProducts = [
    { id: 31, name: 'Stylish Denim Jacket', image: 'https://via.placeholder.com/300x400/87CEEB/000000?text=Denim+Jacket', inStock: true, reviews: 4.5, originalPrice: '$80.00', discountedPrice: '$65.00' },
    { id: 32, name: 'Classic White T-Shirt', image: 'https://via.placeholder.com/300x400/FFFFFF/000000?text=White+T-Shirt', inStock: true, reviews: 4.8, originalPrice: '$25.00', discountedPrice: '$20.00' },
    { id: 33, name: 'Slim Fit Chinos', image: 'https://via.placeholder.com/300x400/A9A9A9/FFFFFF?text=Chinos', inStock: true, reviews: 4.2, originalPrice: '$55.00', discountedPrice: '$45.00' },
    { id: 34, name: 'Floral Summer Dress', image: 'https://via.placeholder.com/300x400/FFC0CB/000000?text=Summer+Dress', inStock: false, reviews: 4.7, originalPrice: '$60.00', discountedPrice: '$50.00' },
    { id: 35, name: 'Leather Ankle Boots', image: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=Ankle+Boots', inStock: true, reviews: 4.6, originalPrice: '$120.00', discountedPrice: '$100.00' },
    { id: 36, name: 'Elegant Maxi Skirt', image: 'https://via.placeholder.com/300x400/8A2BE2/FFFFFF?text=Maxi+Skirt', inStock: true, reviews: 4.4, originalPrice: '$70.00', discountedPrice: '$60.00' },
    { id: 37, name: 'Puffer Vest', image: 'https://via.placeholder.com/300x400/778899/FFFFFF?text=Puffer+Vest', inStock: true, reviews: 4.1, originalPrice: '$95.00', discountedPrice: '$85.00' },
    { id: 38, name: 'Sporty Leggings', image: 'https://via.placeholder.com/300x400/FFDAB9/000000?text=Leggings', inStock: true, reviews: 4.9, originalPrice: '$40.00', discountedPrice: '$35.00' },
    { id: 39, name: 'Oversized Sweater', image: 'https://via.placeholder.com/300x400/B0C4DE/000000?text=Sweater', inStock: true, reviews: 4.3, originalPrice: '$50.00', discountedPrice: '$40.00' },
    { id: 40, name: 'Vintage Sunglasses', image: 'https://via.placeholder.com/300x400/663399/FFFFFF?text=Sunglasses', inStock: true, reviews: 4.7, originalPrice: '$35.00', discountedPrice: '$28.00' },
    { id: 41, name: 'Striped Polo Shirt', image: 'https://via.placeholder.com/300x400/87CEEB/000000?text=Polo+Shirt', inStock: true, reviews: 4.6, originalPrice: '$30.00', discountedPrice: '$25.00' },
    { id: 42, name: 'Hooded Sweatshirt', image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Hoodie', inStock: true, reviews: 4.5, originalPrice: '$60.00', discountedPrice: '$50.00' },
];

const FashionPage = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Fashion</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {fashionProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default FashionPage;