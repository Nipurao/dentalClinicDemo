import React from 'react';
import { useClinic } from '../../context/ClinicContext';
import SectionHeader from '../../components/common/SectionHeader';
import DoctorProfiles from '../../components/sections/DoctorProfiles';
import CTASection from '../../components/sections/CTASection';
import SEOHead from '../../components/common/SEOHead';

export const SkinDoctorsPage = () => {
  const { clinicData, basePath, clinicType } = useClinic();

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <SEOHead
        title="Our Dermatologists & Aesthetic Physicians"
        description="Meet our board-certified dermatologists, trichologists, and laser specialists at DermaGlow."
        clinicName={clinicData.name}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          theme={clinicType}
          badge="Board-Certified Clinicians"
          title="Our Dermatologists & Specialists"
          subtitle="Qualified medical practitioners combining clinical dermatology with non-invasive aesthetic science."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DoctorProfiles
          doctors={clinicData.doctors}
          basePath={basePath}
          theme={clinicType}
        />
      </div>

      <CTASection clinicData={clinicData} basePath={basePath} theme={clinicType} />
    </div>
  );
};

export default SkinDoctorsPage;
