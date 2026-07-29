'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '@/types';

interface LightboxModalProps {
  isOpen: boolean;
  selectedItem: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  selectedItem,
  items,
  onClose,
  onSelect,
}) => {
  const currentIndex = selectedItem
    ? items.findIndex((i) => i.id === selectedItem.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelect(items[currentIndex - 1]);
    } else if (items.length > 0) {
      onSelect(items[items.length - 1]);
    }
  }, [currentIndex, items, onSelect]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onSelect(items[currentIndex + 1]);
    } else if (items.length > 0) {
      onSelect(items[0]);
    }
  }, [currentIndex, items, onSelect]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      {isOpen && selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/90 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Top Bar */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-4">
            <span className="text-gray-400 text-xs sm:text-sm font-mono">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-obsidian-950 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous Button */}
          {items.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-6 z-50 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-obsidian-950 flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {items.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-6 z-50 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-obsidian-950 flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Main Content Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-gold-400/20">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Caption & Category */}
            <div className="mt-4 text-center max-w-2xl px-4">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1 block">
                {selectedItem.categoryLabel}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                {selectedItem.title}
              </h3>
              <p className="text-gray-300 text-sm">{selectedItem.caption}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
