import React from "react";

import "./Budgettracker.css";

const BudgetImg = () => {
	return (
		<div className="budgettracker-img">
			<div className="heading">
				<h1>This is budgettracker.</h1>
				<p>this is text</p>
			</div>
		</div>
	);
};

const BudgetContents = () => {
	return (
		<>
			<div className="work-container">
				<h1 className="budgettracker-heading">
					This is content block.
				</h1>
			</div>
		</>
	);
};

const Budgettracker = () => {
	return (
		<div>
			<NewsImg />
			<NewsContents />
			{/* <News /> */}
		</div>
	);
};

export default Budgettracker;
