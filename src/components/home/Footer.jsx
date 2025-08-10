// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 mt-12 rounded-t-lg">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Store Info & Social Media */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white mb-2">TIC Store</h3>
                    <p className="text-sm">
                        Your one-stop shop for the latest technology, fashion, and more. Empowering your lifestyle with quality products.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-500 transition-colors duration-200">
                            <FaFacebookF className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-blue-500 transition-colors duration-200">
                            <FaTwitter className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-blue-500 transition-colors duration-200">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-blue-500 transition-colors duration-200">
                            <FaLinkedinIn className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><NavLink to="/store" className="hover:text-blue-500 transition-colors duration-200">Shop All</NavLink></li>
                        <li><NavLink to="/fashion" className="hover:text-blue-500 transition-colors duration-200">Fashion</NavLink></li>
                        <li><NavLink to="/electronics" className="hover:text-blue-500 transition-colors duration-200">Electronics</NavLink></li>
                        <li><NavLink to="/bags" className="hover:text-blue-500 transition-colors duration-200">Bags</NavLink></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center space-x-3">
                            <FaPhone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            <span>+234 801 234 5678</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <FaEnvelope className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            <span>support@ticstore.com</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Signup */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
                    <p className="text-sm mb-4">
                        Subscribe to get the latest deals and updates.
                    </p>
                    <form className="flex flex-col space-y-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} TIC Store. All rights reserved.</p>
                <div className="mt-2 space-x-4">
                    <NavLink to="/privacy" className="hover:underline">Privacy Policy</NavLink>
                    <NavLink to="/terms" className="hover:underline">Terms of Service</NavLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;