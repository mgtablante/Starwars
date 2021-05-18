import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<a className="navbar-brand logo" href="#homepage">
					<img
						src="https://images-na.ssl-images-amazon.com/images/I/61YQRCw9NZL._AC_SY355_.jpg"
						alt=""
						width="100rem"
					/>
				</a>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div className="dropdown">
						<button
							className="btn-lg btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							{/* <a className="dropdown-item" href="#">
								Action
							</a>
							<a className="dropdown-item" href="#">
								Another action
							</a>
							<a className="dropdown-item" href="#">
								Something else here
							</a> */}
						</div>
					</div>
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
