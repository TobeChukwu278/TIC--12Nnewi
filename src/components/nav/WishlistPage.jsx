// src/pages/WishlistPage.jsx
import React, { useState, useEffect } from 'react';

const WishlistPage = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        // Simulate fetching wishlist items (replace with actual API call or context)
        const fetchedItems = [
            { id: 1, name: 'Wireless Headphones', price: '₦45,000', image: 'https://via.placeholder.com/100x100/A0A0A0/FFFFFF?text=Headphones' },
            { id: 2, name: 'Smartwatch Series 7', price: '₦120,000', image: 'https://via.placeholder.com/100x100/A0A0A0/FFFFFF?text=Smartwatch' },
            { id: 3, name: 'Portable Power Bank', price: '₦15,000', image: 'https://via.placeholder.com/100x100/A0A0A0/FFFFFF?text=PowerBank' },
        ];
        setWishlistItems(fetchedItems);
    }, []);

    const handleRemoveFromWishlist = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
        // In a real app: send request to backend to remove item
        console.log(`Removed item ${id} from wishlist`);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>
            {wishlistItems.length === 0 ? (
                <p className="text-gray-500">Your wishlist is empty. Start adding some favorites!</p>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {wishlistItems.map(item => (
                        <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                            <div className="flex-grow">
                                <h2 className="text-lg font-semibold">{item.name}</h2>
                                <p className="text-blue-600 font-bold">{item.price}</p>
                            </div>
                            <button
                                onClick={() => handleRemoveFromWishlist(item.id)}
                                className="text-red-600 hover:text-red-800 transition-colors duration-200"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishlistPage;