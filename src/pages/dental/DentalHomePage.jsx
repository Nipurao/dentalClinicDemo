import React from 'react';
import { useClinic } from '../../context/ClinicContext';
import HeroSection from '../../components/sections/HeroSection';
import ServicesGrid from '../../components/sections/ServicesGrid';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import DoctorProfiles from '../../components/sections/DoctorProfiles';
import ClinicGallery from '../../components/sections/ClinicGallery';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import FAQSection from '../../components/sections/FAQSection';
import CTASection from '../../components/sections/CTASection';
import SectionHeader from '../../components/common/SectionHeader';
import AppointmentBookingForm from '../../components/forms/AppointmentBookingForm';
import ImageWithFallback from '../../components/common/ImageWithFallback';
import Button from '../../components/common/Button';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const DentalHomePage = () => {
  const { clinicData, basePath, clinicType } = useClinic();

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <HeroSection clinicData={clinicData} basePath={basePath} theme={clinicType} />

      {/* 2. Services Overview (Top 6 Featured) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          theme={clinicType}
          badge="Comprehensive Care"
          title="Personalized Dental Treatments"
          subtitle="From preventive checkups and gentle restorations to advanced implantology and invisible aligners."
          className="mb-12"
        />
        <ServicesGrid
          services={clinicData.services}
          basePath={basePath}
          theme={clinicType}
          limit={6}
        />
      </section>

      {/* 3. About SmileCare Highlight Section */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-teal-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
                  alt="SmileCare patient reception and private operatory"
                  aspectRatio="aspect-[4/3]"
                  theme={clinicType}
                  fallbackTitle="SmileCare Facility"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-teal-900 text-white shadow-xl max-w-xs hidden sm:block">
                <p className="text-xs font-semibold">Strict 4-Step Sterilization</p>
                <p className="text-[11px] text-teal-200 mt-0.5">Every instrument autoclaved with Class B vacuum validation.</p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-wider uppercase text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                Our Dental Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Modern Dentistry Rooted in Calm, Pain-Minimal Care.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                At SmileCare Dental Studio, we believe visiting the dentist should be reassuring, unhurried, and transparent. We combine intraoral optical scanning, low-dose digital imaging, and computer-controlled anesthesia so you experience dental care designed for comfort.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Digital smile simulations before beginning aligner or cosmetic work',
                  'Clear itemized treatment estimates with zero hidden fees',
                  'Dedicated pediatric dentistry bay with child-friendly protocols',
                  'Emergency dental slots preserved daily for acute toothaches'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  to={`${basePath}/about`}
                  theme={clinicType}
                  variant="outline"
                  size="md"
                  icon={ArrowRight}
                >
                  Discover Our Clinic Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Our Dental Clinic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          theme={clinicType}
          badge="The SmileCare Difference"
          title="Why Families Trust SmileCare"
          subtitle="Hospital-grade sterilization standards, advanced technology, and dedicated dental specialists."
          className="mb-12"
        />
        <WhyChooseUs items={clinicData.whyChooseUs} theme={clinicType} />
      </section>

      {/* 5. Doctor / Clinician Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          theme={clinicType}
          badge="Specialist Clinicians"
          title="Meet Our Dental Specialists"
          subtitle="Experienced dental surgeons, orthodontists, and endodontists working collaboratively for your oral health."
          className="mb-12"
        />
        <DoctorProfiles
          doctors={clinicData.doctors}
          basePath={basePath}
          theme={clinicType}
        />
      </section>

      {/* 6. Clinic Gallery Preview */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            theme={clinicType}
            badge="Virtual Tour"
            title="Modern Operatories & Sterilization Bay"
            subtitle="Take a look inside our clean, ergonomically designed dental care facility."
            className="mb-12"
          />
          <ClinicGallery galleryItems={clinicData.gallery} theme={clinicType} />
        </div>
      </section>

      {/* 7. Patient Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          theme={clinicType}
          badge="Patient Stories"
          title="What Our Patients Say"
          subtitle="Read illustrative demo experiences from patients who entrusted their smiles to our team."
          className="mb-12"
        />
        <TestimonialsSection testimonials={clinicData.testimonials} theme={clinicType} />
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          theme={clinicType}
          badge="Patient FAQs"
          title="Answers to Common Dental Questions"
          subtitle="Everything you need to know about booking, insurance, pain management, and care."
          className="mb-12"
        />
        <FAQSection faqs={clinicData.faqs} theme={clinicType} />
      </section>

      {/* 9. Appointment Booking Form Anchor */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AppointmentBookingForm
          clinicData={clinicData}
          theme={clinicType}
        />
      </section>

      {/* 10. CTA Section */}
      <CTASection clinicData={clinicData} basePath={basePath} theme={clinicType} />
    </div>
  );
};

export default DentalHomePage;
