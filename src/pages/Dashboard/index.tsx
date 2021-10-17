/** @format */

import Header from '../../components/Header';
import Card from '../../components/Card';
import Table from '../../components/Table'
import {
	Dashboard,
	Container,
	ContainerButtonsHeader,
	ReportSession
} from './style';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { useState } from 'react';

export default function Index() {
	const [isBtnEntrada, setBtnEntrada] = useState(false);
	const [isBtnSaida, setBtnSaida] = useState(false);

	return (
		<Dashboard>
			<Header isHeaderHome={false} />
			<div className='cards'>
				<Card></Card>
				<Card></Card>
				<Card></Card>
			</div>

			<Container>
				<ContainerButtonsHeader>
					<div>
						<button
							onClick={() => {
								setBtnEntrada(!isBtnEntrada);
								setBtnSaida(false);
							}}>
							<div>
								{isBtnEntrada ? (
									<AiOutlineMinusCircle />
								) : (
									<AiOutlinePlusCircle />
								)}
								Entradas
							</div>
						</button>

						<button
							onClick={() => {
								setBtnSaida(!isBtnSaida);
								setBtnEntrada(false);
							}}>
							<div>
								{isBtnSaida ? (
									<AiOutlineMinusCircle />
								) : (
									<AiOutlinePlusCircle />
								)}
								Saidas
							</div>
						</button>
					</div>
				</ContainerButtonsHeader>
				<ReportSession>
					<h2>Relatório</h2>
					<div>
						<Table></Table>
					</div>
				</ReportSession>
			</Container>
		</Dashboard>
	);
}
