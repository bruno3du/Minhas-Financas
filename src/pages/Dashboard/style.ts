/** @format */

import styled from 'styled-components';

export const Dashboard = styled.div`
	background: transparent
		linear-gradient(180deg, #4e1272 0%, #66258e 55%, #234d81e3 100%) 0% 0%
		no-repeat padding-box;
	background-attachment: fixed;
	background-size: cover;
	padding-bottom: 115px;

	.cards {
		width: 85vw;
		max-width: 1100px;
		margin: auto;
		margin-top: 70px;
		display: grid;
		justify-content: space-evenly;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		gap: 20px;
		place-items: center;

		@media (max-width: 900px) {
			width: 95vw;
			gap: 10px;
		}

		@media (max-width: 760px) {
			width: 100vw;
			gap: 5px;
		}
	}
`;

export const Container = styled.div`
	width: 90vw;
	background: transparent linear-gradient(180deg, #64238b 0%, #601094 100%) 0%
		0% no-repeat padding-box;
	border-radius: 25px;
	margin: auto;
	margin-top: 115px;
	height: 100vh;
`;

export const ContainerButtonsHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;

	@media (max-width: 760px) {
		justify-content: center;
	}
	div {
		position: relative;
		display: flex;
		gap: 20px;
		padding-right: 50px;

		@media (max-width: 1100px) {
			padding-right: 40px;
		}
		@media (max-width: 960px) {
			padding-right: 40px;
		}
		@media (max-width: 760px) {
			padding-right: 30px;
			gap: 10px;
			/* Mudar Icon */
		}
	}

	button {
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
	}
`;

export const ReportSession = styled.div`
	margin: auto;
	margin-top: 30px;
	width: 80%;
	h2 {
		color: white;
		font-family: 'NexaHeavy';
		font-size: 2.2rem;
		font-weight: 500;
		color: #7690e2;
	}

	> div {
		margin-top: 30px;
		height: 70vh;
		border: 3px solid #7690e2;
		border-radius: 25px;
	}
`;
