import Link from "next/link";
import GradientBg from "../../../public/images/case-study-btn-gradient-bg.svg";
import CaseStudyBtnSvg from "../../../public/images/case-study-btn.svg";

const CaseStudyBtn = ({ href }) => {
  return (
    <Link
      href={href}
      className="relative flex size-[16.3rem] cursor-pointer overflow-hidden transition-all duration-500 hover:scale-105"
    >
      {/* Background gradient */}
      <GradientBg className="animation-duration-[10s] pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin select-none" />

      {/* Button circle */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 size-[13.5rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full select-none">
        <CaseStudyBtnSvg />
      </div>
    </Link>
  );
};

export default CaseStudyBtn;
