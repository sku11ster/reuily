import { useState } from 'react';
import SignupModal from './SignupModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="w-3/4 backdrop-blur-md bg-white/20 rounded-xl shadow-lg p-4 mx-4 mt-2 select-none">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Logo */}
          <div className="text-2xl font-bold text-lime-400">Reuily.</div>

          {/* Navbar Links */}
          <div className="flex space-x-6 text-white">
            <a href="#products" className="hover:text-lime-300 transition">Products</a>
            <a href="#solutions" className="hover:text-lime-300 transition">Solutions</a>
            <a href="#accounts" className="hover:text-lime-300 transition">Accounts</a>
            <a href="#partners" className="hover:text-lime-300 transition">Partners</a>
            <a href="#blog" className="hover:text-lime-300 transition">Blog</a>
            <a href="#support" className="hover:text-lime-300 transition">Support</a>
          </div>

          {/* Search and Login */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-lime-400 text-green-900 hover:bg-lime-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.39 4.24l4.24 4.24-1.42 1.42-4.24-4.24A6 6 0 012 8z" />
              </svg>
            </button>
            <button onClick={openModal} className="bg-lime-400 text-green-900 py-2 px-4 rounded-md hover:bg-lime-500 transition">
              Login
            </button>
          </div>
        </nav>
      </header>

      {/* Render Modal */}
      {isModalOpen && <SignupModal onClose={closeModal} />}
    </>
  );
};

export default Navbar;
