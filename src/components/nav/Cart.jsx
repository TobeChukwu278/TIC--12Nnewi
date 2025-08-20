import React, { useState, useEffect, useRef } from 'react';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartRef = useRef(null);

    // Load cart items from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem('cart');
        if (stored) {
            setCartItems(JSON.parse(stored));
        }
    }, []);

    // Close cart when clicking outside
    useEffect(() => {
        if (!isCartOpen) return;
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsCartOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCartOpen]);

    const removeItem = (id) => {
        const updated = cartItems.filter(item => item.id !== id);
        setCartItems(updated);
        localStorage.setItem('cart', JSON.stringify(updated));
    };

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="relative" ref={cartRef}>
            <button
                onClick={toggleCart}
                className="relative p-2 rounded-full bg-gradient-to-tr from-blue-700 to-blue-400 shadow-lg hover:scale-105 transition-transform duration-200 border-2 border-blue-700 focus:outline-none cursor-pointer"
            >
                <FaShoppingCart className="h-7 w-7 text-white" />
                {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg border-2 border-white">
                        {cartItems.length}
                    </span>
                )}
            </button>
            {isCartOpen && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl z-30 border-2 border-blue-700 overflow-hidden animate-fade-in">
                    <div className="bg-blue-700 text-white px-5 py-4 flex justify-between items-center">
                        <h3 className="font-extrabold text-xl tracking-wide">Your Cart</h3>
                        <button onClick={toggleCart} className="text-white font-bold text-lg hover:text-red-300">&times;</button>
                    </div>
                    <div className="p-5">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-8">
                                <FaShoppingCart className="mx-auto h-10 w-10 text-blue-400 mb-2" />
                                <p className="text-gray-500 font-semibold">Your cart is empty.</p>
                            </div>
                        ) : (
                            <ul className="divide-y divide-gray-200">
                                {cartItems.map(item => (
                                    <li key={item.id} className="flex items-center justify-between py-4">
                                        <div>
                                            <span className="font-bold text-gray-800">{item.name}</span>
                                            <div className="text-xs text-gray-500 mt-1">
                                                Qty: {item.quantity} &bull; ${item.price.toFixed(2)} each
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="font-bold text-blue-700">${(item.price * item.quantity).toFixed(2)}</span>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="p-1 rounded hover:bg-red-100"
                                                title="Remove"
                                            >
                                                <FaTrashAlt className="text-red-500 h-4 w-4" />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {cartItems.length > 0 && (
                            <div className="mt-6 flex justify-between items-center">
                                <span className="font-bold text-lg text-gray-800">Total:</span>
                                <span className="font-extrabold text-xl text-blue-700">${total.toFixed(2)}</span>
                            </div>
                        )}
                        {cartItems.length > 0 && (
                            <button className="mt-6 w-full py-3 bg-gradient-to-tr from-blue-700 to-blue-400 text-white font-bold rounded-xl shadow-lg hover:from-blue-800 hover:to-blue-500 transition-colors duration-200">
                                Checkout
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;