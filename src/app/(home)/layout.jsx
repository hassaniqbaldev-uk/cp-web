import MobileMenu from "@/components/layout/MobileMenu";

export default function HomeLayout({ children }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-[1rem] focus:left-[1rem] focus:z-[200] focus:rounded-[1rem] focus:bg-white focus:px-[2rem] focus:py-[1rem] focus:text-[1.6rem] focus:font-semibold focus:text-[#312749] focus:shadow-lg focus:outline focus:outline-2 focus:outline-[#3078FF]"
      >
        Skip to content
      </a>
      <MobileMenu />
      <main id="main">{children}</main>
    </>
  );
}
