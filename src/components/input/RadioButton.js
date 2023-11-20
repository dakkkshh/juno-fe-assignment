export default function RadioButton({
    checked = false,
    label = '',
    onChange = () => {},
    className = '',
}){
    return (
        <div
            className={`flex items-center gap-x-2.5 ${className}`}
        >
            <input
                type="radio"
                checked={checked}
                onChange={onChange}
                className="w-4 h-4"
            />
            <label className="text-secondary text-sm">{label}</label>
        </div>
    );
}