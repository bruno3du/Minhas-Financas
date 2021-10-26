/** @format */

import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface PrivateRouteProps extends RouteProps {
	// tslint:disable-next-line:no-any
	component: any;
}
const PrivateRoute = (props: PrivateRouteProps) => {
	const { component: Component, ...rest } = props;
	const { user } = useAuth();


	return (
		<Route
			{...rest}
			render={(routeProps) =>
				user ? (
					<Component {...routeProps} />
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: {
								from: routeProps.location,
							},
						}}
					/>
				)
			} />
	);
};

export default PrivateRoute;
