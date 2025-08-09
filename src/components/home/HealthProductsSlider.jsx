// src/components/HealthProductsSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaHeart, FaEye } from 'react-icons/fa';

// Placeholder product data for health items
const healthProducts = [
    {
        id: 25,
        name: 'Immune Support Vitamins',
        price: '$22.50',
        image: 'https://via.placeholder.com/300x400/FFD700/000000?text=Vitamins',
        inStock: true,
        reviews: 4.7,
        originalPrice: '$28.00',
        discountedPrice: '$22.50',
    },
    {
        id: 26,
        name: 'Digital Blood Pressure Monitor',
        price: '$65.00',
        image: 'https://via.placeholder.com/300x400/ADFF2F/000000?text=BP+Monitor',
        inStock: true,
        reviews: 4.5,
        originalPrice: '$75.00',
        discountedPrice: '$65.00',
    },
    {
        id: 27,
        name: 'Protein Powder (Vanilla)',
        price: '$49.99',
        image: 'https://via.placeholder.com/300x400/F0F8FF/000000?text=Protein+Powder',
        inStock: true,
        reviews: 4.8,
        originalPrice: '$59.99',
        discountedPrice: '$49.99',
    },
    {
        id: 28,
        name: 'Smart Body Composition Scale',
        price: '$89.00',
        image: 'https://via.placeholder.com/300x400/98FB98/000000?text=Smart+Scale',
        inStock: false, // Example: Out of stock
        reviews: 4.6,
        originalPrice: '$100.00',
        discountedPrice: '$89.00',
    },
    {
        id: 29,
        name: 'First Aid Kit (Compact)',
        price: '$18.00',
        image: 'https://via.placeholder.com/300x400/FF6347/FFFFFF?text=First+Aid',
        inStock: true,
        reviews: 4.3,
        originalPrice: '$22.00',
        discountedPrice: '$18.00',
    },
    {
        id: 30,
        name: 'Electric Massager Gun',
        price: '$120.00',
        image: 'https://via.placeholder.com/300x400/BA55D3/FFFFFF?text=Massager',
        inStock: true,
        reviews: 4.9,
        originalPrice: '$150.00',
        discountedPrice: '$120.00',
    },
];

const HealthProductsSlider = () => {
    return (
        <section className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Health Products</h2>
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
                {healthProducts.map((product) => (
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

export default HealthProductsSlider;