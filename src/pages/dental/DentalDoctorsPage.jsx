import React from 'react';
import { useClinic } from '../../context/ClinicContext';
import SectionHeader from '../../components/common/SectionHeader';
import DoctorProfiles from '../../components/sections/DoctorProfiles';
import CTASection from '../../components/sections/CTASection';
import SEOHead from '../../components/common/SEOHead';

export const DentalDoctorsPage = () => {
  const { clinicData, basePath, clinicType } = useClinic();

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <SEOHead
        title="Our Dental Specialists & Surgeons"
        description="Meet the experienced dental surgeons, micro-endodontists, orthodontists, and pediatric dentists at SmileCare."
        clinicName={clinicData.name}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          theme={clinicType}
          badge="Clinical Faculty"
          title="Our Dental Surgeons & Specialists"
          subtitle="A multidisciplinary team dedicated to oral health excellence, pain-minimal procedures, and transparent patient care."
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

export default DentalDoctorsPage;
