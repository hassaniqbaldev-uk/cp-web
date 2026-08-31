import "@/styles/globals.css";
import { Onest } from "next/font/google";
import Script from "next/script";
import ConsentBanner from "@/components/consent/ConsentBanner";
import StickyCta from "@/components/sections/cta/StickyCta";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "CreativePixels | Web Design, WordPress & Branding Agency",
    template: "%s",
  },
  description:
    "CreativePixels is a Manchester-based creative agency delivering WordPress websites, branding, and digital solutions for clients across the UK, US & Australia.",
  metadataBase: new URL("https://creativepixels.agency"),

  openGraph: {
    siteName: "CreativePixels",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },

  // ------------------------
  // FAVICONS
  // ------------------------
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon-32x32.png",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${onest.className} antialiased`}>
        {/* Google Consent Mode v2 — DEFAULT DENIED, set BEFORE GTM loads.
            Re-grants immediately on repeat visits if the visitor previously accepted,
            so consent is correct before any tag fires. The visible choice is handled
            by <ConsentBanner />. */}
        <Script
          id="consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
              gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
              try{if(localStorage.getItem('cp-consent')==='granted'){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});}}catch(e){}`,
          }}
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-B8FV6K69"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-B8FV6K69');`,
          }}
        />
        {/* End Google Tag Manager */}

        <StickyCta />
        <ConsentBanner />
      </body>
    </html>
  );
}
