import { useEffect } from 'react';

/**
 * Lightweight client-side SEO manager to update document title and meta descriptions
 */
export const SEOHead = ({ title, description, clinicName = 'Clinic Platform' }) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${clinicName}` : clinicName;
    document.title = fullTitle;

    // Update meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }
  }, [title, description, clinicName]);

  return null;
};

export default SEOHead;
