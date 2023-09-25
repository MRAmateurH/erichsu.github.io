import "./App.css";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Newsscraper from "./routes/News";

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
			</Routes>
		</>
	);
}

export default App;
