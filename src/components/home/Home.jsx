import React, { useState, useEffect } from "react";

import "./../css/styles.css";
import "./scripts.js";

import NavbarComp from "./../template/NavbarComp";
import Wallpaper from "./Wallpaper";
import Footer from "./../template/Footer";

const Home = () => {
	return (
		<>
			<div>
				<NavbarComp />
				<Wallpaper />
				<Footer />
			</div>
		</>
	);
};

export default Home;
