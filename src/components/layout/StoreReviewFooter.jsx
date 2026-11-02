import { Container } from "../ui/Container";
import Image from "next/image";
import Link from "next/link";

const StoreReviewFooter = () => {
  return (
    <footer className="bg-black pb-[40px] max-bf-sm:pb-[30px]">
      <div className="mx-auto h-px w-full max-w-[1200px] bg-white/20" />

      <Container className="flex items-center justify-between gap-[40px] pt-[40px] max-bf-xl:flex-col max-bf-xl:items-center max-bf-xl:gap-[24px] max-bf-xl:px-[40px] max-bf-sm:px-[20px]">
        <Link href="/store-review" aria-label="Creative Pixels home">
          <Image
            src="/images/common/cp-logo-with-text.svg"
            alt="Creative Pixels"
            width={161}
            height={62}
            className="h-[56px] w-auto max-bf-sm:h-[44px]"
          />
        </Link>

        <div className="text-left max-bf-xl:text-center">
          <p className="text-[15px] leading-[22px] tracking-[-0.02em] text-[#E4E4E4] max-bf-sm:text-[13px]">
            CP Agency Ltd, trading as CreativePixels · Company no. 11703179 ·
            Bartle House, Oxford Court, Manchester, M2 3WQ
          </p>

          <p className="mt-[6px] text-[15px] leading-[22px] tracking-[-0.02em] text-[#E4E4E4] max-bf-sm:text-[13px]">
            <Link
              href="https://creativepixels.agency/legal/privacy-policy"
              target="_blank"
              className="transition-colors hover:text-white"
            >
              Privacy notice
            </Link>{" "}
            ·{" "}
            <Link
              href="https://creativepixels.agency/legal/cookies-policy"
              target="_blank"
              className="transition-colors hover:text-white"
            >
              Cookie settings
            </Link>{" "}
            · *TEDxUoM is an independently organised TED event.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default StoreReviewFooter;
