import React from 'react';
import { useClinic } from '../../context/ClinicContext';
import SectionHeader from '../../components/common/SectionHeader';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import CTASection from '../../components/sections/CTASection';
import ImageWithFallback from '../../components/common/ImageWithFallback';
import Card from '../../components/common/Card';
import SEOHead from '../../components/common/SEOHead';
import { Award, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const DentalAboutPage = () => {
  const { clinicData, basePath, clinicType } = useClinic();

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      <SEOHead
        title="About SmileCare Dental Studio"
        description="Learn about our medical team, clinical philosophy, and sterilization protocols."
        clinicName={clinicData.name}
      />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          theme={clinicType}
          badge="About Our Practice"
          title="Gentle, Evidence-Based Dentistry for Life"
          subtitle="Founded with a mission to transform dental care from an intimidating chore into a comfortable, transparent, and restorative experience."
        />
      </div>

      {/* Main Story & Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Where Clinical Precision Meets Patient Empathy
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              SmileCare Dental Studio was designed from the ground up to eliminate dental anxiety. We recognized that most patients postpone necessary dental treatments due to fear of discomfort, confusing treatment options, or unexpected costs.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              By investing in low-radiation digital radiography, intraoral 3D scanners, and painless computer-guided anaesthesia, our clinical team delivers precise treatments while maintaining an unhurried, empathetic atmosphere.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100">
                <span className="text-2xl font-bold text-teal-800 font-mono">100%</span>
                <p className="text-xs font-semibold text-teal-900 mt-1">Digital Patient Diagnostics</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-2xl font-bold text-slate-900 font-mono">Class B</span>
                <p className="text-xs font-semibold text-slate-700 mt-1">Medical Autoclave Standards</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="SmileCare dental surgical consultation room"
                aspectRatio="aspect-[4/3]"
                theme={clinicType}
                fallbackTitle="SmileCare Facility"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Four Core Values */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            theme={clinicType}
            badge="Our Standards"
            title="Our Four Practice Pillars"
            subtitle="The medical and ethical principles guiding every patient interaction."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Sterilization & Safety',
                desc: 'Strict multi-cycle biological monitoring and individual sealed instrument cassettes for every patient.'
              },
              {
                icon: Heart,
                title: 'Patient-First Empathy',
                desc: 'Active listening, zero scolding for delayed care, and individualized pacing during long procedures.'
              },
              {
                icon: Sparkles,
                title: 'Tooth-Saving Philosophy',
                desc: 'Conservative endodontic and restorative care aimed at preserving your natural enamel whenever possible.'
              },
              {
                icon: Award,
                title: 'Continuous Education',
                desc: 'Our clinicians routinely complete advanced training in micro-endodontics and digital implantology.'
              }
            ].map((pillar, i) => (
              <Card key={i} theme={clinicType} className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">{pillar.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          theme={clinicType}
          badge="Why Choose Us"
          title="Clinical Excellence in Every Detail"
          subtitle="Equipped to care for every generation of your family."
          className="mb-12"
        />
        <WhyChooseUs items={clinicData.whyChooseUs} theme={clinicType} />
      </section>

      {/* CTA Section */}
      <CTASection clinicData={clinicData} basePath={basePath} theme={clinicType} />
    </div>
  );
};

export default DentalAboutPage;
