// src/components/FeaturedCategories.jsx
import React from 'react';
// Reuse your NavList data here
import { NavList } from '../nav/NavList';
const FeaturedCategories = () => {
    return (
        <div className="py-8">
            <h2 className="text-3xl font-bold text-center mb-6">Featured Categories</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {NavList.map((item, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                        {/* Display category icon and name */}
                        <div className="text-center">
                            <span className="text-4xl mb-2 block">{item.icon}</span>
                            <p className="text-sm font-medium">{item.Navitem}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default FeaturedCategories;