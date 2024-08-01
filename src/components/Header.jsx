import styled, { css } from "styled-components";
import { useLangTheme } from "./store/AuthProvider";
import { titleArray } from "./utils/data";

const Header = () => {
	const { changeLanguage, changeTheme, theme, language } = useLangTheme();

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "night" : "light";
		changeTheme(newTheme);
	};
	return (
		<HeaderContainer>
			<Title>{titleArray[language]}</Title>
			<NavDiv>
				<NavLang onClick={() => changeLanguage("en")}>English</NavLang>
				<NavLang onClick={() => changeLanguage("ru")}>Русский</NavLang>
				<NavLang onClick={() => changeLanguage("kg")}>Кыргызча</NavLang>
				<NavLang onClick={toggleTheme}>
					{theme === "light" ? "night" : "light"}
				</NavLang>
			</NavDiv>
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.header`
	padding: 25px;

	border-radius: 5px;
	color: white;

	display: flex;
	background-color: #6256e43e;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.h2`
	margin: 0;
`;

const NavDiv = styled.div`
	margin: 0;
	padding: 0;

	display: flex;
	gap: 10px;
`;

const NavLang = styled.button`
	width: 110px;
	padding: 20px;
	border: none;
	border-radius: 5px;

	cursor: pointer;
`;
