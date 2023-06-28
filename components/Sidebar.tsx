'use client'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Box from './Box'
import SidebarItem from './SidebarItem'
import Library from './Library'

interface SidebarProps {
	children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
	const pathname = usePathname()

	const routes = useMemo(
		() => [
			{
				label: 'Home',
				icon: HiHome,
				active: pathname !== '/search',
				href: '/',
			},
			{
				label: 'Search',
				icon: BiSearch,
				active: pathname === '/search',
				href: '/search',
			},
		],
		[pathname]
	)
	return (
		<main className="h-full flex-1 py-2 overflow-y-auto">
			<div className="flex h-full">
				<div
					className="
			h-full
			w-[300px]
			p-2
			hidden
			md:flex
			flex-col
			gap-y-2
			bg-black"
				>
					<Box>
						<div className="px-5 py-4 flex flex-col gap-y-4">
							{routes.map(i => (
								<SidebarItem key={i.label} {...i} />
							))}
						</div>
					</Box>
					<Box className="h-full overflow-y-auto">
						<Library />
					</Box>
				</div>
				{children}
			</div>
		</main>
	)
}

export default Sidebar
