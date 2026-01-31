'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Uhakika Group</h3>
            <p className="text-gray-400 mb-4">{t('description')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`${basePath}/${locale}`} className="hover:text-white transition-colors">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/${locale}/about`} className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/${locale}/plans`} className="hover:text-white transition-colors">
                  Plans
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/${locale}/contact`} className="hover:text-white transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('contact')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@uhakika.group</li>
              <li>Phone: +257 65 056 330</li>
              <li>+257 61 163 280</li>
              <li>+257 62 111 123</li>
              <li>+257 66 948 409</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Uhakika Group. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}

