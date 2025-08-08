import React, { useState } from 'react';

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            console.log('Searching for:', searchTerm);
            // In a real application, you'd trigger your search logic here,
            // e.g., navigate to a search results page or filter a list.
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
            <svg
                onClick={handleSearch}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </div>
    );
};

export default SearchInput;