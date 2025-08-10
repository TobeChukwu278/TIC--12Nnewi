import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaHeart } from 'react-icons/fa'; // Only FaHeart is needed

// Placeholder product data (I've added the category for better organization)
const popularProducts = [
    // ... (your popular products data, added category: 'electronics')
    {
        id: 1,
        name: 'Elegant Smartwatch',
        price: '₦29,999',
        image: 'https://i.pinimg.com/736x/83/83/c0/8383c0a892efcc0113e83f5263fefc25.jpg',
        inStock: true,
        reviews: 4.5,
        originalPrice: '₦39,999',
        discountedPrice: '₦29,999',
        category: 'electronics'
    },
    {
        id: 2,
        name: 'Wireless Bluetooth Headset',
        price: '₦45,000',
        image: 'https://i.pinimg.com/736x/8c/fc/b4/8cfcb4c32e85f3eee471b67015e20466.jpg',
        inStock: true,
        reviews: 4.2,
        originalPrice: '₦55,000',
        discountedPrice: '₦45,000',
        category: 'electronics'
    },
    // ... (rest of your popular products, updated prices to Naira)
];

const latestProducts = [
    // ... (your latest products data, added category: 'electronics')
    {
        id: 7,
        name: 'New Gaming Keyboard',
        price: '₦55,000',
        image: 'https://via.placeholder.com/300x400/FF6666/FFFFFF?text=Keyboard',
        inStock: true,
        reviews: 4.6,
        originalPrice: '₦65,000',
        discountedPrice: '₦55,000',
        category: 'electronics'
    },
    {
        id: 8,
        name: 'Ergonomic Mouse',
        price: '₦99,000',
        image: 'https://via.placeholder.com/300x400/66FF66/FFFFFF?text=Mouse',
        inStock: true,
        reviews: 4.1,
        originalPrice: '₦110,000',
        discountedPrice: '₦99,000',
        category: 'electronics'
    },
    // ... (rest of your latest products, updated prices to Naira)
];

const PopularProductsSlider = () => {
    const [activeCategory, setActiveCategory] = useState('popular');
    const productsToDisplay = activeCategory === 'popular' ? popularProducts : latestProducts;

    return (
        <section className="container mx-auto py-8 px-4">
            {/* CORRECTED: Responsive header layout */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
                <h2 className="text-3xl font-bold text-center sm:text-left">
                    {activeCategory === 'popular' ? 'Popular Products' : 'Latest Products'}
                </h2>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setActiveCategory('popular')}
                        className={`px-4 py-2 rounded-full font-medium cursor-pointer transition-colors duration-200 ${activeCategory === 'popular'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        Popular
                    </button>
                    <button
                        onClick={() => setActiveCategory('latest')}
                        className={`px-4 py-2 rounded-full font-medium cursor-pointer transition-colors duration-200 ${activeCategory === 'latest'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        Latest
                    </button>
                </div>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 30 },
                    1024: { slidesPerView: 4, spaceBetween: 40 },
                }}
                className="mySwiper"
            >
                {productsToDisplay.map((product) => (
                    <SwiperSlide key={product.id}>
                        {/* The SwiperSlide should be a NavLink for the entire product card */}
                        <NavLink to={`/product/${product.id}`} className="block">
                            <div className="relative bg-white cursor-pointer rounded-lg shadow-md overflow-hidden group">
                                {/* Product Image */}
                                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />

                                {/* Favorites Button - Show on hover (desktop) or always (mobile) */}
                                <button
                                    onClick={(e) => e.preventDefault()} // Prevents NavLink navigation
                                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-red-500 transition-colors duration-200 opacity-0 group-hover:opacity-100 md:opacity-100"
                                >
                                    <FaHeart className="w-5 h-5" />
                                </button>

                                {/* Product Details */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold truncate">{product.name}</h3>
                                    <p className={`text-sm mt-1 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">Reviews: {product.reviews} / 5</p>
                                    <div className="flex items-baseline mt-2">
                                        <p className="text-gray-500 line-through text-sm mr-2">{product.originalPrice}</p>
                                        <p className="text-xl font-bold text-blue-600">{product.discountedPrice}</p>
                                    </div>
                                    <button
                                        onClick={(e) => e.preventDefault()} // Prevents NavLink navigation
                                        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </NavLink>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default PopularProductsSlider;