/** @format */

import { Table } from './style';

export default function Index() {
	return (
		<div>
			<Table>
				<thead>
					<tr>
						<th>Descrição</th>
						<th>Tipo</th>
						{/* Não obrigatório*/}
						<th>Valor</th>
						<th>Saldo</th>
						<th>Data</th> {/* Não obrigatório*/}
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Jill testereadf teasdfaa </td>
						<td>Smith</td>
						<td>50</td>
						<td>50</td>
						<td>50</td>
						<td>50</td>
					</tr>
					<tr>
						<td>Eve</td>
						<td>Jackson</td>
						<td>94</td>
						<td>94</td>
						<td>94</td>
						<td>94</td>
					</tr>
					<tr>
						<td>Eve</td>
						<td>Jackson</td>
						<td>94</td>
						<td>94</td>
						<td>94</td>
						<td>94</td>
					</tr>
					<tr>
						<td>Eve</td>
						<td>Jackson</td>
						<td>94</td>
						<td>94</td>
						<td>94</td>
						<td>94</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}
