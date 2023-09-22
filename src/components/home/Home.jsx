import React, { useState, useEffect } from "react";

import NavbarComp from "./../template/NavbarComp";
import Footer from "./../template/Footer";
import Wallpaper from "./Wallpaper";

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
