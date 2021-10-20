/** @format */

import styled from 'styled-components';

export const Buttons = styled.button`
	position: relative;
	bottom: 30px;
	font-family: 'NexaHeavy', sans-serif;
	background-color: #581c7d;
	border: 2px solid #7690e2;
	border-radius: 10px;
	color: #7690e2;
	padding: 13px 30px;
	font-size: 1.1rem;
	cursor: pointer;

	&:hover {
		filter: brightness(0.9);
	}

	@media (max-width: 1100px) {
		padding: 10px 26px;
	}

	@media (max-width: 960px) {
		padding: 8px 20px;
		font-size: 0.9rem;
	}

	@media (max-width: 760px) {
		padding: 7px 16px;
	}

	> div {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 10px;
	}
`;
