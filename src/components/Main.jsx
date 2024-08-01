// Main.jsx
import React from "react";
import styled from "styled-components";
import { textArray } from "./utils/data";
import { Title } from "./Header";
import { useLangTheme } from "./store/AuthProvider";

const Main = () => {
	const { language } = useLangTheme();

	return (
		<MainStyled>
			<ul>
				{textArray[language].map((item, index) => (
					<LiStyled key={index}>{item.text}</LiStyled>
				))}
			</ul>
		</MainStyled>
	);
};

export default Main;

const MainStyled = styled.div`
	height: 370px;

	margin: 10px 0;
	padding: 10px 5px;

	border-radius: 5px;
	background-color: aliceblue;
`;

const LiStyled = styled.li`
	margin: 15px 0;
	padding: 7px 0;

	list-style: none;
`;
