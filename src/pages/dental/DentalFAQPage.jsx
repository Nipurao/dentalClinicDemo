import React from 'react';
import { useClinic } from '../../context/ClinicContext';
import SectionHeader from '../../components/common/SectionHeader';
import FAQSection from '../../components/sections/FAQSection';
import CTASection from '../../components/sections/CTASection';
import SEOHead from '../../components/common/SEOHead';
import Button from '../../components/common/Button';
import { MessageSquare, Phone } from 'lucide-react';
import { generateWhatsAppLink } from '../../utils/whatsapp';

export const DentalFAQPage = () => {
  const { clinicData, basePath, clinicType } = useClinic();

  const whatsappUrl = generateWhatsAppLink(
    clinicData.contact.whatsappNumber,
    "Hello SmileCare Dental Studio, I have a specific question not covered in your FAQ."
  );

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <SEOHead
        title="Frequently Asked Dental Questions"
        description="Find answers to common questions about dental implants, root canals, aligners, pricing, and appointment scheduling."
        clinicName={clinicData.name}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          theme={clinicType}
          badge="Help & Guidance"
          title="Frequently Asked Dental Questions"
          subtitle="Clear, honest answers about procedures, safety, insurance coverage, and post-treatment recovery."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQSection faqs={clinicData.faqs} theme={clinicType} />
      </div>

      {/* Still Have Questions Box */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 text-center space-y-4 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">
            Have a Specific Question About Your Teeth?
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Our clinical team and reception coordinators are readily available to answer your individual inquiries.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              theme={clinicType}
              variant="primary"
              size="md"
              icon={MessageSquare}
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a]"
            >
              Ask on WhatsApp
            </Button>
            <Button
              href={`tel:${clinicData.contact.phone}`}
              theme={clinicType}
              variant="outline"
              size="md"
              icon={Phone}
              className="w-full sm:w-auto"
            >
              Call Reception
            </Button>
          </div>
        </div>
      </div>

      <CTASection clinicData={clinicData} basePath={basePath} theme={clinicType} />
    </div>
  );
};

export default DentalFAQPage;
