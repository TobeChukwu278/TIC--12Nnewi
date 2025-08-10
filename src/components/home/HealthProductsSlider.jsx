// src/components/HealthProductsSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaHeart } from 'react-icons/fa';

// Placeholder product data for health items (prices updated to Naira)
const healthProducts = [
    {
        id: 1,
        name: 'Immune Support Vitamins',
        price: '₦22,500',
        image: 'https://via.placeholder.com/300x400/FFD700/000000?text=Vitamins',
        inStock: true,
        reviews: 4.7,
        originalPrice: '₦28,000',
        discountedPrice: '₦22,500',
    },
    {
        id: 2,
        name: 'Digital Blood Pressure Monitor',
        price: '₦65,000',
        image: 'https://via.placeholder.com/300x400/ADFF2F/000000?text=BP+Monitor',
        inStock: true,
        reviews: 4.5,
        originalPrice: '₦75,000',
        discountedPrice: '₦65,000',
    },
    {
        id: 27,
        name: 'Protein Powder (Vanilla)',
        price: '₦49,999',
        image: 'https://via.placeholder.com/300x400/F0F8FF/000000?text=Protein+Powder',
        inStock: true,
        reviews: 4.8,
        originalPrice: '₦59,999',
        discountedPrice: '₦49,999',
    },
    {
        id: 28,
        name: 'Smart Body Composition Scale',
        price: '₦89,000',
        image: 'https://via.placeholder.com/300x400/98FB98/000000?text=Smart+Scale',
        inStock: false,
        reviews: 4.6,
        originalPrice: '₦100,000',
        discountedPrice: '₦89,000',
    },
    {
        id: 29,
        name: 'First Aid Kit (Compact)',
        price: '₦18,000',
        image: 'https://via.placeholder.com/300x400/FF6347/FFFFFF?text=First+Aid',
        inStock: true,
        reviews: 4.3,
        originalPrice: '₦22,000',
        discountedPrice: '₦18,000',
    },
    {
        id: 30,
        name: 'Electric Massager Gun',
        price: '₦120,000',
        image: 'https://via.placeholder.com/300x400/BA55D3/FFFFFF?text=Massager',
        inStock: true,
        reviews: 4.9,
        originalPrice: '₦150,000',
        discountedPrice: '₦120,000',
    },
];

const HealthProductsSlider = () => {
    return (
        <section className="container mx-auto py-8 px-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Health Products</h2>
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
                {healthProducts.map((product) => (
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

export default HealthProductsSlider;