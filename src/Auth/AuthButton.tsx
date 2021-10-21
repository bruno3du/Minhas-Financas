/** @format */

import AuthContext from './AuthContext';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function AuthButton() {
	const history = useHistory();
	const { isLogged, setIsLogged } = useContext(AuthContext);

	useEffect(() => {
		if (!isLogged) {
			history.push('/');
		}
	}, [isLogged]);

	function handleRedirect() {
		history.push('/dashboard');
	}

	return (
		<button
			onClick={() => {
				setIsLogged(!isLogged);
				handleRedirect();
			}}>
			{isLogged ? 'Logout' : 'Login'}
		</button>
	);
}
