export default function Select({
  placeholder = "",
  className = "",
  options = [],
  onChange = () => {},
  label = "",
  error = "",
  selectClassName = ""
}) {
  return (
    <div className={className}>
      {label && <label className="text-secondary text-sm">{label}</label>}
      <select
        className={`bg-BGLight py-2 px-4 rounded-lg border-solid border-BGBorder ${selectClassName}`}
        style={{
          borderWidth: "1px",
        }}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={`option-${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-error text-sm">{error}</p>}
    </div>
  );
}
