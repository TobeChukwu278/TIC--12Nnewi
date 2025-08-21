import React, { useState, useEffect } from 'react';
import { LuShoppingBag, LuWallet, LuHeart, LuMapPin, LuSettings, LuLogOut } from 'react-icons/lu';
import { FaUserCircle } from 'react-icons/fa'; // Switched to Font Awesome for the user circle icon

function AccountPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('orders');

    // State to hold fetched data for each section
    const [recentOrders, setRecentOrders] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [addresses, setAddresses] = useState([]);

    /**
     * Fetches user profile data from the protected backend endpoint.
     * This function is called on component mount and after a successful login.
     */
    const fetchUserData = async () => {
        setLoading(true);
        setError('');

        const token = localStorage.getItem('token');
        console.log('Token being sent for profile request:', token);

        if (!token) {
            setIsLoggedIn(false);
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/user/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                // If the token is invalid or expired, clear it and force a login
                localStorage.removeItem('token');
                setIsLoggedIn(false);
                throw new Error('Failed to fetch user data. Please log in again.');
            }

            const data = await response.json();

            if (data.user) {
                // Set the default user data, including a placeholder name if none exists
                setUser({
                    ...data.user,
                    name: data.user.name || data.user.email.split('@')[0],
                    membership: data.user.membership || 'New Customer'
                });
                setIsLoggedIn(true);

                // Now that the user is logged in, fetch the dashboard data.
                await fetchDashboardData(token);
            }
        } catch (err) {
            console.error('Fetch user data failed:', err);
            setError(err.message);
            setIsLoggedIn(false);
        } finally {
            setLoading(false);
        }
    };

    /**
     * Fetches all the data required for the dashboard sections.
     * This separates the dashboard data fetching from the main profile fetch.
     * @param {string} token - The auth token to use for API requests.
     */
    const fetchDashboardData = async (token) => {
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        try {
            // Fetch recent orders
            const ordersResponse = await fetch('http://localhost:3001/api/user/orders', { headers });
            if (ordersResponse.ok) {
                const ordersData = await ordersResponse.json();
                setRecentOrders(ordersData.orders || []);
            }

            // Fetch wishlist items
            const wishlistResponse = await fetch('http://localhost:3001/api/user/wishlist', { headers });
            if (wishlistResponse.ok) {
                const wishlistData = await wishlistResponse.json();
                setWishlistItems(wishlistData.items || []);
            }

            // Fetch payment methods
            const paymentsResponse = await fetch('http://localhost:3001/api/user/payments', { headers });
            if (paymentsResponse.ok) {
                const paymentsData = await paymentsResponse.json();
                setPaymentMethods(paymentsData.payments || []);
            }

            // Fetch addresses
            const addressesResponse = await fetch('http://localhost:3001/api/user/addresses', { headers });
            if (addressesResponse.ok) {
                const addressesData = await addressesResponse.json();
                setAddresses(addressesData.addresses || []);
            }

        } catch (err) {
            console.error('Failed to fetch dashboard data:', err);
            setError('Failed to load dashboard data. Please try again.');
        }
    };

    // Use useEffect to fetch user data on component mount
    useEffect(() => {
        fetchUserData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData),
            });

            console.log('Login request response:', response);

            if (!response.ok) {
                const errorData = await response.json();
                console.log('Login error data:', errorData);
                throw new Error(errorData.error || 'Login failed due to an unknown error.');
            }

            const data = await response.json();

            if (data.token) {
                localStorage.setItem('token', data.token);
                setIsLoggedIn(true);
                // After successful login, re-fetch all user data
                await fetchUserData();
            } else {
                throw new Error('No token received from the server.');
            }
        } catch (err) {
            console.error('Login process failed:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setUser(null);
    };

    // Renders the content for the currently active tab.
    const renderContent = () => {
        switch (activeTab) {
            case 'orders':
                return (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold mb-4">Recent Activity</h3>
                        {recentOrders.length > 0 ? (
                            recentOrders.map(order => (
                                <div key={order.id} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-md">
                                    <img src={order.image} alt="Product" className="w-16 h-16 rounded-md object-cover" />
                                    <div className="flex-1 text-center sm:text-left">
                                        <p className="font-semibold text-lg">Order #{order.id}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{order.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold">{order.price}</p>
                                        <span className={`text-sm px-2 py-1 rounded-full ${order.status === 'Delivered' ? 'text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900' : 'text-yellow-700 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-900'}`}>{order.status}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 dark:text-gray-400">No recent orders found.</p>
                        )}
                        <button className="w-full py-2 rounded-lg text-blue-600 dark:text-blue-400 hover:underline">View all orders</button>
                    </div>
                );
            case 'wishlist':
                return (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold mb-4">Wishlist & Saved Items</h3>
                        {wishlistItems.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {wishlistItems.map(item => (
                                    <div key={item.id} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-md flex flex-col items-center">
                                        <img src={item.image} alt={item.name} className="w-32 h-32 rounded-md mb-2 object-cover" />
                                        <p className="font-semibold text-center">{item.name}</p>
                                        <p className="text-gray-500 dark:text-gray-400">{item.price}</p>
                                        <button className="mt-2 py-1 px-3 text-sm rounded-lg bg-blue-500 hover:bg-blue-600 text-white">Move to Cart</button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500 dark:text-gray-400">Your wishlist is empty.</p>
                        )}
                    </div>
                );
            case 'payments':
                return (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold mb-4">Payments & Wallet</h3>
                        {paymentMethods.length > 0 ? (
                            paymentMethods.map(card => (
                                <div key={card.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-md">
                                    <div className="flex items-center space-x-3">
                                        <LuWallet size={24} />
                                        <p className="font-semibold">{card.type} ending in {card.last4}</p>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400">Exp: {card.expiry}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 dark:text-gray-400">No saved payment methods.</p>
                        )}
                        <button className="w-full py-2 rounded-lg text-blue-600 dark:text-blue-400 hover:underline">Add / Manage Payments</button>
                    </div>
                );
            case 'addresses':
                return (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold mb-4">Addresses</h3>
                        {addresses.length > 0 ? (
                            addresses.map(address => (
                                <div key={address.id} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-md">
                                    <h4 className="font-semibold text-lg">{address.type} Address</h4>
                                    <p className="text-gray-500 dark:text-gray-400">{address.street}</p>
                                    <p className="text-gray-500 dark:text-gray-400">{address.city}, {address.state} {address.zip}</p>
                                    <p className="text-gray-500 dark:text-gray-400">{address.country}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 dark:text-gray-400">No saved addresses.</p>
                        )}
                        <button className="w-full py-2 rounded-lg text-blue-600 dark:text-blue-400 hover:underline">Add / Edit Addresses</button>
                    </div>
                );
            case 'settings':
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold mb-4">Account Settings</h3>
                        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-md">
                            <h4 className="font-semibold text-lg mb-2">Edit Profile</h4>
                            <p className="text-gray-500 dark:text-gray-400">Change your name, email, and contact information.</p>
                            <button className="mt-2 py-1 px-3 text-sm rounded-lg bg-blue-500 hover:bg-blue-600 text-white">Edit Profile</button>
                        </div>
                        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-md">
                            <h4 className="font-semibold text-lg mb-2">Change Password</h4>
                            <p className="text-gray-500 dark:text-gray-400">Manage your account security.</p>
                            <button className="mt-2 py-1 px-3 text-sm rounded-lg bg-blue-500 hover:bg-blue-600 text-white">Change Password</button>
                        </div>
                        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-md">
                            <h4 className="font-semibold text-lg mb-2">Last Login</h4>
                            <p className="text-gray-500 dark:text-gray-400">Last login: {user?.memberSince} from Chrome on Android.</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full py-3 px-6 text-lg font-semibold rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors duration-300 transform"
                        >
                            <LuLogOut className="inline-block mr-2" />
                            Log Out
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <div className="text-xl font-semibold">Loading...</div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
            {isLoggedIn ? (
                // Customer-facing dashboard
                <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 flex flex-col md:flex-row gap-8">
                    {/* Sidebar / Navigation */}
                    <div className="flex flex-col items-center md:items-start md:w-1/4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 pb-4 md:pr-8">
                        {/* Profile Header */}
                        <div className="flex flex-col items-center mb-6">
                            <FaUserCircle size={80} className="text-gray-400 dark:text-gray-500 mb-2" />
                            <h2 className="text-xl font-bold text-center md:text-left">{user?.name} 👋</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">{user?.membership}</p>
                        </div>

                        {/* Navigation Tabs */}
                        <div className="w-full space-y-2">
                            <button
                                className={`w-full text-left flex items-center p-3 rounded-lg font-medium transition-colors duration-200 ${activeTab === 'orders' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                onClick={() => setActiveTab('orders')}
                            >
                                <LuShoppingBag size={20} className="mr-3" /> Recent Activity
                            </button>
                            <button
                                className={`w-full text-left flex items-center p-3 rounded-lg font-medium transition-colors duration-200 ${activeTab === 'wishlist' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                onClick={() => setActiveTab('wishlist')}
                            >
                                <LuHeart size={20} className="mr-3" /> Wishlist
                            </button>
                            <button
                                className={`w-full text-left flex items-center p-3 rounded-lg font-medium transition-colors duration-200 ${activeTab === 'payments' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                onClick={() => setActiveTab('payments')}
                            >
                                <LuWallet size={20} className="mr-3" /> Payments & Wallet
                            </button>
                            <button
                                className={`w-full text-left flex items-center p-3 rounded-lg font-medium transition-colors duration-200 ${activeTab === 'addresses' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                onClick={() => setActiveTab('addresses')}
                            >
                                <LuMapPin size={20} className="mr-3" /> Addresses
                            </button>
                            <button
                                className={`w-full text-left flex items-center p-3 rounded-lg font-medium transition-colors duration-200 ${activeTab === 'settings' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                onClick={() => setActiveTab('settings')}
                            >
                                <LuSettings size={20} className="mr-3" /> Account Settings
                            </button>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 mt-8 md:mt-0">
                        {renderContent()}
                    </div>
                </div>
            ) : (
                // Login Card (shown if not logged in)
                <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
                    <h2 className="text-3xl font-bold text-center mb-6">Log In to Your Account</h2>
                    {error && (
                        <div className="mb-4 p-3 rounded-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 border border-red-200 dark:border-red-700">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={loginData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={loginData.password}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-6 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 transform"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default AccountPage;
