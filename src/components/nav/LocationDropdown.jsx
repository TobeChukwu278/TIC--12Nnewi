import React, { useState } from 'react';

const locations = [
    'New York, NY',
    'Los Angeles, CA',
    'Chicago, IL',
    'Houston, TX',
    'Phoenix, AZ',
    'Philadelphia, PA',
    'San Antonio, TX',
    'San Diego, CA',
];

const LocationDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('New York, NY');

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        setIsDropdownOpen(false); // Close the dropdown after selection
    };

    return (
        <div className="relative">
            <button
                className="flex items-center space-x-1 text-white hover:text-gray-400 font-medium transition-colors duration-200 focus:outline-none"
                onClick={toggleDropdown}
            >
                {/* Location Icon SVG */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                    />
                </svg>
                <span>{selectedLocation}</span>
            </button>
            {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-xl py-2 z-10">
                    {locations.map((location, index) => (
                        <button
                            key={index}
                            onClick={() => handleLocationSelect(location)}
                            className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-600 transition-colors duration-200"
                        >
                            {location}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LocationDropdown;