// src/components/FeaturedProductsSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaHeart, FaEye } from 'react-icons/fa';

// Placeholder product data for featured items
const featuredProducts = [
    {
        id: 13,
        name: 'Premium Noise-Cancelling Headphones',
        price: '$199.99',
        image: 'https://via.placeholder.com/300x400/800080/FFFFFF?text=Headphones',
        inStock: true,
        reviews: 4.9,
        originalPrice: '$250.00',
        discountedPrice: '$199.99',
    },
    {
        id: 14,
        name: 'Luxury Leather Handbag',
        price: '$149.99',
        image: 'https://via.placeholder.com/300x400/90EE90/000000?text=Handbag',
        inStock: true,
        reviews: 4.8,
        originalPrice: '$180.00',
        discountedPrice: '$149.99',
    },
    {
        id: 15,
        name: 'Organic Skincare Set',
        price: '$79.99',
        image: 'https://via.placeholder.com/300x400/E6E6FA/000000?text=Skincare+Set',
        inStock: true,
        reviews: 5.0,
        originalPrice: '$95.00',
        discountedPrice: '$79.99',
    },
    {
        id: 16,
        name: 'Electric Standing Desk',
        price: '$349.00',
        image: 'https://via.placeholder.com/300x400/FFA07A/000000?text=Standing+Desk',
        inStock: false,
        reviews: 4.7,
        originalPrice: '$400.00',
        discountedPrice: '$349.00',
    },
    {
        id: 17,
        name: 'High-Performance Coffee Maker',
        price: '$110.00',
        image: 'https://via.placeholder.com/300x400/ADD8E6/000000?text=Coffee+Maker',
        inStock: true,
        reviews: 4.6,
        originalPrice: '$130.00',
        discountedPrice: '$110.00',
    },
    {
        id: 18,
        name: 'Digital Art Tablet',
        price: '$219.00',
        image: 'https://via.placeholder.com/300x400/F08080/FFFFFF?text=Art+Tablet',
        inStock: true,
        reviews: 4.9,
        originalPrice: '$270.00',
        discountedPrice: '$219.00',
    },
];

const FeaturedProductsSlider = () => {
    return (
        <section className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Featured Products</h2>
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
                {featuredProducts.map((product) => (
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

export default FeaturedProductsSlider;