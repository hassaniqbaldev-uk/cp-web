import { DM_Sans } from "next/font/google";
import HideRecaptchaBadge from "@/components/layout/HideRecaptchaBadge";
import BookCallHeader from "@/components/layout/BookCallHeader";

// DM Sans is scoped to this landing page only (same setup as the Black Friday
// page). `className` sets the font-family for this subtree (overriding the
// site-wide Onest), and `variable` exposes --font-dm-sans so the
// --font-heading/--font-body tokens resolve here too.
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

export default function BookACallLayout({ children }) {
  return (
    <div className={`${dmSans.variable} ${dmSans.className}`}>
      <HideRecaptchaBadge />

      <BookCallHeader />

      {children}
    </div>
  );
}
