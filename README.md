# Premium Dental & Skin Clinic Website Platform

A production-quality, responsive dual-clinic website platform engineered with **React.js (Vite)**, **Tailwind CSS**, **React Router DOM**, **Lucide Icons**, and **Framer Motion**. Designed for dental clinics, dermatologists, skin clinics, and aesthetic wellness practices as a commercial-grade demonstration platform for **Radiant TechNova**.

---

## 🌟 Key Highlights & Dual Experiences

The platform provides two completely distinct, fully realized clinic experiences within the same application:

### A. SmileCare Dental Studio (`/dental-clinic`)
- **Visual Identity**: Clean teal (`#0D9488`), deep navy (`#0B192C`), crisp white, and subtle mint accents.
- **Typography & Aesthetic**: Modern medical precision, reassuring geometric typography, and hospital-grade sterilization showcases.
- **10 Core Dental Services**: General Dentistry, Dental Cleaning & Preventive Care, Teeth Whitening, Root Canal Treatment, Dental Implants, Braces & Clear Aligners, Pediatric Dentistry, Cosmetic Dentistry, Tooth Extraction, Emergency Dental Consultation.
- **Specialist Team**: Dental surgeons, orthodontists, and micro-endodontists with verified demo credential badges.

### B. DermaGlow Skin & Laser Clinic (`/skin-clinic`)
- **Visual Identity**: Warm ivory (`#FBF9F5`), sage green (`#4A6B53`), muted champagne gold (`#C5A880`), and charcoal (`#1F2421`).
- **Typography & Aesthetic**: High-end editorial serif styling, tranquil spa-like clinical atmosphere, and barrier-first dermatological science.
- **10 Specialized Dermatology Services**: Dermatology Consultation, Acne & Acne Scar Care, Pigmentation Consultation, Skin Rejuvenation, Laser Hair Reduction, Hair & Scalp Consultation, Clinical Chemical Peels, Anti-Aging Treatments, Skin Health Assessment, Cosmetic Dermatology Consultation.
- **Medical Faculty**: Board-certified MD dermatologists and aesthetic physicians with clinical demo credentials.

### C. Presentation Demo Hub (`/`)
- A dedicated client presentation interface introducing Radiant TechNova's digital platform capabilities, quick launch cards for both clinics, and architectural feature comparisons.

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: v18.0.0 or higher (v24.x tested)
- **npm**: v9.x or higher (v11.x tested)

### 1. Installation
Clone or navigate to the project directory:
```bash
cd "e:\Dental Clinic-skincare"
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized, tree-shaken static production bundle in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🗺️ Route Directory

| Route | Description |
| :--- | :--- |
| `/` | **Platform Presentation Hub** (Client demo selector & platform overview) |
| `/dental-clinic` | SmileCare Dental Studio Homepage |
| `/dental-clinic/about` | Dental clinic philosophy, sterilization protocols & values |
| `/dental-clinic/services` | Complete catalog of 10 dental treatments with live search |
| `/dental-clinic/services/:slug` | Dynamic, reusable dental procedure detail template |
| `/dental-clinic/doctors` | Dental surgeons, orthodontists, and endodontists directory |
| `/dental-clinic/gallery` | Operatories, 3D scanning workstations & sterilization bay |
| `/dental-clinic/faq` | Frequently asked questions on implants, crowns & costs |
| `/dental-clinic/contact` | Location, hours, emergency telephone & directions |
| `/dental-clinic/book-appointment` | Interactive appointment request intake with query parsing |
| `/skin-clinic` | DermaGlow Skin & Laser Clinic Homepage |
| `/skin-clinic/about` | Barrier-first dermatology philosophy and clinical standards |
| `/skin-clinic/services` | Searchable directory of 10 dermatology & laser treatments |
| `/skin-clinic/services/:slug` | Dynamic, reusable skin procedure detail template |
| `/skin-clinic/doctors` | Board-certified MD dermatologists directory |
| `/skin-clinic/gallery` | Private suites, laser rooms & trichology diagnostics |
| `/skin-clinic/faq` | FAQs on laser hair reduction, chemical peels & acne care |
| `/skin-clinic/contact` | Location, Indiranagar suite hours & directions |
| `/skin-clinic/book-appointment` | Interactive skin consultation intake with symptom notes |
| `/privacy-policy` | Patient health information & demo data disclosure |
| `/terms` | Commercial terms of service & clinical notice |
| `*` | Branded 404 page with direct links back to both clinics |

---

## ⚙️ How to Customize for a Real Clinic Client

All clinic-specific data is decoupled from UI components and stored in clean configuration modules:

1. **Dental Clinic Details**: Edit `src/data/dentalClinic.js`
   - Clinic name, tagline, and contact numbers
   - Operating hours and Google Maps embed URL
   - WhatsApp number (in international format without `+`)
   - Services catalog, pricing notes, and procedure steps
   - Clinician team profiles, qualifications, and specialties
   - Gallery images and patient reviews

2. **Skin Clinic Details**: Edit `src/data/skinClinic.js`
   - All branding, color tokens, and dermatology catalog details

3. **Agency Credits**: Edit `src/data/sharedData.js`
   - Set `platformInfo.agencyCreditEnabled = false` to remove Radiant TechNova credits from the footer for white-labeled client deployments.

---

## 📋 Appointment Booking & WhatsApp Architecture

### Form Validation
- **Indian Mobile Validation**: Strictly validates 10-digit Indian numbers starting with `6, 7, 8, or 9` (accepts standard formats such as `9876543210`, `+91 98765 43210`, or `919876543210`).
- **Date Constraints**: Uses `min` attribute and client-side validation to prevent booking past dates.
- **Service Pre-selection**: When navigating from any service detail page via "Book", the service name is auto-populated via `?service=...` query parameters.
- **Transparency Notice**: Confirms with the patient that the submission is an **enquiry request**, not an automatic confirmed booking, awaiting clinician availability verification.

### Floating WhatsApp Integration
- Floating action button present on all clinic pages.
- Uses configured clinic number in international format `https://wa.me/{number}?text={encodedText}`.
- Pre-fills a professional, customizable greeting message.
- The appointment confirmation modal includes a one-click button: **"Send Details to WhatsApp"** for instant follow-up with the clinic coordinator.

---

## 🔌 Production Integrations (Backend & Third-Party)

When preparing this platform for real-world clinic deployments:
1. **Appointment Service (`src/services/appointmentService.js`)**:
   - Replace the simulated async promise with your clinic's REST or GraphQL backend endpoint (e.g. `POST /api/v1/appointments/inquire`).
2. **WhatsApp Business API**:
   - Integrate Webhooks or services such as Twilio, Wati, or Interakt to notify the clinic reception desk instantly when a patient submits a request.
3. **Clinic Management Systems (CMS / EHR)**:
   - Synchronize inquiries with Practo Ray, Clinicea, Denticon, or custom CRM systems.
