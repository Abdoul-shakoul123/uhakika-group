'use client';

import { motion } from 'framer-motion';

export default function FeatureCard({ title, description, delay }: { title: string; description: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

