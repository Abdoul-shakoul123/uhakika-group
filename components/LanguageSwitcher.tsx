'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';

const languageNames: Record<string, string> = {
  en: 'EN',
  sw: 'SW',
  fr: 'FR',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(`${basePath}${newPath}`);
  };

  return (
    <div className="flex items-center space-x-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            locale === loc
              ? 'bg-white/20 text-white'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
        >
          {languageNames[loc]}
        </button>
      ))}
    </div>
  );
}

