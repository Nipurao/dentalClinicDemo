import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ClinicProvider } from './context/ClinicContext';
import ClinicLayout from './components/layout/ClinicLayout';

// Demo Hub
import DemoHubPage from './pages/DemoHubPage';

// Dental Clinic Pages
import DentalHomePage from './pages/dental/DentalHomePage';
import DentalAboutPage from './pages/dental/DentalAboutPage';
import DentalServicesPage from './pages/dental/DentalServicesPage';
import DentalDoctorsPage from './pages/dental/DentalDoctorsPage';
import DentalGalleryPage from './pages/dental/DentalGalleryPage';
import DentalFAQPage from './pages/dental/DentalFAQPage';
import DentalContactPage from './pages/dental/DentalContactPage';
import DentalBookingPage from './pages/dental/DentalBookingPage';

// Skin & Dermatology Pages
import SkinHomePage from './pages/skin/SkinHomePage';
import SkinAboutPage from './pages/skin/SkinAboutPage';
import SkinServicesPage from './pages/skin/SkinServicesPage';
import SkinDoctorsPage from './pages/skin/SkinDoctorsPage';
import SkinGalleryPage from './pages/skin/SkinGalleryPage';
import SkinFAQPage from './pages/skin/SkinFAQPage';
import SkinContactPage from './pages/skin/SkinContactPage';
import SkinBookingPage from './pages/skin/SkinBookingPage';

// Shared Reusable Service Template
import ServiceDetailTemplate from './pages/shared/ServiceDetailTemplate';

// Legal & 404
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage';
import TermsConditionsPage from './pages/legal/TermsConditionsPage';
import NotFoundPage from './pages/NotFoundPage';

export function App() {
  return (
    <ClinicProvider>
      <Routes>
        {/* Presentation Hub */}
        <Route path="/" element={<DemoHubPage />} />

        {/* Dental Clinic Experience Routes */}
        <Route path="/dental-clinic" element={<ClinicLayout />}>
          <Route index element={<DentalHomePage />} />
          <Route path="about" element={<DentalAboutPage />} />
          <Route path="services" element={<DentalServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailTemplate />} />
          <Route path="doctors" element={<DentalDoctorsPage />} />
          <Route path="gallery" element={<DentalGalleryPage />} />
          <Route path="faq" element={<DentalFAQPage />} />
          <Route path="contact" element={<DentalContactPage />} />
          <Route path="book-appointment" element={<DentalBookingPage />} />
        </Route>

        {/* Skin & Dermatology Experience Routes */}
        <Route path="/skin-clinic" element={<ClinicLayout />}>
          <Route index element={<SkinHomePage />} />
          <Route path="about" element={<SkinAboutPage />} />
          <Route path="services" element={<SkinServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailTemplate />} />
          <Route path="doctors" element={<SkinDoctorsPage />} />
          <Route path="gallery" element={<SkinGalleryPage />} />
          <Route path="faq" element={<SkinFAQPage />} />
          <Route path="contact" element={<SkinContactPage />} />
          <Route path="book-appointment" element={<SkinBookingPage />} />
        </Route>

        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsConditionsPage />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ClinicProvider>
  );
}

export default App;
