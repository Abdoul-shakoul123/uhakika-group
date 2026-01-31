import { getTranslations, setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import { AnimatedHeading, AnimatedParagraph, AnimatedLink } from '@/components/AnimatedSection';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'hero' });
  
  return {
    title: 'Uhakika Group - High-Speed Internet Services',
    description: t('subtitle'),
  };
}

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations('features');
  const tPackages = await getTranslations('packages');

  return (
    <div className="relative">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 relative z-10" style={{ backgroundColor: 'rgba(249, 250, 251, 0.85)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('title')}
            </AnimatedHeading>
            <AnimatedParagraph delay={0.1} className="text-xl text-gray-600">
              {t('subtitle')}
            </AnimatedParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title={t('speed.title')}
              description={t('speed.description')}
              delay={0}
            />
            <FeatureCard
              title={t('reliability.title')}
              description={t('reliability.description')}
              delay={0.1}
            />
            <FeatureCard
              title={t('coverage.title')}
              description={t('coverage.description')}
              delay={0.2}
            />
            <FeatureCard
              title={t('support.title')}
              description={t('support.description')}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Packages Preview Section */}
      <section className="py-20 relative z-10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {tPackages('title')}
            </AnimatedHeading>
            <AnimatedParagraph delay={0.1} className="text-xl text-gray-600 mb-8">
              {tPackages('subtitle')}
            </AnimatedParagraph>
            <AnimatedLink
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${locale}/plans`}
              delay={0.2}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-purple to-primary-blue text-white rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              {tPackages('viewAll')}
            </AnimatedLink>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10 bg-isp-gradient" style={{ backgroundColor: 'rgba(91, 33, 182, 0.85)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedHeading className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </AnimatedHeading>
          <AnimatedParagraph delay={0.1} className="text-xl text-gray-200 mb-8">
            Check if our services are available in your area today!
          </AnimatedParagraph>
          <AnimatedLink
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${locale}/check`}
            delay={0.2}
            className="inline-block px-8 py-4 bg-white text-primary-purple rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Check Availability
          </AnimatedLink>
        </div>
      </section>
    </div>
  );
}

