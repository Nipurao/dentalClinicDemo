import React from 'react';
import { useLocation } from 'react-router-dom';
import { useClinic } from '../../context/ClinicContext';
import SectionHeader from '../../components/common/SectionHeader';
import AppointmentBookingForm from '../../components/forms/AppointmentBookingForm';
import SEOHead from '../../components/common/SEOHead';
import { Phone, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';

export const DentalBookingPage = () => {
  const { clinicData, clinicType } = useClinic();
  const location = useLocation();

  // Extract ?service= from URL query params if present
  const queryParams = new URLSearchParams(location.search);
  const initialService = queryParams.get('service') || '';

  return (
    <div className="py-12 sm:py-16 space-y-12">
      <SEOHead
        title="Book Dental Appointment"
        description="Request your dental consultation or checkup online. Select your preferred date, time slot, and specialist."
        clinicName={clinicData.name}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          theme={clinicType}
          badge="Online Intake"
          title="Schedule Your Dental Appointment"
          subtitle="Choose your preferred service, clinician, and convenient time slot. Our patient care coordinator will contact you to confirm."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-8">
            <AppointmentBookingForm
              clinicData={clinicData}
              theme={clinicType}
              initialService={initialService}
            />
          </div>

          {/* Right Column: Trust & Assistance Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-5">
              <h4 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Need Help Scheduling?
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Direct Telephone:</span>
                    <a href={`tel:${clinicData.contact.phone}`} className="text-teal-700 hover:underline font-medium">
                      {clinicData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Working Hours:</span>
                    <span>Mon - Fri: 9:00 AM – 8:00 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800 block">What to Expect:</span>
                    <span>An enquiry request will be created and our coordinator will reach out via your chosen method.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HeartHandshake className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Zero Cancellation Penalties:</span>
                    <span>Plans change. Reschedule or cancel anytime with a quick message to our desk.</span>
                  </div>
                </div>
              </div>

              {/* Emergency Callout */}
              <div className="pt-3 border-t border-slate-100">
                <div className="p-3 rounded-xl bg-rose-50 text-rose-900 text-xs">
                  <span className="font-bold block">Acute Pain or Broken Tooth?</span>
                  <span>Call our emergency triage line at{' '}
                    <a href={`tel:${clinicData.contact.emergencyPhone}`} className="font-semibold underline">
                      {clinicData.contact.emergencyPhone}
                    </a> for immediate same-day handling.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalBookingPage;
