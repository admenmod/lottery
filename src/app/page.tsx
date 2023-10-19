import { Header } from '@/components/screen/Header'

import styles from './page.module.css'


export default function IndexPage() {
	return <>
		<Header />
		<main className={styles.main}>
			<div className={styles.description}>
				<p>
					index page
				</p>
			</div>
		</main>
	</>
}
