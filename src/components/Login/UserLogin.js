import React, { useState } from "react";
import { Link } from "react-router-dom";

function initialState() {
	return { user: "", password: "" };
}
export default function UserLogin(props) {
	const [values, setValues] = useState(initialState);

	function onChange(event) {
		const { value, name } = event.target;
		setValues({
			...values,
			[name]: value,
		});
	}

	return (
		<div className="page">
			<div className="user-login">
				<h1 className="user-login_title">Acessar a conta</h1>
				<form className="user-login_form">
					<div className="user-login_inputs">
						<label htmlFor="user"></label>
						<input
							id="user"
							type="text"
							name="user"
							placeholder="E-mail"
							onChange={onChange}
							value={values.user}
						/>
					</div>

					<div className="user-login_inputs">
						<label htmlFor="password"></label>
						<input
							id="password"
							type="password"
							name="password"
							placeholder="Password"
							onChange={onChange}
							value={values.password}
						/>
					</div>
					<button>
						<Link to="/home">Acessar</Link>
					</button>
				</form>
			</div>
		</div>
	);
}
