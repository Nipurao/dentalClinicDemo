import React from 'react';
import { useClinic } from '../../context/ClinicContext';
import SectionHeader from '../../components/common/SectionHeader';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import CTASection from '../../components/sections/CTASection';
import ImageWithFallback from '../../components/common/ImageWithFallback';
import Card from '../../components/common/Card';
import SEOHead from '../../components/common/SEOHead';
import { ShieldCheck, Heart, Sparkles, Beaker, CheckCircle2 } from 'lucide-react';

export const SkinAboutPage = () => {
  const { clinicData, basePath, clinicType } = useClinic();

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      <SEOHead
        title="About DermaGlow Skin & Laser Clinic"
        description="Learn about our medical dermatology standards, FDA-cleared aesthetic technologies, and patient-centered philosophy."
        clinicName={clinicData.name}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          theme={clinicType}
          badge="Our Aesthetic Philosophy"
          title="Clinical Precision. Natural Elegance."
          subtitle="Founded to provide evidence-based dermatology where patient safety, skin barrier preservation, and unhurried medical care come first."
        />
      </div>

      {/* Main Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-skin-charcoal">
              Redefining Modern Aesthetic Dermatology
            </h3>
            <p className="text-base text-stone-600 leading-relaxed font-light">
              At DermaGlow, we believe that healthy skin is confident skin. In an era saturated with generic salon treatments and exaggerated claims, our clinic was founded by dermatologists to bring scientific rigor and ethical consultation back to aesthetic medicine.
            </p>
            <p className="text-base text-stone-600 leading-relaxed font-light">
              We specialize in diagnosing and treating complex skin conditions—including cystic acne, stubborn hormonal melasma, and androgenetic hair loss—while offering subtle, natural-looking facial rejuvenation for patients who desire understated elegance.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200">
                <span className="text-2xl font-bold text-stone-900 font-mono">100%</span>
                <p className="text-xs font-semibold text-stone-700 mt-1">MD Dermatologist Supervised</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#eef3ef] border border-[#dce7de]">
                <span className="text-2xl font-bold text-skin-sage font-mono">US-FDA</span>
                <p className="text-xs font-semibold text-skin-sageDark mt-1">Cleared Laser Platforms</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80"
                alt="DermaGlow serene skin suite"
                aspectRatio="aspect-[4/3]"
                theme={clinicType}
                fallbackTitle="DermaGlow Consultation Room"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Standards Grid */}
      <section className="bg-[#f5f0e8]/40 py-16 border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            theme={clinicType}
            badge="Clinical Pillars"
            title="The Foundations of Our Practice"
            subtitle="The medical and ethical protocols behind every dermatology treatment."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Fitzpatrick Calibration',
                desc: 'Specialized laser energy settings carefully tuned to avoid pigment alterations in darker skin types.'
              },
              {
                icon: Beaker,
                title: 'Evidence-Based Formulations',
                desc: 'Prescription actives and barrier-restoring ceramide complexes backed by published clinical trials.'
              },
              {
                icon: Heart,
                title: 'Compassionate Care',
                desc: 'Skin conditions affect emotional well-being. We treat every patient with empathy, dignity, and patience.'
              },
              {
                icon: Sparkles,
                title: 'Hyper-Natural Aesthetics',
                desc: 'Facial treatments designed to preserve authentic expressions—refreshed and rested, never frozen.'
              }
            ].map((pillar, i) => (
              <Card key={i} theme={clinicType} className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-stone-100 text-skin-sage flex items-center justify-center">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-serif text-skin-charcoal">{pillar.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed font-light">{pillar.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          theme={clinicType}
          badge="Excellence in Skin Care"
          title="Why Patients Choose DermaGlow"
          subtitle="A harmonious blend of clinical science, cutting-edge technology, and individualized care."
          className="mb-12"
        />
        <WhyChooseUs items={clinicData.whyChooseUs} theme={clinicType} />
      </section>

      {/* CTA Section */}
      <CTASection clinicData={clinicData} basePath={basePath} theme={clinicType} />
    </div>
  );
};

export default SkinAboutPage;
