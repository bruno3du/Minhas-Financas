/** @format */

// import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function AuthButton() {
	const history = useHistory();
	const { isLogged, user, signInWithGoogle } = useAuth();

	
	async function handleRedirect() {
		if (!isLogged) {
			await signInWithGoogle();
		}
		history.push('/dashboard');
	}

	return (
		<button
			onClick={() => {
				handleRedirect();
			}}>
			{user ?<span>{user.name}</span> : 'Login'}
		</button>
	);
}
