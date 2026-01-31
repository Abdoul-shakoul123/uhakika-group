import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'about' });
  
  return {
    title: 'About Us - Uhakika Group',
    description: t('overview.content'),
  };
}

export default async function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations('about');

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-isp-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-4">
            {t('title')}
          </h1>
        </div>
      </section>

      {/* 1. Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('overview.title')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t('overview.content')}</p>
          </div>
        </div>
      </section>

      {/* 2. Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('vision.title')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t('vision.content')}</p>
          </div>
        </div>
      </section>

      {/* 3. Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-purple to-primary-blue rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">{t('mission.title')}</h2>
            <p className="text-lg leading-relaxed">{t('mission.content')}</p>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            {t('values.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { key: 'reliability' },
              { key: 'innovation' },
              { key: 'integrity' },
              { key: 'quality' },
              { key: 'accountability' },
              { key: 'expertise' },
            ].map(({ key }) => (
              <div
                key={key}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary-purple"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t(`values.${key}`)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            {t('whyChoose.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.raw('whyChoose.points').map((point: string, index: number) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-purple to-primary-blue rounded-2xl p-6 text-white"
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Statistics */}
      <section className="py-20 bg-isp-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            {t('statistics.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{t('statistics.customers')}</div>
              <div className="text-gray-200 text-lg">{t('statistics.customersLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{t('statistics.satisfaction')}</div>
              <div className="text-gray-200 text-lg">{t('statistics.satisfactionLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{t('statistics.regions')}</div>
              <div className="text-gray-200 text-lg">{t('statistics.regionsLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{t('statistics.technicians')}</div>
              <div className="text-gray-200 text-lg">{t('statistics.techniciansLabel')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            {t('team.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('team.network')}</h3>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('team.support')}</h3>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('team.installation')}</h3>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('team.leadership')}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Company History */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('history.title')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t('history.content')}</p>
          </div>
        </div>
      </section>

      {/* 9. Licenses & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border-2 border-primary-purple">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('licenses.title')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t('licenses.content')}</p>
            <div className="mt-6 flex items-center space-x-4">
              <div className="bg-primary-purple/10 rounded-lg p-4">
                <svg className="w-8 h-8 text-primary-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">ARCT Licensed (Burundi)</p>
                <p className="text-gray-600">Fully certified and compliant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CEO Message */}
      <section className="py-20 bg-isp-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-white border border-white/20">
            <h2 className="text-3xl font-bold mb-4">{t('ceoMessage.title')}</h2>
            <p className="text-lg leading-relaxed mb-6">{t('ceoMessage.content')}</p>
            <div className="flex items-center mt-8 pt-6 border-t border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-lg">CEO / Founder</p>
                <p className="text-white/80">Uhakika Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
