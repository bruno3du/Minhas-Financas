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
				color: #7690e2;
				font-weight: 700;
			}
		}
	}

	thead,
	tbody {
		tr {
			padding: 12px 23px;
		}
	}
`;
