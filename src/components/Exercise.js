import React, { useEffect, useState } from "react";
import moment from "moment/moment";

import "../App.css";
import ExerciseCard from "./ExerciseCard";
import ExerciseForm from "./ExerciseForm";

import db from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function Exercise() {
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
	//ADD  EXERCISE TO EXERCISELOG COLLECTION
	const userCollectionRef = collection(
		db,
		"users/jj6ofOKONYN0CknPD7f7/exerciseLog"
	);
	async function onAddExercise(inputs) {
		try {
			var date = moment().format("DD/MM/YYYY") + " " + moment().format("LTS");
			await addDoc(
				userCollectionRef,
				{
					name: inputs.name,
					sets: Number(inputs.sets),
					reps: Number(inputs.reps),
					load: Number(inputs.load),
					date: date,
				},
				{ merge: true }
			);
			console.log("Exercise Added");
		} catch (error) {
			console.log(error);
		}
	}

	//
	//ADD USERS TO USERS COLLECTION
	const usersCollectionRef = collection(db, "users");
	async function onAddUser() {
		try {
			await addDoc(usersCollectionRef, {
				name: "Rafael Pezzi",
				age: 27,
				weight: 78,
			});
			console.log("User Added");
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			<ExerciseForm onAddUser={onAddUser} onAddExercise={onAddExercise} />

			<ExerciseCard exercises={exercises} />
		</div>
	);
}
