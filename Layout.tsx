
import React from 'react';
import { AppSection } from './types';
import { COMPANY_INFO } from './constants';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeSection, onNavigate }) => {
  const navItems = [
    { id: AppSection.HOME, label: 'Home' },
    { id: AppSection.CLAIMS, label: 'Claims' },
    { id: AppSection.SERVICE, label: 'Services' },
    { id: AppSection.ECONNECT, label: 'User Guide' },
    { id: AppSection.FAQ, label: 'FAQ' },
    { id: AppSection.DOWNLOADS, label: 'Downloads' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span 
                className="text-xl font-bold text-red-600 cursor-pointer flex items-center gap-2"
                onClick={() => onNavigate(AppSection.HOME)}
              >
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white text-xs">WBC</div>
                Wealth Build
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-red-600' : 'text-slate-600 hover:text-red-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => onNavigate(AppSection.CONTACT)}
                className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors shadow-sm"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Nav Trigger (Simple) */}
            <div className="md:hidden flex items-center">
              <select 
                value={activeSection}
                onChange={(e) => onNavigate(e.target.value as AppSection)}
                className="text-sm bg-transparent border-none focus:ring-0 font-medium text-slate-600"
              >
                {navItems.map(item => (
                  <option key={item.id} value={item.id}>{item.label}</option>
                ))}
                <option value={AppSection.CONTACT}>Contact Us</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Wealth Build Consulting</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Your trusted partner for professional insurance consulting. We help you build and protect your wealth with comprehensive coverage solutions.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => onNavigate(AppSection.CLAIMS)} className="hover:text-red-400">Claims Information</button></li>
                <li><button onClick={() => onNavigate(AppSection.SERVICE)} className="hover:text-red-400">Service Request Forms</button></li>
                <li><button onClick={() => onNavigate(AppSection.ECONNECT)} className="hover:text-red-400">eConnect Portal Guide</button></li>
                <li><button onClick={() => onNavigate(AppSection.DOWNLOADS)} className="hover:text-red-400">Download Centre</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
              <p className="text-sm mb-2">{COMPANY_INFO.address}</p>
              <p className="text-sm mb-2">Email: {COMPANY_INFO.email}</p>
              <p className="text-sm">Tel: {COMPANY_INFO.phone}</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Wealth Build Consulting. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
