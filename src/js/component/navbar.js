import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand">Star Wars</a>
			<div className="btn-group">
				<button type="button" className="btn btn-primary">
					Favorite
				</button>

				<button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
					<span className="caret" />
					<span className="sr-only">Desplegar menú</span>
				</button>
				<ul className="dropdown-menu" role="menu">
					<li>
						<a href="#">Acción #1</a>
					</li>
					<li>
						<a href="#">Acción #2</a>
					</li>
					<li>
						<a href="#">Acción #3</a>
					</li>
					<li className="divider" />
					<li>
						<a href="#">Acción #4</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
