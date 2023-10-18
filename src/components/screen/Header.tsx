import Link from 'next/link';
import styles from './Header.module.css';


export function Header() {
	return <header className={styles.header}>
		<Link href='/'>main</Link>
		<Link href='/login'>login</Link>
	</header>
}
