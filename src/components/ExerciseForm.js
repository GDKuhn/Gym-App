import React, { useState } from "react";
export default function ExerciseForm(props) {
	//
	//SET INPUTS
	const initialState = {
		id: "",
		exe: "",
		sets: "",
		reps: "",
		load: "",
	};
	const [inputs, setInputs] = useState(initialState);

	//
	//FETCH INPUT VALUES FROM FORM => ADD THEM TO INPUTS
	function onChangeName(event) {
		const { value } = event.target;
		setInputs({ ...inputs, name: value });
	}
	function onChangeSets(event) {
		const { value } = event.target;
		setInputs({ ...inputs, sets: value });
	}
	function onChangeReps(event) {
		const { value } = event.target;
		setInputs({ ...inputs, reps: value });
	}
	function onChangeLoad(event) {
		const { value } = event.target;
		setInputs({ ...inputs, load: value });
	}

	//PASS INPUTS TO EXERCISE.JS AND RESET VALUES
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
		<div>
			<form className="inputsForm">
				<input
					id="exerciseName"
					className="exerciseInput"
					name="exe"
					type="text"
					placeholder="EXERCISE"
					onChange={onChangeName}
				/>
				<input
					id="exerciseSets"
					className="exerciseInput"
					name="sets"
					type="number"
					placeholder="SETS"
					onChange={onChangeSets}
				/>
				<input
					id="exerciseReps"
					className="exerciseInput"
					name="reps"
					type="number"
					placeholder="REPS"
					onChange={onChangeReps}
				/>
				<input
					id="exerciseLoad"
					className="exerciseInput"
					name="load"
					type="number"
					placeholder="Kg"
					onChange={onChangeLoad}
				/>
				{/* <button onClick={addUser}>Add User</button> */}
				<button onClick={addExercise}>Add Exercise </button>
			</form>
		</div>
	);
}
