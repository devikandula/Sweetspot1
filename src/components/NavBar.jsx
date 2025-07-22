import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, User, ShoppingCart, Phone, ChevronDown, Menu, Heart } from 'lucide-react';

function NavBar() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  const menuItems = [
    { 
      name: 'Cakes', 
      hasDropdown: true,
      path: '/cakes',
      dropdownItems: [
        { name: 'Birthday Cakes', path: '/cakes' },
        { name: 'Wedding Cakes', path: '/cakes' },
        { name: 'Designer Cakes', path: '/cakes' },
        { name: 'Chocolate Cakes', path: '/cakes' },
        { name: 'Vanilla Cakes', path: '/cakes' }
      ]
    },
    { 
      name: 'Customize', 
      hasDropdown: false,
      path: '/customize' 
    },
    { 
      name: 'Contact Us', 
      hasDropdown: false,
      path: '/contact-us'
    },
  ];

  return (
    <nav className="bg-white px-20 font-parastoo py-6 relative shadow-sm">
      <div className="flex justify-between items-center mx-auto">
        {/* Logo */}
        <button
          className="text-4xl text-gray-600 font-bold hover:text-red-400 transition-colors duration-300 whitespace-nowrap"
          onClick={() => handleClick('/')}
        >
          <span className="transition-colors duration-300">Sweet</span>
          <span className="text-red-400 transition-colors duration-300">Spot</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              <button 
                className="flex items-center space-x-1 text-lg text-gray-600 transition-colors hover:text-red-400 py-2 px-2"
                onClick={() => !item.hasDropdown && handleClick(item.path)}
              >
                <span>{item.name}</span>
                {item.hasDropdown && <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />}
              </button>
              
              {item.hasDropdown && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-200 z-50">
                  <div className="py-3">
                    {item.dropdownItems?.map((dropdownItem, index) => (
                      <button 
                        key={index}
                        onClick={() => handleClick(dropdownItem.path)}
                        className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-400 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {dropdownItem.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side icons/actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <button 
            className="p-2 text-gray-600 hover:text-red-400 transition-colors"
            onClick={() => handleClick('/cakes')}
          >
            <Search className="h-5 w-5" />
          </button>
        <div className="relative group">
          <button 
            className="p-2 text-gray-600 hover:text-red-400 transition-colors"
          >
            <User className="h-5 w-5" />
          </button>
          
          <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-200 z-50">
            <div className="py-3">
              <button 
                onClick={() => handleClick('/profile')}
                className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-400 transition-colors border-b border-gray-100"
              >
                My Profile
              </button>
              <button 
                onClick={() => handleClick('/orders')}
                className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-400 transition-colors border-b border-gray-100"
              >
                My Orders
              </button>
              <button 
                onClick={() => handleClick('/wishlist')}
                className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-400 transition-colors border-b border-gray-100"
              >
                Wishlist
              </button>
              <button 
                onClick={() => handleClick('/logout')}
                className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-400 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <button
            className="p-2 text-gray-600 hover:text-red-400 transition-colors relative"
            onClick={() => handleClick('/cart')}
          >
          <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-400 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2 text-gray-600 hover:text-red-400"
          onClick={() => handleClick('/menu')}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;