/** @format */

import { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import AuthContext from './AuthContext';

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
	const { isLogged } = useContext(AuthContext);
	console.log(isLogged);
	return (
		<Route
			{...rest}
			render={(location) =>
				isLogged ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: {
								from: location
							}
						}}
					/>
				)
			}></Route>
	);
};

export default PrivateRoute;
