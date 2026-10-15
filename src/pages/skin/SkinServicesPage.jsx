import React from 'react';
import { useClinic } from '../../context/ClinicContext';
import SectionHeader from '../../components/common/SectionHeader';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTASection from '../../components/sections/CTASection';
import SEOHead from '../../components/common/SEOHead';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SkinServicesPage = () => {
  const { clinicData, basePath, clinicType } = useClinic();

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <SEOHead
        title="Dermatology & Skin Treatments"
        description="Explore our specialized treatments for acne scars, melasma, laser hair reduction, chemical peels, and aesthetic skin rejuvenation."
        clinicName={clinicData.name}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          theme={clinicType}
          badge="Complete Clinical Catalog"
          title="Dermatology & Aesthetic Services"
          subtitle="Explore our medically supervised treatments. Click any treatment to view the clinical process, FAQs, and suitability considerations."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesGrid
          services={clinicData.services}
          basePath={basePath}
          theme={clinicType}
          showSearch={true}
        />
      </div>

      {/* Safety Notice Callout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-[#eef3ef] border border-[#d6e3d8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-skin-sage shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-stone-900">Unsure Which Treatment Fits Your Skin?</h4>
              <p className="text-xs text-stone-600 mt-0.5">Every skin journey begins with a diagnostic evaluation with a dermatologist to assess your barrier health before undergoing active procedures.</p>
            </div>
          </div>
          <Link
            to={`${basePath}/services/dermatology-consultation`}
            className="px-4 py-2 rounded-xl bg-skin-sage text-white text-xs font-semibold hover:bg-skin-sageDark transition-colors whitespace-nowrap shadow-sm"
          >
            Consultation Info
          </Link>
        </div>
      </div>

      <CTASection clinicData={clinicData} basePath={basePath} theme={clinicType} />
    </div>
  );
};

export default SkinServicesPage;
