import React, { useState } from "react";

import { makeStyles } from "@mui/styles";

import { Button } from "@mui/material";
import {
	OutlinedInput,
	InputAdornment,
	InputLabel,
	FormControl,
	FormHelperText,
} from "@mui/material";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Box } from "@mui/material";

import DialogContents from "./DialogContents";

const useStyles = makeStyles({
	categoryPad: {
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
	},
});

const AddPost = (props) => {
	const classes = useStyles();
	const { title, openDialog, setOpenDialog, closeDialog } = props;
	const [inputValue, setInputValue] = useState("");

	const categories = [
		"食物",
		"服飾",
		"家居",
		"交通",
		"教育",
		"娛樂",
		"禮物",
		"美容",
		"健康",
		"其他",
	];
	const accounts = ["銀行", "現金", "信用卡", "其他"];
	const inputIsInvalid = isNaN(inputValue);
	const handleClick = () => {
		alert("button clicked!");
	};

	return (
		<Dialog open={openDialog} onClose={closeDialog}>
			<DialogTitle>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
						gridGap: "1rem",
						margin: "1rem",
					}}
				>
					{["Income", "Expense", "Transfer"].map(
						(category, index) => (
							<Button
								variant=""
								key={index}
								sx={{ color: "black" }}
							>
								{category}
							</Button>
						)
					)}
				</Box>
			</DialogTitle>
			<DialogContent sx={{ display: "grid" }}>
				<DialogContents
					dialogName={"Category"}
					dialogContents={categories}
				/>
				<FormControl sx={{ m: 1 }}>
					<InputLabel htmlFor="outlined-adornment-amount">
						Amount
					</InputLabel>
					<OutlinedInput
						label="Amount"
						id="outlined-adornment-amount"
						startAdornment={
							<InputAdornment position="start">$</InputAdornment>
						}
						error={inputIsInvalid}
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
					/>
					<FormHelperText>
						{inputIsInvalid ? "Incorrect entry." : ""}
					</FormHelperText>
				</FormControl>
				<DialogContents
					dialogName={"Account"}
					dialogContents={accounts}
				/>
				<Button
					variant="contained"
					color="success"
					sx={{ marginTop: "1rem" }}
					onClick={handleClick}
				>
					save
				</Button>
			</DialogContent>
		</Dialog>
	);
};

export default AddPost;
