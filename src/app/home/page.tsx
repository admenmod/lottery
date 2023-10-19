import { Header } from '@/components/screen/Header'
import { UserCard } from '@/components/screen/UserCard';

import styles from '@/app/page.module.css'


export default function HomePage() {
	return <>
		<Header />
		<main className={styles.main}>
			<UserCard />

			<div className={styles.description}>
				<p>
					home page
				</p>
			</div>
		</main>
	</>
}
