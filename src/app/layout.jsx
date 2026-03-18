import { GoogleAnalytics } from '@next/third-parties/google'
import ClientWrapper from './clientWrapper';
import { Analytics } from "@vercel/analytics/next"
import Navbar from './nav';
import Footer from './footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Forevault — YouTube Revenue Calculator, RPM Checker & Niche Finder</title>
        <meta
          name="description"
          content="Forevault is the ultimate YouTube monetization toolkit. Estimate YouTube earnings with our revenue calculator, check RPM by country, explore profitable YouTube niches, discover faceless channel ideas, and analyze monetization potential for long-form videos and Shorts."
        />
        <meta
          name="keywords"
          content="youtube revenue calculator, youtube rpm calculator, youtube niche finder, youtube monetization calculator, faceless youtube niches, youtube earnings estimator, youtube rpm by country, youtube income calculator, youtube niche browser, youtube analytics tools"
        />
        <meta name="google-site-verification" content="Pv1Y0g4gx4ktodKlnG4H-pXGAkIPURgNsu5zn6f5vDc" />
        <meta name="author" content="Forevault" />
        <meta property="og:title" content="Forevault — YouTube Revenue Calculator & Niche Finder" />
        <meta
          property="og:description"
          content="Discover profitable YouTube niches, estimate your earnings, and analyze RPM by country with Forevault's advanced YouTube monetization tools."
        />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YouTube Revenue Calculator & RPM Checker" />
        <meta name="twitter:description" content="Estimate YouTube earnings, explore profitable niches, and analyze RPM by country." />
        <link rel="icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <meta name="thumbnail" content="/logo.png" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2975418958939959"
     crossorigin="anonymous"></script>
      </head>
      <body suppressHydrationWarning={true}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
        <GoogleAnalytics gaId="G-N2X7Y2KNGF" />
        <Analytics/>
      </body>
    </html>
  );
}