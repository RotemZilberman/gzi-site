import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { CONTENT } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, dir } = useLanguage();

  const navContent = CONTENT[language].nav;

  // Convert nav object to array for mapping
  const navItems = [
    { label: navContent.about, href: '#about' },
    { label: navContent.services, href: '#services' },
    { label: navContent.projects, href: '#projects' },
    { label: navContent.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (!target) return;
    const headerOffset = 80;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans text-brand-black ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-7 group">
            <img 
              src="/gzi-logo.svg" 
              alt="GZI Consulting logo" 
              className={`h-16 w-auto ${dir === 'rtl' ? '-mr-12' : '-ml-12'}`}
              loading="lazy"
            />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight leading-none text-brand-black">
                GZI<span className="text-brand-primary">.</span>Consulting
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-bold text-slate-600 hover:text-brand-black transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 transition-all text-xs font-bold"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'he' ? 'EN' : 'עב'}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded bg-slate-100 text-slate-900 text-xs font-bold"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'he' ? 'EN' : 'עב'}</span>
            </button>
            <button 
              className="p-2 text-brand-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden shadow-xl flex flex-col gap-4 origin-top animate-dropdown">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-lg font-bold text-slate-900 py-3 border-b border-slate-50 last:border-0"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  scrollToSection(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img 
                src="/gzi-logo.svg" 
                alt="GZI Consulting logo" 
                className="h-8 w-auto"
                loading="lazy"
              />
              <span className="font-bold text-brand-black">GZI Consulting</span>
            </div>
            
            <div className="text-sm text-slate-500 text-center md:text-right font-medium">
              © {new Date().getFullYear()} GZ Information Consulting.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
