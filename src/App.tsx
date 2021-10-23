/** @format */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Global from './global';
import AuthProvider from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

export default function app() {
	return (
		<div>
			<Global />
			<AuthProvider>
				<Router>
					<Switch>
						<Route path='/' exact component={Home} />
						<PrivateRoute path='/dashboard' component={Dashboard} />
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}
