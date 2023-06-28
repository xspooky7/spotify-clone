import './globals.css'
import { Figtree } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'

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
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider />
						<Sidebar>
							<main className="h-full flex-1 py-2 overflow-y-auto">
								{children}
							</main>
						</Sidebar>
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	)
}
