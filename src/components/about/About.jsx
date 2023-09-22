import React from "react";
import "./../css/styles.css";

import NavbarComp from "./../template/NavbarComp";
import Footer from "./../template/Footer";
import AboutImg from "./AboutImg";

const About = () => {
	return (
		// <>
		// 	<section class="content-section bg-light" id="about">
		// 		<div class="row gx-4 gx-lg-5 justify-content-center">
		// 			<div class="col-lg-10">
		// 				<h2>
		// 					Stylish Portfolio is the perfect theme for your next
		// 					project!
		// 				</h2>
		// 				<p class="lead mb-5">
		// 					This theme features a flexible, UX friendly sidebar
		// 					menu and stock photos from our friends at
		// 					<a href="https://unsplash.com/">Unsplash</a>!
		// 				</p>
		// 				<a class="btn btn-dark btn-xl" href="#services">
		// 					What We Offer
		// 				</a>
		// 			</div>
		// 		</div>
		// 	</section>
		// </>
		<>
			<div>
				<NavbarComp />
				<AboutImg />
				<Footer />
			</div>
		</>
	);
};

export default About;
