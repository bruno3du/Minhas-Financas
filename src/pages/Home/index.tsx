/** @format */

import Header from '../../components/Header';
import { BackgroundHome, HomeBody, HomeFooter } from './style';

export default function Index() {
	return (
		<BackgroundHome>
			<Header isHeaderHome />
			<HomeBody>
				<h2>
					Suas Finanças <br /> em seu Controle
				</h2>
				{/* Color linhas vertical */}
				<div>
					<h2>Com a MyFinance</h2>
					<h3>É Seguro e Fácil</h3>
				</div>
			</HomeBody>
			<HomeFooter>Acesse agora mesmo, clique aqui!</HomeFooter>
		</BackgroundHome>
	);
}
