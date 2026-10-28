import { DM_Sans } from "next/font/google";
import BlackFridayHeader from "@/components/layout/BlackFridayHeader";
import BlackFridayStickyBar from "@/components/layout/BlackFridayStickyBar";
import HideRecaptchaBadge from "@/components/layout/HideRecaptchaBadge";

// DM Sans is scoped to the Black Friday pages only. `className` sets the
// font-family for this subtree (overriding the site-wide Onest), and
// `variable` exposes --font-dm-sans so the --font-heading/--font-body
// tokens resolve here too.
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

export default function BlackFridayLayout({ children }) {
  return (
    <div className={`${dmSans.variable} ${dmSans.className}`}>
      <HideRecaptchaBadge />

      <BlackFridayHeader />

      {children}

      <BlackFridayStickyBar />
    </div>
  );
}
