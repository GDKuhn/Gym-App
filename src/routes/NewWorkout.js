import React from "react";
import { Link } from "react-router-dom";

import Exercise from "../components/Exercise";

export default function NewWorkout(props) {
	return (
		<div className="page">
			<Link to="/Home">Home</Link>
			<h1>NewWorkout</h1>
			<Exercise></Exercise>
		</div>
	);
}
