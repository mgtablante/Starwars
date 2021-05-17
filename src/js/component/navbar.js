import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<a className="navbar-brand logo" href="#homepage">
					<img src="https://i.ebayimg.com/images/g/8VkAAOSwVFlULRM-/s-l300.jpg" alt="" />
				</a>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown">
						Título del botón <span className="caret" />
					</button>
					{/* <ul className="dropdown-menu" role="menu">
						<li>
							<a href="https://3000-tomato-mammal-xipysqpp.ws-eu04.gitpod.io/">Acción #1</a>
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
					</ul> */}
				</Link>
			</div>
		</nav>
	);
};
