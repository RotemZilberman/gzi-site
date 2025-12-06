import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Layers } from 'lucide-react';
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
    { label: navContent.clients, href: '#clients' },
    { label: navContent.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col font-sans text-slate-900 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-violet-50 text-violet-600' : 'bg-white/80 text-violet-600'}`}>
              <Layers className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tight leading-none ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                GZI<span className="text-violet-600">.</span>Systems
              </span>
              <span className="text-[10px] tracking-widest uppercase font-bold text-slate-400">
                AI-GIS Consultants
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm font-bold text-slate-600 hover:text-violet-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-[2px] after:bg-violet-600 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-violet-100 hover:text-violet-600 transition-all text-xs font-bold border border-slate-200"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'he' ? 'EN' : 'עב'}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded bg-white/50 text-slate-700 text-xs font-bold border border-slate-200"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'he' ? 'EN' : 'עב'}</span>
            </button>
            <button 
              className="p-2 text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden shadow-xl flex flex-col gap-4">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-lg font-bold text-slate-800 py-2 border-b border-slate-50 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
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
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 opacity-75">
              <Layers className="w-5 h-5 text-slate-400" />
              <span className="font-bold text-slate-700">GZI Systems</span>
            </div>
            
            <div className="text-sm text-slate-500 text-center md:text-right">
              © {new Date().getFullYear()} GZ Information Systems.
              <br className="md:hidden" />
              <span className="hidden md:inline mx-2 text-slate-300">|</span>
              {language === 'he' ? 'נבנה עבור מנהיגות עירונית.' : 'Built for Municipal Leadership.'}
            </div>

            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 rounded-full bg-slate-200 hover:bg-violet-100 hover:text-violet-600 flex items-center justify-center transition-colors cursor-pointer">
                 <Globe className="w-4 h-4" />
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
