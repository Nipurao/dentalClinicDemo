import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart, Sparkles, Activity } from 'lucide-react';
import { platformInfo } from '../../data/sharedData';

export const Footer = ({ clinicData, basePath, theme = 'dental' }) => {
  const isDental = theme === 'dental';

  return (
    <footer
      className={`border-t transition-colors ${
        isDental
          ? 'bg-slate-950 text-slate-300 border-slate-900'
          : 'bg-[#181d19] text-stone-300 border-stone-800'
      }`}
    >
      {/* Upper Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Clinic Overview & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${
                  isDental ? 'bg-teal-600' : 'bg-skin-sage'
                }`}
              >
                {isDental ? <Activity className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
              </div>
              <span className={`text-lg font-bold text-white ${!isDental ? 'font-serif' : ''}`}>
                {clinicData.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {clinicData.subtitle}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Accredited Clinical Practice Demo</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Explore Clinic
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to={basePath} className="hover:text-white transition-colors">
                  Clinic Overview
                </Link>
              </li>
              <li>
                <Link to={`${basePath}/about`} className="hover:text-white transition-colors">
                  About Our Practice
                </Link>
              </li>
              <li>
                <Link to={`${basePath}/services`} className="hover:text-white transition-colors">
                  Treatments & Procedures
                </Link>
              </li>
              <li>
                <Link to={`${basePath}/doctors`} className="hover:text-white transition-colors">
                  {isDental ? 'Meet Our Dentists' : 'Meet Our Dermatologists'}
                </Link>
              </li>
              <li>
                <Link to={`${basePath}/gallery`} className="hover:text-white transition-colors">
                  Facility Tour & Gallery
                </Link>
              </li>
              <li>
                <Link to={`${basePath}/faq`} className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to={`${basePath}/book-appointment`} className="hover:text-white font-medium text-teal-400 transition-colors">
                  Request Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Treatments */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Featured Treatments
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {clinicData.services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`${basePath}/services/${service.slug}`}
                    className="hover:text-white transition-colors line-clamp-1"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact & Hours
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{clinicData.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${clinicData.contact.phone}`} className="hover:text-white font-medium">
                  {clinicData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${clinicData.contact.email}`} className="hover:text-white">
                  {clinicData.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-white/10">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1 text-slate-400">
                  {clinicData.contact.hours.map((h, i) => (
                    <div key={i}>
                      <span className="text-slate-300">{h.days}:</span> {h.time}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer Banner */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-200">Legal & Clinical Notice: </span>
            {platformInfo.legalDisclaimer}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Platform Credit */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; {new Date().getFullYear()} {clinicData.name}. All Rights Reserved.</span>
            <span className="hidden sm:inline opacity-30">|</span>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>

          {platformInfo.agencyCreditEnabled && (
            <div className="flex items-center gap-1.5 text-slate-400">
              <span>Platform Engineered by</span>
              <a
                href={platformInfo.developerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-400 hover:text-teal-300 transition-colors"
              >
                {platformInfo.developerName}
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
