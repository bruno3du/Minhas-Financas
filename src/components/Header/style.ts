/** @format */

import styled from 'styled-components';

type HeaderHomeProps = {
	isHeaderHome?: boolean;
};

export const Header = styled.header<HeaderHomeProps>`
	padding: 30px 70px;
	font-family: 'NexaBook', sans-serif;
	color: ${(props) => (props.isHeaderHome ? '#6a1b9a' : '#C2CAF9')};
	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;
	flex-flow: wrap;
	/* Set Padding */

	button {
		font-family: 'NexaBook', sans-serif;
		color: ${(props) => (props.isHeaderHome ? '#6a1b9a' : '#C2CAF9')};
		background-color: transparent;
		border: none;
	}
	@media (max-width: 1100px) {
		padding: 20px 60px;
	}

	@media (max-width: 630px) {
		padding: 10px 30px;
	}

	/* Fonte */
	h1 {
		font-size: 2.5rem;
		font-weight: 400;
	}
	button {
		font-size: 1.2rem;
		cursor: pointer;
	}

	@media (max-width: 1100px) {
		h1 {
			font-size: 2.1rem;
		}
	}

	@media (max-width: 800px) {
		h1 {
			font-size: 2rem;
		}
		button {
			font-size: 1rem;
		}
	}

	@media (max-width: 630px) {
		h1 {
			font-size: 1.8rem;
		}
		button {
			font-size: 1rem;
		}
	}
`;
