import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";

export default function SiteLayout({ children }) {
  return (
    <>
      <MobileMenu />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
