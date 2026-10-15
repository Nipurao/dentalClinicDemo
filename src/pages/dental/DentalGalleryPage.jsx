import React from 'react';
import { useClinic } from '../../context/ClinicContext';
import SectionHeader from '../../components/common/SectionHeader';
import ClinicGallery from '../../components/sections/ClinicGallery';
import CTASection from '../../components/sections/CTASection';
import SEOHead from '../../components/common/SEOHead';
import { ShieldCheck } from 'lucide-react';

export const DentalGalleryPage = () => {
  const { clinicData, basePath, clinicType } = useClinic();

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <SEOHead
        title="Clinic Facility Tour & Operatories"
        description="Take a visual tour of SmileCare Dental Studio including our sterilization bay, digital scanning suite, and reception lounge."
        clinicName={clinicData.name}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          theme={clinicType}
          badge="Facility Showcase"
          title="Inside SmileCare Dental Studio"
          subtitle="Explore our sterile operatories, modern digital scanning workstations, and patient comfort suites."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClinicGallery
          galleryItems={clinicData.gallery}
          theme={clinicType}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-slate-900 text-white flex items-center gap-4">
          <ShieldCheck className="w-8 h-8 text-teal-400 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Every operatory is disinfected following strict infection-control protocols between patients. We welcome patients to inspect our Class B autoclave bay upon arrival.
          </p>
        </div>
      </div>

      <CTASection clinicData={clinicData} basePath={basePath} theme={clinicType} />
    </div>
  );
};

export default DentalGalleryPage;
