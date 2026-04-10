import Footer from "@/components/layout/Footer";
import LpHeader from "@/components/lp/LpHeader";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function LandingPageLayout({ children }) {
  return (
    <>
      <LpHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
