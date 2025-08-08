import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const DropdownNavItem = ({ item }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="relative">
            <NavLink
                to={`/${item.Navitem.toLowerCase().replace(/\s/g, '-')}`}
                className="text-white hover:text-gray-400 font-medium transition-colors duration-200"
                onClick={toggleDropdown}
            >
                {item.Navitem}
            </NavLink>
            {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-xl py-2 z-10">
                    {item.dropdownItems.map((subItem, subIndex) => (
                        <NavLink
                            key={subIndex}
                            to={`/${subItem.toLowerCase().replace(/\s/g, '-')}`}
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-600 transition-colors duration-200"
                        >
                            {subItem}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownNavItem;