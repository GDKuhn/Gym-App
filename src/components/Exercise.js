import React, { useState } from "react";
import "../App.css";
import ExerciseCard from "./ExerciseCard";
import ExerciseForm from "./ExerciseForm";
import ExerciseClass from "../Classes/ExerciseClass";
import db from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";

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
		console.log(exercises);
	}

	//ADD USERS TO USERS COLLECTION
	const usersCollectionRef = collection(db, "users");
	async function onAddUser() {
		try {
			const newUserData = await addDoc(usersCollectionRef, {
				name: "Guilherme Kuhn",
				age: 27,
				weight: 95,
			});
			console.log(`${newUserData.path}`);
		} catch (error) {
			console.log(error);
		}
	}

	//ADD EXERCISELOG TO USER COLLECTION

	const userCollectionRef = collection(
		db,
		"users/jj6ofOKONYN0CknPD7f7/exerciseLog"
	);
	async function onAddExerciseTest(inputs) {
		try {
			const newExercise = await addDoc(
				userCollectionRef,
				{
					name: inputs.name,
					sets: inputs.sets,
					reps: inputs.reps,
					load: inputs.load,
					date: Date.now(),
				},
				{ merge: true }
			);
			console.log(`${newExercise.path}`);
		} catch (error) {
			console.log(error);
		}
	}
	// const newExerciseID = "Exercise" + "input" + Date.now();

	return (
		<div>
			<ExerciseForm
				onAddExercise={onAddExercise}
				onAddUser={onAddUser}
				onAddExerciseTest={onAddExerciseTest}
			/>
			<ExerciseCard exercises={exercises} />
		</div>
	);
}
