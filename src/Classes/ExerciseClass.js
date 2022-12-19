class ExerciseClass {
	static lastId = 0;

	constructor(id, name, sets, reps, load) {
		this.id = ExerciseClass.lastId++;
		this.name = name;
		this.sets = sets;
		this.reps = reps;
		this.load = load;
	}
}

export default ExerciseClass;
