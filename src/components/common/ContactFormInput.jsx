import { Input } from "../ui/input";

const ContactFormInput = ({
  placeholder = "Enter your text",
  type = "text",
  value,
  onChange,
}) => {
  return (
    <Input
      className="text-text-primary w-full border-b border-[#9C9C9C] px-[1rem] py-[.5rem] text-[1.6rem] leading-[2.4rem] font-normal outline-0 placeholder:text-[#9c9c9c] md:text-[1.8rem] md:leading-[2.6rem]"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default ContactFormInput;
