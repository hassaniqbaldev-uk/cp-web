import { Container } from "../ui/Container";
import Image from "next/image";
import Link from "next/link";

const legalLinks = [
  {
    id: "terms",
    label: "Terms",
    href: "https://creativepixels.agency/legal/terms-of-service",
  },
  {
    id: "nda",
    label: "NDA",
    href: "https://creativepixels.agency/legal/nda-template",
  },
  {
    id: "privacy",
    label: "Privacy",
    href: "https://creativepixels.agency/legal/privacy-policy",
  },
  {
    id: "cookies",
    label: "Cookies",
    href: "https://creativepixels.agency/legal/cookies-policy",
  },
];

const BlackFridayFooter = () => {
  return (
    <footer>
      <div className="relative z-10 mx-auto h-px w-full max-w-[1200px] bg-white/30" />

      <Container className="relative z-10 flex items-center justify-between gap-[40px] py-[40px] max-xl:flex-col max-xl:items-center max-xl:gap-[20px] max-xl:px-[40px] max-xl:py-[30px] max-sm:px-[20px]">
        <div className="flex items-center gap-[40px] max-xl:flex-col max-xl:gap-[20px]">
          <Link href="/black-friday" aria-label="Creative Pixels home">
            <Image
              src="/images/common/cp-logo-with-text.svg"
              alt="Creative Pixels"
              width={161}
              height={62}
              className="h-[62px] w-auto max-sm:h-[48px]"
            />
          </Link>

          <div className="text-left max-xl:text-center">
            <p className="text-[16px] tracking-[-0.02em] text-[#E4E4E4] max-sm:text-[13px]">
              CP Agency Ltd, trading as CreativePixels · <br /> Bartle House,
              Oxford Court, Manchester, M2 3WQ
            </p>
          </div>
        </div>

        <p className="flex items-center justify-center gap-[40px] text-center text-[16px] tracking-[-0.02em] text-[#E4E4E4] max-sm:mt-[6px] max-sm:text-[13px]">
          {legalLinks.map(({ id, label, href }, index) => (
            <span key={id}>
              <Link
                target="_blank"
                href={href}
                className="transition-colors hover:text-white"
              >
                {label}
              </Link>
            </span>
          ))}
        </p>
      </Container>
    </footer>
  );
};

export default BlackFridayFooter;
