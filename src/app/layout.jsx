import { GoogleAnalytics } from "@next/third-parties/google";
import ClientWrapper from "./clientWrapper";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import CookieConsent from "./CookieConsent";

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Forevault",
    operatingSystem: "Web",
    applicationCategory: "BusinessApplication",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "124",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <html lang="en">
      <head>
        <title>Forevault | YouTube Revenue Engine & RPM Calculator</title>

        <meta
          name="description"
          content="Forevault: The most accurate YouTube Revenue Engine. Calculate AdSense earnings, find high-RPM niches, and predict video views with real-time creator data. Free for all creators."
        />
        <meta
          name="keywords"
          content="Forevault, YouTube revenue engine, YouTube RPM calculator, YouTube niche finder, estimate youtube earnings, best youtube niches 2026, youtube monetization tool"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="Pv1Y0g4gx4ktodKlnG4H-pXGAkIPURgNsu5zn6f5vDc"
        />
        <meta name="author" content="Forevault" />
        <link rel="canonical" href="https://forevault.ink" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Forevault | Master Your YouTube Revenue" />
        <meta
          property="og:description"
          content="Stop guessing your RPM. Use the Forevault Engine to calculate exactly what your channel earns based on niche and geography."
        />
        <meta property="og:image" content="/main.png" />
        <meta property="og:url" content="https://forevault.ink" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Forevault — YouTube Revenue Engine" />
        <meta
          name="twitter:description"
          content="Predict your views and calculate your AdSense revenue with accuracy."
        />
        <meta name="twitter:image" content="/main.png" />

        <link rel="icon" href="/main.png" />

        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Script
          id="consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = window.gtag || function () {
                window.dataLayer.push(arguments);
              };

              window.gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'functionality_storage': 'granted',
                'security_storage': 'granted',
                'wait_for_update': 500
              });
            `,
          }}
        />

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2975418958939959"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

      <Script
        id="org-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Forevault",
            "url": "https://forevault.ink",
            "logo": "https://forevault.ink/main.png",
            "sameAs": [
              "https://x.com/forevault"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "contact@forevault.ink"
            }
          }),
        }}
      />

      </head>

      <body suppressHydrationWarning>
        <ClientWrapper>
          {children}
          <CookieConsent />
        </ClientWrapper>

        <GoogleAnalytics gaId="G-N2X7Y2KNGF" />
        <Analytics />
      </body>
    </html>
  );
}