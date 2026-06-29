import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Sparkles, BookOpen, GraduationCap, Award, Target, Briefcase } from 'lucide-react';
import { MEGA_MENU_DATA } from '../data';
import ButterflyLogo from './ButterflyLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-100' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#6C63FF] to-[#8B5CF6] flex items-center justify-center text-white shadow-md shadow-[#6C63FF]/20 group-hover:scale-105 transition-transform duration-200">
              <ButterflyLogo className="w-6 h-6 text-white" />
            </div>
            <span className="font-serif font-bold text-2xl tracking-tight text-[#111111]">
              Gyan<span className="text-[#6C63FF]">peon</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            
            {/* Courses Dropdown Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMegaMenu(true)}
              onMouseLeave={() => setActiveMegaMenu(false)}
            >
              <button 
                className={`flex items-center gap-1.5 font-medium text-[15px] transition-colors py-2 ${
                  activeMegaMenu ? 'text-[#6C63FF]' : 'text-gray-700 hover:text-[#6C63FF]'
                }`}
              >
                <span>Courses</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu ? 'rotate-180 text-[#6C63FF]' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {activeMegaMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 p-6 grid grid-cols-3 gap-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-50 to-transparent -z-10 rounded-bl-full pointer-events-none" />
                    
                    {MEGA_MENU_DATA.map((category, idx) => (
                      <div key={idx} className="group/item p-3.5 rounded-2xl hover:bg-[#FAF8FF] transition-colors border border-transparent hover:border-purple-100">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl mt-0.5">{category.icon}</span>
                          <div>
                            <h4 className="font-bold text-[#111111] text-sm group-hover/item:text-[#6C63FF] transition-colors">
                              {category.title}
                            </h4>
                            {category.subtitle && (
                              <p className="text-xs text-gray-400 font-medium mt-0.5">{category.subtitle}</p>
                            )}
                            <ul className="mt-2.5 space-y-1.5 border-t border-gray-100 pt-2">
                              {category.items.slice(0, 4).map((item, i) => (
                                <li key={i} className="text-xs text-gray-600 hover:text-[#6C63FF] transition-colors flex items-center gap-1.5">
                                  <span className="w-1 h-1 rounded-full bg-purple-300" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Quick promo banner at bottom of mega menu */}
                    <div className="col-span-3 bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6] rounded-2xl p-4 flex items-center justify-between text-white shadow-md">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">✨</span>
                        <div>
                          <p className="text-sm font-bold">Not sure which course fits your goal?</p>
                          <p className="text-xs text-purple-100">Take our 2-minute diagnostic exam for personalized roadmap.</p>
                        </div>
                      </div>
                      <a href="#courses" className="px-4 py-2 bg-white text-[#6C63FF] rounded-xl font-bold text-xs hover:bg-purple-50 transition-colors shadow-sm">
                        Find My Path →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#features" className="font-medium text-[15px] text-gray-700 hover:text-[#6C63FF] transition-colors">
              Features
            </a>
            <a href="#pricing" className="font-medium text-[15px] text-gray-700 hover:text-[#6C63FF] transition-colors">
              Pricing
            </a>
            <a href="#about" className="font-medium text-[15px] text-gray-700 hover:text-[#6C63FF] transition-colors">
              About
            </a>
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#login" 
              className="font-bold text-sm text-gray-700 hover:text-[#6C63FF] px-4 py-2.5 rounded-[16px] transition-colors"
            >
              Log In
            </a>
            <a 
              href="#get-started" 
              className="font-bold text-sm text-white bg-[#6C63FF] hover:bg-[#5b52eb] px-6 py-3 rounded-[16px] shadow-lg shadow-[#6C63FF]/25 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-[#6C63FF]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 pt-4 pb-6 mt-3 space-y-4 shadow-xl">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-purple-600 px-2 py-1 bg-purple-50 rounded-lg w-max">Courses</p>
            <div className="grid grid-cols-1 gap-2 pl-2">
              {MEGA_MENU_DATA.map((cat, i) => (
                <a key={i} href="#courses" onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-sm font-semibold text-gray-800 flex items-center gap-2">
                  <span>{cat.icon}</span> {cat.title}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-100 pt-3 flex flex-col space-y-3 font-semibold text-gray-700">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6C63FF]">Features</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6C63FF]">Pricing</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6C63FF]">About</a>
          </div>
          <div className="border-t border-gray-100 pt-4 flex flex-col sm:flex-row gap-3">
            <a href="#login" className="w-full text-center py-3 rounded-[16px] border border-gray-200 font-bold text-sm text-gray-700">
              Log In
            </a>
            <a href="#get-started" className="w-full text-center py-3 rounded-[16px] bg-[#6C63FF] text-white font-bold text-sm shadow-md shadow-[#6C63FF]/30">
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
