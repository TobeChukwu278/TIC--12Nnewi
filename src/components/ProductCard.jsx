// src/components/ProductCard.jsx
import React from 'react';
import { FaHeart, FaEye } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const handleViewProduct = (e) => {
        e.preventDefault();
        // Here you would navigate to a product detail page, e.g., using `history.push` or NavLink.
        console.log(`View product: ${product.name}`);
    };

    const handleAddToFavorites = (e) => {
        e.preventDefault();
        // Logic to add the product to a user's favorites
        console.log(`Added to favorites: ${product.name}`);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative group">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />

            {/* Hover Overlay for Favorites and View Product */}
            <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={handleAddToFavorites}
                    className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-red-500 transition-colors duration-200"
                    title="Add to Favorites"
                >
                    <FaHeart className="w-5 h-5" />
                </button>
                <NavLink to={`/product/${product.id}`}>
                    <button
                        onClick={handleViewProduct}
                        className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-blue-500 transition-colors duration-200"
                        title="View Product"
                    >
                        <FaEye className="w-5 h-5" />
                    </button>
                </NavLink>
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold truncate">{product.name}</h3>

                <p className={`text-sm mt-1 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                    Reviews: {product.reviews} / 5
                </p>

                <div className="flex items-baseline mt-2">
                    <p className="text-gray-500 line-through text-sm mr-2">{product.originalPrice}</p>
                    <p className="text-xl font-bold text-blue-600">{product.discountedPrice}</p>
                </div>

                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;