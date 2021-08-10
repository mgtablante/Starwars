import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Context from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card.scss";
//create your first component
export function Card(props) {
	// const { store, actions } = useContext(Context);

	// const url = "/" + props.type + "/" + props.url;
	// console.log(props.type);
	// console.log(props.resource);
	// useEffect(() => {
	// 	fetch(props.url)
	// 		.then(response => response.json())
	// 		.then(data => console.log(data.result))
	// 		.catch(err => console.error(err));
	// }, []);
	return (
		<div className="card">
			<img className="card-img-top" src="http://www.servithermic.cl/images/400X200.gif" />
			<div className="card-body">
				<h5 className="card-title text-center">{props.name}</h5>
				{props.uid}
				{props.children}
				<div className="btn-wrapper text-center d-flex justify-content-between">
					<Link type="button" className="btn btn-primary">
						Learn more!
					</Link>
					{/* <button
						type="button"
						className={store.favorites.includes(title) ? "btn btn-success" : "btn btn-warning"}
						onClick={event => actions.addList(title)}>
						{store.favorites.includes(title) ? "Delete" : "Add"}
					</button> */}
				</div>
			</div>
		</div>
	);
}
Card.propTypes = {
	uid: PropTypes.string,
	name: PropTypes.string,
	url: PropTypes.string,
	children: PropTypes.string,
	title: PropTypes.string
};
