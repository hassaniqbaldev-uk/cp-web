import Link from "next/link";
import WhiteArrow from "@/assets/icons/white-arrow.svg";

const ViewCaseStudyButton = ({ href }) => {
  return (
    <>
      <Link href={href} className="inline-flex items-center justify-center">
        <span className="inline-flex h-[4.4rem] items-center justify-center overflow-hidden rounded-[4.5rem] bg-black px-[2.2rem] py-[.6rem] text-center text-[1.6rem] font-semibold tracking-normal text-white">
          View Case Study
        </span>

        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-[-4px]"
        >
          <path
            d="M1.5752 0C2.62647 1.81667 4.58995 3.04004 6.83984 3.04004C9.08953 3.03987 11.0523 1.81654 12.1035 0H13.6787V13.6787H12.1035C11.0523 11.8621 9.08956 10.6388 6.83984 10.6387C4.58992 10.6387 2.62646 11.862 1.5752 13.6787H0V0H1.5752Z"
            fill="#141414"
          />
        </svg>

        <i className="inline-flex size-[4.4rem] items-center justify-center rounded-full bg-black">
          <WhiteArrow />
        </i>
      </Link>
    </>
  );
};
export default ViewCaseStudyButton;
