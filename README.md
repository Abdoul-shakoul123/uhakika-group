# Uhakika Group - Multilingual ISP Website

A modern, professional, multilingual website for Uhakika Group, an Internet Service Provider (ISP) company.

## Features

- 🌍 **Multilingual Support**: English, Kiswahili, and French
- 🎨 **Modern Design**: Professional ISP-style UI with gradient backgrounds and glassmorphism effects
- ⚡ **Next.js 14**: Built with App Router for optimal performance
- 🎭 **Framer Motion**: Smooth animations throughout the site
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🔍 **SEO Optimized**: Meta tags and structured data

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Internationalization**: next-intl
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The site will automatically redirect to `/en` (English) by default. You can access other languages at:
- `/en` - English
- `/sw` - Kiswahili
- `/fr` - French

## Project Structure

```
├── app/
│   ├── [locale]/          # Locale-based routing
│   │   ├── layout.tsx     # Locale layout
│   │   ├── page.tsx       # Home page
│   │   ├── about/         # About page
│   │   ├── services/      # Services page
│   │   ├── plans/         # Plans page
│   │   ├── contact/       # Contact page
│   │   └── check/         # Check availability page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   └── LanguageSwitcher.tsx # Language switcher
├── locales/
│   ├── en.json            # English translations
│   ├── sw.json            # Kiswahili translations
│   └── fr.json            # French translations
├── i18n.ts                # i18n configuration
└── middleware.ts          # Next.js middleware for i18n
```

## Pages

1. **Home** (`/`) - Hero section, features, and packages preview
2. **About** (`/about`) - Company mission, vision, and values
3. **Services** (`/services`) - Home internet, business fiber, networking, equipment
4. **Plans** (`/plans`) - Internet packages and pricing
5. **Contact** (`/contact`) - Contact form and information
6. **Check Availability** (`/check`) - Service availability checker

## Customization

### Colors

Primary colors are defined in `tailwind.config.ts`:
- Purple: `#5B21B6`
- Blue: `#2563EB`

### Translations

All translations are stored in the `locales/` directory. Edit the JSON files to update content in each language.

## Build for Production

```bash
npm run build
npm start
```

## Deploy kwenye GitHub Pages

1. Push repo kwenye GitHub (branch `main`).
2. Kwenye repo: **Settings → Pages → Build and deployment**  
   - **Source**: GitHub Actions.
3. Baada ya push, workflow **Deploy to GitHub Pages** inajenga na ku-deploy peke yake.  
   Site itakuwa: `https://<username>.github.io/<repo-name>/`.

Kama branch yako kuu si `main`, badilisha `branches: [main]` kwenye `.github/workflows/deploy-pages.yml`.

## License

This project is proprietary and belongs to Uhakika Group.

