import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";
import Script from "next/script";
import AnimatePresenceWrapper from "@/components/effects/AnimatePresenceWrapper";
import PageTransition from "@/components/effects/PageTransition";

export default function SiteLayout({ children }) {
  return (
    <>
      <MobileMenu />
      <Header />
      <main>
        <AnimatePresenceWrapper>
          <PageTransition>{children}</PageTransition>
        </AnimatePresenceWrapper>
      </main>
      <Footer />

      {/* <Script
        src="https://cdn.feedbucket.app/assets/feedbucket.js"
        strategy="afterInteractive"
        data-feedbucket="3rHNb3lcgqe226C8ghh5"
      /> */}
    </>
  );
}
