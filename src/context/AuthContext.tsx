/** @format */

import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from '@firebase/auth';
import { createContext, ReactNode, useState, useEffect } from 'react';
import { auth } from '../services/firebase';

type User = {
	id: string;
	name: string;
};

type AuthContextType = {
	user: User | undefined;
	signInWithGoogle: () => Promise<void>;
	signout: () => Promise<void>;
};

type AuthContextProviderProps = {
	children: ReactNode;
};
export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider(props: AuthContextProviderProps) {
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
	}, []);
	const [user, setUser] = useState<User>();

	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		provider.addScope('profile');
		provider.addScope('email');
		const result = await signInWithPopup(auth, provider);

		localStorage.setItem('userDatas', JSON.stringify(result));
		if (result) {
			const { displayName, uid } = result.user;

			if (!displayName) {
				throw new Error('Missing information from Google Account.');
			}

			setUser({ id: uid, name: displayName });
		}
	}

	const signout = async () => {
		return signOut(auth);
	};

	return (
		<AuthContext.Provider value={{ user, signInWithGoogle, signout }}>
			{props.children}
		</AuthContext.Provider>
	);
}
