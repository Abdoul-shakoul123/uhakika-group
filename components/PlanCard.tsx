'use client';

import { motion } from 'framer-motion';

export default function PlanCard({ 
  name, 
  price, 
  speed, 
  data, 
  features, 
  popular = false, 
  delay 
}: { 
  name: string; 
  price: string; 
  speed: string; 
  data: string; 
  features: string[]; 
  popular?: boolean; 
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
        popular ? 'ring-4 ring-primary-purple scale-105' : ''
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-primary-purple to-primary-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
            Popular
          </span>
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-primary-purple mb-1">{price}</div>
        <p className="text-gray-500 text-sm">per month</p>
      </div>
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-600">Speed</span>
          <span className="font-semibold text-gray-900">{speed}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-600">Data</span>
          <span className="font-semibold text-gray-900">{data}</span>
        </div>
        <div className="pt-4">
          <p className="text-gray-600 mb-2">Features:</p>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="w-full py-3 bg-gradient-to-r from-primary-purple to-primary-blue text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
        Get Started
      </button>
    </motion.div>
  );
}

