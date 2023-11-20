import { CgCloseO } from "react-icons/cg";

export default function CloseAccountButton({
    onClick = () => {},
    className = ''
}){
    return (
        <button
            className={`bg-errorBG flex gap-x-1.5 rounded-lg py-2 px-4 items-center justify-center ${className}`}
            onClick={onClick}
        >
            <CgCloseO
                className="text-error"
                size={20}
            />
            <h5
                className="text-error whitespace-nowrap"
            >
                Close Account
            </h5>
        </button>
    )
}