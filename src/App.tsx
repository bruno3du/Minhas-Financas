/** @format */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Global from './global';

export default function app() {
	return (
		<div>
			<Global />
			<Router>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/dashboard' component={Dashboard} />
				</Switch>
			</Router>
		</div>
	);
}
