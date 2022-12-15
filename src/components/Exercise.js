import React, { useState } from "react";
import "../App.css";
import ExerciseCard from "./ExerciseCard";

export default function Exercise() {
	const [inputs, setInputs] = useState({
		//
		id: "",
		name: "",
		sets: "",
		reps: "",
		load: "",
	});

	//GRABBING INPUT VALUES AND PUTTING INTO INPUTS
	function setNameInput() {
		const exerciseNameInput = document.querySelector("#exerciseName");
		let exerciseName = exerciseNameInput.value;
		setInputs({ ...inputs, name: exerciseName });
	}
	function setSetsInput() {
		const exerciseSetsInput = document.querySelector("#exerciseSets");
		let exerciseSets = exerciseSetsInput.value;
		setInputs({ ...inputs, sets: exerciseSets });
	}
	function setRepsInput() {
		const exerciseRepsInput = document.querySelector("#exerciseReps");
		let exerciseReps = exerciseRepsInput.value;
		setInputs({ ...inputs, reps: exerciseReps });
	}
	function setLoadInput() {
		const exerciseLoadInput = document.querySelector("#exerciseLoad");
		let exerciseLoad = exerciseLoadInput.value;
		setInputs({ ...inputs, load: exerciseLoad });
	}

	//PUTTING INPUTS INTO EXERCISES
	const [exercises, setExercises] = useState([]);

	function addExercise(event) {
		event.preventDefault();
		if (inputs) {
			setExercises([...exercises, inputs]);
			// setInputs({});
		}
	}

	//USER INTERFACE - INPUTS AND ADD BUTTON
	return (
		<div>
			<div className="inputsContainer">
				<input id="exerciseName" className="exerciseInput" type="text" placeholder="EXERCISE" value={inputs.name} onChange={setNameInput} />
				<input id="exerciseSets" className="exerciseInput" type="number" placeholder="SETS" value={inputs.sets} onChange={setSetsInput} />
				<input id="exerciseReps" className="exerciseInput" type="number" placeholder="REPS" value={inputs.reps} onChange={setRepsInput} />
				<input id="exerciseLoad" className="exerciseInput" type="number" placeholder="Kg" value={inputs.load} onChange={setLoadInput} />
				<button onClick={addExercise}>Add</button>
			</div>

			<div>
				<ExerciseCard exercises={exercises}></ExerciseCard>
			</div>
		</div>
	);

	function ExerciseForm() {}
}
