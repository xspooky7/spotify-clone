import getSongs from '@/actions/getSongs'
import Header from '@/components/Header'
import ListItem from '@/components/ListItem'
import PageContent from './components/PageContent'

export const revalidate = 0

export default async function Home() {
	const songs = await getSongs()
	return (
		<div
			className="
				w-full
				h-full
				bg-neutral-900
				rounded-lg
				overflow-y-auto
				overflow-hidden"
		>
			<Header>
				<div className="mb-2">
					<h1 className="text-white text-3xl font-semibold">Welcome back!</h1>
					<div
						className="
					grid
					grid-cols-1
					sm:grid-cols-2
					xl:grid-cols-3
					2xl:grid-cols-4
					gap-3
					mt-4"
					>
						<ListItem name="Liked Songs" image="/liked.png" href="liked" />
					</div>
				</div>
			</Header>
			<div className="px-6 mt-2 mb-7">
				<div className="flex items-center justify-between">
					<h1 className="text-white text-2xl font-semibold">Newest Songs</h1>
				</div>
				<div>
					<PageContent songs={songs} />
				</div>
			</div>
		</div>
	)
}
