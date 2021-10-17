/** @format */

import Header from '../../components/Header';
import Card from '../../components/Card';
import { BackgroundIn } from './style';

export default function Index() {
	return (
		<BackgroundIn>
			<Header isHeaderHome={false} />
			<div>
				<Card></Card>
				<Card></Card>
				<Card></Card>
			</div>
		</BackgroundIn>
	);
}
