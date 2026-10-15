import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  theme = 'dental',
  size = 'md',
  className = '',
  disabled = false,
  isLoading = false,
  icon: Icon = null,
  iconPosition = 'right',
  ariaLabel,
  ...props
}) => {
  const isDental = theme === 'dental';

  // Sizing tokens
  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs font-semibold rounded-lg gap-1.5',
    md: 'px-5 py-2.5 text-sm font-semibold rounded-xl gap-2',
    lg: 'px-6 py-3.5 text-base font-semibold rounded-xl gap-2.5',
  };

  // Theme-specific variants
  const getVariants = () => {
    if (isDental) {
      return {
        primary: 'bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white shadow-sm hover:shadow-md hover:shadow-teal-700/20 focus-visible:ring-teal-500',
        secondary: 'bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white shadow-sm hover:shadow-md focus-visible:ring-slate-800',
        outline: 'border-2 border-teal-600 text-teal-700 hover:bg-teal-50 active:bg-teal-100 focus-visible:ring-teal-500 bg-transparent',
        ghost: 'text-teal-800 hover:bg-teal-50 active:bg-teal-100 focus-visible:ring-teal-500 bg-transparent',
        white: 'bg-white text-teal-800 hover:bg-teal-50 active:bg-white shadow-sm focus-visible:ring-teal-500',
      };
    } else {
      // Skin clinic aesthetic
      return {
        primary: 'bg-skin-sage hover:bg-skin-sageDark active:bg-[#2c4031] text-white shadow-sm hover:shadow-md hover:shadow-stone-700/15 focus-visible:ring-skin-sage tracking-wide',
        secondary: 'bg-skin-charcoal hover:bg-black text-white shadow-sm hover:shadow-md focus-visible:ring-stone-800 tracking-wide',
        outline: 'border-2 border-skin-sage text-skin-sage hover:bg-skin-sageLight active:bg-skin-100 focus-visible:ring-skin-sage bg-transparent',
        ghost: 'text-stone-800 hover:bg-stone-100 active:bg-stone-200 focus-visible:ring-stone-600 bg-transparent',
        white: 'bg-white text-stone-900 hover:bg-stone-50 active:bg-white shadow-sm focus-visible:ring-stone-500',
      };
    }
  };

  const variantStyles = getVariants()[variant] || getVariants().primary;
  const baseClasses = `inline-flex items-center justify-center font-medium transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${sizes[size]} ${variantStyles} ${className}`;

  const content = (
    <>
      {isLoading && (
        <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin mr-1" />
      )}
      {Icon && iconPosition === 'left' && !isLoading && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && !isLoading && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} aria-label={ariaLabel} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} aria-label={ariaLabel} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={baseClasses}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
