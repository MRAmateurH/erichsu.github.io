import React from "react";

import NewsCard from "./NewsCard";
import NewsCardData from "./NewsCardData";
import "./NewsCard.css";

const News = () => {
	return (
		<div className="work-container">
			<h1 className="project-heading">Project</h1>
			<div className="project-container">
				{WorkCardData.map((val, index) => {
					return (
						<WorkCard
							key={index}
							imgsrc={val.imgsrc}
							title={val.title}
							text={val.text}
							view={val.view}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default News;
