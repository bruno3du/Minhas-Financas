/** @format */

import { useState } from 'react';
import { Header } from './style';

type HeaderHomeProps = {
	isHeaderHome: boolean;
};

export default function Index({ isHeaderHome }: HeaderHomeProps) {
	const [isLogged, setIsLogged] = useState(false)
	return (
		<>
			<Header isHeaderHome={isHeaderHome}>
				<h1>MyFinance</h1>
				<span onClick={() => setIsLogged(!isLogged)}>{isLogged ? "Logout" : "Login"}</span>
			</Header>
		</>
	);
}
