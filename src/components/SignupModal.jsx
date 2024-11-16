import React, { useState, useEffect } from "react";

const SignupModal = ({ onClose, initialPackage }) => {
  const [email, setEmail] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(initialPackage || null);
  const [error, setError] = useState("");

  useEffect(() => {
    setSelectedPackage(initialPackage); // Set pre-selected package when modal opens
  }, [initialPackage]);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handlePackageSelect = (packageName) => {
    setSelectedPackage(packageName);
    setError(""); // Clear error when selecting a package
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const packages = [
    { name: "Starter", description: "Smart feedback forms for small businesses", price: "$19/month" },
    { name: "Growth", description: "Advanced analytics for growing businesses", price: "$49/month" },
    { name: "Pro", description: "Unlimited reviews with custom integrations", price: "$99/month" },
  ];

  const handleSubmit = async () => {
    if (!email || !validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!selectedPackage) {
      setError("Please select a package.");
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwMZ648aSmfMxH2w-omPdNQeNGb5a4xRcCgKkaRrGU4lZtVksLOewff_GPiKTpmSKsgZA/exec",
        {
          method: "POST",
          body: JSON.stringify({ email, selectedPackage }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert(`Thank you for joining the waitlist! You selected the ${selectedPackage} package.`);
        onClose();
      } else {
        const text = await response.text();
        console.error("Server error:", text);
        alert("Failed to save your data. Please try again.");
      }
    } catch (error) {
      console.error("Error saving data", error);
      alert("Failed to save your data. Please try again later.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-96 relative">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Choose Your Package
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Reuily makes feedback collection effortless and help boost your Social Ratings. 
        </p>
        <p className="text-lime-600 text-center mb-2">
        Select a package and join our waitlist today!
        </p>

        {/* Package Options */}
        <div className="mb-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              onClick={() => handlePackageSelect(pkg.name)}
              className={`border p-4 rounded-lg mb-3 cursor-pointer transition ${
                selectedPackage === pkg.name
                  ? "border-lime-500 bg-blue-50 shadow-md"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-700">{pkg.name}</h3>
              <p className="text-sm text-gray-600">{pkg.description}</p>
              <p className="text-sm font-bold text-gray-900">{pkg.price}</p>
            </div>
          ))}
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="w-full border border-gray-300 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-lime-600 text-white w-full py-2 rounded-full hover:bg-blue-500 transition"
        >
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
