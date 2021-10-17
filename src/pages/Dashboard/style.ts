/** @format */

import styled from 'styled-components';

export const BackgroundIn = styled.div`
	height: 100vh;
	background: transparent
		linear-gradient(180deg, #4e1272 0%, #66258e 55%, #234d81e3 100%) 0% 0%
		no-repeat padding-box;

	> div {
		height: 12rem;
		max-width: 90vw;
		margin: auto;
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fill, minmax(15rem, 20rem));
		gap: 20px;
	}
`;
