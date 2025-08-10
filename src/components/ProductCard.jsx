import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* The entire card is a NavLink, making it clickable on all devices */}
            <NavLink to={`/product/${product.id}`} className="block">
                {/* Product Image */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                />

                {/* Product Details */}
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                    <p className="text-gray-600">${product.price}</p>
                </div>
            </NavLink>

            {/* Favorites Button - Visible on hover (desktop) and always on mobile for accessibility */}
            <button
                className={`absolute top-2 right-2 p-2 bg-white rounded-full shadow-md transition-opacity duration-300 
                            ${isHovered ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}
                aria-label="Add to favorites"
                onClick={(e) => {
                    e.stopPropagation(); // Prevents the NavLink from being triggered
                    // Your logic to add/remove from favorites goes here
                    console.log(`Toggling favorite for product: ${product.name}`);
                }}
            >
                <FaHeart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors duration-200" />
            </button>
        </div>
    );
};

export default ProductCard;