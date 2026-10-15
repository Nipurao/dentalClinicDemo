import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Lock } from 'lucide-react';
import { privacyPolicyContent, platformInfo } from '../../data/sharedData';
import SEOHead from '../../components/common/SEOHead';

export const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-12 sm:py-16">
      <SEOHead
        title="Privacy Policy"
        description="Patient data privacy practices, appointment inquiry handling, and demonstration disclosures."
        clinicName={platformInfo.developerName}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Main Hub</span>
        </Link>

        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200">
            <Lock className="w-3.5 h-3.5" />
            <span>Patient Privacy & Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clinic Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Effective Date: {privacyPolicyContent.lastUpdated}
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          <p className="text-sm text-slate-600 leading-relaxed">
            This Privacy Policy explains how our clinic platform collects, processes, and safeguards personal information gathered via our online appointment booking inquiry forms.
          </p>

          <div className="space-y-6">
            {privacyPolicyContent.sections.map((sec, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">
                  {sec.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Platform Engineered by {platformInfo.developerName}</span>
            <div className="flex gap-4">
              <Link to="/dental-clinic" className="text-teal-600 hover:underline">Dental Studio</Link>
              <Link to="/skin-clinic" className="text-teal-600 hover:underline">Skin & Laser</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
