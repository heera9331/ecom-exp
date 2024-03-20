import React from "react";
// className is optional

interface buttonProps {
    text: string, className?: string, onClick?: (e: any) => void
}

const Button: React.FC<buttonProps> = ({ text, className, onClick, ...props }: buttonProps) => {

    return (
        <button
            className={`bg-white font-bold border border-black border-opacity-25 rounded-sm px-2 py-1 ${className ? className : ""}`}
            onClick={onClick}
            {...props}
        >
            {text}
        </button>
    )
}

export default Button;