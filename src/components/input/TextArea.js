export default function TextArea({
  label = "",
  placeholder = "",
  value = "",
  onChange = () => {},
  className = "",
  minLines = 3,
  error = "",
}) {
  return (
    <div
        className={className}
    >
      {label && <label className="text-secondary text-sm">{label}</label>}
      <div
        className="mt-1 flex items-center gap-x-2.5 py-2 px-4 rounded-lg border-solid border-BGBorder"
        style={{
          borderWidth: "1px",
        }}
      >
        <textarea
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          rows={minLines}
          className="w-full bg-transparent outline-none text-secondary"
        />
      </div>
      {error && <p className="text-error text-sm">{error}</p>}
    </div>
  );
}
