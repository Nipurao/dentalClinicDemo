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
import { ArrowRight, CheckCircle2, Sparkles, Feather } from 'lucide-react';

export const SkinHomePage = () => {
  const { clinicData, basePath, clinicType } = useClinic();

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <HeroSection clinicData={clinicData} basePath={basePath} theme={clinicType} />

      {/* 2. Services Overview (Top 6 Dermatology Services) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          theme={clinicType}
          badge="Aesthetic & Medical Dermatology"
          title="Clinical Protocols for Radiant, Resilient Skin"
          subtitle="Carefully designed by board-certified dermatologists using US-FDA cleared technologies and individualized barrier-first formulations."
          className="mb-12"
        />
        <ServicesGrid
          services={clinicData.services}
          basePath={basePath}
          theme={clinicType}
          limit={6}
        />
      </section>

      {/* 3. About DermaGlow Editorial Narrative */}
      <section className="bg-[#f5f0e8]/50 py-20 border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
                  alt="DermaGlow tranquil private aesthetic suite"
                  aspectRatio="aspect-[4/3]"
                  theme={clinicType}
                  fallbackTitle="DermaGlow Clinic Suite"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 p-5 rounded-2xl bg-skin-charcoal text-white shadow-xl max-w-xs hidden sm:block border border-stone-700">
                <div className="flex items-center gap-2 text-xs font-semibold text-skin-gold">
                  <Sparkles className="w-4 h-4" />
                  <span>The Barrier-First Philosophy</span>
                </div>
                <p className="text-[11px] text-stone-300 mt-1 leading-relaxed">
                  We never subject compromised skin to harsh aggressors. True radiance begins with cellular barrier repair.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-skin-sage bg-skin-sageLight px-3.5 py-1.5 rounded-full">
                Clinical Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-skin-charcoal tracking-tight leading-tight">
                Refined Dermatology. Natural Elegance.
              </h2>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-light">
                At DermaGlow Skin & Laser Clinic, our treatment philosophy avoids fleeting cosmetic trends or over-done aesthetics. We emphasize scientific diagnosis, skin barrier restoration, and subtle, natural enhancements that honor your distinctive features.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Comprehensive dermoscopic evaluation prior to every laser or chemical treatment',
                  'Calibrated long-pulse laser protocols certified safe for Indian skin types (Fitzpatrick III-V)',
                  'Medical-grade trichology diagnostics for hormonal and stress-related hair shedding',
                  'Unhurried, private consultations in tranquil acoustic suites'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-skin-sage shrink-0 mt-0.5" />
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
                  Our Dermatological Journey
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose DermaGlow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          theme={clinicType}
          badge="Excellence in Care"
          title="Why Choose DermaGlow Skin & Laser"
          subtitle="Evidence-based dermatology, world-class laser technology, and customized skin regimens."
          className="mb-12"
        />
        <WhyChooseUs items={clinicData.whyChooseUs} theme={clinicType} />
      </section>

      {/* 5. Doctor / Dermatologist Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          theme={clinicType}
          badge="Board-Certified Faculty"
          title="Meet Our Dermatologists & Aesthetic Physicians"
          subtitle="Experienced MD dermatologists committed to ethical diagnosis, patient education, and natural outcomes."
          className="mb-12"
        />
        <DoctorProfiles
          doctors={clinicData.doctors}
          basePath={basePath}
          theme={clinicType}
        />
      </section>

      {/* 6. Clinic Gallery Preview */}
      <section className="bg-stone-100/60 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            theme={clinicType}
            badge="The Clinic Sanctuary"
            title="Private Suites & Laser Technology"
            subtitle="Tour our indiranagar clinic designed for patient comfort, discretion, and clinical precision."
            className="mb-12"
          />
          <ClinicGallery galleryItems={clinicData.gallery} theme={clinicType} />
        </div>
      </section>

      {/* 7. Patient Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          theme={clinicType}
          badge="Patient Experiences"
          title="Real Reflections from Our Patients"
          subtitle="Illustrative demo accounts from patients navigating acne scar revision, laser treatments, and pigmentation care."
          className="mb-12"
        />
        <TestimonialsSection testimonials={clinicData.testimonials} theme={clinicType} />
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          theme={clinicType}
          badge="Patient Insights"
          title="Frequently Asked About Skin & Laser Care"
          subtitle="Clear clinical answers regarding laser safety, chemical peels, acne timelines, and consultation preparation."
          className="mb-12"
        />
        <FAQSection faqs={clinicData.faqs} theme={clinicType} />
      </section>

      {/* 9. Appointment Booking Intake */}
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

export default SkinHomePage;
