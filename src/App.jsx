// // src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/nav/Nav';
import HomePage from './pages/Home';
import TechnologyGadgetsPage from './pages/TechnologyGadgetsPage';
import HandmadeCraftsPage from './pages/HandmadeCraftsPage';
import AgroTechPage from './pages/AgroTechPage';
import IndustrialProductsPage from './pages/IndustrialProductsPage';
import GroceriesPage from './pages/GroceriesPage';
import WellnessPage from './pages/WellnessPage';
import ProductDetailPage from './components/ProductDetailPage';
import SearchPage from './components/nav/SearchPage';
import WishlistPage from './components/nav/WishlistPage';
import OrdersPage from './components/nav/OrdersPage';
import AccountPage from './components/nav/AccountPage';
import Land from './Land/Land';
import LoginSignup from './components/LoginSignup';

const App = () => {
  const location = useLocation();

  /// Hide navigation only on the landing page (if you still use it somewhere)
  const pathsWithoutNav = ['/land']; // Change to '/land' if you want to hide nav only on Land

  // The navigation will now be visible on all pages EXCEPT for those in the pathsWithoutNav array.
  const showNavigation = !pathsWithoutNav.includes(location.pathname);

  return (
    <div className='px-2'>
      {/* Conditionally render the Navigation component based on the current path */}
      {showNavigation && <Navigation />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/land" element={<Land />} />
        <Route path="/technology-&-gadgets" element={<TechnologyGadgetsPage />} />
        <Route path="/leather-works/crafts" element={<HandmadeCraftsPage />} />
        <Route path="/agro-allied" element={<AgroTechPage />} />
        <Route path="/industrial-products" element={<IndustrialProductsPage />} />
        <Route path="/food-processing" element={<GroceriesPage />} />
        <Route path="/wellness" element={<WellnessPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </div>
  );
};

export default App;




// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// // ==========================================================
// // Main App Component
// // Handles login and registration views and redirects after login.
// // ==========================================================
// const App = () => {
//   // State for the current "page" or view
//   const [view, setView] = useState('login'); // Default view is login

//   // Handle successful login and redirect
//   const handleLoginSuccess = (newToken, newRole) => {
//     // Save token and role to localStorage
//     localStorage.setItem('token', newToken);
//     localStorage.setItem('role', newRole);

//     // Redirect the user to the appropriate dashboard URL
//     switch (newRole) {
//       case 'admin':
//         // NOTE: This assumes your server hosts the admin app at /admin
//         window.location.href = '/admin';
//         break;
//       case 'seller':
//         // NOTE: This assumes your server hosts the seller app at /seller
//         window.location.href = '/seller';
//         break;
//       case 'customer':
//       default:
//         // NOTE: This assumes your server hosts the customer app at /customer
//         window.location.href = '/customer';
//         break;
//     }
//   };

//   // Conditional rendering for different views/pages
//   let content;
//   switch (view) {
//     case 'login':
//       content = <LoginView onLoginSuccess={handleLoginSuccess} setView={setView} />;
//       break;
//     case 'register':
//       content = <RegisterView setView={setView} />;
//       break;
//     default:
//       content = <NotFoundView />;
//       break;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
//       <header className="w-full max-w-lg mb-8 text-center">
//         <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">TIC-Nnewi</h1>
//         <p className="text-lg text-gray-600 mt-2">Your shopping experience starts here.</p>
//       </header>
//       <main className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
//         {content}
//       </main>
//     </div>
//   );
// };

// // ==========================================================
// // Login View Component
// // ==========================================================
// const LoginView = ({ onLoginSuccess, setView }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   // State to toggle password visibility
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:3001/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       // Check if the response is ok
//       if (response.ok) {
//         const data = await response.json();
//         onLoginSuccess(data.token, data.role);
//       } else {
//         // Handle server errors
//         const errorData = await response.json();
//         switch (response.status) {
//           case 401:
//             // Assuming 401 is for invalid credentials
//             setMessage(errorData.error || 'Invalid email or password. Please try again.');
//             break;
//           case 400:
//             // Assuming 400 is for a bad request (e.g., invalid input format)
//             setMessage(errorData.error || 'The request was invalid. Please check your input.');
//             break;
//           default:
//             // Catch-all for other server errors
//             setMessage(errorData.error || 'Login failed due to a server error. Please try again later.');
//             break;
//         }
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setMessage('An error occurred. Please check your internet connection and try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSocialLogin = (provider) => {
//     setMessage(`Social login with ${provider} is not yet implemented. Please use email and password.`);
//   };

//   const handleForgotPassword = () => {
//     setMessage("Please contact support to reset your password. This functionality is not yet implemented.");
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <h2 className="text-2xl font-bold text-gray-700 mb-6">Log In</h2>
//       <form onSubmit={handleSubmit} className="w-full space-y-4">
//         <div>
//           <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="relative">
//           <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">Password</label>
//           <input
//             id="password"
//             type={showPassword ? 'text' : 'password'}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
//             aria-label={showPassword ? 'Hide password' : 'Show password'}
//           >
//             {/* Eye icon SVG */}
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//               {showPassword ? (
//                 // Eye with a slash (visible)
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0112 5.5c2.72 0 5.235 1.01 7.157 2.723A1.01 1.01 0 0020.25 8.5c.068.082.13.176.185.275.14.24.254.492.348.75.277.76.425 1.57.425 2.425a1.01 1.01 0 00-.075.394c-.032.14-.075.276-.126.408a1.01 1.01 0 00-.317.518A.993.993 0 0020.25 15c.068.082.13.176.185.275.14.24.254.492.348.75.277.76.425 1.57.425 2.425a1.01 1.01 0 00-.075.394c-.032.14-.075.276-.126.408a1.01 1.01 0 00-.317.518A.993.993 0 0020.25 22.5c-.068.082-.13-.176-.185-.275-.14-.24-.254-.492-.348-.75-.277-.76-.425-1.57-.425-2.425a1.01 1.01 0 00-.075-.394c-.032-.14-.075-.276-.126-.408a1.01 1.01 0 00-.317-.518A.993.993 0 0020.25 15" />
//               ) : (
//                 // Eye (hidden)
//                 <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.575 3.01 9.963 7.183a1.012 1.012 0 010 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.575-3.01-9.963-7.183z" />
//               )}
//             </svg>
//           </button>
//         </div>
//         <div className="flex justify-end text-sm">
//           <button
//             type="button"
//             onClick={handleForgotPassword}
//             className="text-blue-600 hover:underline"
//           >
//             Forgot password?
//           </button>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
//           disabled={loading}
//         >
//           {loading ? 'Logging In...' : 'Log In'}
//         </button>
//       </form>

//       <div className="flex items-center w-full my-4">
//         <hr className="flex-grow border-t border-gray-300" />
//         <span className="mx-2 text-gray-500 text-sm font-medium">OR</span>
//         <hr className="flex-grow border-t border-gray-300" />
//       </div>

//       <div className="w-full space-y-2">
//         <button
//           onClick={() => handleSocialLogin('Google')}
//           className="w-full bg-white text-gray-700 font-bold py-2 px-4 rounded-lg shadow-sm border border-gray-300 hover:bg-gray-50 transition duration-300"
//         >
//           <i className="fa-brands fa-google mr-2"></i> Log In with Google
//         </button>
//         <button
//           onClick={() => handleSocialLogin('Facebook')}
//           className="w-full bg-white text-gray-700 font-bold py-2 px-4 rounded-lg shadow-sm border border-gray-300 hover:bg-gray-50 transition duration-300"
//         >
//           <i className="fa-brands fa-facebook mr-2"></i> Log In with Facebook
//         </button>
//       </div>

//       {message && <p className="mt-4 text-red-500 text-center">{message}</p>}
//       <div className="mt-6 text-center">
//         <button
//           onClick={() => setView('register')}
//           className="text-sm text-blue-600 hover:underline"
//         >
//           Don't have an account? Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };
// LoginView.propTypes = {
//   onLoginSuccess: PropTypes.func.isRequired,
//   setView: PropTypes.func.isRequired,
// };

// // ==========================================================
// // Register View Component
// // ==========================================================
// const RegisterView = ({ setView }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   // State to toggle password visibility
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setLoading(true);

//     try {
//       const body = { email, password, role: 'customer' };
//       if (name) {
//         body.name = name;
//       }

//       const response = await fetch('http://localhost:3001/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//       });

//       // Check if the response is ok
//       if (response.ok) {
//         const _data = await response.json();
//         setMessage('Registration successful! You can now log in.');
//         setEmail('');
//         setPassword('');
//         setName('');
//         setTimeout(() => setView('login'), 2000);
//       } else {
//         // Handle server errors
//         const errorData = await response.json();
//         switch (response.status) {
//           case 409:
//             // Assuming 409 is for a conflict (e.g., email already exists)
//             setMessage(errorData.error || 'This email is already registered. Please log in or use a different email.');
//             break;
//           case 400:
//             // Assuming 400 is for a bad request
//             setMessage(errorData.error || 'Invalid registration details. Please check your input.');
//             break;
//           default:
//             // Catch-all for other server errors
//             setMessage(errorData.error || 'Registration failed due to a server error. Please try again later.');
//             break;
//         }
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//       setMessage('An error occurred. Please check your internet connection and try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSocialSignup = (provider) => {
//     setMessage(`Social signup with ${provider} is not yet implemented. Please use email and password.`);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <h2 className="text-2xl font-bold text-gray-700 mb-6">Register</h2>
//       <form onSubmit={handleSubmit} className="w-full space-y-4">
//         <div>
//           <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">Name</label>
//           <input
//             id="name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="relative">
//           <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">Password</label>
//           <input
//             id="password"
//             type={showPassword ? 'text' : 'password'}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
//             aria-label={showPassword ? 'Hide password' : 'Show password'}
//           >
//             {/* Eye icon SVG */}
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//               {showPassword ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0112 5.5c2.72 0 5.235 1.01 7.157 2.723A1.01 1.01 0 0020.25 8.5c.068.082.13.176.185.275.14.24.254.492.348.75.277.76.425 1.57.425 2.425a1.01 1.01 0 00-.075.394c-.032.14-.075.276-.126.408a1.01 1.01 0 00-.317.518A.993.993 0 0020.25 15c.068.082.13.176.185.275.14.24.254.492.348.75.277.76.425 1.57.425 2.425a1.01 1.01 0 00-.075.394c-.032-.14-.075-.276-.126-.408a1.01 1.01 0 00-.317-.518A.993.993 0 0020.25 15" />
//               ) : (
//                 <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.575 3.01 9.963 7.183a1.012 1.012 0 010 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.575-3.01-9.963-7.183z" />
//               )}
//             </svg>
//           </button>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
//           disabled={loading}
//         >
//           {loading ? 'Registering...' : 'Register'}
//         </button>
//       </form>

//       <div className="flex items-center w-full my-4">
//         <hr className="flex-grow border-t border-gray-300" />
//         <span className="mx-2 text-gray-500 text-sm font-medium">OR</span>
//         <hr className="flex-grow border-t border-gray-300" />
//       </div>

//       <div className="w-full space-y-2">
//         <button
//           onClick={() => handleSocialSignup('Google')}
//           className="w-full bg-white text-gray-700 font-bold py-2 px-4 rounded-lg shadow-sm border border-gray-300 hover:bg-gray-50 transition duration-300"
//         >
//           <i className="fa-brands fa-google mr-2"></i> Sign Up with Google
//         </button>
//         <button
//           onClick={() => handleSocialSignup('Facebook')}
//           className="w-full bg-white text-gray-700 font-bold py-2 px-4 rounded-lg shadow-sm border border-gray-300 hover:bg-gray-50 transition duration-300"
//         >
//           <i className="fa-brands fa-facebook mr-2"></i> Sign Up with Facebook
//         </button>
//       </div>

//       {message && <p className="mt-4 text-center text-green-600">{message}</p>}
//       <div className="mt-6 text-center">
//         <button
//           onClick={() => setView('login')}
//           className="text-sm text-blue-600 hover:underline"
//         >
//           Already have an account? Log In
//         </button>
//       </div>
//     </div>
//   );
// };
// RegisterView.propTypes = {
//   setView: PropTypes.func.isRequired,
// };

// const NotFoundView = () => (
//   <div className="text-center">
//     <h2 className="text-2xl font-bold text-gray-700">404 - Not Found</h2>
//     <p>The page you requested could not be found.</p>
//   </div>
// );

// export default App;


// import React, { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// // The main application component.
// const App = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [isLoginView, setIsLoginView] = useState(true);
//   const [message, setMessage] = useState('');
//   const [_role, setRole] = useState(null); // To store the user's role

//   // Handles form submission for both login and registration.
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     try {
//       if (isLoginView) {
//         // --- Login Logic ---
//         // Fetch all users to find a match.
//         const response = await fetch('http://localhost:3001/users');
//         if (!response.ok) {
//           throw new Error('Failed to fetch users from server.');
//         }
//         const users = await response.json();

//         // Find the user with the matching email and password.
//         const user = users.find(u => u.email === email && u.password === password);

//         if (user) {
//           setMessage(`Login successful! Welcome, ${user.email}.`);
//           setRole(user.role);
//           console.log('Logged in user:', user);

//           // In a real app, you would handle redirection here.
//           // For this example, we'll just log the role.
//           if (user.role === 'admin') {
//             console.log('Redirecting to Admin Dashboard...');
//           } else {
//             console.log('Redirecting to Customer Dashboard...');
//           }

//         } else {
//           setMessage('Login failed: Invalid email or password.');
//           setRole(null);
//         }

//       } else {
//         // --- Registration Logic ---
//         // First, check if the email already exists.
//         const checkResponse = await fetch(`http://localhost:3001/users?email=${email}`);
//         if (!checkResponse.ok) {
//           throw new Error('Failed to check for existing user.');
//         }
//         const existingUsers = await checkResponse.json();

//         if (existingUsers.length > 0) {
//           setMessage('Registration failed: An account with this email already exists.');
//           return;
//         }

//         // If not, post the new user to the users endpoint.
//         const newUser = { email, password, name, role: 'customer' };
//         const response = await fetch('http://localhost:3001/users', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(newUser),
//         });

//         if (response.ok) {
//           setMessage('Registration successful! Please log in.');
//           setIsLoginView(true); // Switch to login view after successful registration.
//         } else {
//           setMessage('Registration failed. Please try again.');
//         }
//       }
//     } catch (error) {
//       setMessage(`An error occurred: ${error.message}`);
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
//           {isLoginView ? 'Welcome Back!' : 'Create an Account'}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//           />
//           {!isLoginView && (
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//             />
//           )}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             {isLoginView ? 'Log In' : 'Sign Up'}
//           </button>
//         </form>
//         {message && (
//           <div className={`mt-6 text-center text-sm font-medium ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
//             {message}
//           </div>
//         )}
//         <div className="mt-6 text-center text-sm">
//           <a
//             href="#"
//             onClick={() => setIsLoginView(!isLoginView)}
//             className="text-blue-600 hover:text-blue-800 transition duration-200 font-medium"
//           >
//             {isLoginView ? 'Don\'t have an account? Sign Up' : 'Already have an account? Log In'}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);



// import React, { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// // The main application component.
// const App = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [isLoginView, setIsLoginView] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // New state to manage login status
//   const [message, setMessage] = useState('');
//   const [role, setRole] = useState(null);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false); // New state for password visibility

//   // A simple component to show after successful login.
//   const Dashboard = ({ userEmail, userRole, onLogout }) => (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome!</h2>
//         <p className="text-gray-600 mb-2">You are logged in as:</p>
//         <p className="font-semibold text-lg text-blue-600 mb-6">{userEmail}</p>
//         <p className="text-gray-600 mb-6">Your role is: <span className="font-semibold">{userRole}</span></p>
//         <button
//           onClick={onLogout}
//           className="bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//         >
//           Log Out
//         </button>
//       </div>
//     </div>
//   );

//   // Toggles the password visibility state.
//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   // Handles form submission for both login and registration.
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     try {
//       if (isLoginView) {
//         // --- Login Logic ---
//         const response = await fetch('http://localhost:3001/users');
//         if (!response.ok) {
//           throw new Error('Failed to fetch users from server.');
//         }
//         const users = await response.json();

//         const user = users.find(u => u.email === email && u.password === password);

//         if (user) {
//           setMessage(`Login successful! Welcome, ${user.email}.`);
//           setRole(user.role);
//           setIsLoggedIn(true); // Set login status to true
//           console.log('Logged in user:', user);
//         } else {
//           setMessage('Login failed: Invalid email or password.');
//           setRole(null);
//         }
//       } else {
//         // --- Registration Logic ---
//         const checkResponse = await fetch(`http://localhost:3001/users?email=${email}`);
//         if (!checkResponse.ok) {
//           throw new Error('Failed to check for existing user.');
//         }
//         const existingUsers = await checkResponse.json();

//         if (existingUsers.length > 0) {
//           setMessage('Registration failed: An account with this email already exists.');
//           return;
//         }

//         const newUser = { email, password, name, role: 'customer' };
//         const response = await fetch('http://localhost:3001/users', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(newUser),
//         });

//         if (response.ok) {
//           setMessage('Registration successful! Please log in.');
//           setIsLoginView(true);
//         } else {
//           setMessage('Registration failed. Please try again.');
//         }
//       }
//     } catch (error) {
//       setMessage(`An error occurred: ${error.message}`);
//       console.error('Error:', error);
//     }
//   };

//   // If the user is logged in, show the Dashboard.
//   if (isLoggedIn) {
//     return <Dashboard userEmail={email} userRole={role} onLogout={() => setIsLoggedIn(false)} />;
//   }

//   // Otherwise, show the login/registration form.
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
//           {isLoginView ? 'Welcome Back!' : 'Create an Account'}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//           />
//           <div className="relative">
//             <input
//               type={isPasswordVisible ? 'text' : 'password'}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//             />
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//               className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500"
//               aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
//             >
//               {isPasswordVisible ? (
//                 // Eye-slash icon (hide password)
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.981 8.841A10 10 0 0113 4a10 10 0 019.019 4.841M1.98 12a10 10 0 0118.04-1.282M12 17a5 5 0 100-10 5 5 0 000 10zM12 17v2m0 0a2 2 0 100 4 2 2 0 000-4z" />
//                 </svg>
//               ) : (
//                 // Eye icon (show password)
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.575 3.01 9.963 7.182a1.012 1.012 0 010 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.575-3.01-9.963-7.182z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//               )}
//             </button>
//           </div>

//           {!isLoginView && (
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//             />
//           )}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             {isLoginView ? 'Log In' : 'Sign Up'}
//           </button>
//         </form>
//         {message && (
//           <div className={`mt-6 text-center text-sm font-medium ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
//             {message}
//           </div>
//         )}
//         <div className="mt-6 text-center text-sm">
//           <a
//             href="#"
//             onClick={() => setIsLoginView(!isLoginView)}
//             className="text-blue-600 hover:text-blue-800 transition duration-200 font-medium"
//           >
//             {isLoginView ? 'Don\'t have an account? Sign Up' : 'Already have an account? Log In'}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);

