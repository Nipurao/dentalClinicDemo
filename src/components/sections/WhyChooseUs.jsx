import React from 'react';
import { ShieldCheck, Sparkles, FileText, HeartHandshake, UserCheck, Beaker, Award, CheckCircle2 } from 'lucide-react';
import Card from '../common/Card';

const iconMap = {
  ShieldCheck,
  Sparkles,
  FileText,
  HeartHandshake,
  UserCheck,
  Beaker,
  Award
};

export const WhyChooseUs = ({ items, theme = 'dental' }) => {
  const isDental = theme === 'dental';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {items.map((item, idx) => {
        const IconComponent = iconMap[item.icon] || CheckCircle2;
        return (
          <Card
            key={idx}
            theme={theme}
            className="p-6 sm:p-7 flex flex-col justify-start group"
          >
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
                isDental
                  ? 'bg-teal-50 text-teal-700 border border-teal-100'
                  : 'bg-stone-100 text-skin-sage border border-stone-200'
              }`}
            >
              <IconComponent className="w-6 h-6 stroke-[2.2]" />
            </div>

            <h3
              className={`text-lg font-bold text-slate-900 mb-2.5 ${
                !isDental ? 'font-serif text-skin-charcoal' : ''
              }`}
            >
              {item.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              {item.description}
            </p>
          </Card>
        );
      })}
    </div>
  );
};

export default WhyChooseUs;
