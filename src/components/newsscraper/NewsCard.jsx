import React from "react";
import { NavLink } from "react-router-dom";

import "./NewsCard.css";

const NewsCard = (props) => {
	return (
		<div className="project-card">
			<img src={props.imgsrc} alt="..." />
			<h2 className="project-title">{props.title}</h2>
			<div className="project-details">
				<p>{props.text}</p>
				<div className="project-btn">
					<NavLink to={props.view} className="button">
						view
					</NavLink>
					<NavLink to="/" className="button">
						source
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
