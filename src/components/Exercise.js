import React, { useState } from "react";

export default function Exercise() {
	const exerciseNameElement = document.getElementById("exerciseName");

	const [exercise, setExercise] = useState({
		//
		name: "",
		sets: "",
		reps: "",
		load: "",
	});

	// function showInputs(event) {
	// 	let exerciseNameInput = event.target.value;
	// 	setExerciseName(exerciseNameInput);
	// }

	return (
		<div>
			<div>
				<input id="exerciseName" type="text" placeholder="EXERCISE" value={exercise.name} onChange={(e) => setExercise({ ...exercise, name: e.target.value })} />
				<br />
				<input id="exerciseSets" type="number" placeholder="SETS" value={exercise.sets} onChange={(e) => setExercise({ ...exercise, sets: e.target.value })} />

				<br />
				<input id="exerciseReps" type="number" placeholder="REPS" value={exercise.reps} onChange={(e) => setExercise({ ...exercise, reps: e.target.value })} />
				<br />
				<input id="exerciseLoad" type="number" placeholder="Kg" value={exercise.load} onChange={(e) => setExercise({ ...exercise, load: e.target.value })} />
				<br />
				{/* <button onClick={addInputs}>SAVE</button> */}
			</div>
			<div id="exerciseConsolidation">
				<div>Exercise Name: {exercise.name}</div>
				<div>SETS: {exercise.sets}</div>
				<div>REPS: {exercise.reps}</div>
				<div>LOAD: {exercise.load}</div>
			</div>
		</div>
	);

	// function addInputs() {
	// 	const divExerciseConsolidation = document.querySelector("#exerciseConsolidation");
	// 	createRoot(divExerciseConsolidation).render(
	// 		<div>
	// 			<h2>{exerciseName}</h2>
	// 		</div>
	// 	);
	// }
}
