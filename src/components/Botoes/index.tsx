/** @format */

import { ReactNode } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { Buttons } from './style';

interface ButtonProps {
	children: ReactNode;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setCloseOther: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Index({
	children,
	isOpen,
	setIsOpen,
	setCloseOther,
}: ButtonProps) {
	return (
		<Buttons
			isOpen={isOpen}
			onClick={() => {
				setIsOpen(!isOpen);
				setCloseOther(false);
			}}>
			<div>
				{isOpen ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
				{children}
			</div>
		</Buttons>
	);
}
