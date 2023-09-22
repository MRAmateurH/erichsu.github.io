import React from "react";
import { NavLink } from "react-router-dom";

import "./WorkflowCard.css";

import { FaBars } from "react-icons/fa";

const WorkflowCard = (props) => {
	return (
		<div className="project-card">
			<div className="card-header">
				<h3 className="project-title">{props.title}</h3>
				<FaBars size={25} style={{ color: "#fff" }} />
			</div>
			<div className="project-details">
				<p>{props.text}</p>
			</div>
		</div>
	);
};

export default WorkflowCard;
