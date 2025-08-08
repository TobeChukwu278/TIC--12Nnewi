import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import location icon
import { IoIosArrowDown } from 'react-icons/io'; // Import arrow icon for consistency

const locations = [
    'Otolo',
    'Uruagu',
    'Umudim',
    'Nnewichi',
    'Nkwo Nnewi',
    'Roundabout',
    'Nnobi',
    'Owerri Road',
    'Edozie Street',
    'Okpuno-Egbu',
    'Eme Court Road',
    'Eke Amangwu',
    'Okigwe Road',
    'St. Mary\'s Cathederal Area',
    'Akamili',
    'Obiofia Otolo',
    'Egbu Umunenem',
    'Agbo Edo',
    'Umudim Central',
    'Edoji Uruagu',
    'Okpuno Otolo',
    'NAUTH area',
    'Chicason Industrial Layout',
    'Innoson Vehicle Manufacturing Plant Area',
    'Old Nkwo Area',
    'Nnewichi Central'
];

const LocationDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('Nnewi');

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        setIsDropdownOpen(false); // Close the dropdown after selection
    };

    return (
        <div className="relative">
            <h4 className='text-white/50'>Your location</h4>
            <button
                className="flex items-center space-x-1 text-white hover:text-gray-400 font-medium transition-colors duration-200 focus:outline-none"
                onClick={toggleDropdown}
            >
                <FaMapMarkerAlt className="h-5 w-5" /> {/* Using React Icon */}
                <span>{selectedLocation}</span>
                <IoIosArrowDown // Using React Icon for arrow
                    className={`h-4 w-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                />
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