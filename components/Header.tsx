'use client'
import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { RxCaretRight } from 'react-icons/rx'
import { RxCaretLeft } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Button from './Button'

interface HeaderProps {
	children: React.ReactNode
	className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
	const router = useRouter()
	const handleLogout = () => {}
	return (
		<div
			className={twMerge(
				'h-fit p-6 bg-gradient-to-b from-emerald-800',
				className
			)}
		>
			<div className="w-full mb-4 flex items-center justify-between">
				<div className="hidden md:flex gap-x-2 items-center">
					<button className="rounded-full flex items-center justify-center bg-black transition hover:opacity-75">
						<RxCaretLeft size={35} className="text-white" />
					</button>
					<button className="rounded-full flex items-center justify-center bg-black transition hover:opacity-75">
						<RxCaretRight size={35} className="text-white" />
					</button>
				</div>
				<div className="flex md:hidden gap-x-2 items-center">
					<button className="rounded-full p-2 flex items-center justify-center bg-white transition hover:opacity-75">
						<HiHome className="text-black" size={20} />
					</button>
					<button className="rounded-full p-2 flex items-center justify-center bg-white transition hover:opacity-75">
						<BiSearch className="text-black" size={20} />
					</button>
				</div>
				<div className="flex justify-between items-center gap-x-4">
					<>
						<div>
							<Button
								onClick={() => router.back()}
								className="text-neutral-300 bg-transparent font-medium"
							>
								Sign up
							</Button>
						</div>
						<div>
							<Button
								onClick={() => router.forward()}
								className="px-6 py-2 bg-white"
							>
								Log in
							</Button>
						</div>
					</>
				</div>
			</div>
			{children}
		</div>
	)
}

export default Header
