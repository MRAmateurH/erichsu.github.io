import React, { useState, Fragment } from "react";

import { Box, Card, CardContent, CardActions } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";

import Calender from "./Calender";
import BudgetList from "./BudgetList";
import AddPost from "./AddPost";

import "./Budgettracker.css";

const useStyles = makeStyles({
	root: {
		display: "flex",
		background: "rgba(0, 0, 0, 0.8)",
		borderRadius: 3,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "black",
		padding: "0 30px",
	},
	header: {
		background: "black",
		backgroundColor: "cadetblue",
		display: "flex",
		justifyContent: "space-between",
	},
});

const BudgetImg = () => {
	return (
		<div className="budgettracker-img">
			<div className="heading">
				<h1>This is budgettracker.</h1>
				<p>Using Material UI to create an APP to track the budget.</p>
			</div>
		</div>
	);
};

const BudgetContents = () => {
	const classes = useStyles();
	const [selectedDate, setSelectedDate] = useState({
		date: new Date().toDateString(),
	});
	const currentDatePost = (date = new Date().toDateString()) => {
		setSelectedDate({ date });
		// console.log(date.$d);
	};

	return (
		<>
			<div className={classes.root}>
				<Calender currentDatePost={currentDatePost} />
				<BudgetList selectedDate={selectedDate} />
			</div>
		</>
	);
};

const BudgetComponent = () => {
	return (
		<>
			<BudgetImg />
			<BudgetContents />
		</>
	);
};

export default BudgetComponent;
