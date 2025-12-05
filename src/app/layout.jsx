import { Onest } from "next/font/google";
import "../styles/globals.css";
import Script from "next/script";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: true,
  display: "swap", // Optional: ensures text remains visible during webfont load
});

export const metadata = {
  title: {
    default: "CreativePixels | Web Design, WordPress & Branding Agency",
    template: "%s",
  },
  description:
    "CreativePixels is a Manchester-based creative agency delivering WordPress websites, branding, and digital solutions for clients across the UK, US & Australia.",
  metadataBase: new URL("https://creativepixels.agency"),

  // ------------------------
  // OPEN GRAPH (Facebook, WhatsApp, LinkedIn)
  // ------------------------
  openGraph: {
    title: "CreativePixels | Web Design, WordPress & Branding Agency",
    description:
      "CreativePixels is a Manchester-based creative agency delivering WordPress websites, branding, and digital solutions for clients across the UK, US & Australia.",
    url: "https://creativepixels.agency",
    siteName: "CreativePixels",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/1f4af596-cfb8-4c98-a348-f15dad8b95ce.jpg?token=Ze5ZXGa5fVhdE0upuV-bXk3bkvf6G0JVkmNbOtJ8n_Q&height=630&width=1200&expires=33295416040",
        width: 1200,
        height: 630,
        alt: "CreativePixels Branding",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ------------------------
  // TWITTER CARD
  // ------------------------
  twitter: {
    card: "summary_large_image",
    title: "CreativePixels | Web Design, WordPress & Branding Agency",
    description:
      "CreativePixels is a Manchester-based creative agency delivering WordPress websites, branding, and digital solutions for clients across the UK, US & Australia.",
    images: [
      "https://opengraph.b-cdn.net/production/images/1f4af596-cfb8-4c98-a348-f15dad8b95ce.jpg?token=Ze5ZXGa5fVhdE0upuV-bXk3bkvf6G0JVkmNbOtJ8n_Q&height=630&width=1200&expires=33295416040",
    ],
    creator: "@creativepixels",
  },

  // ------------------------
  // FAVICONS
  // ------------------------
  icons: {
    icon: "/assets/favicon/favicon.ico",
    apple: "/assets/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* GTM Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
    `,
        }}
      />

      {/* Google reCAPTCHA  */}
      <Script
        id="recaptcha-script"
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />
      <body className={`${onest.className} antialiased`}>
        {/* GTM no-script fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
