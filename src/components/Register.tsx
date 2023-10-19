'use client'

import { useState } from 'react';
import { useActions } from '@/hooks/useActions';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ErrorPopUp } from '@/components/screen/ErrorPopUp';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { child, get, ref, set } from 'firebase/database';
import { db } from '@/firebase';


export function Register() {
	const [isLoading, setIsLoading] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<Error | null>(null);

	const { setUser } = useActions();

	const router = useRouter();

	const handler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();

		if(isLoading) return;
		setIsLoading(true);

		if(!name || !email || !password) return;

		try {
			const auth = getAuth();
			const { user } = await createUserWithEmailAndPassword(auth, email, password);

			await set(ref(db, `users/${user.uid}`), { name, email, uuid: user.uid });

			const snapshot = await get(child(ref(db), `users/${user.uid}`));

			if(!snapshot.exists()) throw new Error('No data available');

			setUser(snapshot.val());

			router.push('/home');
		} catch(error) {
			console.error(error);
			setError(error as Error);

			setIsLoading(false);
		}
	}


	return <div>
		<form className='form'>
			<input type='text' placeholder='name'
				value={name} onInput={e => setName(e.currentTarget.value)}/><br/>
			<input type='email' placeholder='email'
				value={email} onInput={e => setEmail(e.currentTarget.value)}/><br/>
			<input type='password' placeholder='password'
				value={password} onInput={e => setPassword(e.currentTarget.value)}/><br/>

			<button onClick={handler}>sing up</button>

			<p>
				<Link href='/login'>login</Link>
			</p>


			{ error && <ErrorPopUp error={error} onclose={() => setError(null)}/> }
		</form>
	</div>
}
