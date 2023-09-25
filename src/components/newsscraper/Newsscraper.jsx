import React from "react";

import "./Newsscraper.css";
// import News from "../../routes/News";

const NewsImg = () => {
	return (
		<div className="news-img">
			<div className="heading">
				<h1>This is news.</h1>
				<p>this is text</p>
			</div>
		</div>
	);
};

const NewsContents = () => {
	return (
		<>
			<div className="work-container">
				<h1 className="news-heading">This is content block.</h1>
			</div>
		</>
	);
};

const Newsscraper = () => {
	return (
		<div>
			<NewsImg />
			<NewsContents />
			{/* <News /> */}
		</div>
	);
};

export default Newsscraper;
