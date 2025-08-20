// src/components/Navigation.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaHeart, FaListAlt, FaUser } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';
import SearchInput from './SearchInput';
import DropdownNavItem from './DropdownNavItem';
import LocationDropdown from './LocationDropdown';
import Cart from './Cart';
import { NavList } from './NavList';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // This function will be called to close the menu
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div>
            {/* Mobile Header (Top) */}
            <nav className="bg-gray-900 p-4 flex justify-between items-center lg:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                    {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                </button>
                <NavLink to="/" className="font-bold text-xl text-white" onClick={closeMenu}>TIC</NavLink>
                <Cart />
            </nav>

            {/* Mobile Menu (Full-screen overlay) */}
            <div className={`fixed inset-0 bg-gray-800 text-white z-50 transform lg:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Mobile Menu Header */}
                <div className="p-4 flex justify-between items-center border-b border-gray-700">
                    <NavLink to="/" className="font-bold text-xl" onClick={closeMenu}>TIC</NavLink>
                    <button onClick={closeMenu} className="text-white">
                        <FaTimes className="h-6 w-6" />
                    </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="p-4 space-y-4">
                    {/* Sign-in button for mobile menu is here */}
                    <div className="border-b border-gray-700 pb-4">
                        <button
                            className="w-full text-left cursor-pointer p-2 rounded text-white bg-blue-600 hover:bg-blue-700 font-medium"
                            onClick={closeMenu}
                            as={NavLink}
                        >
                            <NavLink
                                to="/loginsignup"
                                className="w-full block text-white"
                                onClick={closeMenu}
                            >
                                Sign In
                            </NavLink>
                        </button>
                    </div>

                    <div className="border-b border-gray-700 pb-4">
                        <LocationDropdown />
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                        <SearchInput />
                    </div>
                    <nav>
                        <div className="flex flex-col space-y-2">
                            {NavList.map((item, index) => {
                                if (!item) return null;

                                if (item.hasDropdown) {
                                    // You might need to pass `closeMenu` down as a prop to your DropdownNavItem component
                                    return <DropdownNavItem key={index} item={item} onClose={closeMenu} />;
                                } else {
                                    return (
                                        <NavLink
                                            key={index}
                                            to={`/${item.Navitem.toLowerCase().replace(/\s/g, '-')}`}
                                            className="text-white hover:text-gray-400 font-medium transition-colors duration-200 flex items-center space-x-2"
                                            onClick={closeMenu} // <-- Added onClick handler here
                                        >
                                            {item.icon}
                                            <span>{item.Navitem}</span>
                                        </NavLink>
                                    );
                                }
                            })}
                        </div>
                    </nav>
                </div>
            </div>

            {/* Mobile Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-2 flex justify-around items-center text-white border-t border-gray-700 lg:hidden z-40">
                <NavLink to="/store" onClick={closeMenu} className="flex flex-col items-center p-2 text-white hover:text-gray-400">
                    <FaHome className="h-6 w-6" />
                    <span className="text-xs mt-1">Home</span>
                </NavLink>
                <NavLink to="/search" onClick={closeMenu} className="flex flex-col items-center p-2 text-white hover:text-gray-400">
                    <MdSearch className="h-6 w-6" />
                    <span className="text-xs mt-1">Search</span>
                </NavLink>
                <NavLink to="/wishlist" onClick={closeMenu} className="flex flex-col items-center p-2 text-white hover:text-gray-400">
                    <FaHeart className="h-6 w-6" />
                    <span className="text-xs mt-1">Wishlist</span>
                </NavLink>
                <NavLink to="/orders" onClick={closeMenu} className="flex flex-col items-center p-2 text-white hover:text-gray-400">
                    <FaListAlt className="h-6 w-6" />
                    <span className="text-xs mt-1">Orders</span>
                </NavLink>
                <NavLink to="/account" onClick={closeMenu} className="flex flex-col items-center p-2 text-white hover:text-gray-400">
                    <FaUser className="h-6 w-6" />
                    <span className="text-xs mt-1">Account</span>
                </NavLink>
            </div>

            {/* Desktop Navigation (hidden on small screens) */}
            <div className="hidden lg:block">
                <nav className="bg-gray-900 p-4 flex items-center justify-between shadow-lg text-white">
                    <NavLink to="/" className="text-white font-bold text-xl">TIC</NavLink>
                    <div>
                        <LocationDropdown />
                    </div>
                    <div className="flex-grow max-w-lg mx-4">
                        <SearchInput />
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="text-white hover:text-gray-400 cursor-pointer p-2 rounded bg-blue-600 hover:bg-blue-400 font-medium">
                            <NavLink
                                to="/loginsignup"
                                className="w-full block text-white"
                            >
                                Sign In
                            </NavLink>
                        </button>
                        <Cart />
                    </div>
                </nav>

                <nav className="bg-gray-800 p-4 shadow-md rounded-b-lg">
                    <div className="container mx-auto flex justify-center space-x-6">
                        {NavList.map((item, index) => {
                            if (item.hasDropdown) {
                                return <DropdownNavItem key={index} item={item} />;
                            } else {
                                return (
                                    <NavLink
                                        key={index}
                                        to={`/${item.Navitem.toLowerCase().replace(/\s/g, '-')}`}
                                        className="text-white hover:text-gray-400 font-medium transition-colors duration-200 flex items-center space-x-2"
                                    >
                                        {item.icon}
                                        <span>{item.Navitem}</span>
                                    </NavLink>
                                );
                            }
                        })}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;