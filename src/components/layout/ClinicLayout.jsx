import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloatingButton from './WhatsAppFloatingButton';
import DemoToolbar from './DemoToolbar';
import SEOHead from '../common/SEOHead';
import { useClinic } from '../../context/ClinicContext';

export const ClinicLayout = () => {
  const { clinicData, clinicType, basePath } = useClinic();
  const location = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  if (!clinicData) return <Outlet />;

  const themeClass = clinicType === 'skin' ? 'theme-skin bg-[#fbf9f5]' : 'theme-dental bg-[#f8fafc]';

  return (
    <div className={`min-h-screen flex flex-col ${themeClass}`}>
      <SEOHead
        title={clinicData.name}
        description={clinicData.subtitle}
        clinicName={clinicData.name}
      />

      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-teal-600 text-white px-4 py-2 rounded-lg shadow-lg font-medium"
      >
        Skip to main content
      </a>

      {/* Presentation Switcher */}
      <DemoToolbar />

      {/* Navigation Header */}
      <Navbar clinicData={clinicData} basePath={basePath} theme={clinicType} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton
        clinicName={clinicData.name}
        phoneNumber={clinicData.contact.whatsappNumber}
        theme={clinicType}
      />

      {/* Comprehensive Footer */}
      <Footer clinicData={clinicData} basePath={basePath} theme={clinicType} />
    </div>
  );
};

export default ClinicLayout;
