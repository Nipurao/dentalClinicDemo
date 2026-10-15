import React, { useState } from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import ImageWithFallback from '../common/ImageWithFallback';
import Modal from '../common/Modal';

export const ClinicGallery = ({ galleryItems, theme = 'dental' }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const isDental = theme === 'dental';

  // Extract unique categories
  const categories = ['All', ...new Set(galleryItems.map((item) => item.category))];

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 ${
                isSelected
                  ? isDental
                    ? 'bg-teal-600 text-white shadow-sm ring-teal-500'
                    : 'bg-skin-sage text-white shadow-sm ring-skin-sage'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Gallery Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((photo, index) => (
          <Card
            key={index}
            theme={theme}
            className="cursor-pointer group overflow-hidden"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="relative overflow-hidden">
              <ImageWithFallback
                src={photo.url}
                alt={photo.title}
                aspectRatio="aspect-[4/3]"
                theme={theme}
                fallbackTitle={photo.title}
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <Badge theme={theme} variant="default" className="shadow-sm">
                  {photo.category}
                </Badge>
              </div>

              {/* Hover overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <p className="text-white text-sm font-semibold">
                  {photo.title}
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                {photo.title}
              </h4>
              <span className="text-xs text-slate-400 font-medium">Click to expand</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        title={selectedPhoto?.title || 'Clinic Facility Tour'}
        theme={theme}
        maxWidth="max-w-3xl"
      >
        {selectedPhoto && (
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-inner">
              <ImageWithFallback
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                aspectRatio="aspect-[16/10]"
                theme={theme}
                fallbackTitle={selectedPhoto.title}
              />
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <Badge theme={theme} variant="default">{selectedPhoto.category}</Badge>
              <span>Sanitized Clinical Environment • Sterile Zone</span>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ClinicGallery;
