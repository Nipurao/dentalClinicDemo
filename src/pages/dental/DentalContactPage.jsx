import React from 'react';
import { useClinic } from '../../context/ClinicContext';
import SectionHeader from '../../components/common/SectionHeader';
import ContactInfoSection from '../../components/sections/ContactInfoSection';
import AppointmentBookingForm from '../../components/forms/AppointmentBookingForm';
import SEOHead from '../../components/common/SEOHead';

export const DentalContactPage = () => {
  const { clinicData, basePath, clinicType } = useClinic();

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <SEOHead
        title="Contact SmileCare Dental Studio | Hours & Directions"
        description="Visit our modern dental clinic in Gurugram. Check opening hours, emergency line, phone numbers, and get Google Maps directions."
        clinicName={clinicData.name}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          theme={clinicType}
          badge="Visit Our Clinic"
          title="Connect with SmileCare Dental Studio"
          subtitle="Conveniently located with dedicated visitor parking and complete wheelchair accessibility."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactInfoSection
          clinicData={clinicData}
          theme={clinicType}
        />
      </div>

      {/* Embedded Booking Request */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AppointmentBookingForm
          clinicData={clinicData}
          theme={clinicType}
        />
      </div>
    </div>
  );
};

export default DentalContactPage;
