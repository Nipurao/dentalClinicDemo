import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import ImageWithFallback from '../common/ImageWithFallback';

export const ServicesGrid = ({
  services,
  basePath,
  theme = 'dental',
  limit,
  showSearch = false,
  title = 'Our Treatments & Specialities',
  subtitle = 'Evidence-led clinical protocols designed for optimal comfort, precision, and lasting outcomes.'
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const isDental = theme === 'dental';

  const filteredServices = services.filter((s) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      s.name.toLowerCase().includes(term) ||
      s.shortDescription.toLowerCase().includes(term) ||
      s.badge.toLowerCase().includes(term)
    );
  });

  const displayList = limit ? filteredServices.slice(0, limit) : filteredServices;

  return (
    <div className="space-y-8">
      {/* Optional Search / Filter */}
      {showSearch && (
        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search treatments (e.g. Implants, Acne, Whitening)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                isDental
                  ? 'border-slate-200 focus:border-teal-500 focus:ring-teal-500/20 bg-white'
                  : 'border-stone-300 focus:border-skin-sage focus:ring-skin-sage/20 bg-white'
              }`}
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
          </div>
        </div>
      )}

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayList.map((service) => (
          <Card
            key={service.slug}
            theme={theme}
            className="flex flex-col justify-between group"
          >
            <div>
              {/* Service Image Header */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={service.imageUrl}
                  alt={service.name}
                  aspectRatio="aspect-[16/10]"
                  theme={theme}
                  fallbackTitle={service.name}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge theme={theme} variant="default" className="shadow-sm">
                    {service.badge}
                  </Badge>
                </div>
              </div>

              {/* Service Info Content */}
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{service.duration}</span>
                </div>

                <h3
                  className={`text-xl font-bold text-slate-900 mb-2.5 transition-colors ${
                    isDental ? 'group-hover:text-teal-700' : 'group-hover:text-stone-900 font-serif'
                  }`}
                >
                  <Link to={`${basePath}/services/${service.slug}`}>
                    {service.name}
                  </Link>
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>
              </div>
            </div>

            {/* Bottom Card Actions */}
            <div className="p-6 pt-0 border-t border-slate-50 mt-4 flex items-center justify-between gap-3">
              <Link
                to={`${basePath}/services/${service.slug}`}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors ${
                  isDental
                    ? 'text-teal-600 hover:text-teal-800'
                    : 'text-skin-sage hover:text-stone-900'
                }`}
              >
                <span>Learn Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Button
                to={`${basePath}/book-appointment?service=${encodeURIComponent(service.name)}`}
                theme={theme}
                variant="outline"
                size="sm"
                icon={Calendar}
              >
                Book
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {displayList.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
          <p className="text-sm text-slate-500">No treatments found matching "{searchTerm}".</p>
        </div>
      )}

      {/* View All CTA if limited on homepage */}
      {limit && services.length > limit && (
        <div className="text-center pt-6">
          <Button
            to={`${basePath}/services`}
            theme={theme}
            variant="outline"
            size="lg"
            icon={ArrowRight}
          >
            Explore All {services.length} Treatments
          </Button>
        </div>
      )}
    </div>
  );
};

export default ServicesGrid;
