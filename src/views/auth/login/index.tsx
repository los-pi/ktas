import { FC } from "react";
import LoginForm from "components/auth/login-form";
import "./styles.scss";

const Login: FC = () => {
	const onSubmit = (user: any) => {
		console.log(user);
	};

	return (
		<div className="login-view">
			<header>
				<h1 className="login-view__title">bievenidx a coso</h1>
				<small className="login-view__subtitle">texto de relleno desde 1810</small> <br />
			</header>

			<div className="divider" />

			<main>
				<LoginForm onSubmit={onSubmit} />
			</main>
		</div>
	);
};

export default Login;
