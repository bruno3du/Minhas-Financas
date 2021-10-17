/** @format */

import styled from 'styled-components';

export const Card = styled.div`
	font-family: 'NexaHeavy';
	border: 2px solid #8c5baa;
	background-color: #692692;
	border-radius: 10px;
	padding: 14px 30px 14px;
	width: 100%;
	text-align: end;
	/* padding card */
	@media (max-width: 1100px) {
		padding: 12px 25px 12px;
	}

	h4 {
		color: #7690e2;
		font-size: 1.4rem;
	}
	p {
		font-size: 2.1rem;
		color: #c2caf9;
	}

	@media (max-width: 1100px) {
		h4 {
			font-size: 1.3rem;
		}
		p {
			font-size: 1.9rem;
		}
	}

	@media (max-width: 930px) {
		h4 {
			font-size: 1rem;
		}
		p {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 800px) {
		h4 {
			font-size: 0.8rem;
		}
		p {
			font-size: 1.3rem;
		}
	}
`;
