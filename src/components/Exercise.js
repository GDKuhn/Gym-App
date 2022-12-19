import React, { useState } from "react";
import "../App.css";
import ExerciseCard from "./ExerciseCard";
import ExerciseForm from "./ExerciseForm";
import ExerciseClass from "../Classes/ExerciseClass";

export default function Exercise() {
	const [exercises, setExercises] = useState([]);

	function onAddExercise(inputs) {
		let newExercise = new ExerciseClass(
			//
			inputs.id,
			inputs.name,
			inputs.sets,
			inputs.reps,
			inputs.load
		);
		console.log(newExercise);

		setExercises([...exercises, newExercise]);
	}

	return (
		<div>
			<ExerciseForm onAddExercise={onAddExercise} />
			<ExerciseCard exercises={exercises} />
		</div>
	);
}
