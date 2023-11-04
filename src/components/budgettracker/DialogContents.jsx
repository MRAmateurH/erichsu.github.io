import React, { useState, Fragment } from "react";

import { Dialog, DialogTitle } from "@mui/material";

import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

const DialogContents = ({ dialogName, dialogContents }) => {
	const [contentName, setContentName] = useState("");
	const [openContent, setOpenContent] = useState(false);

	const handleClickOpenContent = () => {
		setOpenContent(true);
	};
	const handleCloseContent = () => {
		setOpenContent(false);
	};
	const handleButtonClick = (value) => {
		setContentName(value);
		handleCloseContent();
	};

	return (
		<Fragment>
			<TextField
				label={dialogName}
				id="outlined-start-adornment"
				sx={{ m: 1 }}
				onClick={handleClickOpenContent}
				value={contentName}
				readOnly
			/>
			<Dialog open={openContent} onClose={handleCloseContent}>
				<DialogTitle>{dialogName}</DialogTitle>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
						gridGap: "1rem",
						margin: "1rem",
					}}
				>
					{dialogContents.map((category, index) => (
						<Button
							key={index}
							sx={{ color: "black" }}
							onClick={() => handleButtonClick(category)}
						>
							{category}
						</Button>
					))}
				</Box>
			</Dialog>
		</Fragment>
	);
};

export default DialogContents;
