/**
 * Appointment Service Layer
 * Simulates a robust backend API service with local demo persistence.
 * Ready to be connected to real clinic backend/CRM APIs.
 */

const STORAGE_KEY = 'clinic_demo_appointments';

export const appointmentService = {
  /**
   * Submit an appointment inquiry request
   * @param {Object} appointmentData
   * @returns {Promise<{success: boolean, referenceId: string, message: string, data: Object}>}
   */
  async submitInquiry(appointmentData) {
    // Artificial latency to mirror real server network interaction
    await new Promise((resolve) => setTimeout(resolve, 850));

    // Basic server-side style safety validation
    if (!appointmentData.name || !appointmentData.phone || !appointmentData.service || !appointmentData.date) {
      throw new Error('Missing mandatory fields: Name, Phone, Service, and Date are required.');
    }

    const prefix = appointmentData.clinicType === 'dental' ? 'SMILE' : 'DERMA';
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `${prefix}-${Date.now().toString().slice(-4)}${randomNum}`;

    const newAppointment = {
      id: referenceId,
      ...appointmentData,
      submittedAt: new Date().toISOString(),
      status: 'Inquiry Received (Demo Mode)',
      isDemo: true,
    };

    // Store in demo localStorage for review
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      existing.unshift(newAppointment);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
    } catch {
      // LocalStorage might be disabled in private mode
    }

    return {
      success: true,
      referenceId,
      message: 'Your appointment inquiry has been successfully submitted! Our clinic care coordinator will contact you shortly to confirm your time slot.',
      data: newAppointment,
    };
  },

  /**
   * Retrieve demo submitted inquiries (useful for testing or demo presentation)
   */
  getDemoInquiries() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  }
};
