import React from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
	return (
		<div className="page">
			<h1>Login</h1>

			<div>
				<input type="email" placeholder="E-mail"></input>
				<br></br>
				<input type="password" placeholder="Password"></input>
				<br></br>
				<Link to="/home">Acessar</Link>
			</div>
		</div>
	);
}
