import React from "react";

import "./style/article.css";

const Article = (props) => {
	const { date, title, position,description,image } = props;
	console.log(description)

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-image">
					<img src = {image} alt = "img"></img>
					</div>
					<div className="article-date">{date}</div>

				</div>
				<div className="article-right-side">
					<div className="article-title">{title}</div>
					<div className="article-position">{position}</div>
					<div className="article-description">{
					description.map((des,index)=>(<div className= "article-sentence" key = {index}>{des}</div>))}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
