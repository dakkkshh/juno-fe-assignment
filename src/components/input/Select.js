export default function Select({
  placeholder = "",
  className = "",
  options = [],
  onChange = () => {},
  label = "",
  error = "",
  selectClassName = "",
  value = "",
}) {
  return (
    <div className={className}>
      {label && <label className="text-secondary text-sm">{label}</label>}
      <select
        className={`bg-BGLight py-2 px-4 rounded-lg border-solid border-BGBorder text-secondary ${selectClassName}`}
        style={{
          borderWidth: "1px",
        }}
        onChange={onChange}
        value={value}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option
            key={`option-${index}`}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-error text-sm">{error}</p>}
    </div>
  );
}
