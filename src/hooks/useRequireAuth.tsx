/** @format */

import { useEffect } from 'react';
import { useAuth } from './useAuth';
import { useRouter } from './useRouter';

export default function useRequireAuth(redirectUrl = '/') {
	const { user } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.push(redirectUrl);
		}
	}, [user, router, redirectUrl]);
	return user;
}
