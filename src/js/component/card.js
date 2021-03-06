import React from "react";

export function Card() {
	return (
		<div className="card" style={{ width: 18 + "rem" }}>
			<img
				src="https://via.placeholder.com/500x325"
				className="card-img-top"
				alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Find out more!
				</a>
			</div>
		</div>
	);
}
