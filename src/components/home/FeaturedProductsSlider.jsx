// src/components/FeaturedProductsSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaHeart } from 'react-icons/fa';

// Placeholder product data for featured items
const featuredProducts = [
    {
        id: 13,
        name: 'Premium Noise-Cancelling Headphones',
        price: '₦199,999',
        image: 'https://via.placeholder.com/300x400/800080/FFFFFF?text=Headphones',
        inStock: true,
        reviews: 4.9,
        originalPrice: '₦250,000',
        discountedPrice: '₦199,999',
    },
    {
        id: 14,
        name: 'Luxury Leather Handbag',
        price: '₦149,999',
        image: 'https://via.placeholder.com/300x400/90EE90/000000?text=Handbag',
        inStock: true,
        reviews: 4.8,
        originalPrice: '₦180,000',
        discountedPrice: '₦149,999',
    },
    {
        id: 15,
        name: 'Organic Skincare Set',
        price: '₦79,999',
        image: 'https://via.placeholder.com/300x400/E6E6FA/000000?text=Skincare+Set',
        inStock: true,
        reviews: 5.0,
        originalPrice: '₦95,000',
        discountedPrice: '₦79,999',
    },
    {
        id: 16,
        name: 'Electric Standing Desk',
        price: '₦349,000',
        image: 'https://via.placeholder.com/300x400/FFA07A/000000?text=Standing+Desk',
        inStock: false,
        reviews: 4.7,
        originalPrice: '₦400,000',
        discountedPrice: '₦349,000',
    },
    {
        id: 17,
        name: 'High-Performance Coffee Maker',
        price: '₦110,000',
        image: 'https://via.placeholder.com/300x400/ADD8E6/000000?text=Coffee+Maker',
        inStock: true,
        reviews: 4.6,
        originalPrice: '₦130,000',
        discountedPrice: '₦110,000',
    },
    {
        id: 18,
        name: 'Digital Art Tablet',
        price: '₦219,000',
        image: 'https://via.placeholder.com/300x400/F08080/FFFFFF?text=Art+Tablet',
        inStock: true,
        reviews: 4.9,
        originalPrice: '₦270,000',
        discountedPrice: '₦219,000',
    },
];

const FeaturedProductsSlider = () => {
    return (
        <section className="container mx-auto py-8 px-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Featured Products</h2>
            </div>

            <Swiper
                // Updated slidesPerView for consistent responsive behavior
                slidesPerView={2}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }}
                className="mySwiper"
            >
                {featuredProducts.map((product) => (
                    <SwiperSlide key={product.id}>
                        {/* The entire card is a NavLink for better UX */}
                        <NavLink to={`/product/${product.id}`} className="block">
                            <div className="relative bg-white rounded-lg shadow-md overflow-hidden group">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover"
                                />

                                {/* Favorites button with hover effect */}
                                <button
                                    onClick={(e) => e.preventDefault()}
                                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-red-500 transition-colors duration-200 opacity-0 group-hover:opacity-100 md:opacity-100"
                                    title="Add to Favorites"
                                >
                                    <FaHeart className="w-5 h-5" />
                                </button>

                                <div className="p-4">
                                    <h3 className="text-lg font-semibold truncate">{product.name}</h3>
                                    <p className={`text-sm mt-1 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Reviews: {product.reviews} / 5
                                    </p>
                                    <div className="flex items-baseline mt-2">
                                        <p className="text-gray-500 line-through text-sm mr-2">{product.originalPrice}</p>
                                        <p className="text-xl font-bold text-blue-600">{product.discountedPrice}</p>
                                    </div>
                                    <button
                                        onClick={(e) => e.preventDefault()}
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

export default FeaturedProductsSlider;