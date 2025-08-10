// src/pages/OrdersPage.jsx
import React, { useState, useEffect } from 'react';

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Simulate fetching user orders
        const fetchedOrders = [
            {
                id: 'ORD001',
                date: '2025-07-20',
                status: 'Delivered',
                total: '₦75,000',
                items: [
                    { name: 'Digital Blood Pressure Monitor', qty: 1, price: '₦65,000' },
                    { name: 'Immune Support Vitamins', qty: 1, price: '₦10,000' },
                ],
            },
            {
                id: 'ORD002',
                date: '2025-08-05',
                status: 'Processing',
                total: '₦49,999',
                items: [
                    { name: 'Protein Powder (Vanilla)', qty: 1, price: '₦49,999' },
                ],
            },
            {
                id: 'ORD003',
                date: '2025-08-08',
                status: 'Shipped',
                total: '₦18,000',
                items: [
                    { name: 'First Aid Kit (Compact)', qty: 1, price: '₦18,000' },
                ],
            },
        ];
        setOrders(fetchedOrders);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
            {orders.length === 0 ? (
                <p className="text-gray-500">You haven't placed any orders yet.</p>
            ) : (
                <div className="space-y-6">
                    {orders.map(order => (
                        <div key={order.id} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">Order #{order.id}</h2>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                        order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-blue-100 text-blue-800'
                                    }`}>
                                    {order.status}
                                </span>
                            </div>
                            <p className="text-gray-600 mb-2">Date: {order.date}</p>
                            <p className="text-gray-600 mb-4">Total: <span className="font-bold text-lg text-blue-600">{order.total}</span></p>

                            <h3 className="text-md font-medium mb-2">Items:</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                {order.items.map((item, index) => (
                                    <li key={index}>{item.name} (x{item.qty}) - {item.price}</li>
                                ))}
                            </ul>
                            {/* You could add a "View Details" button here */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrdersPage;