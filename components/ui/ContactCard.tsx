'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subValue?: string;
  actionText?: string;
  actionHref?: string;
  delay?: number;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  value,
  subValue,
  actionText,
  actionHref,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-gold-300/40 transition-all duration-300 flex flex-col items-center text-center group"
    >
      <div className="w-14 h-14 rounded-2xl bg-gold-400/10 text-gold-600 flex items-center justify-center mb-5 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300 shadow-inner">
        {icon}
      </div>

      <h3 className="font-serif text-xl font-bold text-obsidian-900 mb-2">{title}</h3>
      <p className="text-gray-900 font-medium text-base mb-1">{value}</p>
      {subValue && <p className="text-gray-500 text-sm mb-4">{subValue}</p>}

      {actionText && actionHref && (
        <a
          href={actionHref}
          target={actionHref.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-gold-600 hover:text-gold-700 tracking-wider uppercase underline underline-offset-4"
        >
          {actionText}
        </a>
      )}
    </motion.div>
  );
};
