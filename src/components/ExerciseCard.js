import React, { useState } from "react";
import db from "../firebase-config";
import { updateDoc, doc } from "firebase/firestore";

import UpdateExerciseFrom from "./UpdateExerciseFrom";

export default function ExerciseCard(props) {
	const [exerciseID, setExerciseId] = useState("");

	function onUpdateExercise(updatedInputs) {
		const exerciseIDRef = exerciseID;
		const userIDRef = "jj6ofOKONYN0CknPD7f7";
		const exerciseDoc = doc(
			db,
			"users/" + userIDRef + "/exerciseLog",
			exerciseIDRef
		);

		const updateExerciseInputs = {
			name: updatedInputs.name,
			sets: Number(updatedInputs.sets),
			reps: Number(updatedInputs.reps),
			load: Number(updatedInputs.load),
		};
		updateDoc(exerciseDoc, updateExerciseInputs).then((exerciseDoc) => {
			console.log("EXERCISE UPDATED");
		});
	}

	return (
		<div>
			<div id="UpdateExerciseFrom" className="hide">
				<UpdateExerciseFrom onUpdateExercise={onUpdateExercise} />
			</div>
			{props.exercises.map((exercise) => {
				function editExercise() {
					setExerciseId(exercise.id);

					const UpdateExerciseFrom = document.querySelector(
						"#UpdateExerciseFrom"
					);
					UpdateExerciseFrom.classList.remove("hide");
					UpdateExerciseFrom.classList.add("show");
				}
				return (
					<div>
						<ul>
							<li key={exercise.id}>
								<h2>{exercise.name}</h2>
								<p>
									{exercise.load} x {exercise.reps} / {exercise.sets}
								</p>

								<button onClick={editExercise}>EDIT</button>
							</li>
						</ul>
						<br />
					</div>
				);
			})}
		</div>
	);
}
