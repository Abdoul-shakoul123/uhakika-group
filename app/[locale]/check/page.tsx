'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CheckAvailabilityPage() {
  const t = useTranslations('checkAvailability');
  const locale = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    province: '',
    commune: '',
    address: '',
    phone: '',
    email: '',
  });
  
  // Burundi Provinces
  const provinces = [
    'Bujumbura Mairie',
    'Bujumbura Rural',
    'Bubanza',
    'Bururi',
    'Cankuzo',
    'Cibitoke',
    'Gitega',
    'Karuzi',
    'Kayanza',
    'Kirundo',
    'Makamba',
    'Muramvya',
    'Muyinga',
    'Mwaro',
    'Ngozi',
    'Rumonge',
    'Rutana',
    'Ruyigi'
  ];
  
  const [communes, setCommunes] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', province: '', commune: '', address: '', phone: '', email: '' });
      setCommunes([]);
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Update communes when province changes
    if (name === 'province') {
      // In a real app, you'd fetch communes based on province
      // For now, we'll use a placeholder
      setCommunes(['Select Commune']);
      setFormData(prev => ({ ...prev, commune: '' }));
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-isp-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white text-center mb-4"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-200 text-center max-w-3xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Enter Your Details
            </h2>
            <p className="text-gray-600 text-center mb-8">
              {t('coverage.description')}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-purple focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-2">
                  Province
                </label>
                <select
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-purple focus:border-transparent"
                >
                  <option value="">Select Province</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="commune" className="block text-sm font-medium text-gray-700 mb-2">
                  Commune
                </label>
                <select
                  id="commune"
                  name="commune"
                  value={formData.commune}
                  onChange={handleChange}
                  required
                  disabled={!formData.province}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-purple focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">{formData.province ? 'Select Commune' : 'Select Province first'}</option>
                  {communes.map((commune) => (
                    <option key={commune} value={commune}>
                      {commune}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address / Area
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Street name, Zone, Neighborhood"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-purple focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.phone')}
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    +257
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="65 056 330"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-xl focus:ring-2 focus:ring-primary-purple focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-purple focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">{t('form.email')} (Optional)</p>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-gradient-to-r from-primary-purple to-primary-blue text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === 'submitting' ? t('form.submitting') : t('form.submit')}
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-800 text-center"
                >
                  <svg className="w-6 h-6 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {t('form.success')}
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800 text-center"
                >
                  {t('form.error')}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Coverage Areas Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-gradient-to-br from-primary-purple to-primary-blue rounded-3xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4 text-center">{t('coverage.title')}</h3>
              <p className="text-center mb-6 text-white/90">{t('coverage.description')}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
                {provinces.slice(0, 12).map((province) => (
                  <div key={province} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center text-sm">
                    {province}
                  </div>
                ))}
              </div>
              <p className="text-center mt-4 text-white/80 text-sm">
                + More provinces and communes across Burundi
              </p>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 text-center"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-purple to-primary-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    1
                  </div>
                  <p className="text-gray-700">Submit your information</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-purple to-primary-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    2
                  </div>
                  <p className="text-gray-700">We check availability in your area</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-purple to-primary-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    3
                  </div>
                  <p className="text-gray-700">We contact you with options</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

