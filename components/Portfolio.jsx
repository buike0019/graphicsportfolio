"use client";

import React, { useState, useMemo } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import 'yet-another-react-lightbox/styles.css';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const categories = ['All', 'Branding', 'Design', 'Development', 'Media'];

  const baseImages = [
    '/images/Portfolio_1.jpg',
    '/images/Portfolio_2.jpg',
    '/images/Portfolio_3.jpg',
    '/images/Portfolio_4.jpg',
    '/images/Portfolio_5.jpg',
    '/images/Portfolio_6.jpg',
  ];

  const categoryImages = useMemo(() => {
    const shuffle = (array) => [...array].sort(() => 0.5 - Math.random());
    const result = { All: baseImages };
    categories.slice(1).forEach((cat) => {
      result[cat] = shuffle(baseImages);
    });
    return result;
  }, []);

  const images = categoryImages[activeCategory].map((src) => ({ src }));

  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">My Portfolio</h2>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              activeCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-800 hover:bg-blue-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-like Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 px-6 max-w-6xl mx-auto space-y-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="break-inside-avoid overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-transform cursor-pointer"
          >
            <img
              src={img.src}
              alt={`Portfolio ${index}`}
              onClick={() => setLightboxIndex(index)}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Viewer */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={images}
        index={lightboxIndex}
        on={{ view: ({ index }) => setLightboxIndex(index) }}
        plugins={[Slideshow]}
        slideshow={{ autoplay: true, delay: 2500 }}
      />
    </section>
  );
};

export default Portfolio;
