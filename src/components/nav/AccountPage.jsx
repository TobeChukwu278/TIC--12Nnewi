import React, { useState, useEffect } from 'react';
// Tailwind CSS is included via a CDN in the HTML file, so no import is needed here.

function AccountPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Function to fetch user data from the protected endpoint
    const fetchUserData = async () => {
        setLoading(true);
        setError('');

        const token = localStorage.getItem('authToken');
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
                localStorage.removeItem('token');
                setIsLoggedIn(false);
                throw new Error('Failed to fetch user data. Token might be invalid or expired.');
            }

            const data = await response.json();

            if (data.user) {
                setUser(data.user);
                setIsLoggedIn(true);
            }
        } catch (err) {
            console.error(err.message);
            setError(err.message);
            setIsLoggedIn(false);
        } finally {
            setLoading(false);
        }
    };

    // Use useEffect to fetch user data on component mount
    useEffect(() => {
        fetchUserData();
    }, []);

    // Handle form input changes for the login form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevData => ({ ...prevData, [name]: value }));
    };

    // Handle the login form submission
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
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
                await fetchUserData();
            } else {
                throw new Error('No token received from the server. Check your backend response format.');
            }
        } catch (err) {
            console.error('Login process failed:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Function to handle user logout
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setUser(null);
    };

    // Render the component based on the state
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
                // Profile Card
                <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
                    <h2 className="text-3xl font-bold text-center mb-6">Welcome, {user.email}!</h2>
                    <div className="space-y-4 text-lg">
                        <p><strong>Member Since:</strong> {user.memberSince}</p>
                        {/* {user.phone && <p><strong>Phone:</strong> {user.phone}</p>} */}
                        {/* {user.address && <p><strong>Address:</strong> {user.address}</p>} */}
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full mt-6 py-3 px-6 text-lg font-semibold rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors duration-300 transform"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                // Login Card
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
