/** @format */

import { FormEvent } from 'react';
import { Form, Title } from './style';

interface FormProps {
	title: string;
}

export default function Index({ title }: FormProps) {
	function handleSubmit(event: FormEvent) {
		event.preventDefault();
	}
	return (
		<div>
			<Title>{title}</Title>
			<Form onSubmit={handleSubmit}>
				<div>
					<div>
						<label htmlFor='descricao'>Descrição</label>
						<input id='descricao' type='text' placeholder='Sua descrição' />
					</div>
					<div>
						<label htmlFor='valor'>Valor</label>
						<input id='valor' type='text' placeholder='Valor' />
					</div>
					<div>
						<label htmlFor='data'>Data</label>
						<input id='data' type='date' placeholder='Data' />
					</div>
				</div>
				<div className='button'>
					<button type='submit'>Enviar</button>
				</div>
			</Form>
		</div>
	);
}
