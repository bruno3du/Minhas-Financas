/** @format */

import { experimentalStyled as styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const CustomizedTableRow = styled(TableRow)`
	background: transparent linear-gradient(180deg, #741eab 0%, #601094 100%) 0%
		0% no-repeat padding-box;
`;

export const CustomizedTableCellHeader = styled(TableCell)`
	font-family: 'NexaBook', sans-serif;
	background-color: #581c7d;
	color: #7690e2;
	border-bottom: 2px solid #7690e2;
	font-size: 1rem;
	font-weight: 600;
`;

export const CustomizedTableCellBody = styled(TableCell)`
	font-family: 'NexaBook', sans-serif;
	color: #c2caf9;
	border: none;
	border-top: 1px solid #7690e2;
`;
