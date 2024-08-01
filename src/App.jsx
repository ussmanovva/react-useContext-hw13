import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import { useLangTheme } from "./components/store/AuthProvider";

const App = () => {
	const { theme } = useLangTheme();
	return (
		<ContainerApp theme={theme}>
			<Header />
			<Main />
		</ContainerApp>
	);
};

export default App;

const ContainerApp = styled.div`
	max-width: 1200px;
	min-height: 530px;

	margin: 0 auto;
	padding: 20px; 

	border-radius: 15px;
	background-color: ${(props) => (props.theme === "light" ? "#eeb85e" : "#3a3536")};
`;
