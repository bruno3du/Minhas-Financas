/** @format */

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function AuthButton() {
	const history = useHistory();
	const { user, signInWithGoogle } = useAuth();

	useEffect(() => {
		// console.log(user, signInWithGoogle);
		if (!user?.name) {
			history.push('/');
		}
	}, [user, history]);

	async function handleRedirect() {
		if (!user?.name) {
			await signInWithGoogle();
		}
		history.push('/dashboard');
	}

	return (
		<button
			onClick={() => {
				handleRedirect();
			}}>
			{!user ? 'Login' : <span>{user.name}</span>}
		</button>
	);
}
