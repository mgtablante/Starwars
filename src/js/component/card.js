import React from "react";
import PropTypes from "prop-types";
//create your first component
export function Card(props) {
	return (
		<div className="card" style={{ width: "35rem", height: "35rem" }}>
			<img className="card-img-top" src="http://www.servithermic.cl/images/400X200.gif" />
			<div className="card-body">
				<h5 className="card-title text-center">{props.title}</h5>
				<p className="card-text text-center">{props.text}</p>
				<div className="btn-wrapper text-center d-flex justify-content-between">
					<a className="btn btn-outline-primary  btn-sm text-primary d-flex align-items-center">Larn more!</a>
					<a className="btn btn-outline-danger text-danger"> ♡</a>
				</div>
			</div>
		</div>
	);
}
Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	botton: PropTypes.string
};
