import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
    const navigate = useNavigate();

    // 🔹 User and session
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // 🔹 Dashboard data
    const [addresses, setAddresses] = useState([]);
    const [paymentMethods, setPaymentMethods] = useState([]);

    // 🔹 UI state
    const [activeTab, setActiveTab] = useState("profile");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // 🔹 Modal state
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    // 🔹 Form state
    const [addressForm, setAddressForm] = useState({
        street_address: "",
        city: "",
        state: "",
        zip_code: "",
        country: "",
    });

    const [paymentForm, setPaymentForm] = useState({
        card_number: "",
        expiry_date: "",
        cardholder_name: "",
    });

    // ===================================================
    // Fetch dashboard data
    // ===================================================
    // ===================================================
    // Fetch account overview
    // ===================================================
    const fetchAccountOverview = async (token) => {
        try {
            setLoading(true);

            const [addressesRes, paymentRes] = await Promise.all([
                fetch("http://localhost:3001/api/user/addresses", {
                    headers: { Authorization: `Bearer ${token}` },
                }),
                fetch("http://localhost:3001/api/user/payments", {
                    headers: { Authorization: `Bearer ${token}` },
                }),
                fetch("http://localhost:3001/api/user/orders", {
                    headers: { Authorization: `Bearer ${token}` },
                }),
                fetch("http://localhost:3001/api/user/wishlists", {
                    headers: { Authorization: `Bearer ${token}` },
                }),
                // If you want later:
                // fetch("http://localhost:3001/api/user/orders", {...}),
                // fetch("http://localhost:3001/api/user/wishlists", {...})
            ]);

            if (!addressesRes.ok) throw new Error("Failed to fetch addresses");
            if (!paymentRes.ok) throw new Error("Failed to fetch payment methods");

            const addressesData = await addressesRes.json();
            const paymentData = await paymentRes.json();

            setAddresses(addressesData || []);
            setPaymentMethods(paymentData || []);

        } catch (err) {
            console.error("❌ Error fetching account overview:", err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        console.log("🔹 useEffect triggered: checking token...");
        const token = localStorage.getItem("token");
        console.log("🔹 Token from localStorage:", token);

        if (!token) {
            console.log("❌ No token found. Redirecting to /loginsignup");
            setIsLoggedIn(false);
            navigate("/loginsignup");
            return;
        }

        console.log("✅ Token found. Fetching dashboard...");
        fetchAccountOverview(token);
    }, [navigate]);

    // ===================================================
    // Handlers
    // ===================================================

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddressForm((prev) => ({ ...prev, [name]: value }));
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddAddress = async (e) => {
        e.preventDefault();
        setError("");
        const token = localStorage.getItem("token");

        try {
            const res = await fetch("http://localhost:3001/api/user/addresses", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(addressForm),
            });

            if (!res.ok) throw new Error("Failed to add address");

            setShowAddressModal(false);
            setAddressForm({
                street_address: "",
                city: "",
                state: "",
                zip_code: "",
                country: "",
            });
            await fetchAccountOverview(token);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleAddPaymentMethod = async (e) => {
        e.preventDefault();
        setError("");
        const token = localStorage.getItem("token");

        try {
            const res = await fetch(
                "http://localhost:3001/api/user/payment-methods",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(paymentForm),
                }
            );

            if (!res.ok) throw new Error("Failed to add payment method");

            setShowPaymentModal(false);
            setPaymentForm({
                card_number: "",
                expiry_date: "",
                cardholder_name: "",
            });
            await fetchAccountOverview(token);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUser(null);
        setIsLoggedIn(false);
        navigate("/login");
    };

    // ===================================================
    // Render
    // ===================================================
    if (!isLoggedIn) {
        return <p>Redirecting to login...</p>;
    }

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600 text-lg font-medium">
                    Loading your dashboard...
                </p>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">My Account</h1>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* Tabs */}
            <div className="flex space-x-6 mb-6 border-b">
                {["profile", "addresses", "payment"].map((tab) => (
                    <button
                        key={tab}
                        className={`pb-2 ${activeTab === tab
                            ? "border-b-2 border-blue-500 font-semibold"
                            : ""
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab === "profile" && "Profile"}
                        {tab === "addresses" && "Addresses"}
                        {tab === "payment" && "Payment Methods"}
                    </button>
                ))}
            </div>

            {/* Profile */}
            {activeTab === "profile" && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
                    <p>
                        <strong>Email:</strong> {user?.email}
                    </p>
                    <p>
                        <strong>Last login:</strong> {user?.lastLogin || "N/A"}
                    </p>
                    <button
                        onClick={handleLogout}
                        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                    >
                        Logout
                    </button>
                </div>
            )}

            {/* Addresses */}
            {activeTab === "addresses" && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Saved Addresses</h2>
                    {addresses.length > 0 ? (
                        <ul className="list-disc ml-6">
                            {addresses.map((addr, i) => (
                                <li key={i}>
                                    {addr.street_address}, {addr.city}, {addr.state},{" "}
                                    {addr.zip_code}, {addr.country}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No saved addresses.</p>
                    )}
                    <button
                        onClick={() => setShowAddressModal(true)}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Add Address
                    </button>
                </div>
            )}

            {/* Payment */}
            {activeTab === "payment" && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Payment Methods</h2>
                    {paymentMethods.length > 0 ? (
                        <ul className="list-disc ml-6">
                            {paymentMethods.map((pm, i) => (
                                <li key={i}>
                                    {pm.cardholder_name} - **** {pm.card_number.slice(-4)}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No payment methods.</p>
                    )}
                    <button
                        onClick={() => setShowPaymentModal(true)}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Add Payment Method
                    </button>
                </div>
            )}

            {/* Address Modal */}
            {showAddressModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded w-96">
                        <h3 className="text-lg font-semibold mb-4">Add Address</h3>
                        <form onSubmit={handleAddAddress}>
                            {Object.keys(addressForm).map((key) => (
                                <input
                                    key={key}
                                    name={key}
                                    placeholder={key.replace("_", " ")}
                                    value={addressForm[key]}
                                    onChange={handleAddressChange}
                                    className="border p-2 mb-2 w-full"
                                />
                            ))}
                            <div className="flex justify-end space-x-2 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowAddressModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Payment Modal */}
            {showPaymentModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded w-96">
                        <h3 className="text-lg font-semibold mb-4">Add Payment Method</h3>
                        <form onSubmit={handleAddPaymentMethod}>
                            {Object.keys(paymentForm).map((key) => (
                                <input
                                    key={key}
                                    name={key}
                                    placeholder={key.replace("_", " ")}
                                    value={paymentForm[key]}
                                    onChange={handlePaymentChange}
                                    className="border p-2 mb-2 w-full"
                                />
                            ))}
                            <div className="flex justify-end space-x-2 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowPaymentModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountPage;
