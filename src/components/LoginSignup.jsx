// import React, { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';

// // ==========================================================
// // Main App Component
// // ==========================================================
// const App = () => {
//     // State for user authentication, role, and the current "page" or view
//     const [token, setToken] = useState(null);
//     const [_role, setRole] = useState(null); // The '_' prefix is a common convention for unused variables
//     const [view, setView] = useState('login'); // Default view is login

//     // Use a ref to store the token for cleanup
//     const tokenRef = useRef(null);

//     useEffect(() => {
//         // On component mount, try to load a token from localStorage
//         const savedToken = localStorage.getItem('token');
//         const savedRole = localStorage.getItem('role');
//         tokenRef.current = savedToken;

//         // If a token and role are found, set the state and navigate to the correct dashboard
//         if (savedToken && savedRole) {
//             setToken(savedToken);
//             setRole(savedRole);
//             // Conditionally set the view based on the saved role
//             switch (savedRole) {
//                 case 'admin':
//                     setView('admin');
//                     break;
//                 case 'seller':
//                     setView('seller');
//                     break;
//                 case 'customer':
//                 default:
//                     setView('customer');
//                     break;
//             }
//         }
//     }, []);

//     // Handle successful login
//     const handleLoginSuccess = (newToken, newRole) => {
//         setToken(newToken);
//         setRole(newRole);
//         tokenRef.current = newToken;
//         localStorage.setItem('token', newToken);
//         localStorage.setItem('role', newRole);
//         // Navigate to the correct dashboard based on the role
//         switch (newRole) {
//             case 'admin':
//                 setView('admin');
//                 break;
//             case 'seller':
//                 setView('seller');
//                 break;
//             case 'customer':
//             default:
//                 setView('customer');
//                 break;
//         }
//     };

//     // Handle logout
//     const handleLogout = () => {
//         setToken(null);
//         setRole(null);
//         tokenRef.current = null;
//         localStorage.removeItem('token');
//         localStorage.removeItem('role');
//         setView('login');
//     };

//     // Conditional rendering for different views/pages
//     let content;
//     switch (view) {
//         case 'login':
//             content = <LoginView onLoginSuccess={handleLoginSuccess} setView={setView} />;
//             break;
//         case 'register':
//             content = <RegisterView setView={setView} />;
//             break;
//         case 'customer':
//             content = <CustomerDashboard onLogout={handleLogout} />;
//             break;
//         case 'seller':
//             content = <SellerDashboard onLogout={handleLogout} token={token} />;
//             break;
//         case 'admin':
//             content = <AdminDashboard onLogout={handleLogout} />;
//             break;
//         default:
//             content = <NotFoundView />;
//             break;
//     }

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
//             <header className="w-full max-w-lg mb-8 text-center">
//                 <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">TIC-Nnewi</h1>
//                 <p className="text-lg text-gray-600 mt-2">Your shopping experience starts here.</p>
//             </header>
//             <main className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
//                 {content}
//             </main>
//         </div>
//     );
// };

// // ==========================================================
// // Login View Component
// // ==========================================================
// const LoginView = ({ onLoginSuccess, setView }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage('');
//         setLoading(true);

//         try {
//             const response = await fetch('http://localhost:3001/api/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();
//             if (response.ok) {
//                 // Success: pass token and role to the parent component
//                 onLoginSuccess(data.token, data.role);
//             } else {
//                 setMessage(data.error || 'Login failed.');
//             }
//         } catch (error) {
//             console.error('Login error:', error);
//             setMessage('An error occurred. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Function to handle placeholder social login
//     const handleSocialLogin = (provider) => {
//         setMessage(`Social login with ${provider} is not yet implemented. Please use email and password.`);
//     };

//     return (
//         <div className="flex flex-col items-center">
//             <h2 className="text-2xl font-bold text-gray-700 mb-6">Log In</h2>
//             <form onSubmit={handleSubmit} className="w-full space-y-4">
//                 <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">Email</label>
//                     <input
//                         id="email"
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">Password</label>
//                     <input
//                         id="password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         required
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
//                     disabled={loading}
//                 >
//                     {loading ? 'Logging In...' : 'Log In'}
//                 </button>
//             </form>

//             <div className="flex items-center w-full my-4">
//                 <hr className="flex-grow border-t border-gray-300" />
//                 <span className="mx-2 text-gray-500 text-sm font-medium">OR</span>
//                 <hr className="flex-grow border-t border-gray-300" />
//             </div>

//             <div className="w-full space-y-2">
//                 <button
//                     onClick={() => handleSocialLogin('Google')}
//                     className="w-full bg-white text-gray-700 font-bold py-2 px-4 rounded-lg shadow-sm border border-gray-300 hover:bg-gray-50 transition duration-300"
//                 >
//                     <i className="fa-brands fa-google mr-2"></i> Log In with Google
//                 </button>
//                 <button
//                     onClick={() => handleSocialLogin('Facebook')}
//                     className="w-full bg-white text-gray-700 font-bold py-2 px-4 rounded-lg shadow-sm border border-gray-300 hover:bg-gray-50 transition duration-300"
//                 >
//                     <i className="fa-brands fa-facebook mr-2"></i> Log In with Facebook
//                 </button>
//             </div>

//             {message && <p className="mt-4 text-red-500 text-center">{message}</p>}
//             <div className="mt-6 text-center">
//                 <button
//                     onClick={() => setView('register')}
//                     className="text-sm text-blue-600 hover:underline"
//                 >
//                     Don't have an account? Sign Up
//                 </button>
//             </div>
//         </div>
//     );
// };
// LoginView.propTypes = {
//     onLoginSuccess: PropTypes.func.isRequired,
//     setView: PropTypes.func.isRequired,
// };

// // ==========================================================
// // Register View Component
// // ==========================================================
// const RegisterView = ({ setView }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [message, setMessage] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage('');
//         setLoading(true);

//         try {
//             // No need to declare a separate 'role' variable. Just use the string directly.
//             const body = { email, password, role: 'customer' };
//             if (name) {
//                 body.name = name;
//             }

//             const response = await fetch('http://localhost:3001/api/register', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(body),
//             });

//             const data = await response.json();
//             if (response.ok) {
//                 setMessage('Registration successful! You can now log in.');
//                 setEmail('');
//                 setPassword('');
//                 setName('');
//                 setTimeout(() => setView('login'), 2000); // Redirect to login
//             } else {
//                 setMessage(data.error || 'Registration failed.');
//             }
//         } catch (error) {
//             console.error('Registration error:', error);
//             setMessage('An error occurred. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Function to handle placeholder social signup
//     const handleSocialSignup = (provider) => {
//         setMessage(`Social signup with ${provider} is not yet implemented. Please use email and password.`);
//     };

//     return (
//         <div className="flex flex-col items-center">
//             <h2 className="text-2xl font-bold text-gray-700 mb-6">Register</h2>
//             <form onSubmit={handleSubmit} className="w-full space-y-4">
//                 <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">Email</label>
//                     <input
//                         id="email"
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">Password</label>
//                     <input
//                         id="password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         required
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
//                     disabled={loading}
//                 >
//                     {loading ? 'Registering...' : 'Register'}
//                 </button>
//             </form>

//             <div className="flex items-center w-full my-4">
//                 <hr className="flex-grow border-t border-gray-300" />
//                 <span className="mx-2 text-gray-500 text-sm font-medium">OR</span>
//                 <hr className="flex-grow border-t border-gray-300" />
//             </div>

//             <div className="w-full space-y-2">
//                 <button
//                     onClick={() => handleSocialSignup('Google')}
//                     className="w-full bg-white text-gray-700 font-bold py-2 px-4 rounded-lg shadow-sm border border-gray-300 hover:bg-gray-50 transition duration-300"
//                 >
//                     <i className="fa-brands fa-google mr-2"></i> Sign Up with Google
//                 </button>
//                 <button
//                     onClick={() => handleSocialSignup('Facebook')}
//                     className="w-full bg-white text-gray-700 font-bold py-2 px-4 rounded-lg shadow-sm border border-gray-300 hover:bg-gray-50 transition duration-300"
//                 >
//                     <i className="fa-brands fa-facebook mr-2"></i> Sign Up with Facebook
//                 </button>
//             </div>

//             {message && <p className="mt-4 text-center text-green-600">{message}</p>}
//             <div className="mt-6 text-center">
//                 <button
//                     onClick={() => setView('login')}
//                     className="text-sm text-blue-600 hover:underline"
//                 >
//                     Already have an account? Log In
//                 </button>
//             </div>
//         </div>
//     );
// };
// RegisterView.propTypes = {
//     setView: PropTypes.func.isRequired,
// };

// // ==========================================================
// // Dashboard Views
// // ==========================================================

// // Customer Dashboard
// const CustomerDashboard = ({ onLogout }) => (
//     <div className="text-center space-y-4">
//         <h2 className="text-2xl font-bold text-gray-700">Customer Dashboard</h2>
//         <p>Welcome, Customer! You can browse products here.</p>
//         <button
//             onClick={onLogout}
//             className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
//         >
//             Logout
//         </button>
//     </div>
// );
// CustomerDashboard.propTypes = {
//     onLogout: PropTypes.func.isRequired,
// };

// // Seller Dashboard
// const SellerDashboard = ({ onLogout, token }) => {
//     const [products, setProducts] = useState([]);
//     const [message, setMessage] = useState('Loading products...');

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await fetch('http://localhost:3001/api/seller/products', {
//                     method: 'GET',
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                     },
//                 });

//                 const data = await response.json();

//                 if (response.ok) {
//                     setProducts(data);
//                     setMessage('');
//                 } else {
//                     setMessage(data.message || 'Failed to fetch products.');
//                 }
//             } catch (error) {
//                 console.error('Fetch error:', error);
//                 setMessage('An error occurred while fetching products.');
//             }
//         };

//         if (token) {
//             fetchProducts();
//         }
//     }, [token]);

//     return (
//         <div className="space-y-4">
//             <div className="flex justify-between items-center">
//                 <h2 className="text-2xl font-bold text-gray-700">Seller Dashboard</h2>
//                 <button
//                     onClick={onLogout}
//                     className="bg-red-500 text-white text-sm font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
//                 >
//                     Logout
//                 </button>
//             </div>
//             <p>Welcome, Seller! Here are your products.</p>
//             {message ? (
//                 <p className="text-center text-gray-500">{message}</p>
//             ) : (
//                 <ul className="space-y-2">
//                     {products.length > 0 ? (
//                         products.map((product) => (
//                             <li key={product.id} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
//                                 <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
//                                 <p className="text-sm text-gray-600 mt-1">Price: ${product.price}</p>
//                                 <p className="text-sm text-gray-600">Stock: {product.stock}</p>
//                             </li>
//                         ))
//                     ) : (
//                         <p className="text-center text-gray-500">No products found for this seller.</p>
//                     )}
//                 </ul>
//             )}
//         </div>
//     );
// };
// SellerDashboard.propTypes = {
//     onLogout: PropTypes.func.isRequired,
//     token: PropTypes.string.isRequired,
// };

// // Admin Dashboard
// const AdminDashboard = ({ onLogout }) => (
//     <div className="text-center space-y-4">
//         <h2 className="text-2xl font-bold text-gray-700">Admin Dashboard</h2>
//         <p>Welcome, Admin! You have full control over the site.</p>
//         <button
//             onClick={onLogout}
//             className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
//         >
//             Logout
//         </button>
//     </div>
// );
// AdminDashboard.propTypes = {
//     onLogout: PropTypes.func.isRequired,
// };

// // Not Found View
// const NotFoundView = () => (
//     <div className="text-center">
//         <h2 className="text-2xl font-bold text-gray-700">404 - Not Found</h2>
//         <p>The page you requested could not be found.</p>
//     </div>
// );


// export default App;




import React, { useState } from 'react';
import PropTypes from 'prop-types';

// ==========================================================
// Login View Component
// ==========================================================
const LoginView = ({ onLoginSuccess, setView }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                onLoginSuccess(data.token, data.role);
            } else {
                setMessage(data.error || 'Login failed.');
            }
        } catch (error) {
            console.error('Login error:', error);
            setMessage('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleSocialLogin = (provider) => {
        setMessage(`Social login with ${provider} is not yet implemented. Please use email and password.`);
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Log In</h2>
            <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? 'Logging In...' : 'Log In'}
                </button>
            </form>

            <div className="flex items-center w-full my-4">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="mx-2 text-gray-500 text-sm font-medium">OR</span>
                <hr className="flex-grow border-t border-gray-300" />
            </div>

            <div className="w-full space-y-2">
                <button
                    onClick={() => handleSocialLogin('Google')}
                    className="w-full bg-white text-gray-700 font-bold py-2 px-4 rounded-lg shadow-sm border border-gray-300 hover:bg-gray-50 transition duration-300"
                >
                    <i className="fa-brands fa-google mr-2"></i> Log In with Google
                </button>
                <button
                    onClick={() => handleSocialLogin('Facebook')}
                    className="w-full bg-white text-gray-700 font-bold py-2 px-4 rounded-lg shadow-sm border border-gray-300 hover:bg-gray-50 transition duration-300"
                >
                    <i className="fa-brands fa-facebook mr-2"></i> Log In with Facebook
                </button>
            </div>

            {message && <p className="mt-4 text-red-500 text-center">{message}</p>}
            <div className="mt-6 text-center">
                <button
                    onClick={() => setView('register')}
                    className="text-sm text-blue-600 hover:underline"
                >
                    Don't have an account? Sign Up
                </button>
            </div>
        </div>
    );
};
LoginView.propTypes = {
    onLoginSuccess: PropTypes.func.isRequired,
    setView: PropTypes.func.isRequired,
};

// ==========================================================
// Register View Component
// ==========================================================
const RegisterView = ({ setView }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);

        try {
            const body = { email, password, role: 'customer' };
            if (name) {
                body.name = name;
            }

            const response = await fetch('http://localhost:3001/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Registration successful! You can now log in.');
                setEmail('');
                setPassword('');
                setName('');
                setTimeout(() => setView('login'), 2000);
            } else {
                setMessage(data.error || 'Registration failed.');
            }
        } catch (error) {
            console.error('Registration error:', error);
            setMessage('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleSocialSignup = (provider) => {
        setMessage(`Social signup with ${provider} is not yet implemented. Please use email and password.`);
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Register</h2>
            <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>

            <div className="flex items-center w-full my-4">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="mx-2 text-gray-500 text-sm font-medium">OR</span>
                <hr className="flex-grow border-t border-gray-300" />
            </div>

            <div className="w-full space-y-2">
                <button
                    onClick={() => handleSocialSignup('Google')}
                    className="w-full bg-white text-gray-700 font-bold py-2 px-4 rounded-lg shadow-sm border border-gray-300 hover:bg-gray-50 transition duration-300"
                >
                    <i className="fa-brands fa-google mr-2"></i> Sign Up with Google
                </button>
                <button
                    onClick={() => handleSocialSignup('Facebook')}
                    className="w-full bg-white text-gray-700 font-bold py-2 px-4 rounded-lg shadow-sm border border-gray-300 hover:bg-gray-50 transition duration-300"
                >
                    <i className="fa-brands fa-facebook mr-2"></i> Sign Up with Facebook
                </button>
            </div>

            {message && <p className="mt-4 text-center text-green-600">{message}</p>}
            <div className="mt-6 text-center">
                <button
                    onClick={() => setView('login')}
                    className="text-sm text-blue-600 hover:underline"
                >
                    Already have an account? Log In
                </button>
            </div>
        </div>
    );
};
RegisterView.propTypes = {
    setView: PropTypes.func.isRequired,
};

// ==========================================================
// LoginSignup Form Wrapper
// ==========================================================
const LoginSignup = () => {
    const [view, setView] = useState('login');
    const handleLoginSuccess = () => {
        // You can handle login success here or lift state up if needed
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
            <header className="w-full max-w-lg mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">TIC-Nnewi</h1>
                <p className="text-lg text-gray-600 mt-2">Your shopping experience starts here.</p>
            </header>
            <main className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
                {view === 'login' ? (
                    <LoginView onLoginSuccess={handleLoginSuccess} setView={setView} />
                ) : (
                    <RegisterView setView={setView} />
                )}
            </main>
        </div>
    );
};

export default LoginSignup;
