import React from "react";

import NavbarComp from "./../template/NavbarComp";
import Footer from "./../template/Footer";
import ProjectContent from "./ProjectContent";

const Project = () => {
	return (
		<>
			<div>
				<NavbarComp />
				<ProjectContent />
				<Footer />
			</div>
		</>
	);
};

export default Project;
