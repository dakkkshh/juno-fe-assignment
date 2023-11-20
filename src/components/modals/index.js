import { IoMdClose } from "react-icons/io";

export default function Modal({
    children = null,
    title = "",
    isOpen = false,
    onClose = () => {},
}){
    return (
        isOpen && (
            <div
                className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80"
                onClick={onClose}
            >
                <div
                    className="bg-white w-11/12 md:max-w-md mx-auto rounded-lg z-50 overflow-y-auto p-5"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div
                        className="flex items-center justify-between mb-4"
                    >
                        <h3>
                            {title}
                        </h3>
                        <IoMdClose
                            className="cursor-pointer"
                            onClick={onClose}
                        />
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        )
    )
}