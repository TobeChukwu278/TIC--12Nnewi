// // src/components/ProductSection.jsx
// import React from 'react';
// const ProductSection = ({ title, category }) => {
//   // Fetch products based on the 'category' prop
//   const products = [
//     // Placeholder product data for now
//     { id: 1, name: 'Product A', price: 29.99 },
//     { id: 2, name: 'Product B', price: 45.00 }
//   ];
//   return (
//     <div className="py-8">
//       <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
//       <div className="flex justify-center gap-6">
//         {products.map(product => (
//           <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">{product.name}</h3>
//             <p className="text-gray-600">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default ProductSection;




import React from 'react';

const ProductSection = ({ title, category }) => {
    // Let's create some dummy data that would be returned from an API
    const productData = {
        popular: [
            { id: 1, name: 'Popular Item 1', price: 50.00 },
            { id: 2, name: 'Popular Item 2', price: 75.50 },
        ],
        new: [
            { id: 3, name: 'New Item 1', price: 30.00 },
            { id: 4, name: 'New Item 2', price: 42.75 },
        ],
        featured: [
            { id: 5, name: 'Featured Item 1', price: 99.99 },
            { id: 6, name: 'Featured Item 2', price: 150.00 },
        ],
    };

    // Select the correct list of products based on the 'category' prop
    const productsToDisplay = productData[category];

    return (
        <div className="py-8">
            <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
            <div className="flex justify-center gap-6">
                {productsToDisplay.map(product => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-gray-600">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSection;