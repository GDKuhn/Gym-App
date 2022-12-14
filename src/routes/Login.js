import React from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
	return (
		<div className="page">
			<h1>Login</h1>

			<div>
				<input type="email"></input>
				<input type="password"></input>
				<Link to="/home">Acessar</Link>
			</div>
		</div>
	);
}
