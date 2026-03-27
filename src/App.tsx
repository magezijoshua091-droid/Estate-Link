/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './views/LandingPage';
import Dashboard from './views/Dashboard';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'dashboard'>('home');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-[#f4f7fe] text-gray-900 font-sans">
        <Dashboard onNavigateHome={() => setCurrentView('home')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200 font-sans">
      <Header 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      
      <main className="pt-16">
        <LandingPage />
      </main>

      <Footer />
    </div>
  );
}
