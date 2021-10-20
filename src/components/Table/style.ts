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

// export const Table = styled.table`
// 	margin: 60px auto 30px;
// 	width: 80%;
// 	border-collapse: collapse;
// 	font-size: 1rem;
// 	min-width: 400px;

// 	thead {
// 		tr {
// 			th {
// 				text-align: left;
// 				color: #7690e2;
// 				font-weight: 700;
// 			}
// 		}
// 	}

// 	thead,
// 	tbody {
// 		th,
// 		td {
// 			padding: 10px 23px;
// 			font-size: 12px;
// 		}
// 	}

// 	tbody {
// 		td {
// 			color: #c2caf9;
// 		}
// 		tr {
// 			border-radius: 10px;
// 			background: linear-gradient(180deg, #741eab 0%, #601094 100%);
// 			border-top: 1px solid #7690e2;
// 			box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
// 		}
// 	}
// `;
