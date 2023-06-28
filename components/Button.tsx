import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, type = 'button', disabled, ...props }, ref) => {
		return (
			<button
				className={twMerge(
					`
        w-full
        rounded-full
		px-3
        py-3
        bg-green-500
        border
        border-transparent
        text-black
        font-bold
		disabled:cursor-not-allowed
        disabled:opacity-50
        hover:opacity-75
        transition`,
					className
				)}
				type={type}
				ref={ref}
				disabled={disabled}
				{...props}
			>
				{children}
			</button>
		)
	}
)

export default Button
