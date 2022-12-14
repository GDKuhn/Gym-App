import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./routes/Login";
import Home from "./routes/Home";
import WorkoutHistory from "./routes/WorkoutHistory";
import StartWorkout from "./routes/StartWorkout";
import NewWorkout from "./routes/NewWorkout";
import Folders from "./routes/Folders";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/Home" element={<Home />} />
					<Route path="/WorkoutHistory" element={<WorkoutHistory />} />
					<Route path="/StartWorkout" element={<StartWorkout />} />
					<Route path="/NewWorkout" element={<NewWorkout />} />
					<Route path="/Folders" element={<Folders />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
