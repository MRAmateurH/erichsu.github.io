import React, { useState, useEffect } from "react";

import WorkflowCard from "./WorkFlowCard";
import WorkflowCardData from "./WorkFlowCardData";
import "./WorkflowCard.css";

import { FaPlus, FaSearch } from "react-icons/fa";

const Workflow = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<>
			<div className="search-container">
				<div className="input-wrapper">
					<FaSearch size={25} style={{ color: "#ccc" }} />
					<input type="text" placeholder="Type to search..."></input>
				</div>
			</div>
			<section className="work-container">
				<div className="project-container">
					{WorkflowCardData.map((val, index) => {
						return (
							<WorkflowCard
								key={index}
								title={val.title}
								text={val.text}
							/>
						);
					})}
					<div onClick={handleClick}>
						{click ? (
							<WorkflowCard title="TEST" text="TEST" />
						) : (
							<div className="button-block">
								<FaPlus size={25} style={{ color: "#fff" }} />
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default Workflow;
