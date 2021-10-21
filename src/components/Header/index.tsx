/** @format */

import { Header } from './style';
import AuthButton from '../../Auth/AuthButton';

type HeaderHomeProps = {
	isHeaderHome: boolean;
};

export default function Index({ isHeaderHome }: HeaderHomeProps) {
	return (
		<>
			<Header isHeaderHome={isHeaderHome}>
				<h1>MyFinance</h1>
				<AuthButton />
			</Header>
		</>
	);
}
