/**
 * WhatsApp integration helper
 */

export const generateWhatsAppLink = (phoneNumber, message) => {
  if (!phoneNumber) return '#';
  // Strip non-digits and leading +
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message || 'Hello, I would like to enquire about your clinic treatments.');
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
};

export const formatAppointmentWhatsAppText = (clinicName, bookingData) => {
  return `Hello ${clinicName},\n\nI would like to request an appointment:\n` +
    `• Patient Name: ${bookingData.name}\n` +
    `• Service: ${bookingData.service}\n` +
    `• Preferred Date: ${bookingData.date}\n` +
    `• Preferred Time: ${bookingData.timeSlot}\n` +
    `• Preferred Contact: ${bookingData.contactMethod}\n` +
    (bookingData.notes ? `• Notes: ${bookingData.notes}\n` : '') +
    `\nPlease let me know your earliest available slot. Thank you!`;
};
