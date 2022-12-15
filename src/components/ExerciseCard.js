import React from "react";

export default function ExerciseCard(props) {
	return (
		<div>
			<ul>
				{props.exercises.map((exercise) => (
					<li key={exercise.id}>
						<div>{exercise.name}</div>
						<div>
							{exercise.load} Kgs x {exercise.reps} / {exercise.sets}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
