import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";

export default function HomeLayout({ children }) {
  return (
    <>
      <MobileMenu />
      <main>{children}</main>
      <Footer />
    </>
  );
}
