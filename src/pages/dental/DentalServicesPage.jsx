import React from 'react';
import { useClinic } from '../../context/ClinicContext';
import SectionHeader from '../../components/common/SectionHeader';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTASection from '../../components/sections/CTASection';
import SEOHead from '../../components/common/SEOHead';
import { ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DentalServicesPage = () => {
  const { clinicData, basePath, clinicType } = useClinic();

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <SEOHead
        title="Dental Treatments & Services"
        description="Explore our full spectrum of dental services from preventive scaling and fillings to implants, root canals, and clear aligners."
        clinicName={clinicData.name}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          theme={clinicType}
          badge="Complete Clinical Catalog"
          title="Dental Treatments & Specialties"
          subtitle="Explore our comprehensive array of dental care services. Click any treatment to learn about the process, FAQs, and expectations."
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

      {/* Emergency Notice Callout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-teal-700 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-teal-950">Experiencing Acute Dental Pain?</h4>
              <p className="text-xs text-teal-800 mt-0.5">We hold dedicated same-day emergency slots for trauma, severe toothaches, and broken restorations.</p>
            </div>
          </div>
          <Link
            to={`${basePath}/services/emergency-dental-consultation`}
            className="px-4 py-2 rounded-xl bg-teal-700 text-white text-xs font-semibold hover:bg-teal-800 transition-colors whitespace-nowrap shadow-sm"
          >
            Emergency Care Info
          </Link>
        </div>
      </div>

      <CTASection clinicData={clinicData} basePath={basePath} theme={clinicType} />
    </div>
  );
};

export default DentalServicesPage;
