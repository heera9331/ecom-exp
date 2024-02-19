import React from "react";
// className is optional

interface buttonProps {
    text: string, className?: string, onClick: () => void
}

const Button: React.FC<buttonProps> = ({ text, className, onClick, ...props }: buttonProps) => {

    return (
        <button
            className={`${className ? className : ""}`}
            onClick={onClick}
            {...props}
        >
            {text}
        </button>
    )
}

export default Button;