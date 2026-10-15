import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldAlert } from 'lucide-react';
import { termsOfUseContent, platformInfo } from '../../data/sharedData';
import SEOHead from '../../components/common/SEOHead';

export const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-12 sm:py-16">
      <SEOHead
        title="Terms & Conditions"
        description="Website terms of use, appointment inquiry limitations, and medical disclaimers."
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
            <span>Clinical Notice & Website Usage</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms & Conditions of Use
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Effective Date: {termsOfUseContent.lastUpdated}
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          <p className="text-sm text-slate-600 leading-relaxed">
            Please read these Terms and Conditions carefully prior to navigating this website or submitting an online appointment inquiry.
          </p>

          <div className="space-y-6">
            {termsOfUseContent.sections.map((sec, i) => (
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

          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 leading-relaxed">
            <span className="font-semibold text-amber-900">Emergency Reminder: </span>
            If you are experiencing acute physical distress, facial trauma with heavy bleeding, or difficulty breathing, please seek immediate emergency room medical care or dial local emergency services immediately.
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

export default TermsConditionsPage;
