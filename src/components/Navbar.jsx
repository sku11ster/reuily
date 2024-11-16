import { useState } from 'react';
import { hamBurger } from '../assets';

const Navbar = ({ onOpenModal }) => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prevState => !prevState);

  return (
    <>
      <header className="w-full p-4 mx-4 mt-2 select-none">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Logo */}
          <div className="text-3xl font-bold text-lime-400">Reuily.</div>

          {/* Navbar Links */}
          <div className="flex space-x-6 text-black font-medium max-lg:hidden">
            <a href="#features" className="hover:text-lime-300 transition">Features</a>
            <a href="#faq" className="hover:text-lime-300 transition">Faq</a>
            <a href="#pricing" className="hover:text-lime-300 transition">Pricing</a>
          </div>

          {/* Search and Login */}
          <div className="flex items-center justify-between space-x-4">
            {/* Call openModal on button click */}
            <button onClick={onOpenModal} className="bg-lime-400 text-green-900 py-2 px-4 rounded-full hover:bg-lime-500 transition">
              Join Waitlist
            </button>
            <button className="hidden max-lg:block" onClick={toggleMenu}>
              <img width={48} src={hamBurger} alt="" />
              {isMenuOpen && (
                <div className="absolute top-20 right-5 mt-2 w-1/3 bg-slate-100 text-sm font-medium text-black rounded-lg shadow-2xl p-4">
                  <ul className="space-y-4">
                    <li><a href="#features" className="hover:text-lime-400">Features</a></li>
                    <li><a href="#faq" className="hover:text-lime-400">Faq</a></li>
                    <li><a href="#pricing" className="hover:text-lime-400">Pricing</a></li>
                  </ul>
                </div>
              )}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
