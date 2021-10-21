/** @format */

import { createContext, useState } from 'react';

interface AuthContextData {
	isLogged: boolean;
	setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
	const [isLogged, setIsLogged] = useState(false);
	return (
		<AuthContext.Provider value={{ isLogged, setIsLogged }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
