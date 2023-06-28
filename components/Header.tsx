'use client'
import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { RxCaretRight } from 'react-icons/rx'
import { RxCaretLeft } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Button from './Button'
import useAuthModal from '@/hooks/useAuthModal'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@/hooks/useUser'
import { FaUserAlt } from 'react-icons/fa'
import { toast } from 'react-hot-toast'

interface HeaderProps {
	children: React.ReactNode
	className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
	const router = useRouter()
	const { onOpen } = useAuthModal()
	const supabaseClient = useSupabaseClient()
	const { user } = useUser()

	const handleLogout = async () => {
		const { error } = await supabaseClient.auth.signOut()
		router.refresh()

		if (error) toast.error(error.message)
		else toast.success('Logged out!')
	}
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
					{user ? (
						<div className="flex gap-x-4 items-center">
							<Button onClick={handleLogout} className="bg-white px-6 py-2">
								Logout
							</Button>
							<Button
								onClick={() => router.push('/account')}
								className="bg-white"
							>
								<FaUserAlt />
							</Button>
						</div>
					) : (
						<>
							<div>
								<Button
									onClick={onOpen}
									className="text-neutral-300 bg-transparent font-medium"
								>
									Sign up
								</Button>
							</div>
							<div>
								<Button onClick={onOpen} className="px-6 py-2 bg-white">
									Log in
								</Button>
							</div>
						</>
					)}
				</div>
			</div>
			{children}
		</div>
	)
}

export default Header
