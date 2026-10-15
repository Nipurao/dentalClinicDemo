import React from 'react';
import { useClinic } from '../../context/ClinicContext';
import SectionHeader from '../../components/common/SectionHeader';
import ClinicGallery from '../../components/sections/ClinicGallery';
import CTASection from '../../components/sections/CTASection';
import SEOHead from '../../components/common/SEOHead';
import { ShieldCheck } from 'lucide-react';

export const SkinGalleryPage = () => {
  const { clinicData, basePath, clinicType } = useClinic();

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <SEOHead
        title="Sanctuary Tour & Treatment Suites"
        description="Explore the peaceful, private aesthetic suites, trichology studios, and medical laser bays at DermaGlow."
        clinicName={clinicData.name}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          theme={clinicType}
          badge="Aesthetic Sanctuary"
          title="Inside DermaGlow Clinic"
          subtitle="Discover our private consultation suites, advanced dermatological imaging studio, and tranquil recovery rooms."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClinicGallery
          galleryItems={clinicData.gallery}
          theme={clinicType}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-skin-charcoal text-white flex items-center gap-4 border border-stone-700">
          <ShieldCheck className="w-8 h-8 text-skin-gold shrink-0" />
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
            Each laser and aesthetic suite is strictly private to safeguard your confidentiality. High-efficiency HEPA air filtration is active continuously in all treatment spaces.
          </p>
        </div>
      </div>

      <CTASection clinicData={clinicData} basePath={basePath} theme={clinicType} />
    </div>
  );
};

export default SkinGalleryPage;
