'use client'

import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'
import Link from 'next/link'

interface ListItemProps {
	name: string
	image: string
	href: string
}

const ListItem: React.FC<ListItemProps> = ({ name, image, href }) => {
	return (
		<Link
			href={href}
			className="    
        relative
        group
        pr-4
        flex
        items-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-100/10
        hover:bg-neutral-100/20
        transition"
		>
			<div className="relative min-h-[64px] min-w-[64px]">
				<Image className="object-cover" fill src={image} alt="Image" />
			</div>
			<p className="py-5 font-medium truncate">{name}</p>
			<div
				className="
            absolute
            right-5
            p-4
            rounded-full
            flex
            items-center
            justify-center
            bg-green-500
            drop-shadow-md
            transition
            opacity-0
            group-hover:opacity-100
            hover:scale-110"
			>
				<FaPlay className="text-black" />
			</div>
		</Link>
	)
}

export default ListItem
