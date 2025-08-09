// src/components/WellnessProductsSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaHeart, FaEye } from 'react-icons/fa';

// Placeholder product data for wellness items
const wellnessProducts = [
    {
        id: 19,
        name: 'Essential Oil Diffuser',
        price: '$35.00',
        image: 'https://via.placeholder.com/300x400/90EE90/000000?text=Diffuser',
        inStock: true,
        reviews: 4.8,
        originalPrice: '$45.00',
        discountedPrice: '$35.00',
    },
    {
        id: 20,
        name: 'Yoga Mat with Carrier',
        price: '$50.00',
        image: 'https://via.placeholder.com/300x400/ADD8E6/000000?text=Yoga+Mat',
        inStock: true,
        reviews: 4.6,
        originalPrice: '$60.00',
        discountedPrice: '$50.00',
    },
    {
        id: 21,
        name: 'Herbal Tea Sampler Box',
        price: '$20.00',
        image: 'https://via.placeholder.com/300x400/F08080/FFFFFF?text=Tea+Box',
        inStock: false,
        reviews: 4.9,
        originalPrice: '$25.00',
        discountedPrice: '$20.00',
    },
    {
        id: 22,
        name: 'Aromatherapy Candle Set',
        price: '$25.00',
        image: 'https://via.placeholder.com/300x400/E6E6FA/000000?text=Candle+Set',
        inStock: true,
        reviews: 4.7,
        originalPrice: '$35.00',
        discountedPrice: '$25.00',
    },
    {
        id: 23,
        name: 'Stainless Steel Water Bottle',
        price: '$15.00',
        image: 'https://via.placeholder.com/300x400/FFA07A/000000?text=Water+Bottle',
        inStock: true,
        reviews: 4.5,
        originalPrice: '$20.00',
        discountedPrice: '$15.00',
    },
    {
        id: 24,
        name: 'Weighted Sleep Blanket',
        price: '$80.00',
        image: 'https://via.placeholder.com/300x400/800080/FFFFFF?text=Sleep+Blanket',
        inStock: true,
        reviews: 4.9,
        originalPrice: '$100.00',
        discountedPrice: '$80.00',
    },
];

const WellnessProductsSlider = () => {
    return (
        <section className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Wellness Products</h2>
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
                {wellnessProducts.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden relative group">
                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                            <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-red-500 transition-colors duration-200"
                                    title="Add to Favorites"
                                >
                                    <FaHeart className="w-5 h-5" />
                                </button>
                                <button
                                    className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-blue-500 transition-colors duration-200"
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
                                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
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

export default WellnessProductsSlider;