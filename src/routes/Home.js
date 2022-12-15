import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
	return (
		<div className="page">
			<h1>Home</h1>
			<Link to="/WorkoutHistory">Workout History</Link>
			<br></br>
			<Link to="/StartWorkout">Start Workout</Link>
		</div>
	);
}
