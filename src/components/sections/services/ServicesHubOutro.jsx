import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import TiltArrowIcon from "@/components/icons/TiltArrowIcon";

// Closing sections of the services hub (CP-06 items 6–9): specialist capabilities,
// the "not sure what you need?" route, the solutions route, and the primary CTA.
// ALL COPY PLACEHOLDER — CP-04. No Book a Call anywhere (D40); the CTA is
// "Start a project".
const RouteCard = ({ href, label, title, body, color }) => (
  <Link
    href={href}
    className="group flex flex-col justify-between gap-[3rem] rounded-[2.4rem] border border-black/10 bg-white p-[3rem] xl:p-[4rem]"
  >
    <div>
      <span
        style={{ color }}
        className="text-[1.4rem] leading-[2rem] font-bold tracking-[0.02em] uppercase"
      >
        {label}
      </span>
      {/* PLACEHOLDER copy — CP-04 */}
      <h3 className="mt-[1.2rem] text-[2.4rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#263238] xl:text-[2.8rem]">
        {title}
      </h3>
      <p className="mt-[1.2rem] text-[1.6rem] leading-[2.6rem] text-[#625C70]">
        {body}
      </p>
    </div>
    <span className="inline-flex items-center gap-[.8rem] text-[1.6rem] font-semibold text-[#312749]">
      Continue
      <i className="transition-transform duration-200 group-hover:translate-x-[3px]">
        <TiltArrowIcon color={color} width="12" height="12" />
      </i>
    </span>
  </Link>
);

const ServicesHubOutro = () => {
  return (
    <>
      {/* 6 — Specialist capabilities (PLACEHOLDER — CP-04 picks the specific
          capabilities once a primary/specialist designation exists). */}
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[8rem]">
        <div className="container">
          <div className="rounded-[2.4rem] bg-[#f5f5f7] px-[3rem] py-[4rem] text-center xl:px-[6rem] xl:py-[6rem]">
            <SectionLabel text="Specialist Capabilities" textColor="#3078FF" />
            <div className="mt-[5px] mb-[14px]">
              <SectionTitle text="Depth where it matters." />
            </div>
            <div className="mx-auto max-w-[70rem]">
              <SectionDescription text="[Placeholder — CP-04] A band for the deeper, specialist capabilities (for example performance, security, accessibility, migrations) that sit beneath the headline pillars. The exact set is a content decision once primary vs specialist is designated." />
            </div>
          </div>
        </div>
      </section>

      {/* 7 & 8 — the two routes: "not sure what you need?" → audit, solutions → /solutions */}
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[8rem]">
        <div className="container">
          <div className="grid grid-cols-1 gap-[3rem] md:grid-cols-2">
            <RouteCard
              href="/audit"
              label="Not sure what you need?"
              title="[Placeholder — CP-04] Get a free audit"
              body="[Placeholder — CP-04] A guided route for visitors who do not know which service fits. Points at the free audit."
              color="#EE8D00"
            />
            <RouteCard
              href="/solutions"
              label="Prefer to start from a goal?"
              title="[Placeholder — CP-04] Explore solutions by outcome"
              body="[Placeholder — CP-04] The route across to the goal-based solutions for visitors who think in outcomes, not services."
              color="#FF37B3"
            />
          </div>
        </div>
      </section>

      {/* 9 — Primary CTA: "Start a project" + reassurance microcopy (D7). No Book a Call. */}
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="mx-auto flex max-w-[80rem] flex-col items-center gap-[2rem] text-center">
            {/* PLACEHOLDER copy — CP-04 */}
            <SectionTitle text="Ready when you are." />
            <div className="max-w-[60rem]">
              <SectionDescription text="[Placeholder — CP-04] A closing line inviting the visitor to start, with the reassurance that reduces the friction of the first step." />
            </div>
            <div className="mt-[1.6rem] flex flex-col items-center gap-[1.4rem]">
              <PrimaryButton
                text="Start a project"
                href="/contact"
                bGcolor="#FF37B3"
                textColor="#ffffff"
                ctaPosition="services-outro"
              />
              {/* PLACEHOLDER reassurance microcopy — CP-04 (D7) */}
              <span className="text-[1.4rem] leading-[2.2rem] font-medium text-[#625C70]">
                [Placeholder reassurance — CP-04] No obligation, just a conversation.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesHubOutro;
