import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { ReduxProvider } from '@/components/Provider';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Lottery',
	description: 'Demo lottery project'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return <html lang="ru">
		<body className={inter.className}>
			{/* <script async src='/.eruda.js'/> */}
			{/* <script>eruda.init();</script> */}

			<ReduxProvider>
				{children}
			</ReduxProvider>
		</body>
	</html>
}
