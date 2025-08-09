// src/components/NewProductsSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaHeart, FaEye } from 'react-icons/fa';

// Placeholder product data (copy the `latestProducts` data)
const newProducts = [
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

const NewProductsSlider = () => {
    // No state needed, as this is a static list
    const productsToDisplay = newProducts;

    return (
        <section className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">New Products</h2>
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

export default NewProductsSlider;