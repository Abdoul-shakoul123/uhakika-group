'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-purple focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-purple focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-purple focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 bg-gradient-to-r from-primary-purple to-primary-blue text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === 'sending' ? t('form.sending') : t('form.send')}
                </button>
                {status === 'success' && (
                  <p className="text-green-600 text-center">{t('form.success')}</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-center">{t('form.error')}</p>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">{t('address')}</h4>
                    <p className="text-gray-700">123 Main Street, City, Country</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">{t('phone')}</h4>
                    <div className="space-y-2">
                      <p className="text-gray-700">+257 65 056 330</p>
                      <p className="text-gray-700">+257 61 163 280</p>
                      <p className="text-gray-700">+257 62 111 123</p>
                      <p className="text-gray-700">+257 66 948 409</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">{t('email')}</h4>
                    <p className="text-gray-700">info@uhakika.group</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-purple to-primary-blue rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Chat with Us</h3>
                <p className="mb-6">Get instant support via WhatsApp</p>
                <a
                  href="https://wa.me/25765056330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-white text-primary-purple rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('whatsapp')}
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-3xl h-64 flex items-center justify-center">
                <p className="text-gray-500">Google Map Placeholder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

