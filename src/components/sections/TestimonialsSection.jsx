import React from 'react';
import { Star, Quote } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';

export const TestimonialsSection = ({ testimonials, theme = 'dental' }) => {
  const isDental = theme === 'dental';

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((item, idx) => (
          <Card
            key={idx}
            theme={theme}
            className="p-6 sm:p-8 flex flex-col justify-between relative group"
          >
            <div>
              {/* Star Rating & Quote Accent */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-slate-200 group-hover:text-teal-200 transition-colors" />
              </div>

              {/* Treatment Badge */}
              <div className="mb-3">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                  {item.treatment}
                </span>
              </div>

              {/* Patient review quote */}
              <p className="text-sm text-slate-700 leading-relaxed italic">
                "{item.comment}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {item.name}
                </h4>
                <p className="text-[11px] text-slate-400">
                  {item.date}
                </p>
              </div>

              <Badge theme={theme} variant="demo">
                Demo Feedback
              </Badge>
            </div>
          </Card>
        ))}
      </div>

      {/* Mandatory Demo Disclaimer */}
      <div className="text-center">
        <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
          * Notice: Testimonials are illustrative demo placeholders for website preview purposes only. Individual medical results vary based on unique clinical diagnoses.
        </p>
      </div>
    </div>
  );
};

export default TestimonialsSection;
