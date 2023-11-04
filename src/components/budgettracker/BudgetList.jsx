import React, { useState, Fragment } from "react";

import dayjs from "dayjs";

import AddPost from "./AddPost";

import {
	Box,
	Card,
	CardContent,
	CardActions,
	IconButton,
	Divider,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles({
	root: {
		display: "block",
		background: "rgba(0, 0, 0, 0.8)",
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "black",
	},
	buttonCard: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},

	buttonCardEdit: {
		"&:hover": {
			color: "#64dd17",
			backgroundColor: "rgba(100,221,23,.1)",
		},
	},
	header: {
		background: "cadetblue !important",
		display: "flex",
		justifyContent: "space-between",
	},
	box: {
		display: "block",
		background: "white",
	},
});

const BudgetList = ({ selectedDate }) => {
	const classes = useStyles();
	const formattedDate = dayjs(selectedDate.date.$d).format("YYYY/MM/DD");
	// console.log(formattedDate);

	const [openDialog, setOpenDialog] = useState(false);
	const handleOpen = () => {
		setOpenDialog(true);
	};
	const handleClose = () => {
		setOpenDialog(false);
	};

	return (
		<Fragment>
			<Card className={classes.root}>
				<Card className={classes.header}>
					<CardContent>
						<Typography>
							Your selected day / {formattedDate}
						</Typography>
					</CardContent>
					<CardActions className={classes.buttonCard}>
						<IconButton
							onClick={() => setOpenDialog(true)}
							aria-label="add"
							className={classes.buttonCardEdit}
						>
							<AddIcon />
						</IconButton>
					</CardActions>
				</Card>
				<div>Hello</div>
			</Card>
			<AddPost
				openDialog={openDialog}
				setOpenDialog={handleOpen}
				closeDialog={handleClose}
			></AddPost>
		</Fragment>
	);
};

export default BudgetList;
