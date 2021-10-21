/** @format */

import Header from '../../components/Header';
import Card from '../../components/Card';
import Table from '../../components/Table';
import Botoes from '../../components/Botoes';
import FormEntrada from '../../components/FormEntrada';
import {
	Dashboard,
	Container,
	ContainerButtonsHeader,
	ReportSession,
} from './style';
import { useState } from 'react';

export default function Index() {
	const [btnIncoming, setBtnIncoming] = useState(false);
	const [btnAccount, setBtnAccount] = useState(false);

	return (
		<Dashboard>
			<Header isHeaderHome={false} />
			<div className='cards'>
				<Card title='Saldo'></Card>
				<Card title='Gastos'></Card>
				<Card title='Entradas'></Card>
			</div>
			<Container>
				<ContainerButtonsHeader>
					<div>
						<Botoes
							isOpen={btnAccount}
							setIsOpen={setBtnAccount}
							setCloseOther={setBtnIncoming}>
							Entrada
						</Botoes>
						<Botoes
							isOpen={btnIncoming}
							setIsOpen={setBtnIncoming}
							setCloseOther={setBtnAccount}>
							Saida
						</Botoes>
					</div>
				</ContainerButtonsHeader>
				{btnIncoming && <FormEntrada title='Entrada' />}
				{btnAccount && <FormEntrada title='Saída' />}
				{/* <FormEntrada title="Saída"/> */}

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
