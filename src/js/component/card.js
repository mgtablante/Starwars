import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Context from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card.scss";
//create your first component

const Card = props => {
	// const { store, actions } = useContext(Context);

	// const url = "/" + props.type + "/" + props.url;
	// console.log(props.type);
	// console.log(props.resource);
	// useEffect(() => {
	// 	fetch(props.data.url)
	// 		.then(response => response.json())
	// 		.then(data => console.log(data.result))
	// 		.catch(err => console.error(err));
	// }, []);
	// let isFavorite = store.favorites.find(element => element.uid === props.data.uid) !== undefined;
	let cardDetail = props.url.split("/");
	let index = cardDetail[cardDetail.length - 2];
	let endpoint = cardDetail[cardDetail.length - 3];
	return (
		<div className="card">
			<img className="card-img-top" src="http://www.servithermic.cl/images/400X200.gif" />
			<div className="card-body">
				<h5 className="card-title text-center">{props.name}</h5>
				{props.uid}
				{props.children}
				<div className="btn-wrapper text-center d-flex justify-content-between">
					<Link to={endpoint + "/" + index} className="link_to">
						<button className="btn">Learn more</button>
					</Link>{" "}
					{/* <button className="btn btn-outline-warning mt-2" onClick={event => actions.addFavorites(details)}>
						<span>
							<i className={isFavorite ? "fas fa-heart" : "far fa-heart"} />
						</span>
					</button> */}
				</div>
			</div>
		</div>
	);
};
export default Card;

Card.propTypes = {
	uid: PropTypes.string,
	name: PropTypes.string,
	url: PropTypes.string,
	children: PropTypes.string,
	title: PropTypes.string,
	data: PropTypes.string,
	resource: PropTypes.string,
	type: PropTypes.string
};
