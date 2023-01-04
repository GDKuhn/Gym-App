import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../../actions/loginActions";
import "./LoginStyle.css";

function initialState() {
	return { username: "", password: "" };
}
export default function LoginForm(props) {
	// HANDLE LOGIN
	const [values, setValues] = useState(initialState);
	function onChange(event) {
		const { value, name } = event.target;
		setValues({
			...values,
			[name]: value,
		});
	}

	// HANDLE AUTHORIZATION
	const login = useSelector((state) => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleAuth(event) {
		event.preventDefault();
		let username = values.username;
		let password = values.password;

		if (username && password === "admin") {
			dispatch(loginAction());
			console.log(login.type);
			navigate("/Home");
		} else {
			console.log("Access Denied");
			alert("Access Denied");
		}
	}

	const [isSignInFormActive, setisSignInFormActive] = useState(true);

	const signInBtn = () => {
		setisSignInFormActive(true);
	};
	const signUpBtn = () => {
		setisSignInFormActive(false);
	};

	return (
		<div className="container">
			<div className={`${isSignInFormActive ? " frame" : "frame long"}`}>
				<div className="nav">
					<ul className="links">
						<li
							className={`${
								isSignInFormActive ? " signin-active" : "signin-inactive"
							}`}>
							<button className="btn" onClick={signInBtn}>
								Sign in
							</button>
						</li>
						<li
							className={`${
								isSignInFormActive ? "signup-inactive" : "signup-active"
							}`}>
							<button className="btn" onClick={signUpBtn}>
								Sign up
							</button>
						</li>
					</ul>
				</div>

				<div>
					{/* SIGN IN FORM */}
					<form
						className={`${
							isSignInFormActive
								? "form-signin-active"
								: " form-signin-inactive "
						}`}
						action=""
						name="form">
						<label className="label-inputs" htmlFor="username">
							Username
						</label>
						<input
							id="username"
							className="form-styling"
							type="text"
							name="username"
							onChange={onChange}
							value={values.username}
						/>
						<label htmlFor="password">Password</label>
						<input
							id="password"
							className="form-styling"
							type="password"
							name="password"
							onChange={onChange}
							value={values.password}
						/>
						<input type="checkbox" id="checkbox" />
						<label htmlFor="checkbox">
							<span className="ui"></span>Keep me signed in
						</label>

						<button className="btn-signin" onClick={handleAuth}>
							Sign in
						</button>
					</form>
					{/* SIGN UP FOR */}
					<form
						className={`${
							isSignInFormActive
								? " form-signup-inactive "
								: "form-signup-active"
						}`}
						action=""
						name="form">
						<label htmlFor="fullname">Full name</label>
						<input
							className="form-styling"
							type="text"
							name="fullname"
							placeholder=""
						/>
						<label htmlFor="email">Email</label>
						<input
							className="form-styling"
							type="text"
							name="email"
							placeholder=""
						/>
						<label htmlFor="password">Password</label>
						<input
							className="form-styling"
							type="text"
							name="password"
							placeholder=""
						/>
						<label htmlFor="confirmpassword">Confirm password</label>
						<input
							className="form-styling"
							type="text"
							name="confirmpassword"
							placeholder=""
						/>
						<button ng-click="checked = !checked" className="btn-signup">
							Sign Up
						</button>
					</form>
					<div
						className={`${
							isSignInFormActive ? " forgot-active" : "forgot-inactive"
						}`}>
						<button href="#">Forgot your password?</button>
					</div>
					{/* SUCCESS ON SIGN UP */}

					<div className="success">
						<div className="successtext">
							<p>
								Thanks for signing up! Check your email htmlFor confirmation.
							</p>
						</div>
					</div>
				</div>

				{/* SUCCESS ON SIGN IN */}
				<div className="success-signin">
					<div className="cover-photo"></div>
					<div className="profile-photo"></div>
					<h1 className="welcome">Welcome, Chris</h1>
				</div>
			</div>
		</div>
	);
}
