import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon, MenuIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '../ui/navigation-menu';

export const Header = (): JSX.Element => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'How to Start', href: '/how-to-start' },
    { label: 'Services', href: '/services', hasDropdown: true },
    { label: 'Technologies', href: '/technologies', hasDropdown: true },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact us', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 z-40 w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-14 h-14 flex items-center justify-center">
            <img src="./public/img/logo 1.png" alt="logo" />
          </div>
          <div className="font-semibold text-gray-900 text-xl">
            Rakini Softech
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index} className="px-4">
                <div className="flex items-center">
                  <Link
                    to={item.href}
                    className={`font-medium text-base transition-colors ${
                      location.pathname === item.href
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <ChevronRightIcon className="w-4 h-4 ml-1 rotate-90" />
                  )}
                </div>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Build Button (Desktop Only) */}
        <div className="hidden md:block">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium">
            BUILD A TEAM
          </Button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setMobileMenuOpen(false)}>
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`font-medium text-base ${
                location.pathname === item.href
                  ? 'text-blue-600'
                  : 'text-gray-800'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full">
            BUILD A TEAM
          </Button>
        </nav>
      </div>
    </header>
  );
};
