const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin('./i18n.ts');
 
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};
 
module.exports = withNextIntl(nextConfig);

