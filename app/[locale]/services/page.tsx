import { getTranslations, setRequestLocale } from 'next-intl/server';
import ServiceCard from '@/components/ServiceCard';
import { AnimatedHeading, AnimatedParagraph, AnimatedLink } from '@/components/AnimatedSection';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'services' });
  
  return {
    title: 'Our Services - Uhakika Group',
    description: t('subtitle'),
  };
}

export default async function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations('services');

  const services = [
    { key: 'homeInternet', delay: 0 },
    { key: 'businessInternet', delay: 0.1 },
    { key: 'fiberInstallation', delay: 0.2 },
    { key: 'dedicatedInternet', delay: 0.3 },
    { key: 'networking', delay: 0.4 },
    { key: 'equipment', delay: 0.5 },
    { key: 'ictSupport', delay: 0.6 },
    { key: 'coverageChecking', delay: 0.7 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-isp-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ key, delay }) => (
              <ServiceCard
                key={key}
                title={t(`${key}.title`)}
                description={t(`${key}.description`)}
                delay={delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedHeading className="text-4xl font-bold text-gray-900 mb-6">
            Interested in Our Services?
          </AnimatedHeading>
          <AnimatedParagraph delay={0.1} className="text-xl text-gray-600 mb-8">
            Contact us today to learn more about how we can help your home or business.
          </AnimatedParagraph>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedLink
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${locale}/plans`}
              delay={0.2}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-purple to-primary-blue text-white rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Explore Plans
            </AnimatedLink>
            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${locale}/contact`}
              className="inline-block px-8 py-4 glass text-gray-900 rounded-2xl font-semibold text-lg hover:bg-white/30 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

