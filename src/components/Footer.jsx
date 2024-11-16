
const Footer = () => {
  return (
    <>
        <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
            {/* Top Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and About */}
            <div>
                <h2 className="text-2xl font-extrabold text-lime-400 mb-4">Reuily</h2>
                <p className="text-gray-400 text-sm">
                Simplifying feedback collection and review management for businesses of all sizes.
                </p>
            </div>

            {/* Product Links */}
            <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-4">Product</h3>
                <ul className="space-y-2">
                <li>
                    <a href="#" className="text-gray-400 hover:text-lime-400 transition">
                    Features
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-lime-400 transition">
                    Pricing
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-lime-400 transition">
                    Reviews
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-lime-400 transition">
                    Integrations
                    </a>
                </li>
                </ul>
            </div>

            {/* Resources Links */}
            <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-4">Resources</h3>
                <ul className="space-y-2">
                <li>
                    <a href="#" className="text-gray-400 hover:text-lime-400 transition">
                    Help Center
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-lime-400 transition">
                    API Documentation
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-lime-400 transition">
                    Community
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-lime-400 transition">
                    Support
                    </a>
                </li>
                </ul>
            </div>

            {/* Company Links */}
            <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-4">Company</h3>
                <ul className="space-y-2">
                <li>
                    <a href="#" className="text-gray-400 hover:text-lime-400 transition">
                    About Us
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-lime-400 transition">
                    Careers
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-lime-400 transition">
                    Blog
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-lime-400 transition">
                    Contact Us
                    </a>
                </li>
                </ul>
            </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-8"></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-500">
                &copy; 2024 Reuily. All rights reserved.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
                <a
                href="#"
                className="text-gray-400 hover:text-lime-400 transition"
                aria-label="Twitter"
                >
                <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                href="#"
                className="text-gray-400 hover:text-lime-400 transition"
                aria-label="Facebook"
                >
                <i className="fab fa-facebook text-xl"></i>
                </a>
                <a
                href="#"
                className="text-gray-400 hover:text-lime-400 transition"
                aria-label="LinkedIn"
                >
                <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                href="#"
                className="text-gray-400 hover:text-lime-400 transition"
                aria-label="Instagram"
                >
                <i className="fab fa-instagram text-xl"></i>
                </a>
            </div>
            </div>
        </div>
        </footer>


    </>
  )
}

export default Footer