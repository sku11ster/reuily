// pages/LandingPage.js
import React from 'react';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  const features = [
    { title: "Smart Review Collection", description: "Effortlessly gather and manage reviews from your customers." },
    { title: "Automated Rating Boosting", description: "Automate reviews to enhance your brand’s reputation." },
    { title: "Real-Time Analytics", description: "Gain insights on customer feedback instantly." },
    { title: "Seamless Integrations", description: "Easily connect with popular platforms to expand reach." }
  ];

  const testimonials = [
    { quote: "Reuily has transformed how we manage reviews!", name: "Alice Johnson", company: "Tech Solutions" },
    { quote: "Our ratings improved dramatically after using Reuily.", name: "Mark Smith", company: "Happy Homes" },
    { quote: "A must-have for any business looking to boost credibility.", name: "Sarah Lin", company: "Green Gardens" }
  ];

  const faqs = [
    { question: "What is Reuily?", answer: "Reuily is a smart SaaS platform for managing and boosting customer reviews." },
    { question: "When will Reuily be available?", answer: "We are launching soon! Join the waitlist to be the first to know." },
    { question: "How does Reuily help my business?", answer: "Reuily improves your online reputation by automating review collection and providing real-time feedback analytics." }
  ];

  return (
    <>


      <div className="bg-gray-100 min-h-screen">
        {/* Navbar */}
        <div className='absolute w-full flex flex-row items-center justify-center'>
          <Navbar />
        </div>
        {/* Hero Section */}
        <section className="min-h-screen text-center py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-400 text-white">
          <h1 className="text-5xl font-bold mb-4">Boost Your Reviews with Reuily</h1>
          <p className="text-xl mb-8 max-w-xl mx-auto">
            Transform your online reputation with smart review collection and advanced feedback analysis. Join us to elevate your brand’s credibility.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-blue-100 transition">
            Join the Waitlist
          </button>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Upcoming Features</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 w-80 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">{feature.title}</h3>
                <p className="text-gray-700 mb-4">{feature.description}</p>
                <button className="text-blue-600 underline hover:text-blue-800 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-white text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Early Users Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow p-6 w-80 hover:shadow-lg transition"
              >
                <p className="text-gray-700 italic mb-4">&quot;{testimonial.quote}&quot;</p>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-6 text-center">
          <p>&copy; 2024 Reuily. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
