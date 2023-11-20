export default function PrimaryButton({
    onClick = () => {},
    title = '',
    className = '',
    disabled = false,
}){
    return (
        <button
            className={`rounded-lg py-2 px-8 items-center justify-center ${className} ${disabled ? 'bg-BGBorder text-secondary' : 'bg-primary text-white'}`}
            onClick={onClick}
            disabled={disabled}
        >
            <h5
                className="text-inherit"
            >
                {title}
            </h5>
        </button>
    )   
}