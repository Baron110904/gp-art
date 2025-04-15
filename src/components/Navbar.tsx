
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
    setSearchOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setMobileMenuOpen(false);
    }
  };

  const navLinkClasses = "relative px-2 py-1 text-sm font-medium transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full";
  const activeNavLinkClasses = "after:w-full";

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="font-serif text-2xl font-bold tracking-tight">
            GP Art
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`
            }
          >
            Accueil
          </NavLink>
          <NavLink 
            to="/galeries" 
            className={({isActive}) => 
              `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`
            }
          >
            Galeries
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`
            }
          >
            À propos
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`
            }
          >
            Contact
          </NavLink>
          <button onClick={toggleSearch} className="p-2 hover:text-gray-600 transition-colors">
            <Search size={18} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button onClick={toggleSearch} className="p-2 hover:text-gray-600 transition-colors">
            <Search size={18} />
          </button>
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 animate-fade-in">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <Input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
              autoFocus
            />
            <Button type="submit">Rechercher</Button>
          </form>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md animate-fade-in">
          <div className="flex flex-col py-4 px-4 space-y-4">
            <NavLink 
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-4 hover:bg-gray-100 rounded-md transition-colors font-medium"
            >
              Accueil
            </NavLink>
            <NavLink 
              to="/galeries"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-4 hover:bg-gray-100 rounded-md transition-colors font-medium"
            >
              Galeries
            </NavLink>
            <NavLink 
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-4 hover:bg-gray-100 rounded-md transition-colors font-medium"
            >
              À propos
            </NavLink>
            <NavLink 
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-4 hover:bg-gray-100 rounded-md transition-colors font-medium"
            >
              Contact
            </NavLink>
            <NavLink 
              to="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-4 hover:bg-gray-100 rounded-md transition-colors font-medium text-gray-500"
            >
              Admin
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
