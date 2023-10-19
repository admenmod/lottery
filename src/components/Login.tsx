'use client'

import { useState } from 'react';
import { useActions } from '@/hooks/useActions';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ErrorPopUp } from '@/components/screen/ErrorPopUp';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ref, child, get } from 'firebase/database';
import { db } from '@/firebase';


export function Login() {
	const [isLoading, setIsLoading] = useState(false);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<Error | null>(null);

	const { setUser } = useActions();

	const router = useRouter();


	const handler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();

		if(isLoading) return;
		setIsLoading(true);

		if(!email || !password) return;

		try {
			const auth = getAuth();
			const { user } = await signInWithEmailAndPassword(auth, email, password);

			const snapshot = await get(child(ref(db), `users/${user.uid}`));

			if(!snapshot.exists()) throw new Error('No data available');

			setUser(snapshot.val());

			router.push('/home');
		} catch(error) {
			console.error(error);
			setError(error as Error);

			setIsLoading(false);
		}
	};


	return <div>
		<form className='form'>
			<input type='email' placeholder='email'
				value={email} onInput={e => setEmail(e.currentTarget.value)}/><br/>
			<input type='password' placeholder='password'
				value={password} onInput={e => setPassword(e.currentTarget.value)}/><br/>

			<button onClick={handler}>login</button>

			<p>
				<Link href='/register'>register</Link>
			</p>


			{ error && <ErrorPopUp error={error} onclose={() => setError(null)}/> }
		</form>
	</div>
}
