/** @format */

import { useMemo } from 'react';
import { useLocation, useHistory, useRouteMatch } from 'react-router-dom';

// Hook
export function useRouter() {
	const location = useLocation();
	const history = useHistory();
	const match = useRouteMatch();

	return useMemo(() => {
		return {
			push: history.push,
			replace: history.replace,
			pathname: location.pathname,
			match, 
			location,
			history,
		};
	}, [match, location, history]);
}
