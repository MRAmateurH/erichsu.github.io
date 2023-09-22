import React, { useState, useEffect } from "react";

import NavbarComp from "../template/NavbarComp";
import Footer from "../template/Footer";
import "./DailyChrono.css";
import Workflow from "./Workflow";

const Content = () => {
	return (
		<div className="dailyChrono-img">
			<div className="heading">
				<h1>DailyChrono</h1>
				<h4>This is description.</h4>
			</div>
		</div>
	);
};

const DailyChrono = () => {
	return (
		<>
			<NavbarComp />
			<Content />
			<Workflow />
			<Footer />
		</>
	);
};

export default DailyChrono;
