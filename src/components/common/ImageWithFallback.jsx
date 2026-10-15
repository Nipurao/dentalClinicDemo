import React, { useState } from 'react';

/**
 * Image component that gracefully falls back to an aesthetic SVG clinic placeholder
 * if the remote asset fails to load or is blocked.
 */
export const ImageWithFallback = ({
  src,
  alt = 'Clinic medical photo',
  className = '',
  aspectRatio = 'aspect-[16/10]',
  fallbackTitle = 'Clinical Care Facility',
  theme = 'dental',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const isDental = theme === 'dental';
  const bgColor = isDental ? 'bg-teal-50' : 'bg-stone-100';
  const strokeColor = isDental ? '#0d9488' : '#4a6b53';
  const textColor = isDental ? 'text-teal-800' : 'text-stone-700';

  return (
    <div className={`relative overflow-hidden ${bgColor} ${aspectRatio} ${className}`}>
      {!hasError ? (
        <>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            {...props}
          />
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center animate-pulse">
              <div className="w-8 h-8 rounded-full border-2 border-slate-300 border-t-teal-600 animate-spin" />
            </div>
          )}
        </>
      ) : (
        <div className={`w-full h-full flex flex-col items-center justify-center p-6 text-center ${bgColor}`}>
          <svg
            className="w-12 h-12 mb-2 opacity-80"
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isDental ? (
              // Dental tooth / cross medical icon
              <path d="M12 2C8 2 5 5 5 9c0 5 3 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 4v6m-3-3h6" />
            ) : (
              // Dermatology floral / leaf medical icon
              <path d="M12 22V12m0 0C8.5 12 6 8.5 6 5c3.5 0 6 2.5 6 7zm0 0c3.5 0 6-3.5 6-7 0 3.5-2.5 7-6 7z" />
            )}
          </svg>
          <span className={`text-xs font-semibold uppercase tracking-wider ${textColor}`}>
            {fallbackTitle}
          </span>
          <span className="text-[11px] text-slate-400 mt-1">Verified Clinical Facility</span>
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;
