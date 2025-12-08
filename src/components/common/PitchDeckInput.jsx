import { Input } from "../ui/input";

const PitchDeckInput = ({
  placeholder = "Enter your text",
  type = "text",
  value,
  onChange,
}) => {
  return (
    <Input
      className="text-text-primary h-[5rem] w-full rounded-[1.6rem] border-[2px] border-transparent bg-transparent px-[2.4rem] text-[1.6rem] leading-[2.4rem] font-medium outline-none [background:linear-gradient(#fff,#fff)padding-box,linear-gradient(90deg,#FFE400_0%,#FF37B3_100%)border-box] placeholder:text-[#333333] md:h-[6.2rem]"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default PitchDeckInput;
