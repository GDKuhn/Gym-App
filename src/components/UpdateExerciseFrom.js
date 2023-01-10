import React, { useState } from "react";
import { inputs } from "./ExerciseForm";

function UpdateExerciseFrom(props) {
	//
	//SET UPDATED INPUTS
	const [updatedInputs, setUpdatedInputs] = useState({
		//
		name: "",
		sets: "",
		reps: "",
		load: "",
	});

	//FETCH UPDATED INPUT VALUES FROM FORM => ADD THEM TO UPDATEDINPUTS
	function setUpdateNameInput() {
		const updateExerciseNameInput = document.querySelector(
			"#updateExerciseName"
		);
		let updatedExerciseName = updateExerciseNameInput.value;
		setUpdatedInputs({ ...updatedInputs, name: updatedExerciseName });
	}
	function setUpdateSetsInput() {
		const updateExerciseSetsInput = document.querySelector(
			"#updateExerciseSets"
		);
		let updatedExerciseSets = updateExerciseSetsInput.value;
		setUpdatedInputs({ ...updatedInputs, sets: updatedExerciseSets });
	}
	function setUpdateRepsInput() {
		const updateExerciseRepsInput = document.querySelector(
			"#updateExerciseReps"
		);
		let updatedExerciseReps = updateExerciseRepsInput.value;
		setUpdatedInputs({ ...updatedInputs, reps: updatedExerciseReps });
	}
	function setUpdateLoadInput() {
		const updateExerciseLoadInput = document.querySelector(
			"#updateExerciseLoad"
		);
		let updatedExerciseLoad = updateExerciseLoadInput.value;
		setUpdatedInputs({ ...updatedInputs, load: updatedExerciseLoad });
	}

	//PASS INPUTS TO EXERCISE.JS AND RESET VALUES
	function updateExercise(event) {
		event.preventDefault();
		props.onUpdateExercise(updatedInputs);
		setUpdatedInputs({
			//
			id: "",
			name: "",
			sets: "",
			reps: "",
			load: "",
		});
	}

	return (
		<div>
			{/* UPDATE FORM */}
			<form className="updateInputsForm ">
				<input
					id="updateExerciseName"
					className="exerciseInput"
					type="text"
					placeholder="EXERCISE"
					value={updatedInputs.name}
					onChange={setUpdateNameInput}
				/>
				<input
					id="updateExerciseSets"
					className="exerciseInput"
					type="number"
					placeholder="SETS"
					value={updatedInputs.sets}
					onChange={setUpdateSetsInput}
				/>
				<input
					id="updateExerciseReps"
					className="exerciseInput"
					type="number"
					placeholder="REPS"
					value={updatedInputs.reps}
					onChange={setUpdateRepsInput}
				/>
				<input
					id="updateExerciseLoad"
					className="exerciseInput"
					type="number"
					placeholder="Kg"
					value={updatedInputs.load}
					onChange={setUpdateLoadInput}
				/>
			</form>
			<button onClick={updateExercise}>Update Exercise!!</button>
		</div>
	);
}

export default UpdateExerciseFrom;
