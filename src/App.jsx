import "./App.css";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Project from "./components/project/Project";

import Newsscraper from "./routes/News";
import Budget from "./routes/Budget";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/erichsu.github.io/" element={<Home />} />
				<Route path="/erichsu.github.io/about" element={<About />} />
				<Route
					path="/erichsu.github.io/project"
					element={<Project />}
				/>
				<Route
					path="/erichsu.github.io/newsscraper"
					element={<Newsscraper />}
				/>
				<Route
					path="/erichsu.github.io/budgettracker"
					element={<Budget />}
				/>
			</Routes>
		</>
	);
}

export default App;
