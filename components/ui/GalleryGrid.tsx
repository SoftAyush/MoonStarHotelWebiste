'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Sparkles } from 'lucide-react';
import { GalleryItem } from '@/types';
import { LightboxModal } from './LightboxModal';

interface GalleryGridProps {
  items: GalleryItem[];
  showFilters?: boolean;
  limit?: number;
}

const CATEGORIES = [
  { key: 'all', label: 'All Photos' },
  { key: 'rooms', label: 'Rooms' },
  { key: 'lobby', label: 'Lobby' },
  { key: 'restaurant', label: 'Restaurant' },
  { key: 'exterior', label: 'Exterior & Parking' },
];

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  items,
  showFilters = true,
  limit,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = items.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div>
      {/* Category Tabs */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-obsidian-900 text-gold-400 border border-gold-400/40 shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:text-obsidian-900 border border-gray-200 hover:border-gold-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid Layout */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {displayedItems.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl border border-gray-100"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {item.categoryLabel}
                </span>
                <h4 className="font-serif text-xl font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-300 line-clamp-2">{item.caption}</p>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-4 h-4 text-gold-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={!!selectedItem}
        selectedItem={selectedItem}
        items={displayedItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </div>
  );
};
