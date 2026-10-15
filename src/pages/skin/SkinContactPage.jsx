import React from 'react';
import { useClinic } from '../../context/ClinicContext';
import SectionHeader from '../../components/common/SectionHeader';
import ContactInfoSection from '../../components/sections/ContactInfoSection';
import AppointmentBookingForm from '../../components/forms/AppointmentBookingForm';
import SEOHead from '../../components/common/SEOHead';

export const SkinContactPage = () => {
  const { clinicData, basePath, clinicType } = useClinic();

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <SEOHead
        title="Contact DermaGlow Skin & Laser Clinic | Location & Hours"
        description="Visit our dermatology clinic in Indiranagar, Bengaluru. Check opening hours, consultation booking phone, and location directions."
        clinicName={clinicData.name}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          theme={clinicType}
          badge="Visit Our Clinic"
          title="Connect with DermaGlow Clinic"
          subtitle="Located at The Pavilion Wellness Suites in Indiranagar, featuring tranquil private suites and dedicated parking."
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

export default SkinContactPage;
