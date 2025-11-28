import React from 'react';
import { PROFILE } from '../constants';
import { NavLink } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navItems = [
    { label: '홈', path: '/' },
    { label: '경력 기술서', path: '/experience' },
    { label: '전문 분야', path: '/expertise' },
    { label: '리더십 철학', path: '/philosophy' },
    { label: '문의/지원', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8">
      {/* Paper Container */}
      <div className="w-full max-w-5xl bg-paper shadow-paper min-h-[90vh] flex flex-col relative">
        
        {/* Header / Navigation */}
        <header className="px-8 py-8 md:px-12 md:py-10 border-b border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h1 className="font-serif text-4xl font-bold text-primary tracking-tight">{PROFILE.name}</h1>
              <p className="font-sans text-secondary text-sm mt-1 tracking-wide">{PROFILE.role}</p>
            </div>
            <div className="hidden md:block">
              {/* Desktop Contact snippet or Logo could go here, keeping it clean for now */}
            </div>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-sans text-sm md:text-base font-medium transition-colors duration-200 pb-1 border-b-2 ${
                    isActive
                      ? 'text-primary border-primary'
                      : 'text-gray-400 border-transparent hover:text-secondary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow px-8 py-8 md:px-12 md:py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="px-8 py-8 md:px-12 border-t border-gray-100 bg-gray-50 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-sans">
            <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href={`mailto:${PROFILE.email}`} className="hover:text-primary transition-colors">Email</a>
              <a href={`https://${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
