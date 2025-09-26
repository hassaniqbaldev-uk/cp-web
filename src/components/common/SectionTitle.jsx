const SectionTitle = ({ label, textColor = "text-text-primary" }) => {
  return (
    <h2
      className={`text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] md:text-[5.6rem] md:leading-[6.4rem] ${textColor}`}
    >
      {label}
    </h2>
  );
};

export default SectionTitle;
