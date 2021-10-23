/** @format */

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function AuthButton() {
	const history = useHistory();
	const { user, signInWithGoogle } = useAuth();
	console.log(user, signInWithGoogle)

	useEffect(() => {
		if (!true) {
			history.push('/');
		}
	}, [user, history]);


	async function handleRedirect() {
		if (!user) {
			await signInWithGoogle();
		}
		history.push('/dashboard');
	}

	return (
		<button
			onClick={() => {
				handleRedirect();
			}}>
			{user ? (<span>{user.name}</span>) : 'Login'}
		</button>
	);
}
