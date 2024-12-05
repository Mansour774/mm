import { ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              My Digital Store
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                Home
              </Link>
              <Link to="/products" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                Products
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
            </button>
            <button className="sm:hidden p-2 rounded-full hover:bg-gray-100">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}