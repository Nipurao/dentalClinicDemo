import React from 'react';
import { CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { generateWhatsAppLink, formatAppointmentWhatsAppText } from '../../utils/whatsapp';

export const BookingConfirmationModal = ({
  isOpen,
  onClose,
  bookingResult,
  clinicData,
  theme = 'dental'
}) => {
  if (!bookingResult) return null;

  const { referenceId, data } = bookingResult;
  const isDental = theme === 'dental';

  // Format pre-filled WhatsApp message with appointment request details
  const whatsappText = formatAppointmentWhatsAppText(clinicData.name, {
    name: data.name,
    service: data.service,
    date: data.date,
    timeSlot: data.timeSlot,
    contactMethod: data.contactMethod,
    notes: data.notes
  });

  const whatsappUrl = generateWhatsAppLink(clinicData.contact.whatsappNumber, whatsappText);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Appointment Request Received"
      theme={theme}
      maxWidth="max-w-lg"
    >
      <div className="text-center space-y-4">
        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-200">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div>
          <h4 className="text-xl font-bold text-slate-900">
            Thank you, {data.name}!
          </h4>
          <p className="text-sm text-slate-600 mt-1">
            Your appointment inquiry has been registered.
          </p>
        </div>

        {/* Reference Code Box */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center">
          <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
            Inquiry Reference Number
          </span>
          <span className="text-lg font-mono font-bold text-slate-900 mt-0.5">
            {referenceId}
          </span>
        </div>

        {/* Critical Notice: Request vs Confirmed Booking */}
        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-left text-xs text-amber-950 space-y-1.5">
          <div className="flex items-center gap-2 font-semibold text-amber-900">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-700" />
            <span>Important: This is an Appointment Request</span>
          </div>
          <p className="leading-relaxed">
            Your appointment is <strong>NOT yet finalized</strong>. Our patient care coordinator will review the clinician schedule and contact you via <strong>{data.contactMethod}</strong> at <strong>{data.phone}</strong> to confirm your exact time slot.
          </p>
        </div>

        {/* Request Summary */}
        <div className="text-left text-xs text-slate-600 space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-100">
          <div><span className="font-semibold text-slate-800">Requested Treatment:</span> {data.service}</div>
          <div><span className="font-semibold text-slate-800">Preferred Date:</span> {data.date} ({data.timeSlot})</div>
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
            variant="primary"
            size="md"
            className="flex-1 justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white"
            icon={MessageSquare}
          >
            Send Details to WhatsApp
          </Button>
          <Button
            onClick={onClose}
            theme={theme}
            variant="outline"
            size="md"
            className="flex-1 justify-center"
          >
            Done
          </Button>
        </div>

        <p className="text-[11px] text-slate-400">
          Demo Mode: In a client deployment, this triggers instant SMS, WhatsApp API, and clinic CRM sync.
        </p>
      </div>
    </Modal>
  );
};

export default BookingConfirmationModal;
