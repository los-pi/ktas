import { FC } from "react";
import Login from "./views/auth/login";
import "./styles.scss";

const App: FC = () => {
	return (
		<div className="app">
			<Login />
		</div>
	);
};

export default App;
