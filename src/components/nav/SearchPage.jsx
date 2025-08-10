import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';

const SearchPage = () => {
    const [recentSearches, setRecentSearches] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // In a real app, you'd load this from localStorage or a user's profile
        setRecentSearches(JSON.parse(localStorage.getItem('recentSearches') || '[]'));
    }, []);

    const handleSearch = (term) => {
        setSearchTerm(term);
        // Simulate search results
        console.log(`Searching for: ${term}`);
        // In a real app: fetch results from API based on `term`
        setSearchResults([
            `Result for "${term}" 1`,
            `Result for "${term}" 2`,
            `Result for "${term}" 3`,
        ]);

        // Add to recent searches (basic implementation)
        const updatedSearches = [term, ...recentSearches.filter(s => s !== term)].slice(0, 5); // Keep last 5
        setRecentSearches(updatedSearches);
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Search</h1>
            <SearchInput onSearch={handleSearch} /> {/* Assuming SearchInput takes an onSearch prop */}

            {searchTerm && searchResults.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Results for "{searchTerm}"</h2>
                    <ul className="list-disc list-inside space-y-2">
                        {searchResults.map((result, index) => (
                            <li key={index} className="text-gray-700">{result}</li>
                        ))}
                    </ul>
                </div>
            )}

            {recentSearches.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Recent Searches</h2>
                    <ul className="space-y-2">
                        {recentSearches.map((term, index) => (
                            <li key={index}
                                className="text-blue-600 hover:underline cursor-pointer"
                                onClick={() => handleSearch(term)}>
                                {term}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {!searchTerm && recentSearches.length === 0 && (
                <p className="text-gray-500 mt-8">Start typing to find products!</p>
            )}
        </div>
    );
};

export default SearchPage;