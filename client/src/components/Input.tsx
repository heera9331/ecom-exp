/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */

import React from "react";

interface InputProps {
    label: string, htmlFor: string, value: any, onChange: (e: React.FormEvent) => void, type?: string, placeholder?: string, className?: string,
}

const Input: React.FC<InputProps> = ({
    label,
    htmlFor,
    value,
    onChange,
    type,
    className,
    placeholder,
    ...props
}) => {
    return (
        <div className="flex flex-col gap-2 m-1 p-1">
            <label
                htmlFor={htmlFor}
            >
                {label}
            </label>
            <input
                type={type ? type : "text"}
                value={value}
                className={` p-1 border border-black border-opacity-25 rounded-sm focus: outline-none ${className}`}
                placeholder={placeholder ? placeholder : ""}
                name={htmlFor}
                onChange={onChange}
                {...props}
                required={true}
            />
        </div>
    );
};

export default Input;