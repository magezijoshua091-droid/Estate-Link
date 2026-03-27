"use client";

import { Building2, Search, Bell, User, Menu, Moon, Sun, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  currentView: 'home' | 'dashboard';
  setCurrentView: (view: 'home' | 'dashboard') => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Header({ currentView, setCurrentView, theme, toggleTheme }: HeaderProps) {
  const router = useRouter();

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">EstateLink</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium ${currentView === 'home' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
            >
              Home
            </Link>
            <a href="#" className="text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center">
              Products <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a href="#" className="text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Discovery
            </a>
            <a href="#" className="text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center">
              Resources <ChevronDown className="ml-1 h-4 w-4" />
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            
            {currentView === 'home' ? (
              <>
                <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Get Started
                </button>
                <button 
                  onClick={() => router.push('/dashboard')}
                  className="p-2 text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                >
                  <User className="h-5 w-5" />
                </button>
              </>
            ) : (
              <>
                <button className="p-2 text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                  <Bell className="h-5 w-5" />
                </button>
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push('/')}>
                  <img 
                    src="https://i.pravatar.cc/150?u=sarah" 
                    alt="User" 
                    className="h-8 w-8 rounded-full border border-gray-200 dark:border-gray-600"
                  />
                  <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-300" />
                </div>
              </>
            )}
            
            <button className="md:hidden p-2 text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
