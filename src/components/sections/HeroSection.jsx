import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import ImageWithFallback from '../common/ImageWithFallback';

export const HeroSection = ({ clinicData, basePath, theme = 'dental' }) => {
  const isDental = theme === 'dental';
  const { hero } = clinicData;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isDental ? (
          <>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -left-32 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl" />
          </>
        ) : (
          <>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#ece5d8]/60 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#eef3ef]/60 rounded-full blur-3xl" />
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex justify-center lg:justify-start">
              <Badge theme={theme} variant="default" icon={ShieldCheck}>
                {hero.badge}
              </Badge>
            </div>

            {/* Headline */}
            <h1
              className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] ${
                !isDental ? 'font-serif text-skin-charcoal font-bold' : ''
              }`}
            >
              {hero.headline}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {hero.supportingText}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                to={`${basePath}/book-appointment`}
                theme={theme}
                variant="primary"
                size="lg"
                icon={Calendar}
                className="w-full sm:w-auto shadow-md"
              >
                {hero.primaryCta}
              </Button>

              <Button
                to={`${basePath}/services`}
                theme={theme}
                variant="outline"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta}
              </Button>
            </div>

            {/* Statistical Highlights / Trust Badges */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {hero.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block font-mono">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 block leading-tight">
                      {stat.label}
                    </span>
                    <span className="text-[10px] text-slate-400 block">
                      {stat.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Clinical Photography Frame */}
              <div
                className={`rounded-3xl p-2.5 sm:p-3 shadow-2xl transition-all duration-300 ${
                  isDental
                    ? 'bg-gradient-to-tr from-teal-500/20 to-teal-100 shadow-teal-900/10'
                    : 'bg-gradient-to-tr from-stone-400/20 to-stone-100 shadow-stone-900/10'
                }`}
              >
                <ImageWithFallback
                  src={hero.heroImage}
                  alt={hero.imageAlt}
                  aspectRatio="aspect-[4/5]"
                  className="rounded-2xl shadow-inner"
                  theme={theme}
                  fallbackTitle={clinicData.name}
                />
              </div>

              {/* Floating Trust Card */}
              <div
                className={`absolute -bottom-6 -left-4 sm:-left-6 p-4 rounded-2xl shadow-xl bg-white/95 backdrop-blur-sm border flex items-center gap-3.5 max-w-xs ${
                  isDental ? 'border-teal-100' : 'border-stone-200'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-white ${
                    isDental ? 'bg-teal-600' : 'bg-skin-sage'
                  }`}
                >
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-900">
                    <span>4.9 / 5.0 Rating</span>
                    <span className="text-[10px] font-normal text-slate-400">(Demo)</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                    Highest hygiene & patient satisfaction standard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
