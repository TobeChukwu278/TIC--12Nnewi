// src/pages/AccountPage.jsx
import React, { useState, useEffect } from 'react';

const AccountPage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Simulate fetching user data
        const fetchedUser = {
            name: 'User Name',
            email: 'user.name@example.com',
            phone: '+234 801 234 5678',
            address: '123 Main Street, Lagos, Nigeria',
            memberSince: 'January 2024',
        };
        setUser(fetchedUser);
    }, []);

    if (!user) {
        return <div className="container mx-auto px-4 py-8 text-center text-gray-500">Loading account details...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">My Account</h1>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
                <div className="space-y-2">
                    <p><span className="font-medium">Name:</span> {user.name}</p>
                    <p><span className="font-medium">Email:</span> {user.email}</p>
                    <p><span className="font-medium">Phone:</span> {user.phone}</p>
                    <p><span className="font-medium">Address:</span> {user.address}</p>
                    <p><span className="font-medium">Member Since:</span> {user.memberSince}</p>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
                    Edit Profile
                </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                <ul className="space-y-2">
                    <li>
                        <button className="text-blue-600 hover:underline">Change Password</button>
                    </li>
                    <li>
                        <button className="text-blue-600 hover:underline">Notification Settings</button>
                    </li>
                    <li>
                        <button className="text-red-600 hover:underline">Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AccountPage;