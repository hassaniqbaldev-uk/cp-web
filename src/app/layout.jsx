import { Onest } from "next/font/google";
import "../styles/globals.css";
import Script from "next/script";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "CreativePixels | Creative Design Agency Manchester",
    template: "%s",
  },
  description:
    "We focus on being a design-driven creative agency through bespoke design and development, specialising in all things design and making businesses stand out.",
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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

        <meta property="og:url" content="https://cp-web-taupe.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="CreativePixels | Web Design, WordPress & Branding Agency"
        />
        <meta
          property="og:description"
          content="CreativePixels is a Manchester-based creative agency delivering WordPress websites, branding, and digital solutions for clients across the UK, US & Australia."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/1f4af596-cfb8-4c98-a348-f15dad8b95ce.jpg?token=Ze5ZXGa5fVhdE0upuV-bXk3bkvf6G0JVkmNbOtJ8n_Q&height=630&width=1200&expires=33295416040"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="cp-web-taupe.vercel.app" />
        <meta
          property="twitter:url"
          content="https://cp-web-taupe.vercel.app"
        />
        <meta
          name="twitter:title"
          content="CreativePixels | Web Design, WordPress & Branding Agency"
        />
        <meta
          name="twitter:description"
          content="CreativePixels is a Manchester-based creative agency delivering WordPress websites, branding, and digital solutions for clients across the UK, US & Australia."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/1f4af596-cfb8-4c98-a348-f15dad8b95ce.jpg?token=Ze5ZXGa5fVhdE0upuV-bXk3bkvf6G0JVkmNbOtJ8n_Q&height=630&width=1200&expires=33295416040"
        />
      </head>
      <body className={`${onest.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-B8FV6K69"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager */}

        <main>{children}</main>
      </body>
    </html>
  );
}
