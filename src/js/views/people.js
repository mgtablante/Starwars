import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const People = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getpeopleLive(params.theid);
	}, []);

	return (
		<div>
			<div className="jumbotron-fluid mx-5 my-5 d-flex flex-row">
				<div className="left-side d-inline-block">
					<img src="https://cdn.shopify.com/s/files/1/0190/5436/2724/articles/star_wars_personajes_800x.jpg?v=1616087475" />
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
					<div className="col-2 text-danger">
						Name:
						{store.peopleLive.name}{" "}
					</div>
					<div className="col-2 text-danger">
						Birth year:
						{store.peopleLive.birth_year}{" "}
					</div>
					<div className="col-2 text-danger">
						Gender:
						{store.peopleLive.gender}{" "}
					</div>
					<div className="col-2 text-danger">
						Skin color:
						{store.peopleLive.skin_color}{" "}
					</div>
					<div className="col-2 text-danger">Hair color: {store.peopleLive.hair_color}</div>
					<div className="col-2 text-danger">
						Mass:
						{store.peopleLive.mass}{" "}
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};
export default People;
