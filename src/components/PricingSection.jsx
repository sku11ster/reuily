import React, { useState } from "react";
import SignupModal from "./SignupModal";

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      name: "Starter",
      description:
        "Perfect for small businesses getting started with review management.",
      price: "$19/month",
      features: [
        "Smart review forms",
        "Direct feedback filtering",
        "Up to 100 reviews per month",
        "Email support",
      ],
    },
    {
      name: "Growth",
      description:
        "Ideal for growing businesses looking to boost their online reputation.",
      price: "$49/month",
      features: [
        "All Starter features",
        "Up to 500 reviews per month",
        "Real-time analytics",
        "Priority email support",
      ],
    },
    {
      name: "Pro",
      description:
        "Designed for large businesses with advanced needs.",
      price: "$99/month",
      features: [
        "All Growth features",
        "Unlimited reviews",
        "API integrations",
        "Advanced analytics",
      ],
    },
  ];

  const openModal = (packageName) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPackage(null);
    setIsModalOpen(false);
  };

  return (
    <section id="pricing" className="py-16 px-4 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
        Pricing Plans
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Choose a plan that fits your business needs. No hidden fees, cancel
        anytime.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {packages.map((pkg, index) => (
          <div
            key={pkg.name}
            className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition w-80 p-6 ${
              index === 1 ? "border-2 border-lime-400" : ""
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              {pkg.name}
            </h3>
            <p className="text-gray-600 text-center mb-6">{pkg.description}</p>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-gray-800">
                {pkg.price.split("/")[0]}
              </span>
              <span className="text-gray-500">/{pkg.price.split("/")[1]}</span>
            </div>
            <ul className="text-gray-600 space-y-4 mb-6">
              {pkg.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button
              className="w-full bg-lime-400 hover:bg-lime-500 text-white font-semibold py-2 rounded-full transition"
              onClick={() => openModal(pkg.name)}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <SignupModal onClose={closeModal} initialPackage={selectedPackage} />
      )}
    </section>
  );
};

export default PricingSection;
