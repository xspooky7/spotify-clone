import './globals.css'
import { Figtree } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata = {
	title: 'Spotify Clone',
	description: 'by ce',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={figtree.className}>
				<Sidebar>
					<main className="h-full flex-1 py-2 overflow-y-auto">{children}</main>
				</Sidebar>
			</body>
		</html>
	)
}
