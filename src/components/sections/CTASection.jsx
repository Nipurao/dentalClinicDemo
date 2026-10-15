import React from 'react';
import { Calendar, MessageSquare, PhoneCall, ShieldCheck } from 'lucide-react';
import Button from '../common/Button';
import { generateWhatsAppLink } from '../../utils/whatsapp';

export const CTASection = ({ clinicData, basePath, theme = 'dental' }) => {
  const isDental = theme === 'dental';

  const whatsappUrl = generateWhatsAppLink(
    clinicData.contact.whatsappNumber,
    `Hello ${clinicData.name}, I would like to schedule a consultation.`
  );

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl ${
            isDental
              ? 'bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 text-white'
              : 'bg-gradient-to-br from-skin-charcoal via-[#2a312c] to-[#1a1f1b] text-white'
          }`}
        >
          {/* Subtle background circles */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
              <span>Prioritized Patient Care & Consultation</span>
            </span>

            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
                !isDental ? 'font-serif' : ''
              }`}
            >
              {isDental
                ? 'Ready for a Healthier, More Confident Smile?'
                : 'Experience Personalized Skin Care & Clinical Precision.'}
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
              {isDental
                ? 'Schedule your comprehensive examination or specialist consultation today. Our team is here to guide your dental health journey.'
                : 'Meet with our board-certified dermatologists for an unhurried, evidence-based assessment tailored to your skin concerns.'}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                to={`${basePath}/book-appointment`}
                theme={theme}
                variant="white"
                size="lg"
                icon={Calendar}
                className="w-full sm:w-auto shadow-lg"
              >
                {isDental ? 'Book Dental Appointment' : 'Request Skin Consultation'}
              </Button>

              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                icon={MessageSquare}
                className="w-full sm:w-auto text-white border-white/40 hover:bg-white/10"
              >
                Instant WhatsApp Chat
              </Button>
            </div>

            <p className="text-xs text-slate-300/80 pt-2">
              Need immediate urgent assistance? Call our clinic desk directly at{' '}
              <a href={`tel:${clinicData.contact.phone}`} className="underline font-semibold hover:text-white">
                {clinicData.contact.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
