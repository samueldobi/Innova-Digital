import {useState} from 'react';
import { Link } from 'react-router-dom';
import {links} from '../data/data';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
              <Link to="/">
              <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold gradient-text">NOVA</span>
            </div>
              </Link>
         

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((item, index)=>{
              <Link
                key = {index}
                to= {item.url}
                className="text-gray-600 hover:text-orange-500 transition-colors">
                   {item.text}
                </Link>
            })}
            <Link to = "/services"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Services
            </Link>
            <Link to ="/portfolio"
             
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Portfolio
            </Link>
            <Link to ="/automation"
             
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Automation
            </Link>
            <Link to="/pricing"
             
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Pricing
            </Link>
            <Link to="/contact"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600 hover:text-orange-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Smooth Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-start px-4 py-2 space-y-2 bg-white border-t border-gray-200">
         <Link to ="/"
            href="#services"
            className="text-gray-600 hover:text-orange-500 transition-colors w-full"
          >
            Services
          </Link>
         <Link to ="/"
            href="#automation"
            className="text-gray-600 hover:text-orange-500 transition-colors w-full"
          >
            Automation
          </Link>
         <Link to ="/"
            href="#pricing"
            className="text-gray-600 hover:text-orange-500 transition-colors w-full"
          >
            Pricing
          </Link>
         <Link to ="/"
            href="#contact"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full text-center"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar