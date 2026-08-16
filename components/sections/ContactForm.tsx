'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { ROOMS_DATA } from '@/constants/hotelData';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialRoom = searchParams.get('room') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    roomType: initialRoom,
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    message: '',
  });

  useEffect(() => {
    if (initialRoom) {
      setFormData((prev) => ({ ...prev, roomType: initialRoom }));
    }
  }, [initialRoom]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="p-8 rounded-2xl bg-gold-400/10 border border-gold-400/30 text-center py-12"
        >
          <div className="w-16 h-16 rounded-full bg-gold-500 text-obsidian-950 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-serif text-2xl font-bold text-obsidian-900 mb-2">
            Thank You For Reaching Out
          </h4>
          <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
            Thank you, <span className="font-semibold text-obsidian-900">{formData.name}</span>. Our front desk team will respond to <span className="font-semibold">{formData.email}</span> shortly.
          </p>
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                subject: 'General Inquiry',
                roomType: '',
                checkIn: '',
                checkOut: '',
                guests: '2 Guests',
                message: '',
              });
            }}
            className="px-6 py-2.5 rounded-full bg-obsidian-900 text-white font-medium text-xs tracking-wider uppercase hover:bg-gold-500 hover:text-obsidian-950 transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alexander Vance"
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gold-400 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alexander@example.com"
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gold-400 focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gold-400 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Preferred Room Type
              </label>
              <select
                value={formData.roomType}
                onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gold-400 focus:bg-white transition-colors"
              >
                <option value="">Select Room (Optional)</option>
                {ROOMS_DATA.map((r) => (
                  <option key={r.id} value={r.name}>
                    {r.name} (रु {r.price}/night)
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Expected Check-in
              </label>
              <input
                type="date"
                value={formData.checkIn}
                onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gold-400 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Expected Check-out
              </label>
              <input
                type="date"
                value={formData.checkOut}
                onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gold-400 focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Your Message or Special Request *
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your upcoming stay or any dietary preferences..."
              className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gold-400 focus:bg-white transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-obsidian-950 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

export const ContactForm: React.FC = () => (
  <Suspense fallback={<div className="py-12 text-center text-gray-400 text-sm">Loading form...</div>}>
    <ContactFormInner />
  </Suspense>
);
