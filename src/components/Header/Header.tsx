import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
import { Button } from '../ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '../ui/navigation-menu';

export const Header = (): JSX.Element => {
  const location = useLocation();

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
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-16 h-16  flex items-center justify-center">
              <img src="./public/img/logo 1.png" alt="logo" />
            </div>
            <div className="font-semibold text-gray-900 text-xl">
              Rakini Softech
            </div>
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index} className="px-4">
                <div className="flex items-center">
                  {item.href.startsWith('/') ? (
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
                  ) : (
                    <a
                      href={item.href}
                      className="font-medium text-gray-700 hover:text-blue-600 text-base transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                  {item.hasDropdown && (
                    <ChevronRightIcon className="w-4 h-4 ml-1 rotate-90" />
                  )}
                </div>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium">
          BUILD A TEAM
        </Button>
      </div>
    </header>
  );
};
