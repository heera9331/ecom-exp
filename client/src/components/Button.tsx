
// className is optional

const Button = ({ text, className, onClick, ...props }: { text: string, className?: string, onClick: () => void }) => {

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