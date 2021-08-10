import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function Navbar(props) {
	// const { store, actions } = useContext(Context);

	useEffect(() => {
		localStorage.getItem("favoriteId") ? actions.setFavorite(localStorage.getItem("favoriteId").split(",")) : "";
	}, []);

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
			<div className="dropdown">
				{/* <button
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites {store.favorites.length}
				</button> */}
				{/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.favorites.map((value, index) => {
						return (
							<div key={index} className="dropdown-item">
								{value}
								<button
									onClick={event => actions.deleteList(value)}
									type="button"
									className="close"
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						);
					})}
				</div> */}
			</div>
		</nav>
	);
}
