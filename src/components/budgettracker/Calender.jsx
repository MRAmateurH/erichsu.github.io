import React, { useState, useEffect, Fragment } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

import dayjs from "dayjs";

const Calender = ({ currentDatePost }) => {
	// const [value, setValue] = useState(dayjs(Date()));
	const [date, setselectedDate] = useState(dayjs(null));

	const onChange = (selectedDate) => {
		setselectedDate(selectedDate.$d);
		// console.log(selectedDate.$d);
		currentDatePost(selectedDate);
	};

	return (
		<Fragment>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<StaticDatePicker
					value={date}
					orientation="portrait"
					disableFuture
					onChange={onChange}
				/>
			</LocalizationProvider>
		</Fragment>
	);
};

export default Calender;
