// Firestore data converter
const exerciseConverter = {
	toFirestore: (exercise) => {
		return {
			id: ExerciseClass.lastId++,
			name: exercise.name,
			sets: exercise.sets,
			reps: exercise.reps,
			load: exercise.load,
		};
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		return new Exercise(data.name, data.sets, data.reps, data.load);
	},
};
export default exerciseConverter;
