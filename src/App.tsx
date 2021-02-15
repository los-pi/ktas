import { FC } from "react";
import Login from "./views/auth/login";

const App: FC = () => {
	return (
		<div className="app">
			<header className="app-header">
				<img className="app-logo" alt="logo" />
				<p></p>
				<a className="app-link" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
			<div>
				<Login />
			</div>
		</div>
	);
};

export default App;
