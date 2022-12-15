import React from "react";
import { Link } from "react-router-dom";

export default function StartWorkout(props) {
	return (
		<div className="page">
			<Link to="/Home">Home</Link>
			<h1>StartWorkout</h1>
			<Link to="/Folders">Folders</Link>
			<br></br>
			<Link to="/NewWorkout">New Workout</Link>
		</div>
	);
}
