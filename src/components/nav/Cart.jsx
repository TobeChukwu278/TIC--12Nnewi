import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Example cart icon from react-icons

const Cart = () => {
    // State to manage the visibility of the cart items dropdown
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Placeholder for cart items (can be managed with global state later)
    const cartItems = [
        { id: 1, name: 'Sample Item 1', price: 10.00, quantity: 1 },
        { id: 2, name: 'Sample Item 2', price: 25.50, quantity: 2 },
    ];

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleCart}
                className="relative p-2 rounded-full border-2 border-transparent hover:border-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
            >
                <FaShoppingCart className="h-6 w-6 text-white " />
                {/* Optional: Cart item count badge */}
                {cartItems.length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center -mt-1 -mr-1">
                        {cartItems.length}
                    </span>
                )}
            </button>
            {isCartOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white text-gray-900 rounded-lg shadow-xl p-4 z-20">
                    <h3 className="font-bold text-lg mb-2">Shopping Cart</h3>
                    {cartItems.length === 0 ? (
                        <p className="text-sm text-gray-500">Your cart is empty.</p>
                    ) : (
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                                    <span className="text-sm">{item.name}</span>
                                    <span className="text-xs text-gray-600">${(item.price * item.quantity).toFixed(2)} ({item.quantity})</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default Cart;