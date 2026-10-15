import React from 'react';

export const Badge = ({
  children,
  variant = 'default',
  theme = 'dental',
  className = '',
  icon: Icon = null
}) => {
  const isDental = theme === 'dental';

  const baseStyles = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-colors';

  const variants = {
    default: isDental
      ? 'bg-teal-50 text-teal-800 border border-teal-200/70'
      : 'bg-stone-100 text-stone-800 border border-stone-200',
    primary: isDental
      ? 'bg-teal-700 text-white'
      : 'bg-skin-sage text-white',
    accent: isDental
      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
      : 'bg-amber-50 text-amber-900 border border-amber-200',
    demo: 'bg-amber-100/80 text-amber-900 border border-amber-300/80 text-[11px] font-medium tracking-normal',
    outline: isDental
      ? 'border border-teal-600/40 text-teal-700 bg-transparent'
      : 'border border-stone-400 text-stone-700 bg-transparent'
  };

  return (
    <span className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
};

export default Badge;
