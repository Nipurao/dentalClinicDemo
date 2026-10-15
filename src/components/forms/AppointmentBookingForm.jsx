import React, { useState } from 'react';
import { Calendar, Clock, Phone, Mail, User, FileText, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import Button from '../common/Button';
import BookingConfirmationModal from './BookingConfirmationModal';
import { validateIndianMobile, validateEmail, validateAppointmentDate, getTodayDateString } from '../../utils/validation';
import { appointmentService } from '../../services/appointmentService';

export const AppointmentBookingForm = ({
  clinicData,
  theme = 'dental',
  initialService = '',
  className = ''
}) => {
  const isDental = theme === 'dental';

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || (clinicData.services[0]?.name || ''),
    date: getTodayDateString(),
    timeSlot: 'Morning (9:00 AM – 1:00 PM)',
    contactMethod: 'WhatsApp',
    notes: '',
    privacyConsent: true,
  });

  // Errors & Submission States
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [bookingResult, setBookingResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const timeSlots = [
    'Morning (9:00 AM – 1:00 PM)',
    'Afternoon (1:00 PM – 5:00 PM)',
    'Evening (5:00 PM – 8:00 PM)',
  ];

  const contactMethods = ['WhatsApp', 'Phone Call', 'Email'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error for field upon edit
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Patient name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    // Phone validation
    const phoneVal = validateIndianMobile(formData.phone);
    if (!phoneVal.valid) {
      newErrors.phone = phoneVal.message;
    }

    // Email validation (optional)
    const emailVal = validateEmail(formData.email);
    if (!emailVal.valid) {
      newErrors.email = emailVal.message;
    }

    // Date validation
    const dateVal = validateAppointmentDate(formData.date);
    if (!dateVal.valid) {
      newErrors.date = dateVal.message;
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = 'Please select a service or consultation.';
    }

    // Privacy consent validation
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must agree to the privacy policy to submit an inquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await appointmentService.submitInquiry({
        ...formData,
        clinicType: theme,
        clinicName: clinicData.name,
      });

      setBookingResult(response);
      setIsModalOpen(true);

      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: clinicData.services[0]?.name || '',
        date: getTodayDateString(),
        timeSlot: 'Morning (9:00 AM – 1:00 PM)',
        contactMethod: 'WhatsApp',
        notes: '',
        privacyConsent: true,
      });
    } catch (err) {
      setSubmissionError(err.message || 'Something went wrong submitting your request. Please try again or call our clinic.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseClasses = `w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
    isDental
      ? 'border-slate-200 focus:border-teal-500 focus:ring-teal-500/20 bg-slate-50/50 focus:bg-white text-slate-800'
      : 'border-stone-300 focus:border-skin-sage focus:ring-skin-sage/20 bg-stone-50/50 focus:bg-white text-stone-800'
  }`;

  const labelClasses = 'block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5';

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className={`bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border ${
          isDental ? 'border-slate-100 shadow-teal-900/5' : 'border-stone-200/80 shadow-stone-900/5'
        } ${className}`}
        aria-label="Appointment Request Form"
      >
        {/* Form Header */}
        <div className="mb-8">
          <span className={`text-xs font-semibold uppercase tracking-wider ${isDental ? 'text-teal-600' : 'text-skin-sage'}`}>
            Online Patient Intake
          </span>
          <h3 className={`text-2xl font-bold text-slate-900 mt-1 ${!isDental ? 'font-serif text-skin-charcoal' : ''}`}>
            {isDental ? 'Request Dental Appointment' : 'Request Dermatology Consultation'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
            Submit your preferred date and time. Our patient care team will contact you to confirm clinician availability.
          </p>
        </div>

        {submissionError && (
          <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2.5">
            <AlertTriangle className="w-5 h-5 shrink-0 text-rose-600 mt-0.5" />
            <div>
              <p className="font-semibold">Submission Failed</p>
              <p>{submissionError}</p>
            </div>
          </div>
        )}

        <div className="space-y-5">
          {/* Row 1: Patient Name */}
          <div>
            <label htmlFor="patient-name" className={labelClasses}>
              Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                id="patient-name"
                name="name"
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`${inputBaseClasses} ${errors.name ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200' : ''}`}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                required
              />
              <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
            </div>
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-rose-600 font-medium">
                {errors.name}
              </p>
            )}
          </div>

          {/* Row 2: Mobile Number & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="patient-phone" className={labelClasses}>
                Indian Mobile Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="patient-phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`${inputBaseClasses} ${errors.phone ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200' : ''}`}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  required
                />
                <Phone className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-xs text-rose-600 font-medium">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="patient-email" className={labelClasses}>
                Email Address <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <input
                  id="patient-email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`${inputBaseClasses} ${errors.email ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200' : ''}`}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                <Mail className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-rose-600 font-medium">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Select Service */}
          <div>
            <label htmlFor="patient-service" className={labelClasses}>
              Requested Service / Treatment <span className="text-rose-500">*</span>
            </label>
            <select
              id="patient-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`${inputBaseClasses} bg-white cursor-pointer ${errors.service ? 'border-rose-400' : ''}`}
            >
              {clinicData.services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name} ({s.badge})
                </option>
              ))}
            </select>
          </div>

          {/* Row 4: Preferred Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="patient-date" className={labelClasses}>
                Preferred Date <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="patient-date"
                  name="date"
                  type="date"
                  min={getTodayDateString()}
                  value={formData.date}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`${inputBaseClasses} ${errors.date ? 'border-rose-400' : ''}`}
                  aria-invalid={errors.date ? 'true' : 'false'}
                  aria-describedby={errors.date ? 'date-error' : undefined}
                  required
                />
              </div>
              {errors.date && (
                <p id="date-error" className="mt-1 text-xs text-rose-600 font-medium">
                  {errors.date}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="patient-timeSlot" className={labelClasses}>
                Preferred Time Slot <span className="text-rose-500">*</span>
              </label>
              <select
                id="patient-timeSlot"
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`${inputBaseClasses} bg-white cursor-pointer`}
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 5: Contact Preference */}
          <div>
            <label className={labelClasses}>
              Preferred Contact Channel
            </label>
            <div className="grid grid-cols-3 gap-3">
              {contactMethods.map((method) => {
                const isSelected = formData.contactMethod === method;
                return (
                  <label
                    key={method}
                    className={`flex items-center justify-center p-3 rounded-xl border text-xs sm:text-sm font-semibold cursor-pointer transition-all ${
                      isSelected
                        ? isDental
                          ? 'border-teal-600 bg-teal-50 text-teal-800'
                          : 'border-skin-sage bg-stone-100 text-stone-900'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      checked={isSelected}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="sr-only"
                    />
                    <span>{method}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Row 6: Symptoms / Notes */}
          <div>
            <label htmlFor="patient-notes" className={labelClasses}>
              Symptoms or Specific Notes <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
            </label>
            <textarea
              id="patient-notes"
              name="notes"
              rows={3}
              placeholder="Briefly describe your symptoms, reason for consultation, or any existing conditions..."
              value={formData.notes}
              onChange={handleChange}
              disabled={isSubmitting}
              className={inputBaseClasses}
            />
          </div>

          {/* Row 7: Privacy Consent */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="privacyConsent"
                checked={formData.privacyConsent}
                onChange={handleChange}
                disabled={isSubmitting}
                className="mt-1 w-4 h-4 text-teal-600 border-slate-300 rounded focus:ring-teal-500"
              />
              <span className="text-xs text-slate-600 leading-normal">
                I agree to the processing of my contact information strictly for appointment scheduling purposes as detailed in the{' '}
                <a href="/privacy-policy" target="_blank" className="underline hover:text-slate-900 font-medium">
                  Privacy Policy
                </a>.
              </span>
            </label>
            {errors.privacyConsent && (
              <p className="mt-1 text-xs text-rose-600 font-medium">
                {errors.privacyConsent}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              theme={theme}
              variant="primary"
              size="lg"
              className="w-full justify-center shadow-md text-base"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending Request...' : isDental ? 'Submit Dental Appointment Request' : 'Submit Dermatology Inquiry'}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>Encrypted demo intake • No spam policy • Clinic coordinator triage</span>
          </div>
        </div>
      </form>

      {/* Confirmation Modal */}
      <BookingConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bookingResult={bookingResult}
        clinicData={clinicData}
        theme={theme}
      />
    </>
  );
};

export default AppointmentBookingForm;
