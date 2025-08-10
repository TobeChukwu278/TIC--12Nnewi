// src/components/NewProductsSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaHeart } from 'react-icons/fa';

// Placeholder product data (I've kept the price format consistent)
const newProducts = [
    {
        id: 7,
        name: 'New Gaming Keyboard',
        price: '₦55,000',
        image: 'https://via.placeholder.com/300x400/FF6666/FFFFFF?text=Keyboard',
        inStock: true,
        reviews: 4.6,
        originalPrice: '₦65,000',
        discountedPrice: '₦55,000',
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
    },
    {
        id: 9,
        name: 'High-Capacity SSD',
        price: '₦35,000',
        image: 'https://via.placeholder.com/300x400/6666FF/FFFFFF?text=SSD',
        inStock: true,
        reviews: 4.4,
        originalPrice: '₦45,000',
        discountedPrice: '₦35,000',
    },
    {
        id: 10,
        name: 'Portable Projector',
        price: '₦250,000',
        image: 'https://via.placeholder.com/300x400/FFFF66/000000?text=Projector',
        inStock: true,
        reviews: 4.8,
        originalPrice: '₦299,000',
        discountedPrice: '₦250,000',
    },
    {
        id: 11,
        name: 'USB-C Hub',
        price: '₦15,000',
        image: 'https://via.placeholder.com/300x400/FF66FF/FFFFFF?text=USB-C+Hub',
        inStock: true,
        reviews: 3.9,
        originalPrice: '₦20,000',
        discountedPrice: '₦15,000',
    },
    {
        id: 12,
        name: 'Smart LED Light Strip',
        price: '₦49,999',
        image: 'https://via.placeholder.com/300x400/66FFFF/000000?text=LED+Strip',
        inStock: true,
        reviews: 4.3,
        originalPrice: '₦60,000',
        discountedPrice: '₦49,999',
    },
];

const NewProductsSlider = () => {
    const productsToDisplay = newProducts;

    return (
        <section className="container mx-auto py-8 px-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">New Products</h2>
            </div>
            <Swiper
                // Updated default slidesPerView for small screens
                slidesPerView={2}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    // Mobile (default, but explicitly defined for clarity)
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    // Small devices (tablets)
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    // Medium devices (laptops)
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    // Large devices (desktops)
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }}
                className="mySwiper"
            >
                {productsToDisplay.map((product) => (
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
                                    onClick={(e) => e.preventDefault()} // Prevents navigation
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
                                        onClick={(e) => e.preventDefault()} // Prevents navigation
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

export default NewProductsSlider;