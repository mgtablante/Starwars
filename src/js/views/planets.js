import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Planets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getplanetsLive(params.theid);
	}, []);

	return (
		<div>
			<div className="jumbotron-fluid mx-5 my-5 d-flex flex-row">
				<div className="left-side d-inline-block">
					<img src="https://images-cdn.9gag.com/photo/aB8b5rQ_700b.jpg" />
				</div>
				<div className="right-side d-inline-block">
					<h1 className="text-center text-monospace" />
					<h6 className="description mx-5 text-center text-monospace">
						{" "}
						One of the things we still have to shoot is the opening crawl. Shooting that crawl is actually
						one of the hardest things on these shows. The artwork itself is only about four feet long and
						maybe a foot wide. The camera is real low to the ground and we use a tilting lens to eliminate a
						lot of the focus problems. But everything has to be lined up just perfectly and you spend days
						running through tests. Every little blemish shows up. Any little bump, any little movement of
						the camera is going to screw up this big 2,000-frame-long take. Its fun, but pure torture.
					</h6>
				</div>
			</div>
			<div className="divider bg-danger" />
			{store.peopleLive ? (
				<div className="row d-flex ml-5">
					<div className="col-2 text-danger">Name: {store.planetsLive.name} </div>
					<div className="col-2 text-danger">Climate: {store.planetsLive.name} </div>
					<div className="col-2 text-danger">
						Population:
						{store.planetsLive.name}{" "}
					</div>
					<div className="col-2 text-danger">Orbital Period: {store.planetsLive.name}</div>
					<div className="col-2 text-danger">Rotation Period: {store.planetsLive.name}</div>
					<div className="col-2 text-danger">Diameter: {store.planetsLive.name}</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};
export default Planets;
