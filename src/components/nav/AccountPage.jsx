import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
    const navigate = useNavigate();

    // User & session
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // Dashboard data
    const [addresses, setAddresses] = useState([]);
    const [paymentMethods, setPaymentMethods] = useState([]);

    // UI state
    const [activeTab, setActiveTab] = useState("profile");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Modals
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    // Forms
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

    // Fetch account overview
    const fetchAccountOverview = async (token) => {
        try {
            setLoading(true);

            const [userRes, addressesRes, paymentRes] = await Promise.all([
                fetch("http://localhost:3001/api/user/auth/user/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                }),
                fetch("http://localhost:3001/api/user/addresses", {
                    headers: { Authorization: `Bearer ${token}` },
                }),
                fetch("http://localhost:3001/api/user/payment-methods", {
                    headers: { Authorization: `Bearer ${token}` },
                }),
            ]);

            if (!addressesRes.ok) throw new Error("Failed to fetch addresses");
            if (!paymentRes.ok) throw new Error("Failed to fetch payment methods");

            setUser(await userRes.json());
            setAddresses(await addressesRes.json());
            setPaymentMethods(await paymentRes.json());
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            setIsLoggedIn(false);
            navigate("/loginsignup");
            return;
        }

        fetchAccountOverview(token);
    }, [navigate]);

    // Handlers
    // ===================================================
    // Handlers
    // ===================================================

    // const handleAddressChange = (e) => {
    //     const { name, value } = e.target;
    //     setAddressForm((prev) => ({ ...prev, [name]: value }));
    // };

    // const handlePaymentChange = (e) => {
    //     const { name, value } = e.target;
    //     setPaymentForm((prev) => ({ ...prev, [name]: value }));
    // };

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
                "http://localhost:3001/api/user/payments",
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
        navigate("/loginsignup");
    };



    // 🔹 Loading screen
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="w-14 h-14 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-indigo-700 text-lg font-medium">
                    Loading your account...
                </p>
            </div>
        );
    }

    // 🔹 Redirect if not logged in
    if (!isLoggedIn) {
        return <p className="text-center mt-10 text-gray-600">Redirecting to login...</p>;
    }

    return (
        <div className="p-8 max-w-5xl mx-auto bg-white shadow-lg rounded-xl">
            <h1 className="text-3xl font-bold text-indigo-700 mb-6">My Account</h1>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* Tabs */}
            <div className="flex space-x-8 border-b pb-2 mb-6">
                {["profile", "addresses", "payment"].map((tab) => (
                    <button
                        key={tab}
                        className={`pb-2 transition-all duration-300 ${activeTab === tab
                            ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold"
                            : "text-gray-500 hover:text-indigo-600"
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
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">Profile Info</h2>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <p>
                            <strong>Email:</strong> {user?.email || "user@example.com"}
                        </p>
                        <p>
                            <strong>Last login:</strong> {user?.lastLogin || "N/A"}
                        </p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow"
                    >
                        Logout
                    </button>
                </div>
            )}

            {/* Addresses */}
            {activeTab === "addresses" && (
                <div>
                    <h2 className="text-xl font-semibold mb-4">Saved Addresses</h2>
                    {addresses.length > 0 ? (
                        <div className="grid gap-4">
                            {addresses.map((addr, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-50 p-4 rounded-lg shadow-sm border"
                                >
                                    <p className="text-gray-700">
                                        {addr.street_address}, {addr.city}, {addr.state},{" "}
                                        {addr.zip_code}, {addr.country}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No saved addresses yet.</p>
                    )}
                    <button
                        onClick={() => setShowAddressModal(true)}
                        className="mt-4 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow"
                    >
                        + Add Address
                    </button>
                </div>
            )}

            {/* Payment */}
            {activeTab === "payment" && (
                <div>
                    <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
                    {paymentMethods.length > 0 ? (
                        <div className="grid gap-4">
                            {paymentMethods.map((pm, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-50 p-4 rounded-lg shadow-sm border"
                                >
                                    <p className="text-gray-700">
                                        {pm.cardholder_name} - **** {pm.card_number.slice(-4)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No payment methods yet.</p>
                    )}
                    <button
                        onClick={() => setShowPaymentModal(true)}
                        className="mt-4 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow"
                    >
                        + Add Payment
                    </button>
                </div>
            )}

            {/* Address Modal */}
            {showAddressModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-lg font-semibold mb-4">Add Address</h3>
                        <form onSubmit={handleAddAddress} className="space-y-3">
                            {Object.keys(addressForm).map((key) => (
                                <input
                                    key={key}
                                    name={key}
                                    placeholder={key.replace("_", " ")}
                                    value={addressForm[key]}
                                    onChange={(e) =>
                                        setAddressForm({ ...addressForm, [key]: e.target.value })
                                    }
                                    className="border rounded-lg p-2 w-full"
                                />
                            ))}
                            <div className="flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setShowAddressModal(false)}
                                    className="px-4 py-2 border rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
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
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-lg font-semibold mb-4">Add Payment</h3>
                        <form onSubmit={handleAddPaymentMethod} className="space-y-3">
                            {Object.keys(paymentForm).map((key) => (
                                <input
                                    key={key}
                                    name={key}
                                    placeholder={key.replace("_", " ")}
                                    value={paymentForm[key]}
                                    onChange={(e) =>
                                        setPaymentForm({ ...paymentForm, [key]: e.target.value })
                                    }
                                    className="border rounded-lg p-2 w-full"
                                />
                            ))}
                            <div className="flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setShowPaymentModal(false)}
                                    className="px-4 py-2 border rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
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
