import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";

const Home = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getPeople();
		actions.getPlanets();
		actions.getVehicles();
	}, []);

	return (
		<div className="home">
			<h1 className="text-warning"> Characters</h1>
			<div className="container-fluid d-flex cardScrollable">
				{store.people.map((people, index) => {
					return (
						<Card name={people.name} uid={people.uid} url={people.url} key={index}>
							<p>Gender: {people.gender}</p>
							<p>Hair color: {people.hair_color}</p>
							<p>Eye color: {people.eye_color}</p>
						</Card>
					);
				})}
			</div>
			<h1 className="text-warning">Planets</h1>
			<div className="container-fluid  d-flex cardScrollable">
				{store.planets.map((planet, key) => {
					return (
						<Card name={planet.name} uid={planet.uid} url={planet.url} key={key}>
							<p>
								Population:
								{planet.population}
							</p>
							<p>
								Terrain:
								{planet.terrain}
							</p>
						</Card>
					);
				})}
			</div>
			<h1 className="text-warning">Vehicles</h1>
			<div className="container-fluid d-flex cardScrollable">
				{store.vehicles.map((vehicles, key) => {
					return (
						<Card name={vehicles.name} uid={vehicles.uid} url={vehicles.url} key={key}>
							<p>Model: {vehicles.model}</p>
							<p>Length: {vehicles.length}</p>
						</Card>
					);
				})}
			</div>
		</div>
	);
};
export default Home;
