'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Room } from '@/types';
import { formatCurrency } from '@/lib/utils';

interface RoomCardProps {
  room: Room;
  index?: number;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
    >
      {/* Image container */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden">
        <Image
          src={room.image}
          alt={`${room.name} at Moon Star Lodge Hetauda`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {room.featured && (
          <div className="absolute top-4 left-4 bg-gold-400 text-obsidian-950 font-semibold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full shadow-md">
            Featured
          </div>
        )}

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold-300 font-medium">Price per room</span>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-200">
                {formatCurrency(room.price)}
              </span>
            </div>
          </div>
          {room.features?.includes('Non-Air-Conditioned') && (
            <span className="text-xs bg-white/20 backdrop-blur px-2 py-1 rounded text-gray-100 font-medium">
              Non-A/C
            </span>
          )}
        </div>
      </div>

      {/* Content container */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-obsidian-900 group-hover:text-gold-600 transition-colors mb-2">
          {room.name}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-2 mb-6 leading-relaxed">
          {room.description}
        </p>

        {/* Capacity and Bed Type */}
        <div className="py-4 border-y border-gray-100 text-sm text-gray-700 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-gold-600" />
            <span className="font-medium">Capacity: {room.capacity.adults} {room.capacity.adults === 1 ? 'guest' : 'guests'}</span>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium">Bed Type:</span> {room.bedType}
          </div>
        </div>

        {/* Key Amenities */}
        <div className="mb-6 flex-grow">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2.5 block">Includes</span>
          <div className="grid grid-cols-1 gap-2">
            {room.amenities.slice(0, 3).map((amenity, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={`/contact?room=${encodeURIComponent(room.name)}`}
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-obsidian-900 hover:bg-gold-500 text-white hover:text-obsidian-950 font-medium text-sm tracking-wide transition-all duration-300 group/btn shadow-md hover:shadow-gold-500/20"
        >
          <span>Book Now</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};
