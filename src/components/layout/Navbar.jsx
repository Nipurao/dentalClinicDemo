import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Phone, Calendar, Clock, MapPin, Sparkles, Activity } from 'lucide-react';
import Button from '../common/Button';
import MobileDrawer from './MobileDrawer';

export const Navbar = ({ clinicData, basePath, theme = 'dental' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const isDental = theme === 'dental';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: basePath },
    { label: 'About', path: `${basePath}/about` },
    { label: 'Services', path: `${basePath}/services` },
    { label: isDental ? 'Dentists' : 'Doctors', path: `${basePath}/doctors` },
    { label: 'Gallery', path: `${basePath}/gallery` },
    { label: 'FAQ', path: `${basePath}/faq` },
    { label: 'Contact', path: `${basePath}/contact` },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
            : isDental
            ? 'bg-white/90 backdrop-blur-sm border-b border-slate-100'
            : 'bg-[#fcfaf7]/90 backdrop-blur-sm border-b border-stone-200/50'
        }`}
      >
        {/* Top announcement & quick contact bar */}
        <div
          className={`hidden md:block py-1.5 px-4 sm:px-6 lg:px-8 text-xs border-b transition-colors ${
            isDental
              ? 'bg-teal-900 text-teal-100 border-teal-800'
              : 'bg-skin-charcoal text-stone-200 border-stone-800'
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 opacity-80" />
                Mon–Fri: 9AM–8PM | Emergency triage available
              </span>
              <span className="hidden lg:flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 opacity-80" />
                {clinicData.contact.address.split(',')[0]}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={`tel:${clinicData.contact.phone}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 opacity-80" />
                <span>Call Clinic: {clinicData.contact.phone}</span>
              </a>
              <span className="opacity-40">|</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-white font-medium">
                Live Client Demo
              </span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to={basePath}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-xl"
              aria-label={`${clinicData.name} Homepage`}
            >
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm ${
                  isDental
                    ? 'bg-teal-600 text-white'
                    : 'bg-skin-sage text-white'
                }`}
              >
                {isDental ? (
                  <Activity className="w-6 h-6 stroke-[2.2]" />
                ) : (
                  <Sparkles className="w-6 h-6 stroke-[2]" />
                )}
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-lg sm:text-xl font-bold tracking-tight text-slate-900 ${
                    !isDental ? 'font-serif text-skin-charcoal' : ''
                  }`}
                >
                  {clinicData.name}
                </span>
                <span className="text-[11px] font-medium tracking-wider text-slate-500 uppercase">
                  {clinicData.theme.badge}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === basePath}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? isDental
                          ? 'text-teal-700 bg-teal-50/90'
                          : 'text-stone-900 bg-stone-100 font-serif'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Action CTA & Mobile Button */}
            <div className="flex items-center gap-3">
              <Button
                to={`${basePath}/book-appointment`}
                theme={theme}
                variant="primary"
                size="md"
                className="hidden sm:inline-flex"
                icon={Calendar}
              >
                {isDental ? 'Book Appointment' : 'Request Consultation'}
              </Button>

              {/* Mobile Drawer Trigger */}
              <button
                type="button"
                onClick={() => setIsMobileOpen(true)}
                className="lg:hidden p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-over Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        clinicData={clinicData}
        basePath={basePath}
        theme={theme}
      />
    </>
  );
};

export default Navbar;
