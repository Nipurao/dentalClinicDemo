/**
 * Validation utilities for Clinic Appointment Forms
 */

// Validate Indian mobile numbers: 10 digits, starting with 6, 7, 8, or 9
export const validateIndianMobile = (phone) => {
  if (!phone) return { valid: false, message: 'Mobile number is required.' };
  const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
  
  // If it starts with 91 and has 12 digits, strip 91
  const standard10 = cleaned.length === 12 && cleaned.startsWith('91') ? cleaned.slice(2) : cleaned;

  const regex = /^[6-9]\d{9}$/;
  if (!regex.test(standard10)) {
    return {
      valid: false,
      message: 'Please enter a valid 10-digit Indian mobile number (e.g. 98765 43210).'
    };
  }
  return { valid: true, cleaned: standard10 };
};

// Validate email if provided (optional field)
export const validateEmail = (email) => {
  if (!email || email.trim() === '') return { valid: true };
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.trim())) {
    return { valid: false, message: 'Please enter a valid email address.' };
  }
  return { valid: true };
};

// Validate date: must be today or in the future
export const validateAppointmentDate = (dateString) => {
  if (!dateString) return { valid: false, message: 'Please select a preferred date.' };
  
  const selectedDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (isNaN(selectedDate.getTime())) {
    return { valid: false, message: 'Invalid date format.' };
  }

  // Adjust selected date to local midnight
  const localSelected = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());

  if (localSelected < today) {
    return { valid: false, message: 'Appointment date cannot be in the past.' };
  }
  return { valid: true };
};

// Get today's date formatted as YYYY-MM-DD for native date input min attribute
export const getTodayDateString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
