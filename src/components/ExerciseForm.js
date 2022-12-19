import React, { useState } from "react";

export default function ExerciseForm(props) {
	const [inputs, setInputs] = useState({
		//
		id: "",
		name: "",
		sets: "",
		reps: "",
		load: "",
	});

	//FETCH INPUT VALUES FROM FORM => ADD THEM TO INPUTS
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

	//PASS INPUTS TO EXERCISE AND RESET VALUES
	function addExercise(event) {
		event.preventDefault();
		props.onAddExercise(inputs);
		setInputs({
			//
			id: "",
			name: "",
			sets: "",
			reps: "",
			load: "",
		});
	}

	//FORM INTEFACE
	return (
		<form className="inputsForm">
			<input id="exerciseName" className="exerciseInput" type="text" placeholder="EXERCISE" value={inputs.name} onChange={setNameInput} />
			<input id="exerciseSets" className="exerciseInput" type="number" placeholder="SETS" value={inputs.sets} onChange={setSetsInput} />
			<input id="exerciseReps" className="exerciseInput" type="number" placeholder="REPS" value={inputs.reps} onChange={setRepsInput} />
			<input id="exerciseLoad" className="exerciseInput" type="number" placeholder="Kg" value={inputs.load} onChange={setLoadInput} />
			<button onClick={addExercise}>Add</button>
		</form>
	);
}
