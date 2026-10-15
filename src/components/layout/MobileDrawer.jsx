import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import Button from '../common/Button';

export const MobileDrawer = ({
  isOpen,
  onClose,
  clinicData,
  basePath,
  theme = 'dental'
}) => {
  const isDental = theme === 'dental';

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navLinks = [
    { label: 'Home', path: basePath },
    { label: 'About Us', path: `${basePath}/about` },
    { label: 'Treatments & Services', path: `${basePath}/services` },
    { label: isDental ? 'Our Dentists' : 'Our Specialists', path: `${basePath}/doctors` },
    { label: 'Clinic Gallery', path: `${basePath}/gallery` },
    { label: 'FAQs', path: `${basePath}/faq` },
    { label: 'Contact & Hours', path: `${basePath}/contact` },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className={`relative w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto ${
          !isDental ? 'border-l border-stone-200 bg-[#fdfbf9]' : ''
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-100">
            <div>
              <span className={`text-base font-bold tracking-tight ${isDental ? 'text-teal-900' : 'font-serif text-skin-charcoal'}`}>
                {clinicData.name}
              </span>
              <p className="text-[11px] text-slate-500 font-medium">{clinicData.theme.badge}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="mt-6 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === basePath}
                onClick={onClose}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? isDental
                        ? 'bg-teal-50 text-teal-700'
                        : 'bg-stone-100 text-stone-900 font-serif'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-slate-100 space-y-4">
          <Button
            to={`${basePath}/book-appointment`}
            theme={theme}
            variant="primary"
            size="lg"
            className="w-full justify-center shadow-md"
            onClick={onClose}
            icon={Calendar}
          >
            {isDental ? 'Book Dental Visit' : 'Request Consultation'}
          </Button>

          <div className="space-y-2 text-xs text-slate-500 pt-2">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <a href={`tel:${clinicData.contact.phone}`} className="hover:underline text-slate-700 font-medium">
                {clinicData.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>{clinicData.contact.hours[0].days}: {clinicData.contact.hours[0].time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
