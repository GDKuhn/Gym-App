import React, { useState, useEffect } from "react";
import db from "../firebase-config";
import {
	collection,
	getDocs,
	updateDoc,
	deleteDoc,
	doc,
} from "firebase/firestore";

import UpdateExerciseFrom from "./UpdateExerciseFrom";

export default function ExerciseCard(props) {
	//
	//GET EXERCISES FROM EXERCISELOG
	const [exercises, setExercises] = useState([]);

	useEffect((props) => {
		const exerciseLogCollectionRef = collection(
			db,
			"users/jj6ofOKONYN0CknPD7f7/exerciseLog"
		);
		const getExercise = async () => {
			const data = await getDocs(exerciseLogCollectionRef);

			setExercises(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getExercise();
	}, []);

	//
	//GET ID FROM EXERCISE.MAP AND UPDATE EXERCISE
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
	//
	//DELETE EXERCISE
	async function deleteExercise(id) {
		const exerciseIDRef = id;
		const userIDRef = "jj6ofOKONYN0CknPD7f7";
		const exerciseDoc = doc(
			db,
			"users/" + userIDRef + "/exerciseLog/" + exerciseIDRef
		);
		await deleteDoc(exerciseDoc);
		console.log("EXERCISE DELETED");
	}

	//
	//MAPPING EXERCISES
	return (
		<div>
			<div id="UpdateExerciseFrom" className="hide">
				<UpdateExerciseFrom onUpdateExercise={onUpdateExercise} />
			</div>
			{exercises.map((exercise) => {
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
									{exercise.load}Kg x {exercise.reps} / {exercise.sets}
								</p>

								<button onClick={editExercise}>EDIT</button>
								<button
									onClick={() => {
										deleteExercise(exercise.id);
									}}>
									DELETE
								</button>
							</li>
						</ul>
						<br />
					</div>
				);
			})}
		</div>
	);
}
