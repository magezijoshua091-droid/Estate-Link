"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../views/LandingPage';
import { useTheme } from '../components/ThemeProvider';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header 
        currentView="home" 
        setCurrentView={() => {}} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      
      <main className="pt-16">
        <LandingPage />
      </main>

      <Footer />
    </>
  );
}
