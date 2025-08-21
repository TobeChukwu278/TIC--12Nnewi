import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaHeart, FaListAlt, FaUser, FaAngleDown } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';
import SearchInput from './SearchInput';
import DropdownNavItem from './DropdownNavItem';
import LocationDropdown from './LocationDropdown';
import Cart from './Cart';
import { NavList } from './NavList';
// Import only the custom hook from the new context file
import { useUser } from '../UserContext';

// Simple avatar component for logged-in users, now with a logout option
const UserAvatar = ({ email }) => {
    // Use the new custom hook to get the logout function
    const { logout } = useUser();
    return (
        <div className="flex items-center space-x-2">
            <NavLink to="/account" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    {email ? email.charAt(0).toUpperCase() : <FaUser />}
                </div>
                <span className="hidden md:inline text-white font-medium">{email || 'Account'}</span>
            </NavLink>
            <button
                onClick={logout}
                className="text-white hover:text-gray-400 font-medium p-2 rounded bg-red-600 hover:bg-red-700 transition-colors duration-200"
            >
                Sign Out
            </button>
        </div>
    );
};

// 3. The Refactored Navigation Component
const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Use the new custom hook here instead of useContext(UserContext)
    const { isLoggedIn, userEmail } = useUser();
    const closeMenu = () => setIsMenuOpen(false);

    const renderNavLinks = (isMobile = false) => (
        <nav className={`flex ${isMobile ? 'flex-col space-y-2' : 'space-x-6'}`}>
            {NavList.map((item, index) => {
                if (!item) return null;
                if (item.hasDropdown) {
                    return <DropdownNavItem key={index} item={item} onClose={isMobile ? closeMenu : undefined} />;
                } else {
                    return (
                        <NavLink
                            key={index}
                            to={`/${item.Navitem.toLowerCase().replace(/\s/g, '-')}`}
                            className="text-white hover:text-gray-400 font-medium transition-colors duration-200 flex items-center space-x-2"
                            onClick={closeMenu}
                        >
                            {item.icon}
                            <span>{item.Navitem}</span>
                        </NavLink>
                    );
                }
            })}
        </nav>
    );

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
            <nav className={`fixed inset-0 bg-gray-800 text-white z-50 transform lg:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4 flex justify-between items-center border-b border-gray-700">
                    <NavLink to="/" className="font-bold text-xl" onClick={closeMenu}>TIC</NavLink>
                    <button onClick={closeMenu} className="text-white">
                        <FaTimes className="h-6 w-6" />
                    </button>
                </div>
                <div className="p-4 space-y-4">
                    <div className="border-b border-gray-700 pb-4">
                        {isLoggedIn ? (
                            <UserAvatar email={userEmail} />
                        ) : (
                            <NavLink
                                to="/loginsignup"
                                className="w-full block text-white p-2 rounded bg-blue-600 hover:bg-blue-700 font-medium text-center"
                                onClick={closeMenu}
                            >
                                Sign In
                            </NavLink>
                        )}
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                        <LocationDropdown />
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                        <SearchInput />
                    </div>
                    {renderNavLinks(true)}
                </div>
            </nav>

            {/* Mobile Bottom Navigation Bar */}
            <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 p-2 flex justify-around items-center text-white border-t border-gray-700 lg:hidden z-40">
                <NavLink to="/" onClick={closeMenu} className="flex flex-col items-center p-2 text-white hover:text-gray-400">
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
            </nav>

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
                        {isLoggedIn ? (
                            <UserAvatar email={userEmail} />
                        ) : (
                            <NavLink
                                to="/loginsignup"
                                className="text-white hover:text-gray-400 cursor-pointer p-2 rounded bg-blue-600 hover:bg-blue-400 font-medium"
                            >
                                Sign In
                            </NavLink>
                        )}
                        <Cart />
                    </div>
                </nav>
                <nav className="bg-gray-800 p-4 shadow-md rounded-b-lg">
                    <div className="container mx-auto flex justify-center">
                        {renderNavLinks()}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;
