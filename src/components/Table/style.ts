/** @format */

import styled from 'styled-components';

export const Table = styled.table`
	margin: 60px auto 30px;
	width: 80%;
	border-collapse: collapse;
	font-size: 1rem;
	min-width: 400px;
	font-family: 'NexaBook', sans-serif;

	thead {
		tr {
			th {
				text-align: left;
				color: #7690e2;
				font-weight: 700;
			}
		}
	}

	thead,
	tbody {
		th,
		td {
			padding: 10px 23px;
			font-size: 12px;
		}
	}

	tbody {
		td {
			color: #c2caf9;
		}
		tr {
			border-radius: 10px;
			background: linear-gradient(180deg, #741eab 0%, #601094 100%);
			border-top: 1px solid #7690e2;
			box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
		}
	}
`;
