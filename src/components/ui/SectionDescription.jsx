const SectionDescription = ({ text, textColor = "#625C70" }) => {
  return (
    <>
      <p
        style={{ color: textColor }}
        className="text-[1.6rem] leading-[2.4rem] font-normal tracking-normal md:text-[2rem] md:leading-[3.2rem]"
      >
        {text}
      </p>
    </>
  );
};
export default SectionDescription;
