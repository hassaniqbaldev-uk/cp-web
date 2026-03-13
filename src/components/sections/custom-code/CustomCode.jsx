"use client";

const CustomCode = ({ caseStudy }) => {
  if (!caseStudy?.customCode) return null;

  return (
    <section className="pt-[5rem] xl:pt-[10rem]">
      <div dangerouslySetInnerHTML={{ __html: caseStudy.customCode }} />
    </section>
  );
};

export default CustomCode;
