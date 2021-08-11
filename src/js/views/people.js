import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export function People(props) {
	const params = useParams();
	// const { store, actions } = useContext(Context);

	let person = store.people[params.index];

	return (
		<div className="container">
			<div className="row height-body align-items-center">
				<div className="col-6 text-center">
					<img src="https://picsum.photos/480/250" />
				</div>
				<div className="col-6 text-center pr-5">
					<h1>{people.name}</h1>
				</div>
			</div>
			<div className="divider-pink" />

			<div className="row">
				<div className="col-2 text-center pink-text">
					<h5>Name</h5>
					<p>{people.name}</p>
				</div>
				<div className="col-2 text-center pink-text">
					<h5>Birth Year</h5>
					<p>{people.birth_year}</p>
				</div>
				<div className="col-2 text-center pink-text">
					<h5>Gender</h5>
					<p>{people.gender}</p>
				</div>
				<div className="col-2 text-center pink-text">
					<h5>Height</h5>
					<p>{people.height}</p>
				</div>
				<div className="col-2 text-center pink-text">
					<h5>Skin Color</h5>
					<p>{people.skin_color}</p>
				</div>
				<div className="col-2 text-center pink-text">
					<h5>Eye Color</h5>
					<p>{people.eye_color}</p>
				</div>
			</div>
		</div>
	);
}
