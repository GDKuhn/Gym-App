import React from "react";
import { Link } from "react-router-dom";

export default function Workout() {
	return (
		<div>
			<Link to="/Home">Home</Link>
			<h1>Workout Name</h1>
			<Exercise></Exercise>
		</div>
	);
}
