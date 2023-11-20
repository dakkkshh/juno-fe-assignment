import { FiSearch } from "react-icons/fi";

export default function SearchBar({
    placeholder = 'Search',
    onChange = () => {},
    className = ''
}){
    return (
        <div
            className={`flex items-center gap-x-2.5 py-2 px-4 rounded-lg border-solid border-BGBorder ${className}`}
            style={{
                borderWidth: '1px'
            }}
        >
            <FiSearch
                className="text-secondary"
            />
            <input
                type="text"
                placeholder={placeholder}
                onChange={onChange}
                className="w-full bg-transparent outline-none text-secondary"
            />
        </div>
    )
}