import "./App.css";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Project from "./components/project/Project";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				{/* <Route path="/about" element={<About />}></Route>
				<Route path="/project" element={<Project />}></Route> */}
			</Routes>
		</>
	);
}

export default App;
