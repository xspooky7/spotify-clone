'use client'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Box from './Box'
import SidebarItem from './SidebarItem'
import Library from './Library'
import { Song } from '@/types'
import usePlayer from '@/hooks/usePlayer'
import { twMerge } from 'tailwind-merge'

interface SidebarProps {
	children: React.ReactNode
	songs: Song[]
}

const Sidebar: React.FC<SidebarProps> = ({ children, songs }) => {
	const pathname = usePathname()
	const player = usePlayer()

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
			<div
				className={twMerge(
					`flex h-full`,
					player.activeId && 'h-[calc(100%-80px)]'
				)}
			>
				<div className="h-full w-[300px] px-2 hidden md:flex flex-col gap-y-2 bg-black">
					<Box>
						<div className="px-5 py-4 flex flex-col gap-y-4">
							{routes.map(i => (
								<SidebarItem key={i.label} {...i} />
							))}
						</div>
					</Box>
					<Box className="h-full overflow-y-auto">
						<Library songs={songs} />
					</Box>
				</div>
				{children}
			</div>
		</main>
	)
}

export default Sidebar
