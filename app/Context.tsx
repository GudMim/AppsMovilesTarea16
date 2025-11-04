import React, { createContext, useState, ReactNode } from 'react';

type MyContextType = {
	loginData: any;
	setLoginData: (d: any) => void;
};

export const MyContext = createContext<MyContextType>({
	loginData: {},
	setLoginData: () => {},
});

export const MyContextProvider = ({children}:{children:ReactNode})=>{
	const [loginData, setLoginData]=useState<any>({});

	return (
		<MyContext.Provider value={{loginData, setLoginData}}>
			{children}
		</MyContext.Provider>
	);
};