import React from "react";

import NavbarComp from "../components/template/NavbarComp";
import Footer from "../components/template/Footer";
import BudgetComponent from "../components/budgettracker/BudgetComponent";

const Budget = () => {
	return (
		<>
			<NavbarComp />
			<BudgetComponent />
			<Footer />
		</>
	);
};

export default Budget;
