import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, CheckCircle2, Clock, ShieldCheck, AlertCircle, ChevronRight, HelpCircle } from 'lucide-react';
import { useClinic } from '../../context/ClinicContext';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import Card from '../../components/common/Card';
import SectionHeader from '../../components/common/SectionHeader';
import ImageWithFallback from '../../components/common/ImageWithFallback';
import FAQSection from '../../components/sections/FAQSection';
import AppointmentBookingForm from '../../components/forms/AppointmentBookingForm';
import SEOHead from '../../components/common/SEOHead';

export const ServiceDetailTemplate = () => {
  const { slug } = useParams();
  const { clinicData, clinicType, basePath } = useClinic();
  const isDental = clinicType === 'dental';

  const service = clinicData.services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to={`${basePath}/services`} replace />;
  }

  return (
    <div className="py-8 sm:py-12">
      <SEOHead
        title={`${service.name} Treatment`}
        description={service.shortDescription}
        clinicName={clinicData.name}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Back Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500" aria-label="Breadcrumb">
            <Link to={basePath} className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to={`${basePath}/services`} className="hover:text-slate-900 transition-colors">
              Treatments
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-800 line-clamp-1">{service.name}</span>
          </nav>

          <Link
            to={`${basePath}/services`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Treatments</span>
          </Link>
        </div>

        {/* Hero Banner for Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <Badge theme={clinicType} variant="default">
                {service.badge}
              </Badge>
              <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5" />
                {service.duration}
              </span>
            </div>

            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] ${
                !isDental ? 'font-serif text-skin-charcoal' : ''
              }`}
            >
              {service.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {service.overview}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button
                to={`${basePath}/book-appointment?service=${encodeURIComponent(service.name)}`}
                theme={clinicType}
                variant="primary"
                size="lg"
                icon={Calendar}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80">
              <ImageWithFallback
                src={service.imageUrl}
                alt={service.name}
                aspectRatio="aspect-[4/3]"
                theme={clinicType}
                fallbackTitle={service.name}
              />
            </div>
          </div>
        </div>

        {/* Ideal Candidates / Who It's For & Procedure Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
          {/* Left: Ideal For */}
          <div className="lg:col-span-5 space-y-6">
            <Card theme={clinicType} className="p-6 sm:p-8">
              <h3 className={`text-xl font-bold text-slate-900 mb-4 ${!isDental ? 'font-serif' : ''}`}>
                Is This Treatment Right For You?
              </h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Common clinical indications where patients seek this specialized care:
              </p>

              <ul className="space-y-3.5">
                {service.idealFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Ethical Disclaimer */}
              <div className="mt-8 p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Clinical Evaluation Notice</span>
                </div>
                <p className="leading-relaxed">
                  Treatment suitability and individual outcomes are determined solely following an in-person clinical assessment by our certified clinicians.
                </p>
              </div>
            </Card>
          </div>

          {/* Right: Step-by-Step Procedure */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div>
                <h3 className={`text-xl font-bold text-slate-900 ${!isDental ? 'font-serif' : ''}`}>
                  What to Expect: Step-by-Step Process
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  How our clinical team guides your treatment journey from diagnosis to recovery.
                </p>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-100">
                {service.procedureSteps.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-4">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold z-10 ${
                        isDental
                          ? 'bg-teal-600 text-white ring-4 ring-white'
                          : 'bg-skin-sage text-white ring-4 ring-white'
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-slate-900">
                        {step.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Service FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="pt-8">
            <SectionHeader
              theme={clinicType}
              badge="Patient Questions"
              title={`Frequently Asked About ${service.name}`}
              subtitle="Everything you need to know about preparation, safety, and care."
              className="mb-8"
            />
            <FAQSection faqs={service.faqs} theme={clinicType} />
          </div>
        )}

        {/* Embedded Booking Request Box */}
        <div className="pt-10 max-w-3xl mx-auto">
          <AppointmentBookingForm
            clinicData={clinicData}
            theme={clinicType}
            initialService={service.name}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailTemplate;
