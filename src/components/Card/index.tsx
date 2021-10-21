/** @format */

import { Card } from './style';

interface CardProps {
  title: string
}

export default function index({ title }: CardProps) {
	return (
		<Card>
			<h4>{title}</h4>
			<p>R$ 2.000,00</p>
		</Card>
	);
}
