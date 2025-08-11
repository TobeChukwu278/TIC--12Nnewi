import React, { useState } from 'react';
import { FaStar, FaRegStar, FaHeart, FaRegHeart, FaEye, FaTimes, FaFilter, FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { FaTshirt, FaRing, FaPaintBrush } from 'react-icons/fa'; // Icons for the new categories

// Placeholder data for Handmade Crafts & Fashion products
const handmadeProducts = [
    // Clothes Section
    { id: 1, name: 'Hand-Knitted Wool Sweater', image: 'https://placehold.co/300x400/8B4513/FFFFFF?text=Sweater', inStock: true, reviews: 4.8, price: 120.00, description: 'A cozy, hand-knitted sweater made from 100% organic wool.', category: 'Clothes' },
    { id: 2, name: 'Hand-Embroidered Tunic', image: 'https://placehold.co/300x400/D2B48C/000000?text=Tunic', inStock: true, reviews: 4.5, price: 85.00, description: 'A lightweight linen tunic with intricate floral embroidery.', category: 'Clothes' },
    { id: 3, name: 'Block-Print Summer Dress', image: 'https://placehold.co/300x400/F0F8FF/000000?text=Dress', inStock: false, reviews: 4.9, price: 110.00, description: 'A vibrant summer dress featuring traditional hand block-printing.', category: 'Clothes' },

    // Jewelry Section
    { id: 4, name: 'Sterling Silver Leaf Pendant', image: 'https://placehold.co/300x400/708090/FFFFFF?text=Pendant', inStock: true, reviews: 4.7, price: 65.00, description: 'A delicate sterling silver pendant shaped like a real leaf.', category: 'Jewelry' },
    { id: 5, name: 'Beaded Statement Necklace', image: 'https://placehold.co/300x400/6A5ACD/FFFFFF?text=Necklace', inStock: true, reviews: 4.6, price: 90.00, description: 'A bold, handcrafted necklace with colorful glass beads.', category: 'Jewelry' },
    { id: 6, name: 'Copper & Turquoise Earrings', image: 'https://placehold.co/300x400/F5DEB3/000000?text=Earrings', inStock: true, reviews: 4.4, price: 45.00, description: 'Unique drop earrings crafted from hammered copper and genuine turquoise.', category: 'Jewelry' },

    // Artworks Section
    { id: 7, name: 'Abstract Watercolor Painting', image: 'https://placehold.co/300x400/2F4F4F/FFFFFF?text=Painting', inStock: true, reviews: 4.9, price: 150.00, description: 'Original abstract artwork, painted with high-quality watercolors on canvas.', category: 'Artworks' },
    { id: 8, name: 'Hand-Thrown Ceramic Vase', image: 'https://placehold.co/300x400/FFB6C1/000000?text=Vase', inStock: true, reviews: 4.7, price: 75.00, description: 'A beautiful, rustic ceramic vase, hand-thrown on a pottery wheel.', category: 'Artworks' },
    { id: 9, name: 'Custom Leather Bookmark', image: 'https://placehold.co/300x400/A0A0A0/FFFFFF?text=Bookmark', inStock: true, reviews: 4.3, price: 20.00, description: 'A personalized leather bookmark, hand-stamped with a custom design.', category: 'Artworks' },
];

// Reusable ProductCard component for a clean, modern look
const ProductCard = ({ product, onQuickView }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    const getStarRating = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        for (let i = 0; i < 5; i++) {
            stars.push(
                i < fullStars ? (
                    <FaStar key={i} className="text-yellow-400" />
                ) : (
                    <FaRegStar key={i} className="text-gray-300" />
                )
            );
        }
        return stars;
    };

    return (
        <div className="relative group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.src = 'https://placehold.co/300x400/A0A0A0/FFFFFF?text=Image+Error'; }}
                />
                <div className="absolute top-2 right-2 p-2 rounded-full bg-white bg-opacity-70 backdrop-blur-sm transition-opacity duration-200">
                    <button onClick={toggleWishlist} className="text-xl">
                        {isWishlisted ? (
                            <FaHeart className="text-red-500 transition-colors duration-200" />
                        ) : (
                            <FaRegHeart className="text-gray-500 hover:text-red-500 transition-colors duration-200" />
                        )}
                    </button>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={() => onQuickView(product)}
                        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                        <FaEye />
                        <span>Quick View</span>
                    </button>
                </div>
            </div>
            <div className="p-4 flex flex-col justify-between h-full">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <div className="flex items-center text-sm my-1">
                        <span className="flex">{getStarRating(product.reviews)}</span>
                        <span className="ml-2 text-gray-500 text-xs">({product.reviews})</span>
                    </div>
                </div>
                <div className="mt-2">
                    <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
                    <button
                        className={`w-full mt-3 py-2 rounded-full text-white font-medium transition-colors duration-200 transform hover:scale-105 ${product.inStock ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'
                            }`}
                        disabled={!product.inStock}
                    >
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        </div>
    );
};

// Sleek QuickViewModal component
const QuickViewModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-[999] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
                <div className="relative p-6">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200"
                    >
                        <FaTimes className="h-6 w-6" />
                    </button>
                    <div className="flex flex-col md:flex-row gap-8">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full md:w-1/2 rounded-xl object-cover shadow-lg"
                        />
                        <div className="md:w-1/2 flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                                    <span>Category:</span>
                                    <span className="font-semibold text-gray-800">{product.category}</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <span className="flex text-lg text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className={i < Math.floor(product.reviews) ? 'text-yellow-400' : 'text-gray-300'} />
                                        ))}
                                    </span>
                                    <span className="ml-2 text-gray-600 text-sm">({product.reviews})</span>
                                </div>
                                <div className="text-4xl font-bold text-blue-600 mb-6">${product.price.toFixed(2)}</div>
                            </div>
                            <div className="mt-auto">
                                <button
                                    className="w-full py-3 rounded-full text-white font-semibold bg-green-600 hover:bg-green-700 transition-colors duration-200 transform hover:scale-105 shadow-lg"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main component for the Handmade Crafts & Fashion page
const HandmadeCraftsPage = () => {
    const [filters, setFilters] = useState({
        inStock: false,
        priceRange: [0, 200],
        minReviews: 0,
        category: 'All', // New state for category filter
    });
    const [sortBy, setSortBy] = useState('price-asc');
    const [quickViewProduct, setQuickViewProduct] = useState(null);
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

    const categories = ['All', 'Clothes', 'Jewelry', 'Artworks'];

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleCategoryChange = (category) => {
        setFilters(prev => ({ ...prev, category }));
        setIsFilterPanelOpen(false); // Close the panel after selecting a category on mobile
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const filteredAndSortedProducts = handmadeProducts
        .filter(product => {
            // In Stock filter
            if (filters.inStock && !product.inStock) return false;
            // Price Range filter
            if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
            // Reviews filter
            if (product.reviews < filters.minReviews) return false;
            // Category filter
            if (filters.category !== 'All' && product.category !== filters.category) return false;
            return true;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'price-asc': return a.price - b.price;
                case 'price-desc': return b.price - a.price;
                case 'reviews-desc': return b.reviews - a.reviews;
                default: return 0;
            }
        });

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Clothes':
                return <FaTshirt className="text-xl" />;
            case 'Jewelry':
                return <FaRing className="text-xl" />;
            case 'Artworks':
                return <FaPaintBrush className="text-xl" />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 h-64 flex items-center justify-center text-white p-4">
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold tracking-tight mb-2">Handmade Crafts & Fashion</h1>
                    <p className="text-xl font-light opacity-80">Discover unique, handcrafted creations.</p>
                </div>
            </div>

            <div className="container mx-auto py-8 px-4">
                {/* Filter and Sort Section */}
                <div className="sticky top-0 bg-white rounded-xl shadow-lg z-10 p-4 mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                    <h2 className="text-xl font-semibold text-gray-800">Explore Our Collection</h2>

                    {/* Mobile Filter Button */}
                    <button
                        onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
                        className="md:hidden w-full py-2 px-4 bg-gray-200 text-gray-700 font-medium rounded-full flex items-center justify-center space-x-2 hover:bg-gray-300 transition-colors duration-200"
                    >
                        <FaFilter />
                        <span>Filters & Sort</span>
                        {isFilterPanelOpen ? <FaAngleUp /> : <FaAngleDown />}
                    </button>

                    {/* Desktop Filters */}
                    <div className="hidden md:flex md:items-center space-x-4 w-full justify-end">
                        {/* Category Buttons */}
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${filters.category === category
                                        ? 'bg-purple-600 text-white shadow-lg'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                {getCategoryIcon(category)}
                                <span>{category}</span>
                            </button>
                        ))}
                        <div className="w-1/3 max-w-sm">
                            <label htmlFor="sort" className="sr-only">Sort By</label>
                            <select
                                id="sort"
                                name="sort"
                                value={sortBy}
                                onChange={handleSortChange}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            >
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="reviews-desc">Reviews: High to Low</option>
                            </select>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                id="inStock"
                                name="inStock"
                                type="checkbox"
                                checked={filters.inStock}
                                onChange={handleFilterChange}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="inStock" className="text-sm font-medium text-gray-700">In Stock Only</label>
                        </div>
                    </div>
                </div>

                {/* Mobile Filter Panel (Overlay) */}
                <div
                    className={`fixed md:hidden inset-0 bg-white z-20 transform transition-transform duration-300 ease-in-out ${isFilterPanelOpen ? 'translate-y-0' : 'translate-y-full'
                        }`}
                >
                    <div className="p-6">
                        <div className="flex justify-between items-center border-b pb-4 mb-4">
                            <h3 className="text-2xl font-bold">Filters & Sort</h3>
                            <button onClick={() => setIsFilterPanelOpen(false)} className="text-gray-500 hover:text-gray-800">
                                <FaTimes className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="space-y-6">
                            {/* Category Buttons for Mobile */}
                            <div className="grid grid-cols-2 gap-4">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => handleCategoryChange(category)}
                                        className={`w-full py-3 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 ${filters.category === category
                                                ? 'bg-purple-600 text-white shadow-lg'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            }`}
                                    >
                                        {getCategoryIcon(category)}
                                        <span>{category}</span>
                                    </button>
                                ))}
                            </div>
                            {/* Sort Dropdown for Mobile */}
                            <div>
                                <label htmlFor="mobile-sort" className="block text-lg font-medium text-gray-700 mb-2">Sort By</label>
                                <select
                                    id="mobile-sort"
                                    name="sort"
                                    value={sortBy}
                                    onChange={handleSortChange}
                                    className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="price-asc">Price: Low to High</option>
                                    <option value="price-desc">Price: High to Low</option>
                                    <option value="reviews-desc">Reviews: High to Low</option>
                                </select>
                            </div>
                            {/* In Stock Filter for Mobile */}
                            <div className="flex items-center space-x-4">
                                <input
                                    id="mobile-inStock"
                                    name="inStock"
                                    type="checkbox"
                                    checked={filters.inStock}
                                    onChange={handleFilterChange}
                                    className="h-6 w-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="mobile-inStock" className="text-lg font-medium text-gray-700">In Stock Only</label>
                            </div>
                            <button
                                onClick={() => setIsFilterPanelOpen(false)}
                                className="w-full py-3 mt-8 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
                            >
                                Close Filters
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {filteredAndSortedProducts.length > 0 ? (
                        filteredAndSortedProducts.map(product => (
                            <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-500 py-10">
                            No products match your filters.
                        </div>
                    )}
                </div>
            </div>

            {/* Quick View Modal */}
            <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
        </div>
    );
};

export default HandmadeCraftsPage;
