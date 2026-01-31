import { getTranslations, setRequestLocale } from 'next-intl/server';
import PlanCard from '@/components/PlanCard';
import { AnimatedHeading, AnimatedParagraph } from '@/components/AnimatedSection';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'plans' });
  
  return {
    title: 'Internet Plans & Pricing - Uhakika Group',
    description: t('subtitle'),
  };
}

export default async function PlansPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations('plans');

  const plans = [
    {
      name: 'Basic',
      price: '500,000 BIF',
      speed: '50 Mbps',
      data: 'Unlimited',
      features: ['24/7 Support', 'Free Installation', 'WiFi Router Included'],
      popular: false,
    },
    {
      name: 'Standard',
      price: '800,000 BIF',
      speed: '100 Mbps',
      data: 'Unlimited',
      features: ['24/7 Support', 'Free Installation', 'WiFi Router Included', 'Priority Support'],
      popular: true,
    },
    {
      name: 'Premium',
      price: '1000,000 BIF',
      speed: '250 Mbps',
      data: 'Unlimited',
      features: ['24/7 Support', 'Free Installation', 'WiFi Router Included', 'Priority Support', 'Static IP'],
      popular: false,
    },
    {
      name: 'Ultra',
      price: '1200,000 BIF',
      speed: '500 Mbps',
      data: 'Unlimited',
      features: ['24/7 Support', 'Free Installation', 'WiFi Router Included', 'Priority Support', 'Static IP', 'Dedicated Support'],
      popular: false,
    },
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

      {/* Plans Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, idx) => (
              <PlanCard
                key={plan.name}
                name={plan.name}
                price={plan.price}
                speed={plan.speed}
                data={plan.data}
                features={plan.features}
                popular={plan.popular}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedHeading className="text-4xl font-bold text-gray-900 mb-6">
            Not Sure Which Plan is Right for You?
          </AnimatedHeading>
          <AnimatedParagraph delay={0.1} className="text-xl text-gray-600 mb-8">
            Contact us and we'll help you find the perfect plan for your needs.
          </AnimatedParagraph>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/contact`}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-purple to-primary-blue text-white rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
            <Link
              href={`/${locale}/check`}
              className="inline-block px-8 py-4 glass text-gray-900 rounded-2xl font-semibold text-lg hover:bg-white/30 transition-colors"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

