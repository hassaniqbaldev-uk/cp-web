import "@/styles/globals.css";
import { Onest } from "next/font/google";
import Script from "next/script";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "CreativePixels | Web Design, WordPress & Branding Agency",
    template: "%s | CreativePixels",
  },
  description:
    "CreativePixels is a Manchester-based creative agency delivering WordPress websites, branding, and digital solutions for clients across the UK, US & Australia.",
  metadataBase: new URL("https://creativepixels.agency"),

  // ------------------------
  // OPEN GRAPH
  // ------------------------
  openGraph: {
    title: "CreativePixels | Web Design, WordPress & Branding Agency",
    description:
      "CreativePixels is a Manchester-based creative agency delivering WordPress websites, branding, and digital solutions for clients across the UK, US & Australia.",
    url: "https://creativepixels.agency",
    siteName: "CreativePixels",
    images: [
      {
        url: "/images/og-image-assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CreativePixels - Web Design, WordPress & Branding Agency",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  // ------------------------
  // TWITTER / X
  // ------------------------
  twitter: {
    card: "summary_large_image",
    title: "CreativePixels | Web Design, WordPress & Branding Agency",
    description:
      "CreativePixels is a Manchester-based creative agency delivering WordPress websites, branding, and digital solutions for clients across the UK, US & Australia.",
    images: ["/images/og-image-assets/og-image.jpg"],
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

        {/* Google Recaptcha - disabled for now, will add in future */}

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

        <Script
          src="https://cdn.feedbucket.app/assets/feedbucket.js"
          strategy="afterInteractive"
          data-feedbucket="3rHNb3lcgqe226C8ghh5"
        />
      </body>
    </html>
  );
}
