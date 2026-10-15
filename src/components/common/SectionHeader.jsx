import React from 'react';
import Badge from './Badge';

export const SectionHeader = ({
  badge,
  title,
  subtitle,
  align = 'center',
  theme = 'dental',
  className = '',
}) => {
  const isDental = theme === 'dental';
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`mb-3.5 ${isCenter ? 'flex justify-center' : ''}`}>
          <Badge theme={theme} variant="default">
            {badge}
          </Badge>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 ${
          !isDental ? 'font-serif text-skin-charcoal' : ''
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed ${!isDental ? 'text-stone-600' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
