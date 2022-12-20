import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { legacy_createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import Login from "./pages/Login";
import Home from "./pages/Home";
import WorkoutHistory from "./pages/WorkoutHistory";
import StartWorkout from "./pages/StartWorkout";
import NewWorkout from "./pages/NewWorkout";
import Folders from "./pages/Folders";
import Negado from "./pages/Negado";

import PrivateRoutes from "./components/Login/PrivateRoutes";
import loginReducer from "./reducer/loginReducer";
const store = legacy_createStore(loginReducer);

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="App">
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/Negado" element={<Negado />} />
						<Route element={<PrivateRoutes />}>
							<Route path="/Home" element={<Home />} />
							<Route path="/WorkoutHistory" element={<WorkoutHistory />} />
							<Route path="/StartWorkout" element={<StartWorkout />} />
							<Route path="/NewWorkout" element={<NewWorkout />} />
							<Route path="/Folders" element={<Folders />} />
						</Route>
					</Routes>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
