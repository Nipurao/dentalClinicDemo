import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Smile, ShieldCheck, Smartphone, MessageSquare, Calendar, Globe, CheckCircle2, Star } from 'lucide-react';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import ImageWithFallback from '../components/common/ImageWithFallback';
import { platformInfo } from '../data/sharedData';
import SEOHead from '../components/common/SEOHead';

export const DemoHubPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-between selection:bg-teal-500 selection:text-white">
      <SEOHead
        title="Premium Clinic Website Platform Demos"
        description="Live commercial website demos engineered by Radiant TechNova for dental practices, dermatologists, and aesthetic clinics."
        clinicName="Radiant TechNova"
      />

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-slate-950 font-extrabold shadow-md">
              R
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white block">
                {platformInfo.developerName}
              </span>
              <span className="text-[11px] text-teal-400 font-medium tracking-wider uppercase block">
                Healthcare Digital Experience
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Interactive Demos
            </span>
          </div>
        </div>
      </header>

      {/* Hero Showcase */}
      <main className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-slate-200 border border-white/15 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Tailored Digital Platforms for Modern Healthcare Practices</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Commercial-Grade Clinic Platforms Designed to Convert.
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
              Explore two distinct, live production experiences engineered specifically for dental studios and dermatology clinics. Choose a demo below to experience the patient journey.
            </p>
          </div>

          {/* Dual Experience Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* 1. Dental Clinic Demo Card */}
            <div className="rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Visual Image Header */}
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                    alt="SmileCare Dental Studio Demo"
                    aspectRatio="aspect-[16/9]"
                    theme="dental"
                    fallbackTitle="SmileCare Dental Studio"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-teal-500 text-white shadow-lg flex items-center gap-1.5">
                      <Smile className="w-4 h-4" />
                      Dental Clinic Demo
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                      SmileCare Dental Studio
                    </h3>
                    <span className="text-xs font-mono text-teal-400">/dental-clinic</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Designed for dental surgeons, orthodontists, and family practices. Clean teal and navy aesthetic, reassuring clinical typography, pain-minimal procedures, and 10 detailed dental treatments.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-900 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>10 Complete Dental Treatment pages with procedure steps & FAQs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>Indian 10-digit mobile & future-date validation booking flow</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>Sterilization bay and operatory gallery with modal lightbox</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-8 pt-0">
                <Link
                  to="/dental-clinic"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-teal-600 hover:bg-teal-500 text-white shadow-lg transition-all"
                >
                  <span>Launch Dental Clinic Website</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* 2. Skin & Dermatology Demo Card */}
            <div className="rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Visual Image Header */}
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
                    alt="DermaGlow Skin & Laser Clinic Demo"
                    aspectRatio="aspect-[16/9]"
                    theme="skin"
                    fallbackTitle="DermaGlow Skin & Laser"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#c5a880] text-slate-950 shadow-lg flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      Skin & Laser Demo
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold font-serif text-white group-hover:text-[#c5a880] transition-colors">
                      DermaGlow Skin & Laser Clinic
                    </h3>
                    <span className="text-xs font-mono text-[#c5a880]">/skin-clinic</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    Engineered for dermatologists, cosmetologists, and laser aesthetic centres. Editorial serif styling, sage and champagne tones, barrier-first philosophy, and 10 dermatology protocols.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-900 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                      <span>10 Dedicated Skin & Laser Services (Acne, Melasma, Trichology)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                      <span>Dermatologist consultation intake with symptom capture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                      <span>Ethical medical disclaimers and suitability guidance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-8 pt-0">
                <Link
                  to="/skin-clinic"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#4a6b53] hover:bg-[#3d5945] text-white shadow-lg transition-all"
                >
                  <span>Launch Skin & Laser Website</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Key Architectural Features Grid */}
          <div className="pt-8 border-t border-slate-800">
            <h3 className="text-xl font-bold text-center text-white mb-8">
              Platform Features Built into Both Experiences
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Smartphone,
                  title: 'Mobile-First Responsive',
                  desc: 'Engineered and tested for 320px, 375px, 768px, and desktop displays with smooth navigation drawers.'
                },
                {
                  icon: Calendar,
                  title: 'Appointment Request Engine',
                  desc: 'Client-side validation, Indian phone formatting, time slot selection, and transparent demo notices.'
                },
                {
                  icon: MessageSquare,
                  title: 'WhatsApp Instant Chat',
                  desc: 'Floating quick-chat action button with clinic-specific configurable number and pre-filled enquiry text.'
                },
                {
                  icon: Globe,
                  title: 'Centralized Clinic Config',
                  desc: 'Easily update clinic branding, doctor bios, opening hours, and service catalogs without rewriting UI code.'
                }
              ].map((feat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-teal-400 flex items-center justify-center">
                    <feat.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 bg-slate-950 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} {platformInfo.developerName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/dental-clinic" className="hover:text-white transition-colors">Dental Clinic</Link>
            <Link to="/skin-clinic" className="hover:text-white transition-colors">Skin Clinic</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DemoHubPage;
