// src/components/PopularProductsSlider.jsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaHeart, FaEye } from 'react-icons/fa';

// Placeholder product data
const popularProducts = [
    {
        id: 1,
        name: 'Elegant Smartwatch',
        price: '$29.99',
        image: 'https://via.placeholder.com/300x400/FF5733/FFFFFF?text=Smartwatch',
        inStock: true,
        reviews: 4.5,
        originalPrice: '$39.99',
        discountedPrice: '$29.99',
    },
    {
        id: 2,
        name: 'Wireless Bluetooth Headset',
        price: '$45.00',
        image: 'https://via.placeholder.com/300x400/33FF57/FFFFFF?text=Headset',
        inStock: true,
        reviews: 4.2,
        originalPrice: '$55.00',
        discountedPrice: '$45.00',
    },
    {
        id: 3,
        name: 'Portable Power Bank',
        price: '$19.99',
        image: 'https://via.placeholder.com/300x400/3366FF/FFFFFF?text=Power+Bank',
        inStock: false, // Example of out of stock
        reviews: 3.8,
        originalPrice: '$25.00',
        discountedPrice: '$19.99',
    },
    {
        id: 4,
        name: '4K Ultra HD Camera',
        price: '$85.00',
        image: 'https://via.placeholder.com/300x400/FFFF33/000000?text=Camera',
        inStock: true,
        reviews: 4.9,
        originalPrice: '$100.00',
        discountedPrice: '$85.00',
    },
    {
        id: 5,
        name: 'Mini Drone with Camera',
        price: '$12.50',
        image: 'https://via.placeholder.com/300x400/FF33FF/FFFFFF?text=Mini+Drone',
        inStock: true,
        reviews: 4.0,
        originalPrice: '$18.00',
        discountedPrice: '$12.50',
    },
    {
        id: 6,
        name: 'Smart Home Speaker',
        price: '$75.00',
        image: 'https://via.placeholder.com/300x400/33FFFF/000000?text=Smart+Speaker',
        inStock: true,
        reviews: 4.7,
        originalPrice: '$90.00',
        discountedPrice: '$75.00',
    },
];

const latestProducts = [
    {
        id: 7,
        name: 'New Gaming Keyboard',
        price: '$55.00',
        image: 'https://via.placeholder.com/300x400/FF6666/FFFFFF?text=Keyboard',
        inStock: true,
        reviews: 4.6,
        originalPrice: '$65.00',
        discountedPrice: '$55.00',
    },
    {
        id: 8,
        name: 'Ergonomic Mouse',
        price: '$99.00',
        image: 'https://via.placeholder.com/300x400/66FF66/FFFFFF?text=Mouse',
        inStock: true,
        reviews: 4.1,
        originalPrice: '$110.00',
        discountedPrice: '$99.00',
    },
    {
        id: 9,
        name: 'High-Capacity SSD',
        price: '$35.00',
        image: 'https://via.placeholder.com/300x400/6666FF/FFFFFF?text=SSD',
        inStock: true,
        reviews: 4.4,
        originalPrice: '$45.00',
        discountedPrice: '$35.00',
    },
    {
        id: 10,
        name: 'Portable Projector',
        price: '$250.00',
        image: 'https://via.placeholder.com/300x400/FFFF66/000000?text=Projector',
        inStock: true,
        reviews: 4.8,
        originalPrice: '$299.00',
        discountedPrice: '$250.00',
    },
    {
        id: 11,
        name: 'USB-C Hub',
        price: '$15.00',
        image: 'https://via.placeholder.com/300x400/FF66FF/FFFFFF?text=USB-C+Hub',
        inStock: true,
        reviews: 3.9,
        originalPrice: '$20.00',
        discountedPrice: '$15.00',
    },
    {
        id: 12,
        name: 'Smart LED Light Strip',
        price: '$49.99',
        image: 'https://via.placeholder.com/300x400/66FFFF/000000?text=LED+Strip',
        inStock: true,
        reviews: 4.3,
        originalPrice: '$60.00',
        discountedPrice: '$49.99',
    },
];

const PopularProductsSlider = () => {
    const [activeCategory, setActiveCategory] = useState('popular');

    const productsToDisplay = activeCategory === 'popular' ? popularProducts : latestProducts;

    return (
        <section className="container mx-auto py-8">
            {/* ... (your existing category buttons) */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">
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
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                className="mySwiper"
            >
                {productsToDisplay.map((product) => (
                    <SwiperSlide key={product.id}>
                        {/* CORRECTED:
                          1. Added 'group' class to the parent div.
                          2. Added 'relative' to make child absolute positioning work.
                        */}
                        <div className="bg-white cursor-pointer rounded-lg shadow-md overflow-hidden relative group">
                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />

                            {/* CORRECTED:
                              Added 'opacity-0' and 'group-hover:opacity-100' for the hover effect.
                            */}
                            <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    className="bg-white cursor-pointer p-2 rounded-full shadow-md text-gray-700 hover:text-red-500 transition-colors duration-200"
                                    title="Add to Favorites"
                                >
                                    <FaHeart className="w-5 h-5" />
                                </button>
                                <button
                                    className="bg-white cursor-pointer p-2 rounded-full shadow-md text-gray-700 hover:text-blue-500 transition-colors duration-200"
                                    title="View Product"
                                >
                                    <FaEye className="w-5 h-5" />
                                </button>
                            </div>

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

                                <button className="mt-4 w-full cursor-pointer bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default PopularProductsSlider;