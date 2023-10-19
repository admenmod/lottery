'use client'

import { useTypedSelector } from '@/hooks/useTypedSelector';
import Link from 'next/link';


export function Header() {
	const { user } = useTypedSelector(state => state.player);


	return <nav style={{
		display: 'grid',
		columnGap: '10px',
		gridTemplateColumns: 'repeat(16, max-content)',
		position: 'absolute',
		top: '0px',
		left: '0px',
		padding: '5px',
		width: '100vw',
		backgroundColor: '#444444'
	}}>
		<Link href='/'>root</Link>
		<Link href='/home'>home</Link>

		{ !user && <>
			<Link href='/login'>login</Link>
			<Link href='/register'>register</Link>
		</> }
	</nav>
}
