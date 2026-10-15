import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Card from '../common/Card';

export const FAQSection = ({ faqs, theme = 'dental' }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const isDental = theme === 'dental';

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl transition-all duration-200 border bg-white overflow-hidden ${
              isOpen
                ? isDental
                  ? 'border-teal-500 shadow-sm'
                  : 'border-skin-sage shadow-sm'
                : 'border-slate-200/80 hover:border-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span
                className={`text-base sm:text-lg font-bold text-slate-900 ${
                  isOpen ? (isDental ? 'text-teal-700' : 'text-skin-sage') : ''
                } ${!isDental ? 'font-serif' : ''}`}
              >
                {faq.q}
              </span>
              <span
                className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${
                  isOpen
                    ? 'rotate-180 bg-teal-50 text-teal-700'
                    : 'bg-slate-50 text-slate-400'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${index}`}
                className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-50"
              >
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQSection;
