// src/pages/ProductDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../data/allProducts';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = allProducts.find(p => p.id === parseInt(id));

    if (!product) {
        return <div className="container mx-auto py-8 text-center">Product not found.</div>;
    }

    const similarProducts = allProducts.filter(p => p.id !== product.id).slice(0, 4);

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Product Image Section */}
                <div className="flex justify-center items-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full max-w-md h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* Product Details Section */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-2">{product.name}</h1>

                    <div className="flex items-center text-gray-600 mb-4">
                        <div className="flex text-yellow-400 mr-2">
                            {[...Array(5)].map((star, i) => (
                                <FaStar key={i} className={i < Math.round(product.reviews) ? '' : 'text-gray-300'} />
                            ))}
                        </div>
                        <span>({product.reviews} / 5)</span>
                    </div>

                    <div className="flex items-baseline mb-4">
                        <p className="text-gray-500 line-through text-lg mr-2">{product.originalPrice}</p>
                        <p className="text-3xl font-bold text-blue-600">{product.discountedPrice}</p>
                    </div>

                    <p className="text-lg text-gray-700 mb-6">{product.description}</p>

                    <div className="flex items-center mb-6">
                        <p className={`text-xl font-semibold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </p>
                    </div>

                    {/* Quantity and Checkout Option */}
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <input
                            type="number"
                            min="1"
                            defaultValue="1"
                            className="w-24 p-2 border rounded-md text-center"
                        />
                        <button className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                            <FaShoppingCart className="mr-2" />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Similar Products Section */}
            <div className="border-t pt-8">
                <h2 className="text-3xl font-bold mb-6">Similar Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {similarProducts.map(similarProduct => (
                        <ProductCard key={similarProduct.id} product={similarProduct} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;