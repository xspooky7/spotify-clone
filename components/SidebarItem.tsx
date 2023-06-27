import Link from 'next/link'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

interface SidebarItemProps {
	label: string
	active?: boolean
	icon: IconType
	href: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({
	label,
	active,
	icon: Icon,
	href,
}) => {
	return (
		<Link
			href={href}
			className={twMerge(
				`
				w-full	
				h-auto
				py-1
				flex
            	flex-row
            	items-center
            	gap-x-4
            	text-md
            	font-medium
            	cursor-pointer
            	hover:text-white
            	transition
            	text-neutral-400
            	`,
				active && 'text-white'
			)}
		>
			<Icon size={26} />
			<p className="w-full truncate">{label}</p>
		</Link>
	)
}

export default SidebarItem
