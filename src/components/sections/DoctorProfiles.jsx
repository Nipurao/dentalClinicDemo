import React from 'react';
import { Calendar, Award, ShieldCheck, Stethoscope } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import ImageWithFallback from '../common/ImageWithFallback';

export const DoctorProfiles = ({
  doctors,
  basePath,
  theme = 'dental',
  limit
}) => {
  const isDental = theme === 'dental';
  const displayDoctors = limit ? doctors.slice(0, limit) : doctors;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {displayDoctors.map((doc) => (
          <Card
            key={doc.id}
            theme={theme}
            className="flex flex-col justify-between group"
          >
            <div>
              {/* Doctor Portrait Frame */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={doc.imageUrl}
                  alt={doc.name}
                  aspectRatio="aspect-[4/5]"
                  theme={theme}
                  fallbackTitle={doc.name}
                  className="group-hover:scale-105 transition-transform duration-500"
                />

                {/* Demo Qualification Badge */}
                <div className="absolute top-3 left-3">
                  <Badge theme={theme} variant="demo">
                    Demo Clinician
                  </Badge>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6">
                <h3
                  className={`text-xl font-bold text-slate-900 ${
                    !isDental ? 'font-serif text-skin-charcoal' : ''
                  }`}
                >
                  {doc.name}
                </h3>

                <p className="text-xs font-semibold text-teal-700 mt-1 flex items-center gap-1.5">
                  <Stethoscope className="w-3.5 h-3.5 shrink-0" />
                  <span>{doc.role}</span>
                </p>

                {/* Qualification & Experience placeholders */}
                <div className="mt-3 py-2 px-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 text-xs space-y-1">
                  <div className="font-medium text-slate-800 line-clamp-1">
                    {doc.qualification}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    {doc.experience}
                  </div>
                </div>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-3">
                  {doc.bio}
                </p>

                {/* Specialty Chips */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {doc.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="p-6 pt-0 border-t border-slate-50 mt-4">
              <Button
                to={`${basePath}/book-appointment`}
                theme={theme}
                variant="outline"
                size="sm"
                className="w-full justify-center"
                icon={Calendar}
              >
                Consult {doc.name.split(' ')[1]}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Demo Clinician Transparency Note */}
      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-center max-w-2xl mx-auto">
        <p className="text-xs text-amber-900 leading-relaxed">
          <span className="font-semibold">Demo Notice: </span>
          The clinician profiles above represent illustrative demonstration placeholders for this live preview. In production, this directory configures directly with your clinic's registered medical council numbers and certified team biographies.
        </p>
      </div>
    </div>
  );
};

export default DoctorProfiles;
