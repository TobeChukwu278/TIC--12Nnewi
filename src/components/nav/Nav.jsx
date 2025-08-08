import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchInput from './SearchInput';
import DropdownNavItem from './DropdownNavItem';
import LocationDropdown from './LocationDropdown'; // Import the new component

const NavList = [
    {
        Navitem: 'All Categories',
        hasDropdown: true,
        dropdownItems: ['Fashion', 'Electronics', 'Bags', 'Footwear', 'Groceries', 'Beauty', 'Wellness', 'Makeup', 'Automotive'],
    },
    {
        Navitem: 'FASHION',
    },
    {
        Navitem: 'ELECTRONICS',
    },
    {
        Navitem: 'BAGS',
    },
    {
        Navitem: 'FOOTWEAR',
    },
    {
        Navitem: 'GROCERIES',
    },
    {
        Navitem: 'BEAUTY',
    },
    {
        Navitem: 'WELLNESS',
    }
];

const Navigation = () => {
    return (
        <div>
            {/* Top Navigation Bar (Logo, Location, Search, Login/Cart) */}
            <nav className="bg-gray-900 p-4 flex items-center justify-between shadow-lg text-white">
                {/* Logo */}
                <div className="font-bold text-xl">MyStore</div>

                {/* Location Dropdown */}
                <div>
                    <LocationDropdown />
                </div>

                {/* Search Component */}
                <div className="flex-grow max-w-lg mx-4">
                    <SearchInput />
                </div>

                {/* Login CTA and Cart */}
                <div className="flex items-center space-x-4">
                    <button className="text-white hover:text-gray-400">Sign In</button>
                    <button className="text-white hover:text-gray-400">Cart (0)</button>
                </div>
            </nav>

            {/* Bottom Navigation Bar (Categories) */}
            <nav className="bg-gray-800 p-4 shadow-md">
                <div className="container mx-auto flex justify-center space-x-6">
                    {NavList.map((item, index) => {
                        if (item.hasDropdown) {
                            return <DropdownNavItem key={index} item={item} />;
                        } else {
                            return (
                                <NavLink
                                    key={index}
                                    to={`/${item.Navitem.toLowerCase().replace(/\s/g, '-')}`}
                                    className="text-white hover:text-gray-400 font-medium transition-colors duration-200"
                                >
                                    {item.Navitem}
                                </NavLink>
                            );
                        }
                    })}
                </div>
            </nav>
        </div>
    );
}

export default Navigation;