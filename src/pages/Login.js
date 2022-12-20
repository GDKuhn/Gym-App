import React from "react";
import UserLogin from "../components/Login/UserLogin";
import AuthButton from "../components/Login/AuthButton";

export default function Login(props) {
	return (
		<div>
			<UserLogin />
			<AuthButton />
		</div>
	);
}
