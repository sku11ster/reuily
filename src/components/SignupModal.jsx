import { useState } from "react";

function SignupModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePackageSelect = (packageName) => setSelectedPackage(packageName);


  const packages = [
    { name: "Basic", description: "Basic review collection tools", price: "$19/month" },
    { name: "Pro", description: "Advanced analysis and collection", price: "$49/month" },
    { name: "Enterprise", description: "Full suite with custom integrations", price: "$99/month" }
  ];


  const handleSubmit = async () => {
    if (email && selectedPackage) {
      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbwMZ648aSmfMxH2w-omPdNQeNGb5a4xRcCgKkaRrGU4lZtVksLOewff_GPiKTpmSKsgZA/exec", {
          method: "POST",
          body: JSON.stringify({ email, selectedPackage }),
          headers: {
            "Content-Type": "application/json",
          },
        });

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
    } else {
      alert("Please select a package and enter your email.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 float-right text-xl">&times;</button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Choose Your Package</h2>
        <p className="text-gray-600 mb-6">Reuily helps you collect and analyze feedback effectively. Select a package and join our waitlist to get early access!</p>
        
        {/* Package Options */}
        <div className="mb-4">
          {packages.map((pkg) => (
            <div key={pkg.name} onClick={() => handlePackageSelect(pkg.name)} 
                 className={`border p-4 rounded-lg mb-2 cursor-pointer ${selectedPackage === pkg.name ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}>
              <h3 className="text-lg font-semibold text-gray-700">{pkg.name}</h3>
              <p className="text-sm text-gray-600">{pkg.description}</p>
              <p className="text-sm font-bold text-gray-900">{pkg.price}</p>
            </div>
          ))}
        </div>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="w-full border border-gray-300 p-2 rounded-lg mb-4"
        />

        {/* Submit Button */}
        <button onClick={handleSubmit} className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-500 transition">
          Join Waitlist
        </button>
      </div>
    </div>
  );
}



export default SignupModal;
