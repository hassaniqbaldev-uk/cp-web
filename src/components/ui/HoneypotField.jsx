// Hidden from real users and screen readers, bots fill it in.
const HoneypotField = ({ name, value, onChange }) => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
    >
      <label>
        Leave this field empty
        <input
          type="text"
          name={name}
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default HoneypotField;
