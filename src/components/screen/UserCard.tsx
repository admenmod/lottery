'use client'

import { useTypedSelector } from '@/hooks/useTypedSelector';


export function UserCard() {
	const { user, balance } = useTypedSelector(state => state.player);


	return user ? <div style={{
		padding: '5px 30px',
		position: 'fixed',
		top: '0px',
		right: '0px',
		background: 'rgba(50, 50, 50, 0.5)'
	}}>
		<div>{user.name}</div>
		<div style={{ fontSize: '1.2em', color: '#aaaa77' }}>balance: {balance}</div>
		<div style={{ fontSize: '0.5em', color: '#777777' }}>{user.uid}</div>
	</div> : <></>
}
