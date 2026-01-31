'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';

const languageNames: Record<string, string> = {
  en: 'EN',
  sw: 'SW',
  fr: 'FR',
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** Strip basePath from path so we never pass it to router.push (Next adds it once). */
function stripBasePath(path: string): string {
  if (!basePath) return path;
  const segment = basePath.replace(/^\//, ''); // "uhakika-group"
  const re = new RegExp(`^/?${segment}/?`);
  let out = path.replace(re, '') || '/';
  if (!out.startsWith('/')) out = `/${out}`;
  return out;
}

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const pathWithoutBase = stripBasePath(pathname);
    let newPath = stripBasePath(pathWithoutBase.replace(`/${locale}`, `/${newLocale}`));
    // With basePath (e.g. GitHub Pages), navigate by full URL so we never get double basePath
    if (typeof window !== 'undefined' && basePath) {
      // GitHub Pages has sw.html, en.html; subroutes are e.g. sw/plans.html
      const path = newPath === '/' || newPath === `/${newLocale}` ? `${newLocale}.html` : newPath.replace(/^\//, '');
      window.location.href = `${window.location.origin}${basePath}/${path}`;
      return;
    }
    router.push(newPath);
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

