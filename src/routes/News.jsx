import React from "react";

import NavbarComp from "../components/template/NavbarComp";
import Footer from "../components/template/Footer";
import Newsscraper from "../components/newsscraper/Newsscraper";

const News = () => {
	return (
		<>
			<NavbarComp />
			<Newsscraper />
			<Footer />
		</>
	);
};

export default News;
