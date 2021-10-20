/** @format */

import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import {
	CustomizedTableRow,
	CustomizedTableCellHeader,
	CustomizedTableCellBody,
} from './style';
import { IconButton, useMediaQuery } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Row() {
	const [open, setOpen] = useState(false);
	const matches = useMediaQuery('(min-width:700px)', { noSsr: true });

	return (
		<>
			<CustomizedTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
				{!matches && (
					<CustomizedTableCellBody>
						<IconButton
							aria-label='expand row'
							size='small'
							style={{ color: '#C2CAF9' }}
							onClick={() => setOpen(!open)}>
							{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
						</IconButton>
					</CustomizedTableCellBody>
				)}
				<CustomizedTableCellBody component='th' scope='row'>
					Um
				</CustomizedTableCellBody>
				{matches && (
					<CustomizedTableCellBody align='right'>dois</CustomizedTableCellBody>
				)}
				<CustomizedTableCellBody align='right'>três</CustomizedTableCellBody>
				{matches && (
					<>
						<CustomizedTableCellBody align='right'>
							quatro
						</CustomizedTableCellBody>
						<CustomizedTableCellBody align='right'>
							cinco
						</CustomizedTableCellBody>
						<CustomizedTableCellBody align='right'>
							seis
						</CustomizedTableCellBody>
					</>
				)}
			</CustomizedTableRow>
			{!matches && (
				<CustomizedTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
					<CustomizedTableCellBody
						style={{ paddingBottom: 0, paddingTop: 0 }}
						colSpan={12}>
						<Collapse in={open} timeout='auto' unmountOnExit>
							<Box sx={{ margin: 1 }}>
								<Table size='small' aria-label='purchases'>
									<TableHead>
										<CustomizedTableRow>
											<CustomizedTableCellHeader>
												Tipo
											</CustomizedTableCellHeader>
											<CustomizedTableCellHeader>
												Saldo
											</CustomizedTableCellHeader>
											<CustomizedTableCellHeader align='right'>
												Data
											</CustomizedTableCellHeader>
											<CustomizedTableCellHeader align='right'>
												Actions
											</CustomizedTableCellHeader>
										</CustomizedTableRow>
									</TableHead>
									<TableBody>
										<CustomizedTableRow>
											<CustomizedTableCellBody component='th' scope='row'>
												Um
											</CustomizedTableCellBody>
											<CustomizedTableCellBody>teste</CustomizedTableCellBody>
											<CustomizedTableCellBody align='right'>
												DOis
											</CustomizedTableCellBody>
											<CustomizedTableCellBody align='right'>
												tres
											</CustomizedTableCellBody>
										</CustomizedTableRow>
									</TableBody>
								</Table>
							</Box>
						</Collapse>
					</CustomizedTableCellBody>
				</CustomizedTableRow>
			)}
		</>
	);
}

export default function TableBox() {
	const matches = useMediaQuery('(min-width:700px)', { noSsr: true });

	function CreateTable() {
		const table = [];
		for (let i = 0; i < 10; i++) {
			table.push(Row());
		}
		return table;
	}
	return (
		<TableContainer sx={{ maxHeight: 460 }} component={Paper}>
			<Table sx={{ minWidth: 200 }} stickyHeader aria-label='sticky table'>
				<TableHead>
					<CustomizedTableRow>
						{!matches && (
							<CustomizedTableCellHeader
								style={{ width: '50px' }}></CustomizedTableCellHeader>
						)}
						<CustomizedTableCellHeader sx={{maxWidth: 2 }}>
							Descrição
						</CustomizedTableCellHeader>
						{matches && (
							<CustomizedTableCellHeader align='right'>
								Tipo
							</CustomizedTableCellHeader>
						)}
						<CustomizedTableCellHeader align='right'>
							Valor
						</CustomizedTableCellHeader>
						{matches && (
							<>
								<CustomizedTableCellHeader align='right'>
									Saldo
								</CustomizedTableCellHeader>
								<CustomizedTableCellHeader align='right'>
									Data
								</CustomizedTableCellHeader>
								<CustomizedTableCellHeader align='right'>
									Actions
								</CustomizedTableCellHeader>
							</>
						)}
					</CustomizedTableRow>
				</TableHead>
				<TableBody>{CreateTable()}</TableBody>
			</Table>
		</TableContainer>
	);
}
