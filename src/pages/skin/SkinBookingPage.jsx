import React from 'react';
import { useLocation } from 'react-router-dom';
import { useClinic } from '../../context/ClinicContext';
import SectionHeader from '../../components/common/SectionHeader';
import AppointmentBookingForm from '../../components/forms/AppointmentBookingForm';
import SEOHead from '../../components/common/SEOHead';
import { Phone, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';

export const SkinBookingPage = () => {
  const { clinicData, clinicType } = useClinic();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const initialService = queryParams.get('service') || '';

  return (
    <div className="py-12 sm:py-16 space-y-12">
      <SEOHead
        title="Request Dermatology Consultation"
        description="Book your skin consultation with our board-certified dermatologists. Select your preferred date, treatment concern, and contact method."
        clinicName={clinicData.name}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          theme={clinicType}
          badge="Patient Intake"
          title="Request a Dermatology Consultation"
          subtitle="Choose your skin concern, preferred specialist, and convenient schedule. Our patient care coordinator will contact you to confirm."
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

          {/* Right Column: Guidance Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-sm space-y-5">
              <h4 className="text-base font-bold font-serif text-skin-charcoal border-b border-stone-100 pb-3">
                Consultation Guidance
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-skin-sage mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-stone-800 block">Direct Telephone:</span>
                    <a href={`tel:${clinicData.contact.phone}`} className="text-skin-sage hover:underline font-medium">
                      {clinicData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-skin-sage mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-stone-800 block">Consultation Hours:</span>
                    <span>Mon - Sat: 10:00 AM – 7:30 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-skin-sage mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-stone-800 block">How We Confirm:</span>
                    <span>This registers an inquiry request. Our clinic desk will verify doctor schedules and reach out to finalize the appointment.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HeartHandshake className="w-4 h-4 text-skin-sage mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-stone-800 block">No Rush, No Pressure:</span>
                    <span>Consultations are purely diagnostic discovery sessions to help you make an informed decision without sales pressure.</span>
                  </div>
                </div>
              </div>

              {/* Consultation Prep Tip */}
              <div className="pt-3 border-t border-stone-100">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 text-xs">
                  <span className="font-bold block">Appointment Prep Tip:</span>
                  <span>Please arrive without foundation makeup or heavy powders on the area being evaluated for optimal dermoscopic visualization.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinBookingPage;
