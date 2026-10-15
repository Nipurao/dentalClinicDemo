import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Navigation } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';
import { generateWhatsAppLink } from '../../utils/whatsapp';

export const ContactInfoSection = ({ clinicData, theme = 'dental' }) => {
  const isDental = theme === 'dental';
  const { contact } = clinicData;

  const whatsappUrl = generateWhatsAppLink(
    contact.whatsappNumber,
    `Hello ${clinicData.name}, I would like to enquire about your clinic location and consultations.`
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Contact Cards Column (Left) */}
      <div className="lg:col-span-5 space-y-6">
        {/* Address Card */}
        <Card theme={theme} className="p-6 sm:p-7 space-y-4">
          <div className="flex items-start gap-4">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                isDental ? 'bg-teal-50 text-teal-700' : 'bg-stone-100 text-skin-sage'
              }`}
            >
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Clinic Address</h4>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                {contact.address}
              </p>
              <a
                href={contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-900 mt-2.5 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </Card>

        {/* Telephone & Emergency Card */}
        <Card theme={theme} className="p-6 sm:p-7 space-y-4">
          <div className="flex items-start gap-4">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                isDental ? 'bg-teal-50 text-teal-700' : 'bg-stone-100 text-skin-sage'
              }`}
            >
              <Phone className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900">Call & Emergency</h4>
              <p className="text-sm text-slate-600">
                Reception: <a href={`tel:${contact.phone}`} className="font-semibold text-slate-900 hover:underline">{contact.phone}</a>
              </p>
              <p className="text-xs text-rose-600 font-medium">
                Emergency Triage: <a href={`tel:${contact.emergencyPhone}`} className="hover:underline">{contact.emergencyPhone}</a>
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* Operating Hours Card */}
        <Card theme={theme} className="p-6 sm:p-7 space-y-4">
          <div className="flex items-start gap-4">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                isDental ? 'bg-teal-50 text-teal-700' : 'bg-stone-100 text-skin-sage'
              }`}
            >
              <Clock className="w-6 h-6" />
            </div>
            <div className="space-y-2 flex-grow">
              <h4 className="text-base font-bold text-slate-900">Clinic Hours</h4>
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                {contact.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center py-1 border-b border-slate-100 last:border-0">
                    <span className="font-medium text-slate-700">{h.days}</span>
                    <span className="text-slate-500 font-mono text-xs">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Embedded Interactive Map Card (Right) */}
      <div className="lg:col-span-7">
        <Card theme={theme} className="overflow-hidden border border-slate-200 shadow-md">
          {/* Aesthetic Map Preview Header */}
          <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Navigation className="w-5 h-5 text-teal-400" />
              <div>
                <h4 className="text-sm font-bold">{clinicData.name} Facility Location</h4>
                <p className="text-xs text-slate-400">Valet parking & elevator access available</p>
              </div>
            </div>
            <Button
              href={contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="white"
              size="sm"
              icon={ExternalLink}
            >
              Get Directions
            </Button>
          </div>

          {/* Interactive Map Visual Mockup */}
          <div className="relative aspect-[16/10] bg-slate-100 flex items-center justify-center overflow-hidden">
            <iframe
              title={`${clinicData.name} Map Location`}
              className="w-full h-full border-0 grayscale-[20%] contrast-[105%]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112061.27258414562!2d77.01423851640625!3d28.4594965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18063b0a7019%3A0x6b825cfb3858f6b7!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="p-4 bg-slate-50 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100">
            <span>📍 Easy accessibility via metro and express ring road.</span>
            <span className="font-semibold text-slate-700">Dedicated Clinic Visitor Parking</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactInfoSection;
