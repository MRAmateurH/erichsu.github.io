import React from "react";
import { NavLink } from "react-router-dom";

import "./ProjectContent.css";
import "./WorkCard.css";
import portfolio_1 from "./../../img/portfolio-1.jpg";
import portfolio_2 from "./../../img/portfolio-2.jpg";
import portfolio_3 from "./../../img/portfolio-3.jpg";
import portfolio_4 from "./../../img/portfolio-4.jpg";
import Work from "./Work";

const ProjectImg = () => {
	return (
		<div className="project-img">
			<div className="heading">
				<h1>This is Project.</h1>
				<p>this is text</p>
			</div>
		</div>
	);
};

const ProjectCard = () => {
	return (
		<div className="work-container">
			<h1 className="project-heading">Project</h1>
			<div className="project-container">
				<div className="project-card">
					<img src={portfolio_1} alt="..." />
					<h2 className="project-title">DailyChrono</h2>
					<div className="project-details">
						<p>This is description</p>
						<div className="project-btn">
							<NavLink to="/" className="button">
								view
							</NavLink>
							<NavLink to="/" className="button">
								source
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const PythonProject = () => {
	return (
		<section class="content-section" id="portfolio">
			<div class="container px-4 px-lg-5">
				<div class="content-section-heading text-center">
					<h3 class="text-secondary mb-0">Portfolio</h3>
					<h2 class="mb-5">Recent Projects</h2>
				</div>
				<div class="row gx-0">
					<div class="col-lg-6">
						<a className="portfolio-item" href="/dailychrono">
							<div class="caption">
								<div class="caption-content">
									<div class="h2">DailyChrono</div>
									<p class="mb-0">
										A yellow pencil with envelopes on a
										clean, blue backdrop!
									</p>
								</div>
							</div>
							<img
								class="img-fluid"
								src={portfolio_1}
								alt="..."
							/>
						</a>
					</div>
					<div class="col-lg-6">
						<a className="portfolio-item" href="#!">
							<div class="caption">
								<div class="caption-content">
									<div class="h2">Ice Cream</div>
									<p class="mb-0">
										A dark blue background with a colored
										pencil, a clip, and a tiny ice cream
										cone!
									</p>
								</div>
							</div>
							<img
								class="img-fluid"
								src={portfolio_2}
								alt="..."
							/>
						</a>
					</div>
					<div class="col-lg-6">
						<a className="portfolio-item" href="#!">
							<div class="caption">
								<div class="caption-content">
									<div class="h2">Strawberries</div>
									<p class="mb-0">
										Strawberries are such a tasty snack,
										especially with a little sugar on top!
									</p>
								</div>
							</div>
							<img
								class="img-fluid"
								src={portfolio_3}
								alt="..."
							/>
						</a>
					</div>
					<div class="col-lg-6">
						<a className="portfolio-item" href="#!">
							<div class="caption">
								<div class="caption-content">
									<div class="h2">Workspace</div>
									<p class="mb-0">
										A yellow workspace with some scissors,
										pencils, and other objects.
									</p>
								</div>
							</div>
							<img
								class="img-fluid"
								src={portfolio_4}
								alt="..."
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

const ProjectContent = () => {
	return (
		<div>
			<ProjectImg />
			<Work />
			{/* <PythonProject /> */}
		</div>
	);
};

export default ProjectContent;
