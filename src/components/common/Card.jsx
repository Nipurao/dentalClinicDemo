import React from 'react';

export const Card = ({
  children,
  className = '',
  theme = 'dental',
  hover = true,
  onClick,
  ...props
}) => {
  const isDental = theme === 'dental';

  const baseStyles = 'rounded-2xl transition-all duration-300 overflow-hidden';
  const themeStyles = isDental
    ? 'bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]'
    : 'bg-white border border-stone-200/60 shadow-[0_4px_24px_-4px_rgba(31,36,33,0.04)]';

  const hoverStyles = hover
    ? isDental
      ? 'hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(13,148,136,0.12)] hover:border-teal-100'
      : 'hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(74,107,83,0.1)] hover:border-stone-300'
    : '';

  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${themeStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
