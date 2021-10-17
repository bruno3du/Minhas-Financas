/** @format */

import styled, { keyframes } from 'styled-components';

const bright = keyframes`
  from {
    color: transparent;
  }

  to {
    color: #fff;
  }
`;

const moving = keyframes`
 from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-20%);
  }
`;

export const BackgroundHome = styled.body`
	height: 100vh;
	color: var(--color);
	background: transparent
		linear-gradient(
			180deg,
			#d3e5fbe3 0%,
			#d1e3f9e7 0%,
			#c1d7ed 74%,
			#6a1b9a 100%
		)
		0% 0% no-repeat padding-box;
	display: grid;
	grid-template: 20% 50% 30% / 1fr;
`;

export const HomeBody = styled.div`
	display: flex;
	justify-content: space-around;
	font-family: 'NexaHeavy', sans-serif;
	align-items: center;
	padding: 0 30px;

	@media (max-width: 1100px) {
		padding: 0 20px;
	}

	h2 {
		color: #6a1b9a;
		font-size: 3.8rem;
	}

	@media (max-width: 1100px) {
		h2 {
			font-size: 3rem;
		}
	}

	@media (max-width: 850px) {
		h2 {
			font-size: 2.4rem;
		}
	}

	@media (max-width: 650px) {
		h2 {
			font-size: 1.8rem;
		}
	}

	@media (max-width: 530px) {
		h2 {
			font-size: 1.5rem;
		}
	}
	/* Lado direto do HomeBody */
	> div {
		h2 {
			color: #574cc4;
			font-size: 3rem;
		}

		h3 {
			color: #9c4dcc;
			font-family: 'NexaBook', sans-serif;
			font-weight: 400;
			animation: ${moving} 2s ease-in infinite alternate-reverse;
			font-size: 3rem;
		}
	}

	@media (max-width: 1100px) {
		> div {
			h2 {
				font-size: 2.5rem;
			}
			h3 {
				font-size: 2.5rem;
			}
		}
	}

	@media (max-width: 850px) {
		> div {
			h2 {
				font-size: 2.2rem;
			}
			h3 {
				font-size: 2.2rem;
			}
		}
	}

	@media (max-width: 650px) {
		> div {
			h2 {
				font-size: 1.7rem;
			}
			h3 {
				font-size: 1.7rem;
			}
		}
	}

	@media (max-width: 530px) {
		> div {
			h2 {
				font-size: 1.4rem;
			}
			h3 {
				font-size: 1.4rem;
			}
		}
	}
`;

export const HomeFooter = styled.div`
	font-family: 'NexaBook';
	font-size: 2rem;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding-bottom: 10px;
	animation: ${bright} 2s ease-in infinite alternate-reverse;

	@media (max-width: 1100px) {
		font-size: 1.8rem;
	}

	@media (max-width: 769px) {
		font-size: 1.5rem;
	}

	@media (max-width: 530px) {
		font-size: 1rem;
	}
`;
