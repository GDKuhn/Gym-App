import React from "react";
import { Link } from "react-router-dom";

export default function Negado() {
	return (
		<div>
			<h1>ACESSO NEGADO</h1>
			<Link to="/">Return to LOGIN</Link>
		</div>
	);
}
