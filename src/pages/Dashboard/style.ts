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
	padding-bottom: 30px;
`;

export const ContainerButtonsHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;

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
		}
		@media (max-width: 450px) {
			padding-right: 0px;
			gap: 0px;
			width: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
`;

export const ReportSession = styled.div`
	margin: auto;
	margin-top: 30px;
	width: 80%;
	h2 {
		color: white;
		font-family: 'NexaHeavy', sans-serif;
		font-size: 2.2rem;
		font-weight: 500;
		color: #7690e2;
	}

	> div {
		margin-top: 30px;
		border-radius: 25px;
	}

	@media (max-width: 700px) {
		width: 95%;
	}
`;
