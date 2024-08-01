import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [language, setLanguage] = useState("en");
	const [theme, setTheme] = useState("light");

	const changeLanguage = (lang) => {
		setLanguage(lang);
	};

	const changeTheme = (them) => {
		setTheme(them);
	};

	return (
		<AuthContext.Provider
			value={{ language, changeLanguage, theme, changeTheme }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useLangTheme = () => useContext(AuthContext);
