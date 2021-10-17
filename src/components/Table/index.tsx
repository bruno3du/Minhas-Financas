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
						<th>Valor</th>
						<th>Saldo</th>
						<th>Data</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Jill</td>
						<td>Smith</td>
						<td>50</td>
					</tr>
					<tr>
						<td>Eve</td>
						<td>Jackson</td>
						<td>94</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}
