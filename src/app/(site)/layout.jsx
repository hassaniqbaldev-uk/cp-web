import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";
import { getNavData } from "@/sanity/nav";

export default async function SiteLayout({ children }) {
  const navData = await getNavData();

  return (
    <>
      <MobileMenu />
      <Header navData={navData} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
