/** @format */

import styled from 'styled-components';

export const Title = styled.h1`
	font-family: 'NexaHeavy', sans-serif;
	width: 80%;
	margin: auto;
	color: #7690e2;
	font-weight: 500;
`;

export const Form = styled.form`
	> div {
		width: 90%;
		margin: auto;
		margin-top: 40px;
		margin-bottom: 60px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 15px;

		div {
			font-family: 'NexaBook', sans-serif;
			display: flex;
			align-items: center;
			gap: 15px;

			label {
				color: #c2caf9;
			}

			input {
				font-family: 'NexaBook', sans-serif;
				background-color: #c2caf9;
				border: 2px solid #7690e2;
				height: 36px;
				border-radius: 10px;
				padding-left: 5px;
				color: #581c7d;
				min-width: 70%;

				&::placeholder {
					color: #7690e2;
				}
			}
		}
	}
	.button {
		width: 100%;
		display: flex;
		justify-content: center;
		button {
      font-family: 'NexaHeavy', sans-serif;
			background-color: #C2CAF9;
			color: #8c5baa;
			border: none;
			border-radius: 10px;
			padding: 10px 40px;
			box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
		}

	}
`;
