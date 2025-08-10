import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavList } from '../nav/NavList';

const FeaturedCategories = () => {
    return (
        <div className="py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-6">Featured Categories</h2>

            {/* Horizontal Scrollable Flexbox Layout */}
            <div className="flex overflow-x-auto gap-4 py-4 scrollbar-hide">
                {NavList.map((item, index) => (
                    // Make the entire card a link
                    <NavLink
                        key={index}
                        to={`/${item.Navitem.toLowerCase().replace(/\s/g, '-')}`}
                        className="flex-shrink-0 w-40 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                        {/* Display category icon and name */}
                        <div className="text-center">
                            <span className="text-4xl mb-2 block">{item.icon}</span>
                            <p className="text-sm font-medium">{item.Navitem}</p>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};
export default FeaturedCategories;