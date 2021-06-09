import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="row justify-content-around ml-5">
				<div className="col-3">
					<Card />
				</div>
				<div className="col-3">
					<Card />
				</div>
				<div className="col-3">
					<Card />
				</div>
				<div className="col-3">
					<Card />
				</div>
			</div>
			<div className="bg-dark py-5 mt-5">
				<h4 className="text-center text-white">
					Copyright your website
				</h4>
			</div>
		</>
	);
}
