import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io'; // Import the arrow icon

const DropdownNavItem = ({ item }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="relative bg-indigo-600 px-3 py-[3px] rounded-2xl">
            <button
                onClick={toggleDropdown}
                className="text-white hover:text-gray-400 font-medium transition-colors duration-200 flex items-center space-x-1"
            >
                <span>{item.Navitem}</span>
                <IoIosArrowDown
                    className={`h-4 w-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </button>
            {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-xl py-2 z-10">
                    {item.dropdownItems.map((subItem, subIndex) => (
                        <NavLink
                            key={subIndex}
                            // CORRECTED LINE: Access subItem.item before .toLowerCase()
                            to={`/${subItem.item.toLowerCase().replace(/\s/g, '-')}`}
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-600 transition-colors duration-200 flex items-center space-x-2"
                            onClick={() => setIsDropdownOpen(false)}
                        >
                            {subItem.icon}
                            <span>{subItem.item}</span>
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownNavItem;