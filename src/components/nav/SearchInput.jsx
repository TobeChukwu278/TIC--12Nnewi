import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md'; // Import the search icon

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            console.log('Searching for:', searchTerm);
            // Implement your search logic here
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full pr-10 pl-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <MdSearch // Use the imported React Icon component
                onClick={handleSearch}
                className="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            />
        </div>
    );
};

export default SearchInput;