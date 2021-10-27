/** @format */

import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from '@firebase/auth';
import { createContext, ReactNode, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { auth } from '../services/firebase';

type User = {
	id: string;
	name: string;
};

type AuthContextType = {
	user: User | undefined;
	signInWithGoogle: () => Promise<void>;
	signout: () => Promise<void>;
	isLogged: boolean;
};

type AuthContextProviderProps = {
	children: ReactNode;
};
export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider(props: AuthContextProviderProps) {
	const [user, setUser] = useLocalStorage('auth', {} as User);
	const [isLogged, setIsLogged] = useLocalStorage('logged', false);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { displayName, uid } = user;
				if (!displayName) {
					throw new Error('Missing information from Google Account.');
				}

				setUser({
					id: uid,
					name: displayName,
				});
			}
		});

		return () => unsubscribe();
	}, [setUser, setIsLogged]);

	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		provider.addScope('profile');
		provider.addScope('email');
		const result = await signInWithPopup(auth, provider);

		if (result) {
			const { displayName, uid } = result.user;

			if (!displayName) {
				throw new Error('Missing information from Google Account.');
			}

			setUser({ id: uid, name: displayName });
			setIsLogged(true);
		}
	}

	const signout = async () => {
		return signOut(auth);
	};

	return (
		<AuthContext.Provider value={{ user, signInWithGoogle, signout, isLogged }}>
			{props.children}
		</AuthContext.Provider>
	);
}
