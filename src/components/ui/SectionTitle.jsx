const SectionTitle = ({ text, textColor = "#312749" }) => {
  return (
    <>
      <h2
        style={{ color: textColor }}
        className="text-[3rem] leading-[3.2rem] font-bold tracking-[-0.02em] md:text-[4.8rem] md:leading-[6rem]"
      >
        {text}
      </h2>
    </>
  );
};
export default SectionTitle;
